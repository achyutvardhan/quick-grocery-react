import React, { useContext, useEffect } from "react";
import styles from "../css/orders.module.css";
import OrdersCard from "../components/OrdersCard";
import { OrdersContext } from "../context/OrdersContext";
export default function Orders() {
  const {orders , refreshOrders} = useContext(OrdersContext)
  useEffect(()=>{
    refreshOrders();
  },[])
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.ordersGlass}>
        <div className={styles.ordersTitle}>My Orders</div>
        <ul className={styles.ordersList}>
          {orders.length === 0 && (
            <div className={styles.orderEmpty}>No orders found.</div>
          )}
          {orders.map((order ,index) => (
            <OrdersCard order={order} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
