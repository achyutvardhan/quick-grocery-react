import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/topCategory") // Change this URL to your API endpoint
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch categories");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Categories...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="top-categories">
      <div className="container">
        <h2 className="section-title">Top Categories</h2>
        <div className="categories-grid">
          {category.map((cat, idx) => (
            <a href="#" className="category-card" key={idx}>
              <img
                src={cat.image}
                alt={cat.category}
              />
              <div className="category-name">{cat.category}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategory;