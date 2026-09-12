import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function NewsPage() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  const baseURL = import.meta.env.VITE_NEWS_API_URL;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const apiURL = `${baseURL}/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

  async function fetchData() {
    try {
      const res = await fetch(apiURL);

      if (!res.ok) {
        throw new Error(`NewsAPI request failed: ${res.status}`);
      }

      const data = await res.json();

      setBlogs(data.articles || []);
    } catch (error) {
      console.error("NEWS API ERROR:", error);

      setBlogs([]);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h1 className="text-3xl md:text-4xl text-center text-white font-bold my-18">
        Tech News & Updates
      </h1>

      <div className="container mx-auto px-16 py-9">
        {error ? (
          <p className="text-center text-white">
            Unable to load news at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.slice(0, 8).map((blog) => (
              <NewsCard
                key={blog.url}
                title={blog.title}
                description={blog.description}
                image={blog.urlToImage}
                source={blog.source?.name}
                date={blog.publishedAt}
                url={blog.url}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsPage;

