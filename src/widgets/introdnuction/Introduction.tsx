import "./Introduction.css";

// const Bounce = require("react-reveal/Bounce");
type IntroductionType = {
  aiDescription: string;
};

const Introduction = ({ aiDescription }: IntroductionType) => {
  return (
    <section className="introduction">
      {/* <Bounce top> */}
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
      {/* </Bounce> */}
    </section>
  );
};

export default Introduction;
