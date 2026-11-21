import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DestinationImage from "../components/DestinationImage.jsx";
import StarRating from "../components/StarRating.jsx";

export default function Details({ destinations = [] }) {
  const { id } = useParams();
  const destination = destinations.find((item) => String(item.id) === String(id));

  if (!destination) {
    return (
      <Container className="details">
        <div className="empty">
          <h2>Destination not found</h2>
          <p>This link may be out of date, or the destination was removed.</p>
          <Link className="btn btn-brand" to="/destinations">
            Back to destinations
          </Link>
        </div>
      </Container>
    );
  }

  const {
    title,
    description,
    price,
    rating,
    image,
    country,
    flightDuration,
    airline,
    bestSeason,
  } = destination;

  return (
    <Container className="details">
      <Link className="details__back link-arrow" to="/destinations">
        ← All destinations
      </Link>

      <div className="details__grid">
        <DestinationImage src={image} title={title} className="details__img" />

        <div>
          {country && (
            <p className="text-uppercase text-muted fw-semibold small mb-2">{country}</p>
          )}
          <h1 className="details__title">{title}</h1>

          <div className="details__rating">
            <StarRating value={rating} size={20} />
            <span>{Number(rating).toFixed(1)} / 5</span>
          </div>

          <p className="details__price">
            <span>from</span>${Number(price).toLocaleString("en-US")}
          </p>
          <p className="details__desc">{description}</p>

          <dl className="facts">
            <div className="facts__item">
              <dt>Country</dt>
              <dd>{country || "—"}</dd>
            </div>
            <div className="facts__item">
              <dt>Flight duration</dt>
              <dd>{flightDuration || "—"}</dd>
            </div>
            <div className="facts__item">
              <dt>Airline</dt>
              <dd>{airline || "—"}</dd>
            </div>
            <div className="facts__item">
              <dt>Best season</dt>
              <dd>{bestSeason || "—"}</dd>
            </div>
          </dl>

          <div className="details__actions">
            <Link className="btn btn-brand" to="/contact">
              Ask about this trip
            </Link>
            <Link className="btn btn-outline-dark" to="/destinations">
              Keep browsing
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
