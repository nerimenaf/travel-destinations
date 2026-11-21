import { useMemo, useState } from "react";
import { Button, Container } from "react-bootstrap";
import AddDestinationModal from "../components/AddDestinationModal.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import FilterBar from "../components/FilterBar.jsx";

export default function Destinations({ destinations = [], onAdd }) {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showAdd, setShowAdd] = useState(false);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return destinations.filter(
      (destination) =>
        (!query || destination.title.toLowerCase().includes(query)) &&
        Number(destination.rating) >= minRating
    );
  }, [destinations, search, minRating]);

  const hasFilters = search.trim() !== "" || minRating > 0;

  const resetFilters = () => {
    setSearch("");
    setMinRating(0);
  };

  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero__top">
            <span className="brand">🌍 Wanderlist</span>
          </div>
          <div className="hero__row">
            <div>
              <h1 className="hero__title">Destinations</h1>
              <p className="hero__lead">
                Browse every escape, search by name or filter by rating.
              </p>
            </div>
            <div className="hero__action">
              <Button className="btn-brand" onClick={() => setShowAdd(true)}>
                + Add destination
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          minRating={minRating}
          onRatingChange={setMinRating}
          onReset={resetFilters}
          hasFilters={hasFilters}
        />

        <p className="result-count">
          Showing <strong>{filtered.length}</strong> of {destinations.length} destinations
        </p>

        {filtered.length ? (
          <div className="dest-grid">
            {filtered.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No matching destinations</h2>
            <p>Try another search or rating — or add a destination of your own.</p>
            <Button className="btn-brand" onClick={() => setShowAdd(true)}>
              Add a destination
            </Button>
          </div>
        )}
      </Container>

      <AddDestinationModal
        show={showAdd}
        onHide={() => setShowAdd(false)}
        onAdd={(data) => onAdd?.(data)}
      />
    </>
  );
}
