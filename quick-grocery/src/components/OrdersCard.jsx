import React, { useContext } from "react";
import styles from "../css/orders.module.css";
import { cancelOrderFromOrders } from "../js/orderFetch";
import { ProfileContext } from "../context/ProfileContext";
import { OrdersContext } from "../context/OrdersContext";
export default function OrdersCard({ order }) {
//   console.log(order);
const {profile} = useContext(ProfileContext);
const {refreshOrders} = useContext(OrdersContext)
const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dd = String(dateObj.getDate()).padStart(2, "0");
    const yyyy = dateObj.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
};

const onCancelOrderhandler = async()=>{
  // console.log("order", { ...order, userId: profile?.id });
  const copyOrder = { ...order, userId: profile?.id }
  console.log(copyOrder)
  const res = await cancelOrderFromOrders(copyOrder);
  console.log(res)
  if(res.status)
  refreshOrders();
}


  return (
    <>
      <li className={styles.orderItem} >
        <div className={styles.orderHeaderRow}>
          <div className={styles.orderHeaderLeft}>
            <span className={styles.orderId}>#{order.id}</span>
            <span className={styles.orderDate}>{formatDate(order?.date)}</span>
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
              <button className={styles.cancelBtn} onClick={onCancelOrderhandler} >Cancel Order</button>
            )}
          </div>
        </div>
        <div className={styles.orderBodyRow}>
          <div className={styles.orderItemsBox}>
            <span className={styles.itemsLabel}>Items:</span>
            <ul className={styles.itemsList}>
              {order?.products.map((item, idx) => {
                 return(   <li key={idx}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemQty}>x{item.quantity}</span>
                 </li>  
                ) })}
            </ul>
          </div>
          <div className={styles.orderTotalBox}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>${Math.round(order.total)}</span>
          </div>
        </div>
      </li>
    </>
  );
}
