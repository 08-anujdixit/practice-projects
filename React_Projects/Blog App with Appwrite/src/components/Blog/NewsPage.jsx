import React from "react";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";

function NewsPage() {
  const [blogs, setBlogs] = useState([]);

  const baseURL = import.meta.env.VITE_NEWS_API_URL;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const apiURL = `${baseURL}/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

  async function fetchData() {
    let res = await fetch(apiURL);
    let data = await res.json();
    setBlogs(data.articles);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <h1 className="text-3xl md:text-4xl text-center text-white font-bold my-18 ">
          Tech News & Updates
        </h1>
        <div className="container mx-auto px-16 py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {blogs.slice(0, 8).map((blog) => (
              <NewsCard
                title={blog.title}
                description={blog.description}
                image={blog.urlToImage}
                source={blog.source?.name}
                date={blog.publishedAt}
                url={blog.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
