import React, { ReactNode } from "react";
import "./KeyPoint.css";

interface KeyPointProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const KeyPoint: React.FC<KeyPointProps> = ({ icon, title, description }) => {
  return (
    <div className="key-point">
      <div className="key-point-icon">{icon}</div>
      <h3 className="key-point-title">{title}</h3>
      <p className="key-point-description">{description}</p>
    </div>
  );
};

export default KeyPoint;
