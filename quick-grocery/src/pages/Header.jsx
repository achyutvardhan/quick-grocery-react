import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h1>QuickGrocery</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Product">Products</Link>
            </li>
            <li>
              <Link to="/SpecialOffer">Special Offers</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link
                to={`/AddToCart/${1}`}
                style={{
                  color: "#218c4a",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                <span
                  className="cart-count"
                  style={{
                    background: "#218c4a",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "2px 8px",
                    fontSize: "0.85em",
                    marginLeft: "2px",
                  }}
                >
                  0
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="auth-icon-link"
                style={{
                  color: "#fff",
                  background: "#218c4a",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <span>Login/Signup</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
