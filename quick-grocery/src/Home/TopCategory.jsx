import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import { motion } from "framer-motion";

const TopCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/topCategory") // Change this URL to your API endpoint
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch categories");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="loading-container"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        Loading Categories...
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="error-container"
        style={{ textAlign: "center", padding: "2rem", color: "red" }}
      >
        {error}
      </motion.div>
    );

  return (
    <section className="top-categories">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Top Categories
        </motion.h2>
        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {category.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/ourProduct/${cat.category}`}
                className="category-card"
              >
                <motion.img
                  src={cat.image}
                  alt={cat.category}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                />
                <motion.div
                  className="category-name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * idx }}
                >
                  {cat.category}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopCategory;
