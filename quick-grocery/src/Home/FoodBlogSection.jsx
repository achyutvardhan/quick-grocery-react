import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

function FoodBlogSection() {
    const [blog, setBlog] = useState([]);
    useEffect(()=>{
        const fetchBlog = async() =>{
            const res = await axios.get("http://localhost:3000/blog");
            // console.log(res)
            const items = res.data?.slice(0, 3)
            // console.log(items)
            setBlog(items)
        }
        fetchBlog()
    },[])
    // console.log(blog)
  return (
    <>
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <div className="blog-container">
          {blog?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default FoodBlogSection
