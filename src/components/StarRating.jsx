import { Rating } from "react-simple-star-rating";

/**
 * Thin wrapper around react-simple-star-rating.
 * - readOnly (default): displays a rating, fractions allowed
 * - editable: calls onChange(value) with a whole-star value
 */
export default function StarRating({
  value,
  readOnly = true,
  onChange,
  size = 18,
  emptyColor = "rgba(255,255,255,0.35)",
}) {
  return (
    <Rating
      initialValue={value}
      readonly={readOnly}
      allowFraction={readOnly}
      size={size}
      fillColor="#f5a623"
      emptyColor={emptyColor}
      SVGstyle={{ display: "inline-block" }}
      onClick={onChange}
      aria-label={`Rating: ${value} out of 5`}
    />
  );
}
