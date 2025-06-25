import React, { useState, useEffect } from "react";
import axios from "axios";
import { productFetch } from "../js/productFetch";
import WeeklyDealsCard from "../components/WeeklyDealsCard";

const YouMayAlsoLike = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

 
    const getFruits  = async () =>{
      try{
        const data = await productFetch();
        // console.log(data)
        setRelatedProducts(data.Fruits)
        setLoading(false)
      }
      catch(err){
        setError('Failed to fetch fruits');
        setLoading(false);
      }
    };
    getFruits();


  }, []);

  if (loading) return <div>Loading Related Products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-catalogue">
      <div className="container">
        <div className="related-products">
          <h2 className="you-may">You May Also Like</h2>
          <div className="product-grid small-grid">
          {Array.isArray(relatedProducts) && relatedProducts.slice(0,5).map((fruit, idx) => (
              <WeeklyDealsCard key={fruit.id} fruit={fruit}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
