import { useState } from "react";

// Renders a destination photo, with a graceful first-letter fallback
// when the URL is missing or fails to load.
export default function DestinationImage({ src, title, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`img-fallback ${className}`.trim()} role="img" aria-label={title}>
        {(title || "?").slice(0, 1).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
