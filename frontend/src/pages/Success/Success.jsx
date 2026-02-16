import React from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="checkmark">✔</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for choosing <span>Plattero</span>
        </p>

        <p className="by-line">by Denish ❤️</p>

        <button onClick={() => navigate("/")}>Continue Ordering</button>
      </div>
    </div>
  );
};

export default Success;
