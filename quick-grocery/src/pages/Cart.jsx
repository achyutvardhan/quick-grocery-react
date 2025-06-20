import React , {useContext, useEffect, useState} from "react";
import CartItemCard from "../components/CartItemCard";
import { CartContext } from "../context/CartContext";
import { postFromCart } from "../js/orderFetch";
import { deleteAllItem } from "../js/cartFetch";
import { OrdersContext } from "../context/OrdersContext";



export default function AddToCart() {
  const {cartItem , refreshFetch ,noOfItems , totalSum  } = useContext(CartContext);
  const {refreshOrders} = useContext(OrdersContext)
  useEffect(() => { 
    refreshFetch();
  }, []);
 const items = cartItem?.items;
 console.log(items)

 const oncheckoutHandler = async()=>{
     console.log(cartItem)
    const newCartItem = {...cartItem , total : totalSum()+3.5}
    console.log(newCartItem)
    const postdataToOrders = await postFromCart(cartItem);
    console.log(postdataToOrders);
    const deleteAllItems = await deleteAllItem(cartItem.userId);
    console.log(deleteAllItems)
    refreshFetch();
    refreshOrders();
 }
  return (
    <>
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
            <button className="cp-btn" onClick={oncheckoutHandler} >Proceed to Buy</button>
          </aside>
          <section className="cp-items" id="cpItemList">
            {items?.map((data,index)=> {return <CartItemCard  data={data} key={index} />})}
          </section>
        </div>
      </div>
    </>
  );
}
