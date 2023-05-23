import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Details />} />{}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
