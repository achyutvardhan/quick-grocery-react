import React from "react";

const AppPromotionSection = () => (
  <section className="app-promotion">
    <div className="container">
      <div className="app-promo-content">
        <div className="app-info">
          <h2>Get Our Mobile App</h2>
          <p>
            Shop anytime, anywhere with our convenient mobile app. Get exclusive offers and track your orders in
            real-time.
          </p>
          <ul className="app-features">
            <li>Easy ordering process</li>
            <li>Exclusive mobile-only offers</li>
            <li>Order tracking</li>
            <li>Personalized recommendations</li>
          </ul>
          <div className="app-buttons">
            <a href="#" className="app-button">
              <span>Download on the</span>
              <strong>App Store</strong>
            </a>
            <a href="#" className="app-button">
              <span>Get it on</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>
        <div className="app-image">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Mobile App"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AppPromotionSection;
