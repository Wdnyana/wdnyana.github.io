import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import AboutPages from "./components/pages/AboutPages";
import SkilsPages from "./components/pages/SkilsPages";
import ProjectPages from "./components/pages/ProjectPages";
import ContactPages from "./components/pages/ContactPages";

import "animate.css";

const App = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/about-me" element={<AboutPages />} />
        <Route path="/skills" element={<SkilsPages />} />
        <Route path="/project" element={<ProjectPages />} />
        <Route path="/contact" element={<ContactPages />} />
      </>
    </Routes>
  );
};

export default App;
