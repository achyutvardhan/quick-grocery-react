import React, { useContext } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import ProfileDropdown from "../components/ProfileDropdown";
export default function Header() {
  const { profile } = useContext(ProfileContext);
  const { loggedIn } = useContext(AuthContext);
  const { noOfItems } = useContext(CartContext);
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h1>QuickGrocery</h1>
          <div className="search-bar">
            <form className="search-bar">
              <input type="text" placeholder="Search for products..." />
              <button type="submit" class="search-btn">
                Search
              </button>
            </form>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ourProduct">Products</Link>
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
                to={`/AddToCart/${profile?.id}`}
                className="cart-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  background: "#f5f5f5",
                  color: "#218c4a",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} beat size="lg" />
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
                  {loggedIn ? noOfItems() : 0}
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={`/orders/${profile?.id}`}
                className="cart-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  background: "#f5f5f5",
                  color: "#218c4a",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                <FontAwesomeIcon icon={faBagShopping} bounce size="lg" />
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
                  {loggedIn ? 0 : 0}
                </span>
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              {loggedIn ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "#f0fff4",
                    borderRadius: "2rem",
                    padding: "0.25rem 1rem",
                    boxShadow: "0 2px 8px rgba(56,161,105,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#218c4a",
                      fontSize: "1.05rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Hi, {profile?.name || "User"}
                  </span>
                  <ProfileDropdown profile={profile} />
                </div>
              ) : (
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
                  Login/Signup
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
