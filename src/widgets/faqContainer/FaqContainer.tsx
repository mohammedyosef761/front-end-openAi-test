import React from "react";
import "./FaqContainer.css";
import FAQItem from "../../components/faq-questions/FAQItem";
const LightSpeed = require("react-reveal/LightSpeed");
import { faqData } from "../../mock-data";
const FaqContainer: React.FC = () => {
  return (
    <div className="faq">
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>

      <LightSpeed left>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index + 1}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </LightSpeed>
    </div>
  );
};

export default FaqContainer;
