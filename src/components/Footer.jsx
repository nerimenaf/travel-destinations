import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <span className="brand">🌍 Wanderlist</span>
        <span>© {new Date().getFullYear()} Wanderlist. Made for curious travellers.</span>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <Link to="/destinations">Destinations</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Container>
    </footer>
  );
}
