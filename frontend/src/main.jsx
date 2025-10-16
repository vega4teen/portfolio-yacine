import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PortfolioOnePage from "./pages/OnePage"; // ✅ le bon import
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // garde NavBar + Footer
    children: [
      { index: true, element: <PortfolioOnePage /> }, // ✅ ta page one-page
    ],
  },
  // (optionnel) 404
  // { path: "*", element: <div style={{padding: 24}}>Page non trouvée</div> }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
