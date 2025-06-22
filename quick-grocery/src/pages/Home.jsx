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

export default function Home() {
  const { refreshFetch } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);
  const { refreshOrders } = useContext(OrdersContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    {
      loggedIn && refreshFetch() && refreshOrders();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
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
    <>
      <HeroBanner />
      <TopCategory />
      <OurProductSection />
      <AppPromotionSection />
      <FoodBlogSection />
      <YouMayAlsoLike />
    </>
  );
}
