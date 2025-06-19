import React , {useContext, useEffect, useState} from "react";
import CartCard from "../components/CartCard";
import { CartContext } from "../context/CartContext";



export default function AddToCart() {
  const {cartItem } = useContext(CartContext);
 console.log(cartItem)
  return (
    <>
      <div className="cp-wrapper">
        <div className="cp-checkout">
          <aside className="cp-summary" id="cpSummary">
            <h2>Order Summary</h2>
            <div className="cp-summary-row">
              <span>
                Items (<span id="cpCount">2</span>)
              </span>
              <span id="cpSub">$223232</span>
            </div>
            <div className="cp-summary-row">
              <span>Delivery</span>
              <span id="cpDelivery">$3.50</span>
            </div>
            <div className="cp-summary-row cp-total">
              <span>Total</span>
              <span id="cpGrand">$23334</span>
            </div>
            <button className="cp-btn">Proceed to Buy</button>
          </aside>
          <section className="cp-items" id="cpItemList">
            {cartItem?.map((data,index)=> {return <CartCard  data={data} key={index} />})}
          </section>
        </div>
      </div>
    </>
  );
}
