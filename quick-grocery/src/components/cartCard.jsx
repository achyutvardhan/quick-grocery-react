import React from "react";

const CartCard = () => {
  return (
    <>
      <article className="cp-card" data-price="2.49">
        <img src="#" alt="Apples" className="cp-card-img" />
        <div className="cp-card-details">
          <div className="cp-title">name</div>
          <div>
            <span className="cp-price">$1</span>
            <span className="cp-unit">/ per lb</span>
          </div>
          <div>
            <div className="cp-qty-group">
              <button className="cp-qty-btn">−</button>
              <input type="number" min={1} className="cp-qty-input" />
              <button className="cp-qty-btn">+</button>
            </div>
            <span className="cp-remove">Remove</span>
          </div>
          <div className="cp-subtotal">
            Subtotal: <span>$#</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default CartCard;
