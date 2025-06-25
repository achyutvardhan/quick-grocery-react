import React, { useState } from "react";
import BlogModal from "./BlogModal";
import "../css/BlogModal.css";

const BlogCard = ({ blog }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="blog-card">
        <div className="blog-image">
          <img src={blog.image} alt={blog.alt} />
        </div>
        <div className="blog-content">
          <h3>{blog.title}</h3>
          <p className="date">{blog.date}</p>
          <p className="excerpt">{blog.excerpt}</p>
          <button className="read-more" onClick={() => setShowModal(true)}>
            Read More
          </button>
        </div>
      </article>
      {showModal && (
        <BlogModal blog={blog} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default BlogCard;

