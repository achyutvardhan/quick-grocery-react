import React from "react";
import BlogCard from "./BlogCard";
import blogData from "../json/db.json"; // Adjust the path if needed

const BlogSection = () => {
  const blogs = blogData.blog; // Access the array inside the JSON

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
