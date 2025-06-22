import React, { useContext, useEffect, useState } from "react";
import styles from "../css/orders.module.css";
import OrdersCard from "../components/OrdersCard";
import { OrdersContext } from "../context/OrdersContext";
import Loader from "../components/Loader";

export default function Orders() {
  const { orders, refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    refreshOrders();
  }, []);

  if (loading) {
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
        <Loader color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
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
  );
}
