import React from "react";
import "./FAQ.css";
import FAQItem from "../faq-questions/FAQItem";
import LightSpeed from "react-reveal/LightSpeed";
const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including ...",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team by ...",
    },
    {
      question: "how can we helo you?",
      answer: "We offer a range of services including ...",
    },
  ];

  return (
    <div className="faq">
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>

      <LightSpeed left>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
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
