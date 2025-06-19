import React from 'react'

export default function AddToCart() {
  return (
    <>
    <div class="cp-wrapper">
    <div class="cp-checkout">
        <aside class="cp-summary" id="cpSummary">
            <h2>Order Summary</h2>
            <div class="cp-summary-row"><span>Items (<span id="cpCount">2</span>)</span><span id="cpSub">$223232</span>
            </div>
            <div class="cp-summary-row"><span>Delivery</span><span id="cpDelivery">$3.50</span></div>
            <div class="cp-summary-row cp-total"><span>Total</span><span id="cpGrand">$23334</span></div>
            <button class="cp-btn">Proceed to Buy</button>
        </aside>
        <section class="cp-items" id="cpItemList">
            <app-add-to-cart-card />
            
        </section>
    </div>
</div>
    </>
  )
}
