import React from "react";
import styles from "../css/orders.module.css";

// Example static orders data
const orders = [
  {
    id: "ORD-1001",
    date: "2025-06-18",
    status: "Delivered",
    total: 42.99,
    items: [
      { name: "Banana", qty: 2 },
      { name: "Milk", qty: 1 },
    ],
  },
  {
    id: "ORD-1002",
    date: "2025-06-15",
    status: "Shipped",
    total: 19.5,
    items: [
      { name: "Broccoli", qty: 1 },
      { name: "Egg", qty: 1 },
    ],
  },
  {
    id: "ORD-1003",
    date: "2025-06-10",
    status: "Cancelled",
    total: 0.0,
    items: [{ name: "Fish", qty: 1 }],
  },
];

export default function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.ordersGlass}>
        <div className={styles.ordersTitle}>My Orders</div>
        <ul className={styles.ordersList}>
          {orders.length === 0 && (
            <div className={styles.orderEmpty}>No orders found.</div>
          )}
          {orders.map((order) => (
            <li className={styles.orderItem} key={order.id}>
              <div className={styles.orderHeaderRow}>
                <div className={styles.orderHeaderLeft}>
                  <span className={styles.orderId}>#{order.id}</span>
                  <span className={styles.orderDate}>{order.date}</span>
                </div>
                <div className={styles.orderHeaderRight}>
                  <span
                    className={
                      order.status === "Delivered"
                        ? styles.statusDelivered
                        : order.status === "Shipped"
                        ? styles.statusShipped
                        : styles.statusCancelled
                    }
                  >
                    {order.status}
                  </span>
                  {order.status !== "Cancelled" &&
                    order.status !== "Delivered" && (
                      <button className={styles.cancelBtn}>Cancel Order</button>
                    )}
                </div>
              </div>
              <div className={styles.orderBodyRow}>
                <div className={styles.orderItemsBox}>
                  <span className={styles.itemsLabel}>Items:</span>
                  <ul className={styles.itemsList}>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemQty}>x{item.qty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.orderTotalBox}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalValue}>
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
