import React, { useState, useContext, useEffect } from "react";
import { postFromAddToCart } from "../js/cartFetch";
import { ProfileContext } from "../context/ProfileContext";
import { CartContext } from "../context/CartContext";
const CartCard = ({ data }) => {
  //issue to addres the + -  button
  const [cart, setCart] = useState(data.quantity);
  const { profile } = useContext(ProfileContext);
  const { refreshFetch } = useContext(CartContext);
  useEffect(() => {
    data.quantity = cart;
  }, [cart]);
  const onAddHandler = async () => {
    setCart((prev) => prev + 1);
    const res = await postFromAddToCart(data, profile.id);
    refreshFetch();
    console.log(res);
  };

  const onSubHandler = async () => {
    setCart((prev) => prev - 1);
    // console.log(data);
    refreshFetch();
    const res = await postFromAddToCart(data, profile.id);
    console.log(res);
  };
  return (
    <>
      <article className="cp-card" data-price="2.49">
        <img src={data?.image} alt="Apples" className="cp-card-img" />
        <div className="cp-card-details">
          <div className="cp-title">{data.name}</div>
          <div>
            <span className="cp-price">${data.price}</span>
            <span className="cp-unit">/ {data.unit}</span>
          </div>
          <div>
            <div className="cp-qty-group">
              <button className="cp-qty-btn" onClick={onSubHandler}>
                −
              </button>
              <input
                type="number"
                value={cart}
                onChange={(e) => setCart(e.target.value)}
                className="cp-qty-input"
              />
              <button className="cp-qty-btn" onClick={onAddHandler}>
                +
              </button>
            </div>
            <span className="cp-remove">Remove</span>
          </div>
          <div className="cp-subtotal">
            Subtotal: <span>${Math.round(data.price * cart)}</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default CartCard;
