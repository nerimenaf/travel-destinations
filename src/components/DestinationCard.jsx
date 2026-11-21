import { Link } from "react-router-dom";
import StarRating from "./StarRating.jsx";
import DestinationImage from "./DestinationImage.jsx";

export default function DestinationCard({ destination }) {
  const { id, title, description, price, rating, image, country } = destination;

  return (
    <article className="dest-card">
      <DestinationImage src={image} title={title} className="dest-card__img" />

      <div className="dest-card__panel">
        <h3 className="dest-card__title">{title}</h3>
        {country && <p className="dest-card__country">{country}</p>}
        <p className="dest-card__desc">{description}</p>
        <div className="dest-card__meta">
          <div className="dest-card__rating">
            <StarRating value={rating} size={16} />
            <span className="dest-card__score">{rating.toFixed(1)}</span>
          </div>
          <span className="dest-card__price">from ${price.toLocaleString("en-US")}</span>
        </div>
        <Link to={`/destinations/${id}`} className="dest-card__cta">
          View Details
        </Link>
      </div>
    </article>
  );
}
