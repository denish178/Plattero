import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subtotal > 0) {
      navigate("/success");
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street Address" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-content">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details total-row">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
            <button
              type="submit"
              disabled={subtotal === 0}
              className={subtotal === 0 ? "disabled-btn" : "place-order-btn"}
            >
              {subtotal === 0 ? "CART EMPTY" : "PROCEED TO PAYMENT"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
