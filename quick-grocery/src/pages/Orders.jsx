import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../css/orders.module.css";
import OrdersCard from "../components/OrdersCard";
import { OrdersContext } from "../context/OrdersContext";
import Loader from "../components/Loader";

export default function Orders() {
  const { orders, refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refreshOrders();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
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
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          type: "spring",
        }}
      >
        <div className={styles.ordersContainer}>
          <div className={styles.ordersGlass}>
            <div className={styles.ordersTitle}>My Orders</div>
            <ul className={styles.ordersList}>
              {orders.length === 0 && (
                <div className={styles.orderEmpty}>No orders found.</div>
              )}
              {orders?.[0]?.order?.map((order, index) => (
                <OrdersCard order={order} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
