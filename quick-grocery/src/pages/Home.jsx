import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import HeroBanner from "../Home/HeroBanner";
import TopCategory from "../Home/TopCategory";
import { AuthContext } from "../context/AuthContext";
import YouMayAlsoLike from "../Home/YouMayAlsoLike";
import OurProductSection from "../Home/OurProductSection";
import AppPromotionSection from "../Home/AppPromotionSection";
import FoodBlogSection from "../Home/FoodBlogSection";
import { OrdersContext } from "../context/OrdersContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function Home() {
  const { refreshFetch } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);
  const { refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    {
      loggedIn && refreshFetch() && refreshOrders();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <Loader color="#32cd32" size="medium" text="" textColor="" />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <HeroBanner />
      </motion.div>
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
      >
        <TopCategory />
      </motion.div>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      >
        <OurProductSection />
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      >
        <AppPromotionSection />
      </motion.div>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
      >
        <FoodBlogSection />
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
      >
        <YouMayAlsoLike />
      </motion.div>
    </motion.div>
  );
}
