import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "./app.css";
import "./output.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./views/Homepage/index.tsx";
import PdfViewer from "./views/Pdf";
import { Supabase, SupaBaseContext } from "./database/index";
import CarExperience from "./views/CarExperience/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/A1naire-customer-presentation",
    element: <PdfViewer />,
  },
  {
    path: "/car-experience",
    element: <CarExperience />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SupaBaseContext.Provider value={Supabase}>
      <RouterProvider router={router} />
    </SupaBaseContext.Provider>
  </React.StrictMode>
);
