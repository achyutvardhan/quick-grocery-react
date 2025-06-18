import React from "react";

export default function ProductCard({data=[] , ctg}) {
    // console.log(data)
  return (
    <>
      <div className="product-grid">
        <div className="product-card">
          <div className="product-image">
            <img
              src={data.images[0]}
              alt="Fresh Organic Apples"
            />
            <span className="badge">Organic</span>
          </div>
          <div className="product-info">
            <h3>{data.name}</h3>
            <p className="price">
              $ {data.price} <span>per {data.unit}</span>
            </p>
            {/* <p className="category">{ctg }</p> */}
            <button type="button" className="btn btn-small">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
