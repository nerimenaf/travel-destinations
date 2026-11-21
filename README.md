# Wanderlist - Travel Destinations (TP4 + TP5)

React app to browse, search, filter and add travel destinations, with
multi-page navigation and a details page per destination.
Built with React 18, Vite, React Router DOM 6.3.0, React-Bootstrap and react-simple-star-rating.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

## Routes

| URL                 | Component        |
| ------------------- | ---------------- |
| `/`                 | `Home`           |
| `/destinations`     | `Destinations`   |
| `/destinations/:id` | `Details`        |
| `/about`            | `About`          |
| `/contact`          | `Contact`        |

## Notes

- Ids are generated with `Math.random()`. The list is saved in `localStorage`
  so ids and added destinations survive a page refresh.
- `vercel.json` rewrites all paths to `index.html`, so direct links such as
  `/destinations/<id>` work on Vercel.
- Flight durations and prices are examples; contact details are placeholders.

## Structure

```
src/
  App.jsx, main.jsx, App.css
  data/destinations.js
  pages/        Home, Destinations, Details, About, Contact
  components/   Navbar, Footer, DestinationCard, DestinationImage,
                FilterBar, AddDestinationModal, StarRating, PageHero, ScrollToTop
```
