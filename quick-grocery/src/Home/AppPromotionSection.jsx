import React from "react";
import { motion } from "framer-motion";

const AppPromotionSection = () => (
  <motion.section
    className="app-promotion"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, type: "spring" }}
  >
    <div className="container">
      <div className="app-promo-content">
        <motion.div
          className="app-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Get Our Mobile App</h2>
          <p>
            Shop anytime, anywhere with our convenient mobile app. Get exclusive offers and track your orders in
            real-time.
          </p>
          <ul className="app-features">
            <li>Easy ordering process</li>
            <li>Exclusive mobile-only offers</li>
            <li>Order tracking</li>
            <li>Personalized recommendations</li>
          </ul>
          <div className="app-buttons">
            <motion.a
              href="#"
              className="app-button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Download on the</span>
              <strong>App Store</strong>
            </motion.a>
            <motion.a
              href="#"
              className="app-button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Get it on</span>
              <strong>Google Play</strong>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="app-image"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1563377225929-7084bcef8e24?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mobile App"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default AppPromotionSection;
