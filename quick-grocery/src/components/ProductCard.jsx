import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ProductCard({ data = [], ctg }) {
  const [cat, setcat] = useState(false);
  // console.log(data);
  useEffect(() => {
    if (ctg == "All") setcat(true);
    else setcat(false);
  }, [ctg]);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={data?.images[0]} alt={data?.name || "Product"} />
        <span className="badge">Organic</span>
      </div>
      <div className="product-info">
        <h3>{data?.name}</h3>
        <p className="price">
          $ {data?.price} <span>per {data?.unit}</span>
        </p>
        <p className="category">{cat ? data?.category : ctg}</p>
        <Link
          to={cat ? `/ViewItem/${data?.category}/${data?.name}` : `/ViewItem/${ctg}/${data?.name}`}
          className="btn btn-small"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
}
