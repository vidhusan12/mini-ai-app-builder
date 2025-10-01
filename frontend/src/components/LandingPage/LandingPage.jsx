import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/build");
  };

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;