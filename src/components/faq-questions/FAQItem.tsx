import React, { useState } from "react";
import "./FAQItem.css";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <div className="question">{question}</div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
