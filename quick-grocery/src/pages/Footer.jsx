import styles from "../css/footer.module.css";
import { Link } from "react-router";
function Footer() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles.container}>

        {/* MAIN FOOTER COLUMNS */}
        <div className={styles["footer-content"]}>

          {/* About Column */}
          <div className={styles["footer-column"]}>
            <h3>Quick Grocery</h3>
            <p>Your one-stop shop for fresh, quality groceries delivered to your doorstep.</p>

            {/* Social Links */}
            <div className={styles["social-links"]}>
              <a href="#" className={styles["social-link"]}><i className="fab fa-facebook"></i></a>
              <a href="#" className={styles["social-link"]}><i className="fab fa-instagram"></i></a>
              <a href="#" className={styles["social-link"]}><i className="fab fa-twitter"></i></a>
            </div>

            {/* Slogan */}
            <div className={styles["footer-slogan"]}>Thanks for shopping with us! 🛒</div>
          </div>

          {/* Shop Column */}
          <div className={styles["footer-column"]}>
            <h4>Shop</h4>
            <ul className={styles["icon-list"]}>
              <li><Link to={"/ourProduct/Fruits"}><i className="fas fa-apple-alt"></i> Fruits</Link></li>
              <li><Link to={"/ourProduct/Dairy"}><i className="fas fa-cheese"></i> Dairy & Eggs</Link></li>
              <li><Link to={"/ourProduct/Bakery"}><i className="fas fa-bread-slice"></i> Bakery</Link></li>
              <li><Link to={"/ourProduct/Meat"}><i className="fas fa-drumstick-bite"></i> Meat & Seafood</Link></li>
              <li><Link to={"/ourProduct"}><i className="fas fa-shopping-bag"></i> All Products</Link></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className={styles["footer-column"]}>
            <h4>Customer Service</h4>
            <ul>
              <li><Link to={"/Contact"}>Contact Us</Link></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
            <div className={styles["footer-hours"]}>
              <p><strong>Hours:</strong><br />Mon–Sat: 9AM – 6PM</p>
            </div>
          </div>

          {/* Contact Column */}
          <div className={styles["footer-column"]}>
            <h4>Contact</h4>
            <address>
              123 Grocery Lane<br />
              Fresh City, FC 12345<br />
              <a href="tel:+11234567890">(123) 456-7890</a><br />
              <a href="mailto:info@quickgrocery.com">info@quickgrocery.com</a>
            </address>

            {/* Trust Badges */}
            <div className={styles["trust-badges"]}>
              <span><i className="fas fa-shield-alt"></i> Secure Payments</span>
              <span><i className="fas fa-truck"></i> Fast Delivery</span>
              <span><i className="fas fa-check-circle"></i> 100% Fresh</span>
              <span><i className="fas fa-box-open"></i> Easy Returns</span>
            </div>
          </div>

        </div>

        {/* EXTRA INFO SECTIONS */}

        {/* Additional Footer Sections in Proper Columns */}
        <div className={styles["footer-content"]}>
          {/* Awards & Recognition */}
          <div className={styles["footer-column"]}>
            <h4>Awards & Recognition</h4>
            <div className={styles["recognition-item"]}>
              <i className="fas fa-award"></i> Best Grocery Award 2024
            </div>
            <div className={styles["recognition-item"]}>
              <i className="fas fa-leaf"></i> Certified Organic Supplier
            </div>
          </div>

          {/* Freshness Guarantee */}
          <div className={styles["footer-column"]}>
            <h4>Fresh Guarantee</h4>
            <div className={styles["footer-weather"]}>
              <i className="fas fa-cloud-sun"></i> Rain or shine, freshness always!
            </div>
          </div>

          {/* Customer Praise */}
          <div className={styles["footer-column"]}>
            <h4>What Customers Say</h4>
            <blockquote className={styles["footer-quote"]}>"Quick Grocery always delivers the best!" — A happy customer</blockquote>
          </div>

          {/* Delivery Cities */}
          <div className={styles["footer-column"]}>
            <h4>We Deliver To</h4>
            <ul className={styles["deliver-cities"]}>
              <li><i className="fas fa-map-marker-alt"></i> Delhi</li>
              <li><i className="fas fa-map-marker-alt"></i> Mumbai</li>
              <li><i className="fas fa-map-marker-alt"></i> Bangalore</li>
            </ul>
          </div>
        </div>

        {/* Language Selector and Scroll Button */}
        <div className={styles["footer-tools"]}>
          <div className={styles["language-selector"]}>
            <label htmlFor="language">Language:</label>
            <select id="language">
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Telugu</option>
            </select>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles["scroll-top-inline"]}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>

        {/* COPYRIGHT */}
        <div className={styles["copyright"]}>
          <p>&copy; 2025 Quick Grocery. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
