import { introdunction } from "../../constants";
import "./Introduction.css";
import { Slide } from "react-awesome-reveal";
type IntroductionType = {
  aiDescription: string;
};

const Introduction = ({ aiDescription }: IntroductionType) => {
  return (
    <section className="introduction">
      <Slide direction="left" triggerOnce>
        <div className="introduction-content">
          <h2>{introdunction.welcome}</h2>
          {aiDescription ? (
            <p>{aiDescription}</p>
          ) : (
            <p>{introdunction.intro}</p>
          )}
        </div>
      </Slide>
    </section>
  );
};

export default Introduction;
