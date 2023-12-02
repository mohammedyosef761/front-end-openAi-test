// Spinner.js
import "./Spinner.css"; // You can create a CSS file for styling

const Spinner = ({ show }: { show: boolean }) => {
  return (
    <div className={`spinner-overlay ${show ? "visible" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
