import Loader from "./Loader";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { DataContext } from "../context/DataContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { postFromViewItem } from "../js/cartFetch";
import { ProfileContext } from "../context/ProfileContext";
import { motion } from "framer-motion";

export default function ViewItem() {
  const { data } = useContext(DataContext);
  const { refreshFetch } = useContext(CartContext);
  const { loggedIn } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);
  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");
  const category = pathParts[2];
  const item = pathParts[3];
  const currentCategoryData = data[category] || [];
  const currentItem = currentCategoryData.find((x) => x.name === item);
  const [cart, setCart] = useState(1);
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentItem?.images?.[0]) setSelect(currentItem.images[0]);
  }, [currentItem]);

  useEffect(() => {
    // Simulate loading or fetch here
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader color="#32cd32" size="medium" text="" textColor="" />;
  }

  if (!data[category] || !currentItem) {
    return <div>Loading...</div>;
  }

  const onclickHandler = (val) => setSelect(val);
  const addToCartHandler = async () => {
    try {
      if (loggedIn) {
        console.log(currentItem);
        const dataItem = {
          name: currentItem?.name,
          quantity: cart,
          price: currentItem?.price,
          unit: currentItem?.unit,
          image: currentItem?.images[0],
        };
        const res = await postFromViewItem(profile.id, dataItem);
        console.log(res);
        refreshFetch();
      } else {
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.section
        className="product-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <motion.div
            className="breadcrumb"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to={"/"}>Home</Link> &gt;{" "}
            <Link to={`/ourProduct/${category}`}>{category}</Link> &gt;{" "}
            <span>{item}</span>
          </motion.div>
          <motion.div
            className="product-detail"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="product-gallery"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="main-image"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img src={select || null} alt={currentItem.name} />
              </motion.div>
              <motion.div
                className="thumbnail-images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {currentItem.images?.map((src, index) => (
                  <motion.img
                    src={src}
                    alt={currentItem.name + " thumbnail"}
                    key={index}
                    onClick={() => onclickHandler(src)}
                    whileHover={{ scale: 1.1, boxShadow: "0 4px 16px #bbf7d0" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="product-info-detail"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {currentItem.name}
              </motion.h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">(127 reviews)</span>
              </div>
              <motion.p
                className="product-price"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                $ {currentItem.price} <span>per {currentItem.unit}</span>
              </motion.p>
              <div className="product-description">
                <p>{currentItem.description}</p>
                <div className="product-features">
                  <h3>Product Features:</h3>
                  <ul>
                    {currentItem.features?.map((fet, index) => {
                      return <li key={index}>{fet}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <motion.div
                className="product-purchase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="quantity">
                  <label>Quantity:</label>
                  <div className="quantity-selector">
                    <button
                      className="qty-btn"
                      onClick={() => cart >= 2 && setCart((prev) => prev - 1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={cart}
                      className="qty-input"
                      onChange={(e) => setCart(e.target.value)}
                    />
                    <button
                      className="qty-btn"
                      onClick={() => setCart((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="stock">In Stock</span>
                </div>
                <div className="product-actions">
                  <motion.button
                    className="btn btn-large"
                    onClick={addToCartHandler}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#bbf7d0" }}
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    className="wishlist-btn"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, color: "#22c55e" }}
                  >
                    ❤
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="delivery-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <p>
                  <strong>Delivery:</strong> Free delivery on orders over $50
                </p>
                <p>
                  <strong>Availability:</strong> Usually ships within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
