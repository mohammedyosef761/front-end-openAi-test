import React from "react";
import "./HeroSection.css";
type HeroSection = {
  description: string;
};
const HeroSection = ({ description }: HeroSection) => {
  return (
    <div className="hero-section" style={{ width: "100%" }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Discover the Future of Innovation</h1>
        {description ? (
          <p className="hero-description">{description}</p>
        ) : (
          <p className="hero-description">
            Elevate your experience with cutting-edge technology and creative
            solutions.
          </p>
        )}

        <button className="hero-button">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
