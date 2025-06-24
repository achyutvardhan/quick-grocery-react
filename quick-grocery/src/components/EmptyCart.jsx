import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className="empty-cart-container">
      <motion.div
        className="empty-cart-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="empty-cart-icon">🛒</div>
        <h2 className="empty-cart-title">Your Cart is Empty</h2>
        <p className="empty-cart-message">
          Looks like you haven't added any items to your cart yet.
        </p>
        <motion.button
          className="empty-cart-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (navigate("/ourProduct"))}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
