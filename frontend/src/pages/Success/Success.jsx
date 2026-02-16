import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-page">
      <div className="success-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>
          Thank you for using <b>Platter</b>
        </p>
        <p className="by-line">by Denish ❤️</p>
      </div>
    </div>
  );
};

export default Success;
