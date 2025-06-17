import React from "react";
import { Link } from "react-router";
import OutletProduct from "../components/OutletProduct";
export default function Product() {
  // console.log(1)
  return (
    <>
      <section className="product-catalogue">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="category-filter">
            <ul>
              <li>
                <Link to={"/ourProduct"} className="active">
                  All
                </Link>
              </li>
              <li>
                <Link to={"/ourProduct/Fruits"}>Fruits</Link>
              </li>
              <li>
                <Link to={"/ourProduct/Vegetables"}>Vegetables</Link>
              </li>
              <li>
                <Link to={"/ourProduct/Dairy"}>Dairy</Link>
              </li>
              <li>
                <Link to={"/ourProduct/Bakery"}>Bakery</Link>
              </li>
              <li>
                <Link to={"/ourProduct/Meat"}>Meat</Link>
              </li>
            </ul>
          </div>
          <div className="product-grid">
            <OutletProduct />
          </div>
        </div>
      </section>
    </>
  );
}
