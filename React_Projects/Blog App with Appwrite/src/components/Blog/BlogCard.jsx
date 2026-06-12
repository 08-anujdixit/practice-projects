import React from "react";

function BlogCard({blog}) {
  return (
    <article className="cursor-pointer overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg border-2 border-indigo-700 ">
      <img
        alt=""
        src={blog.urlToImage}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6 h-full">
      

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            {blog.title}
          </h3>
        </a>
        <p className="text-sm">{blog.author}</p>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog.description}
        </p>
      </div>
    </article>
  );
}

export default BlogCard;
