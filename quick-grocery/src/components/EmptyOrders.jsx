import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const EmptyOrders = () => {
    const navigate = useNavigate();
  return (
    <div className="empty-orders-container">
      <motion.div
        className="empty-orders-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="empty-orders-icon">📦</div>
        <h2 className="empty-orders-title">No Orders Yet</h2>
        <p className="empty-orders-message">
          You haven't placed any orders yet. Start shopping to see your order
          history here.
        </p>
        <motion.button
          className="empty-orders-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (navigate("/ourProduct"))}
        >
          Start Shopping
        </motion.button>
      </motion.div>
    </div>
  );
};

export default EmptyOrders;
