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
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { refreshFetch } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);
  const { refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);

  // Animation variants for different effects
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    {
      loggedIn && refreshFetch() && refreshOrders();
    }
  }, [loggedIn]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
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
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home-page"
      >
        <motion.div
          variants={sectionVariants}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <HeroBanner />
        </motion.div>

        <motion.div
          variants={slideInLeft}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TopCategory />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <OurProductSection />
        </motion.div>

        <motion.div
          variants={slideInRight}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AppPromotionSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FoodBlogSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <YouMayAlsoLike />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
