import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Loader from "../components/Loader";

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          width: "100%",
        }}
      >
        <Loader color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div>
      <BlogSection />
    </div>
  );
};

export default Blog;
