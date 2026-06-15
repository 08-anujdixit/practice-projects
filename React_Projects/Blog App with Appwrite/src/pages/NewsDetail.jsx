import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NewsDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center mt-20 text-gray-500">
        No news data found
      </div>
    );
  }

  const { title, description, image, source, date, url } = state;

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white"
      >
        ← Back
      </button>

      {image && (
        <img
          src={image}
          className="w-full h-80 object-cover rounded-xl"
        />
      )}

      <div className="mt-6">
        <div className="text-sm text-blue-600 bold">
          {source}
        </div>

        <h1 className="text-4xl font-bold mt-2 text-white my-3">
          {title}
        </h1>

        <p className="text-gray-400 text-sm mt-2  ">
          {date ? new Date(date).toLocaleString() : ""}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed text-white">
          {description}
        </p>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-blue-600 font-medium"
          >
            Read Full Article →
          </a>
        )}
      </div>
    </div>
  );
}

export default NewsDetail;