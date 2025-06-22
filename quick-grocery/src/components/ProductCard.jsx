import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ProductCard({ data = [], ctg }) {
  const [cat, setcat] = useState(false);
  console.log(data);
  useEffect(() => {
    if (ctg == "All") setcat(true);
    else setcat(false);
  }, [ctg]);
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)",
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 80 }}
    >
      <motion.div
        className="product-image"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <img src={data?.images[0]} alt={data?.name || "Product"} />
        <span className="badge">Organic</span>
      </motion.div>
      <div className="product-info">
        <h3>{data?.name}</h3>
        <p className="price">
          $ {data?.price} <span>per {data?.unit}</span>
        </p>
        <p className="category">{cat ? data?.category : ctg}</p>
        <Link
          to={
            cat
              ? `/ViewItem/${data?.category}/${data?.name}`
              : `/ViewItem/${ctg}/${data?.name}`
          }
          className="btn btn-small"
        >
          Add to Cart
        </Link>
      </div>
    </motion.div>
  );
}
