import React from "react";
import "./Introduction.css";

type IntroductionType = {
  aiDescription: string;
};

const Introduction = ({ aiDescription }: IntroductionType) => {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <h2>Welcome to YourWebsite</h2>
        {aiDescription ? (
          <p>{aiDescription}</p>
        ) : (
          <p>
            We are dedicated to delivering innovative solutions that meet your
            needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam eget justo vel justo sagittis feugiat.
          </p>
        )}
      </div>
    </section>
  );
};

export default Introduction;
