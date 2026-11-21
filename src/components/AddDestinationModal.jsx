import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import StarRating from "./StarRating.jsx";

const EMPTY_FORM = {
  title: "",
  description: "",
  price: "",
  rating: 0,
  image: "",
  country: "",
  flightDuration: "",
  airline: "",
  bestSeason: "",
};

export default function AddDestinationModal({ show, onHide, onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const setField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleClose = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    onHide();
  };

  // Read an uploaded picture as a data URL so it works without a server
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "Please choose an image file." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setField("image", reader.result);
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Give the destination a title.";
    if (!form.country.trim()) next.country = "Enter the country.";
    if (!form.description.trim()) next.description = "Add a short description.";
    if (form.price === "" || Number(form.price) <= 0)
      next.price = "Enter a price greater than 0.";
    if (!form.rating) next.rating = "Pick a rating from 1 to 5 stars.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      rating: form.rating,
      image: form.image.trim(),
      country: form.country.trim(),
      flightDuration: form.flightDuration.trim(),
      airline: form.airline.trim(),
      bestSeason: form.bestSeason.trim(),
    });
    handleClose();
  };

  const imageIsData = form.image.startsWith("data:");

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" className="add-modal">
      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Add a destination</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="dest-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Lisbon"
              value={form.title}
              isInvalid={!!errors.title}
              onChange={(e) => setField("title", e.target.value)}
              autoFocus
            />
            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="dest-country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Portugal"
              value={form.country}
              isInvalid={!!errors.country}
              onChange={(e) => setField("country", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="dest-description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="What makes this place worth the trip?"
              value={form.description}
              isInvalid={!!errors.description}
              onChange={(e) => setField("description", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </Form.Group>

          <div className="row g-3 mb-3">
            <Form.Group className="col-sm-6" controlId="dest-price">
              <Form.Label>Price (USD)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                step="1"
                placeholder="999"
                value={form.price}
                isInvalid={!!errors.price}
                onChange={(e) => setField("price", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-sm-6" controlId="dest-rating">
              <Form.Label>Rating</Form.Label>
              <div className={`rating-input ${errors.rating ? "is-invalid" : ""}`}>
                <StarRating
                  value={form.rating}
                  readOnly={false}
                  size={26}
                  emptyColor="#c9d6d9"
                  onChange={(v) => setField("rating", v)}
                />
              </div>
              {errors.rating && <div className="text-danger small mt-1">{errors.rating}</div>}
            </Form.Group>
          </div>

          <div className="row g-3 mb-3">
            <Form.Group className="col-sm-6" controlId="dest-flight">
              <Form.Label>Flight duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. ≈ 3h (direct)"
                value={form.flightDuration}
                onChange={(e) => setField("flightDuration", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-sm-6" controlId="dest-airline">
              <Form.Label>Airline</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. TAP Air Portugal"
                value={form.airline}
                onChange={(e) => setField("airline", e.target.value)}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="dest-season">
            <Form.Label>Best season</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. April to June"
              value={form.bestSeason}
              onChange={(e) => setField("bestSeason", e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="dest-image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Paste an image URL (optional)"
              value={imageIsData ? "" : form.image}
              onChange={(e) => setField("image", e.target.value)}
            />
            <Form.Control
              className="mt-2"
              type="file"
              accept="image/*"
              aria-label="Upload an image"
              isInvalid={!!errors.image}
              onChange={handleFile}
            />
            <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
            {form.image && (
              <img className="add-modal__preview" src={form.image} alt="Preview" />
            )}
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" className="btn-brand">
            Add destination
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
