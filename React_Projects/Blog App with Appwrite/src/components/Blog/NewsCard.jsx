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
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.01] transition cursor-pointer"
    >
      {image && (
        <img src={image} className="w-full h-52 object-cover" />
      )}

      <div className="p-4">
        <div className="text-xs text-blue-600 font-semibold mb-2">
          {source}
        </div>

        <h2 className="font-bold text-lg line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <span>{date ? new Date(date).toLocaleDateString() : ""}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;