import React, { useContext, useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import { CartContext } from "../context/CartContext";
import { postFromCart } from "../js/orderFetch";
import { deleteAllItem } from "../js/cartFetch";
import { OrdersContext } from "../context/OrdersContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

export default function AddToCart() {
  const { cartItem, refreshFetch, noOfItems, totalSum } =
    useContext(CartContext);
  const { refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    refreshFetch();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const items = cartItem?.items;
  console.log(items);

  const oncheckoutHandler = async () => {
    console.log(cartItem);
    const newCartItem = { ...cartItem, total: totalSum() + 3.5 };
    console.log(newCartItem);
    const postdataToOrders = await postFromCart(cartItem);
    console.log(postdataToOrders);
    const deleteAllItems = await deleteAllItem(cartItem.userId);
    console.log(deleteAllItems);
    refreshFetch();
    refreshOrders();
  };
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
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 80 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      >
        <div className="cp-wrapper">
          <div className="cp-checkout">
            <aside className="cp-summary" id="cpSummary">
              <h2>Order Summary</h2>
              <div className="cp-summary-row">
                <span>
                  Items (<span id="cpCount">{noOfItems()}</span>)
                </span>
                <span id="cpSub">${totalSum()}</span>
              </div>
              <div className="cp-summary-row">
                <span>Delivery</span>
                <span id="cpDelivery">$3.50</span>
              </div>
              <div className="cp-summary-row cp-total">
                <span>Total</span>
                <span id="cpGrand">${totalSum() + 3.5}</span>
              </div>
              <button className="cp-btn" onClick={oncheckoutHandler}>
                Proceed to Buy
              </button>
            </aside>
            <section className="cp-items" id="cpItemList">
              {items?.map((data, index) => {
                return <CartItemCard data={data} key={index} />;
              })}
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
