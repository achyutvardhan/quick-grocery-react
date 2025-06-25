import React from "react";
import { Link } from "react-router";

const BlogCard = ({ blog }) => (
  <article className="blog-card">
    <div className="blog-image">
      <img src={blog.image} alt={blog.alt} />
    </div>
    <div className="blog-content">
      <h3>{blog.title}</h3>
      <p className="date">{blog.date}</p>
      <p className="excerpt">{blog.excerpt}</p>
      <Link to={"/Blog"} className="read-more">Read More</Link>
    </div>
  </article>
);

export default BlogCard;

