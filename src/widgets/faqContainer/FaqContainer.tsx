import React from "react";
import "./FaqContainer.css";
import FAQItem from "../../components/faq-questions/FAQItem";
import { faqData } from "../../mock-data";
import { Slide } from "react-awesome-reveal";
const FaqContainer: React.FC = () => {
  return (
    <div className="faq">
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>

      <Slide direction="left" triggerOnce>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index + 1}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default FaqContainer;
