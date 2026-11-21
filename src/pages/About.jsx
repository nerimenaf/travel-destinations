import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Container className="section">
      <div className="section__head">
        <h1>About Wanderlist</h1>
      </div>

      <div className="prose-grid">
        <div>
          <p className="lead">
            Wanderlist is a small, opinionated guide to places worth the flight.
          </p>
          <p>
            We collect a short list of destinations and show the details that usually
            get buried in long articles: a realistic price, the flight, the airline
            and the season you should actually go. No booking engine, no noise.
          </p>
          <ul className="check-list">
            <li>A curated list instead of an endless feed</li>
            <li>Prices and durations you can compare at a glance</li>
            <li>Room for your own favourites, saved in the browser</li>
          </ul>
          <p>
            <Link className="link-arrow" to="/destinations">
              Browse the destinations →
            </Link>
          </p>
        </div>

        <dl className="stack-list">
          <div>
            <dt>Built with</dt>
            <dd>React 18, Vite, React Router and React-Bootstrap</dd>
          </div>
          <div>
            <dt>Navigation</dt>
            <dd>Five routes with a detail page for every destination</dd>
          </div>
          <div>
            <dt>Your additions</dt>
            <dd>Stored in localStorage so they survive a refresh</dd>
          </div>
        </dl>
      </div>

      <p className="note">
        This is a demo project for a React Hooks workshop. Prices, flight times and
        contact details are examples.
      </p>
    </Container>
  );
}
