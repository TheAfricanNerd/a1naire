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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/A1naire-customer-presentation",
    element: <PdfViewer />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
