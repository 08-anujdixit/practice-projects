import React from "react";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";


function Blogs() {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    let res = await fetch(apiURL);
    let data = await res.json();
    //  console.log(data.articles);
    setBlogs(data.articles);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <h1 className="text-3xl md:text-4xl text-center text-white font-bold my-9">
          Our Trending Blogs
        </h1>
        <div className="container mx-auto px-16 py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            
            {
            blogs.slice(0, 8).map((blog) => (
              <BlogCard  blog={blog} key={blog.url} />
            ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
