import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import BuildApp from "./components/BuildApp/BuildApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/build" element={<BuildApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;