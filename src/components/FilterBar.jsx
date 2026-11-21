import { Form, InputGroup, Button } from "react-bootstrap";

const RATING_OPTIONS = [
  { value: 0, label: "Any rating" },
  { value: 3, label: "3 stars & up" },
  { value: 4, label: "4 stars & up" },
  { value: 4.5, label: "4.5 stars & up" },
  { value: 5, label: "5 stars only" },
];

export default function FilterBar({
  search,
  onSearchChange,
  minRating,
  onRatingChange,
  onReset,
  hasFilters,
}) {
  return (
    <div className="filter-bar" role="search">
      <InputGroup className="filter-bar__search">
        <InputGroup.Text aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search by title, e.g. Bali"
          aria-label="Search destinations by title"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>

      <Form.Select
        className="filter-bar__rating"
        aria-label="Filter by minimum rating"
        value={minRating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
      >
        {RATING_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Form.Select>

      <Button
        variant="link"
        className="filter-bar__reset"
        onClick={onReset}
        disabled={!hasFilters}
      >
        Clear filters
      </Button>
    </div>
  );
}
