import React from "react";

const BlogCard = ({ blog }) => (
  <article className="blog-card">
    <div className="blog-image">
      <img src={blog.image} alt={blog.alt} />
    </div>
    <div className="blog-content">
      <h3>{blog.title}</h3>
      <p className="date">{blog.date}</p>
      <p className="excerpt">{blog.excerpt}</p>
      <a href={blog.link} className="read-more">Read More</a>
    </div>
  </article>
);

export default BlogCard;

