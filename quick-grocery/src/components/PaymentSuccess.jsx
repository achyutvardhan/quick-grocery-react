import React from "react";
import { motion } from "framer-motion";
import "../css/PaymentPage.css";

export default function PaymentSuccess({ onTrackOrder }) {
  return (
    <motion.div
      className="payment-success-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.div
        className="success-animation"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
      >
        {/* SVG: Person with cart */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="60" fill="#eaffea" />
          <ellipse cx="60" cy="100" rx="30" ry="8" fill="#b6eab6" />
          <rect x="70" y="70" width="30" height="18" rx="4" fill="#32cd32" />
          <circle cx="80" cy="92" r="4" fill="#fff" />
          <circle cx="94" cy="92" r="4" fill="#fff" />
          <rect x="55" y="50" width="12" height="28" rx="6" fill="#32cd32" />
          <circle cx="61" cy="44" r="8" fill="#32cd32" />
          <rect x="65" y="60" width="30" height="6" rx="3" fill="#b6eab6" />
        </svg>
      </motion.div>
      <h2 className="success-title">Payment Successful!</h2>
      <p>Your order has been placed and is being processed.</p>
      <button className="track-btn" onClick={onTrackOrder}>
        Track Order
      </button>
    </motion.div>
  );
}