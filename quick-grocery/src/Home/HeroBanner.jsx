import React from "react";
import { motion } from "framer-motion";

function HeroBanner() {
  const textVariants = {
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
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="hero-banner">
      <motion.div
        className="carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="overlay"></div>
        <motion.div
          className="carousel-slide slide1"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="carousel-slide slide2"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="carousel-slide slide3"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 6, ease: "easeOut" }}
        ></motion.div>
      </motion.div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={childVariants}>
            Fresh Groceries Delivered to Your Door
          </motion.h2>
          <motion.p variants={childVariants}>
            Save time and shop with convenience. Get fresh produce, dairy, and
            more.
          </motion.p>
          <motion.a
            href="#"
            className="btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Shop Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;
