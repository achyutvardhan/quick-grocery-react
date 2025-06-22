import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import OutletProduct from "../components/OutletProduct";
import Loader from "../components/Loader";

export default function Product() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch here
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const getActiveClass = (path) => {
    if (path === "/ourProduct" && location.pathname === "/ourProduct")
      return "active-category";
    if (path !== "/ourProduct" && location.pathname.includes(path))
      return "active-category";
    return "";
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
    <motion.section
      className="product-catalogue"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Products
        </motion.h2>
        <motion.div
          className="category-filter"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ul>
            <li>
              <Link
                to={"/ourProduct"}
                className={getActiveClass("/ourProduct")}
              >
                All
              </Link>
            </li>
            <li>
              <Link
                to={"/ourProduct/Fruits"}
                className={getActiveClass("/ourProduct/Fruits")}
              >
                Fruits
              </Link>
            </li>
            <li>
              <Link
                to={"/ourProduct/Vegetables"}
                className={getActiveClass("/ourProduct/Vegetables")}
              >
                Vegetables
              </Link>
            </li>
            <li>
              <Link
                to={"/ourProduct/Dairy"}
                className={getActiveClass("/ourProduct/Dairy")}
              >
                Dairy
              </Link>
            </li>
            <li>
              <Link
                to={"/ourProduct/Bakery"}
                className={getActiveClass("/ourProduct/Bakery")}
              >
                Bakery
              </Link>
            </li>
            <li>
              <Link
                to={"/ourProduct/Meat"}
                className={getActiveClass("/ourProduct/Meat")}
              >
                Meat
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div className="product-grid" layout>
          {<OutletProduct />}
        </motion.div>
      </div>
    </motion.section>
  );
}
