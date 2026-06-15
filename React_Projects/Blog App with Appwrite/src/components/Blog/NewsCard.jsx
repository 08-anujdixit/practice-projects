import React from "react";

function NewsCard({ title, description, image, source, date, url }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">

      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Source badge */}
        <div className="text-xs text-blue-600 font-semibold mb-2">
          {source || "News"}
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>
            {date ? new Date(date).toLocaleDateString() : ""}
          </span>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>

      </div>
    </div>
  );
}

export default NewsCard;