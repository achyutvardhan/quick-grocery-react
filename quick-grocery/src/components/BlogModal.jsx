import React, { useEffect } from "react";
import "../css/BlogModal.css";

const BlogModal = ({ blog, onClose }) => {
  useEffect(() => {
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img src={blog.image} alt={blog.alt} className="modal-img" />
        <h2>{blog.title}</h2>
        <p className="date">{blog.date}</p>
        {blog.description || blog.excerpt || "No description available."}
        <div className="full-content">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogModal;