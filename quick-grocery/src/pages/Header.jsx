import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { ProfileContext } from "../context/ProfileContext";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import ProfileDropdown from "../components/ProfileDropdown";
import { OrdersContext } from "../context/OrdersContext";

export default function Header() {
  const { profile } = useContext(ProfileContext);
  const { loggedIn } = useContext(AuthContext);
  const { noOfItems } = useContext(CartContext);
  const { noOfOrders } = useContext(OrdersContext);
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <h1>QuickGrocery</h1>
        </div>

        <div className="header-search">
          <form className="search-form">
            <input type="text" placeholder="Search for products..." />
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ourProduct"
                className={isActive("/ourProduct") ? "active" : ""}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/SpecialOffer"
                className={isActive("/SpecialOffer") ? "active" : ""}
              >
                Special Offers
              </Link>
            </li>
            <li>
              <Link to="/Blog" className={isActive("/Blog") ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={isActive("/Contact") ? "active" : ""}
              >
                Contact
              </Link>
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
                  {loggedIn ? noOfOrders() : 0}
                </span>
              </Link>
            </li>
            <li>
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
