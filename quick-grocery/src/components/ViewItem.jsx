import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { DataContext } from "../context/DataContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { postFromViewItem } from "../js/cartFetch";
import { ProfileContext } from "../context/ProfileContext";

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

  useEffect(() => {
    if (currentItem?.images?.[0]) setSelect(currentItem.images[0]);
  }, [currentItem]);

  if (!data[category] || !currentItem) {
    return <div>Loading...</div>;
  }

  const onclickHandler = (val) => setSelect(val);
  const addToCartHandler = async () => {
    try {
      if (loggedIn) {
        console.log(currentItem);
        const dataItem = {
          name : currentItem?.name,
          quantity : cart,
          price : currentItem?.price,
          unit : currentItem?.unit,
          image : currentItem?.images[0]
        } 
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
      <section className="product-page">
        <div className="container">
          <div className="breadcrumb">
            <Link to={"/"}>Home</Link> &gt;{" "}
            <Link to={`/ourProduct/${category}`}>{category}</Link> &gt;{" "}
            <span>{item}</span>
          </div>
          <div className="product-detail">
            <div className="product-gallery">
              <div className="main-image">
                <img src={select || null} alt={currentItem.name} />
              </div>
              <div className="thumbnail-images">
                {currentItem.images?.map((src, index) => (
                  <img
                    src={src}
                    alt={currentItem.name + " thumbnail"}
                    key={index}
                    onClick={() => onclickHandler(src)}
                  />
                ))}
              </div>
            </div>
            <div className="product-info-detail">
              <h1>{currentItem.name}</h1>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-count">(127 reviews)</span>
              </div>
              <p className="product-price">
                $ {currentItem.price} <span>per {currentItem.unit}</span>
              </p>
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
              <div className="product-purchase">
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
                  <button className="btn btn-large" onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                  <button className="wishlist-btn">❤</button>
                </div>
              </div>
              <div className="delivery-info">
                <p>
                  <strong>Delivery:</strong> Free delivery on orders over $50
                </p>
                <p>
                  <strong>Availability:</strong> Usually ships within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
