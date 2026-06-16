import React from "react";
import Service from "../../appwrite/config";
import { Link } from "react-router-dom";

function BlogCard({ post, onEdit, onDelete, currentUserId }) {
  const isOwner = currentUserId === post.userId;

  const preview =
    post.content?.replace(/<[^>]*>/g, "").slice(0, 120) || "";

  return (
    <Link to={`/post/${post.$id}`} className="block h-full">
      <div
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
        {/* IMAGE */}
        <img
          src={Service.getFileView(post.featuredImage)}
          alt={post.title}
          className="w-full h-36 sm:h-48 object-cover"
        />

        {/* CONTENT */}
        <div className="p-4 flex flex-col flex-1">
          {/* AUTHOR */}
          <div className="text-xs text-blue-600 font-semibold mb-2">
            {post.userName || "Unknown Author"}
          </div>

          {/* TITLE */}
          <h2 className="font-bold text-lg text-gray-800 line-clamp-2">
            {post.title}
          </h2>

          {/* PREVIEW */}
          <p className="text-sm text-gray-600 mt-2 flex-1 line-clamp-3">
            {preview}
          </p>

          {/* OWNER ACTIONS */}
          {isOwner && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onEdit(post);
                }}
                className="px-3 py-1 text-xs bg-green-700 text-white rounded hover:bg-green-800"
              >
                Edit
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(post.$id);
                }}
                className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;