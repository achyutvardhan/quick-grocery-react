import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {DataContext} from "../context/DataContext"
import ProductCard from "../components/ProductCard";
export default function Product() {
  const {data} = useContext(DataContext)
  const location = useLocation();
//    const [arr , setArr] = useState([])
var [arr , setArr] = useState([])
  const getActiveClass = (path) => {
    if (path === "/ourProduct" && location.pathname === "/ourProduct")
      return "active-category";
    if (path !== "/ourProduct" && location.pathname.includes(path))
      return "active-category";
    return "";
  };

  useEffect(()=>{
    const items = [
    data.Fruits?.[0],
    data.Vegetables?.[0],
    data.Bakery?.[0],
    data.Dairy?.[0],
  ].filter(Boolean)
    setArr(items);
  },[data])
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
                  className="active"
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
          <div className="product-grid">
             {arr?.map((data , index) => <ProductCard data={data} ctg={"null"} key={index}/>)}
          </div>
        </div>
      </section>
    </>
  );
}
