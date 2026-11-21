import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard.jsx";
import DestinationImage from "../components/DestinationImage.jsx";

const features = [
  {
    icon: "🔎",
    title: "Search & filter",
    text: "Find a trip by name or narrow the list down by minimum rating.",
  },
  {
    icon: "✈️",
    title: "Trip details",
    text: "See flight duration, airline, best season and the price at a glance.",
  },
  {
    icon: "➕",
    title: "Add your own",
    text: "Know a hidden gem? Add it with a photo and it stays after a refresh.",
  },
];

export default function Home({ destinations = [] }) {
  const featured = destinations.slice(0, 3);
  const heroDestination = destinations[0];

  return (
    <>
      <section className="hero home-hero">
        <Container>
          <div className="home-hero__grid">
            <div>
              <p className="text-uppercase fw-semibold small mb-3" style={{ color: "rgba(255,255,255,.65)" }}>
                Wanderlist · Curated escapes
              </p>
              <h1 className="hero__title">Go somewhere extraordinary.</h1>
              <p className="hero__lead">
                Hand-picked destinations, honest prices and the details that matter —
                everything you need to pick your next trip.
              </p>
              <div className="home-hero__actions">
                <Link className="btn btn-brand btn-lg" to="/destinations">
                  Explore destinations
                </Link>
                <Link className="btn btn-ghost btn-lg" to="/about">
                  Why Wanderlist
                </Link>
              </div>
            </div>

            <Link to="/destinations" className="home-hero__visual" aria-label="Browse destinations">
              <DestinationImage
                src={heroDestination?.image}
                title={heroDestination?.title || "Travel"}
                className="home-hero__img"
              />
              <span className="home-hero__tag">
                {heroDestination ? `✈ ${heroDestination.title}` : "✈ Your next trip"}
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="section">
        <div className="section__head">
          <h2>Featured escapes</h2>
          <Link className="link-arrow" to="/destinations">
            See all destinations →
          </Link>
        </div>

        {featured.length ? (
          <div className="dest-grid">
            {featured.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No destinations yet</h2>
            <p>Add the first one from the Destinations page.</p>
          </div>
        )}
      </Container>

      <Container className="section section--features">
        <div className="section__head">
          <h2>Why travel with us</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <div aria-hidden="true" style={{ fontSize: "1.75rem" }}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
