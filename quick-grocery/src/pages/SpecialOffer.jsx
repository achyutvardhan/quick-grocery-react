import React, { useState, useEffect } from "react";
import axios from "axios";
import WeeklyDealsCard from "../components/WeeklyDealsCard";
import { productFetch } from "../js/productFetch";
import { Mosaic } from "react-loading-indicators";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const data = await productFetch();
        console.log(data);
        setFruits(data.Fruits);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch fruits");
        setLoading(false);
      }
    };
    getFruits();
  }, []);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <Mosaic color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="background">
        <motion.section
          class="hero-banner"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div class="container">
            <motion.div
              class="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2>Limited Time Special Offers</h2>
              <p>
                Enjoy amazing discounts on selected products. Hurry before
                stocks run out!
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="product-catalogue"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Current Promotions
            </motion.h2>
            <motion.div
              className="special-offer-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2 className="offer-title">Weekly Deals</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(0, 4)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </motion.div>
            <motion.div
              className="special-offer-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2 className="offer-title">Buy One Get One Free</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(4, 8)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </motion.div>
            <motion.div
              className="special-offer-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h2 className="offer-title">Clearance Items - up to 50% off</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(3, 7)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default SpecialOffer;
