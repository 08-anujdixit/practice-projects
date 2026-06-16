import React from "react";
import { useNavigate } from "react-router-dom";

function NewsCard({ title, description, image, source, date, url }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news/:id", {
      state: { title, description, image, source, date, url },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="
        bg-white
        rounded-2xl
        shadow-md
        overflow-hidden
        hover:shadow-xl
        hover:scale-[1.02]
        transition-all
        duration-300
        flex flex-col
        h-full
        cursor-pointer
      "
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-36 sm:h-48 object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-blue-600 font-semibold mb-2">
          {source}
        </div>

        <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 flex-1 line-clamp-3">
          {description}
        </p>

        <div className="mt-4 text-xs text-gray-500">
          {date ? new Date(date).toLocaleDateString() : ""}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;