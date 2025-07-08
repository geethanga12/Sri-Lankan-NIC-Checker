import React from "react";
import HomePage from "./Pages/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IdCheckerPage from "./pages/IdCheckerPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/id-checker" element={<IdCheckerPage />} />
        </Routes>
      </Router>
    </div>
  );
}
