import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />

          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currState === "Sign Up" ? "Create an account" : "Login"}
        </button>
        <div className="login-popup-condition">
          {currState === "Sign Up" ? (
            <>
              <input type="checkbox" required />
              <p>
                By continuing, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span
              className="login-popup-link"
              onClick={() => setCurrState("Sign Up")}
            >
              Signup here
            </span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span
              className="login-popup-link"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
