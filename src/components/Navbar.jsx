import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <BootstrapNavbar expand="md" variant="dark" className="site-nav">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="brand">
          🌍 Wanderlist
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="site-navbar-nav" />
        <BootstrapNavbar.Collapse id="site-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ to, label, end }) => (
              <Nav.Link key={to} as={NavLink} to={to} end={end}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
