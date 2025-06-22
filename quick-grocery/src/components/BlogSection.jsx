import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Loader from "./Loader";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blog") // Change this URL to your API endpoint
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blogs");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <Loader color="#32cd32" size="medium" text="" textColor="" />;
  if (error) return <div>{error}</div>;

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <div className="blog-container">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
