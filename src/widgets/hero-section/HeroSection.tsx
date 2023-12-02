import "./HeroSection.css";
import { HeroSectionType } from "../../types";

const HeroSection = ({ description, name }: HeroSectionType) => {
  return (
    <div className="hero-section" style={{ width: "100%" }}>
      <div className="overlay"></div>
      <div className="hero-content">
        {name ? (
          <h1 className="hero-title">{name}</h1>
        ) : (
          <h1 className="hero-title">Discover the Future of Innovation</h1>
        )}

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
