import React from "react";
import styles from "../css/orders.module.css";
export default function OrdersCard({ order }) {
  console.log(order);
  return (
    <>
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
            {order.status !== "Cancelled" && order.status !== "Delivered" && (
              <button className={styles.cancelBtn}>Cancel Order</button>
            )}
          </div>
        </div>
        <div className={styles.orderBodyRow}>
          <div className={styles.orderItemsBox}>
            <span className={styles.itemsLabel}>Items:</span>
            <ul className={styles.itemsList}>
              {/* {order.items.map((item, idx) =>
                item?.map((products, idx) => {
                  products?.map((itemCart, i) => {
                      <li key={i}>
                        <span className={styles.itemName}>{itemCart.name}</span>
                        <span className={styles.itemQty}>x{itemCart.qty}</span>
                      </li>
                  });
                })
              )} */}
            </ul>
          </div>
          <div className={styles.orderTotalBox}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>${}</span>
          </div>
        </div>
      </li>
    </>
  );
}
