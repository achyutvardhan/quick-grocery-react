import React, { useContext, useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";
import EmptyCart from "../components/EmptyCart";
import { CartContext } from "../context/CartContext";
import { postFromCart } from "../js/orderFetch";
import { deleteAllItem } from "../js/cartFetch";
import { OrdersContext } from "../context/OrdersContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import PaymentPage from "../components/PaymentPage"; // Add this import
import PaymentSuccess from "../components/PaymentSuccess"; // Add this import

export default function AddToCart() {
  const { cartItem, refreshFetch, noOfItems, totalSum } =
    useContext(CartContext);
  const { refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false); // Add this state
  const [showSuccess, setShowSuccess] = useState(false); // Add this state

  useEffect(() => {
    refreshFetch();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const items = cartItem?.items;
  console.log(items);

  // const oncheckoutHandler = () => {
  //   setShowPayment(true); // Show payment page
  // };

  // const handleBackToCart = () => setShowPayment(false);

  // const handlePay = (finalTotal, method) => {
  //   // Clear cart logic
  //   cartItem.items = [];
  //   setShowPayment(false);
  //   setShowSuccess(true);
  //   refreshFetch();
  //   refreshOrders();
  // };

  // const handleTrackOrder = () => {
  //   // Implement navigation to order tracking page if needed
  //   setShowSuccess(false);
  //   // e.g., navigate("/orders");
  // };

  // Check if cart is empty
  const isCartEmpty = !items || items.length === 0;
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

  if (showSuccess) {
    return <PaymentSuccess onTrackOrder={handleTrackOrder} />;
  }

  if (showPayment) {
    return (
      <PaymentPage
        total={totalSum() + 3.5}
        onBack={handleBackToCart}
        onPay={handlePay}
      />
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
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
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
        )}
      </motion.div>
    </motion.div>
  );
}
