import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound";
import Home from "./Home";
import Frontendmentor from "./Frontendmentor";
import Project from "./components/Frontendmentor/Project/Project";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontendmentor" element={<Frontendmentor />} />
        <Route path="/frontendmentor/:project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
