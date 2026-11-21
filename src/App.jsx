import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import initialDestinations, { generateId } from "./data/destinations.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import Details from "./pages/Details.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const STORAGE_KEY = "wanderlist.destinations.v1";

// Ids come from Math.random(), so they change on every fresh start.
// Saving the list in localStorage keeps ids (and added destinations)
// stable, so /destinations/:id still works after a page refresh.
function loadDestinations() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch {
    /* storage unavailable or corrupted: use defaults */
  }
  return initialDestinations;
}

export default function App() {
  const [destinations, setDestinations] = useState(loadDestinations);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(destinations));
    } catch {
      /* ignore */
    }
  }, [destinations]);

  const addDestination = (data) => {
    // New destinations appear first so the user sees them right away
    setDestinations((prev) => [{ id: generateId(), ...data }, ...prev]);
  };

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home destinations={destinations} />} />
          <Route
            path="/destinations"
            element={<Destinations destinations={destinations} onAdd={addDestination} />}
          />
          <Route
            path="/destinations/:id"
            element={<Details destinations={destinations} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home destinations={destinations} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
