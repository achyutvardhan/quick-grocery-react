import React from "react";
import { Link, useLocation } from "react-router";
import OutletProduct from "../components/OutletProduct";
export default function Product() {
  const location = useLocation();
  const getActiveClass = (path) => {
    if (path === "/ourProduct" && location.pathname === "/ourProduct")
      return "active-category";
    if (path !== "/ourProduct" && location.pathname.includes(path))
      return "active-category";
    return "";
  };
  return (
    <>
      <section className="product-catalogue">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="category-filter">
            <ul>
              <li>
                <Link
                  to={"/ourProduct"}
                  className={getActiveClass("/ourProduct")}
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourProduct/Fruits"}
                  className={getActiveClass("/ourProduct/Fruits")}
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourProduct/Vegetables"}
                  className={getActiveClass("/ourProduct/Vegetables")}
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourProduct/Dairy"}
                  className={getActiveClass("/ourProduct/Dairy")}
                >
                  Dairy
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourProduct/Bakery"}
                  className={getActiveClass("/ourProduct/Bakery")}
                >
                  Bakery
                </Link>
              </li>
              <li>
                <Link
                  to={"/ourProduct/Meat"}
                  className={getActiveClass("/ourProduct/Meat")}
                >
                  Meat
                </Link>
              </li>
            </ul>
          </div>
          <div className="product-grid">{<OutletProduct />}</div>
        </div>
      </section>
    </>
  );
}
