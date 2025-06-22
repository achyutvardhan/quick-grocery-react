import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeeklyDealsCard from "../components/WeeklyDealsCard";
import { productFetch } from "../js/productFetch";
import { Mosaic } from "react-loading-indicators";

const SpecialOffer = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const data = await productFetch();
        console.log(data);
        setFruits(data.Fruits);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch fruits");
        setLoading(false);
      }
    };
    getFruits();
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
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="background">
        <section class="hero-banner">
          <div class="container">
            <div class="hero-content">
              <h2>Limited Time Special Offers</h2>
              <p>
                Enjoy amazing discounts on selected products. Hurry before
                stocks run out!
              </p>
            </div>
          </div>
        </section>

        <section className="product-catalogue">
          <div className="container">
            <h2 className="section-title">Current Promotions</h2>
            <div className="special-offer-card">
              <h2 className="offer-title">Weekly Deals</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(0, 4)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </div>

            <div className="special-offer-card">
              <h2 className="offer-title">Buy One Get One Free</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(4, 8)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </div>

            <div className="special-offer-card">
              <h2 className="offer-title">Clearance Items - up to 50% off</h2>
              <div className="product-grid">
                {Array.isArray(fruits) &&
                  fruits
                    .slice(3, 7)
                    .map((fruit, idx) => (
                      <WeeklyDealsCard key={fruit.id} fruit={fruit} />
                    ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpecialOffer;
