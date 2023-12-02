import React from "react";
import "./FAQ.css";
import FAQItem from "../../components/faq-questions/FAQItem";
import LightSpeed from "react-reveal/LightSpeed";
import { faqData } from "../../mock-data";
const FAQ: React.FC = () => {
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

export default FAQ;
