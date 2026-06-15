import React from "react";
import Service from "../../appwrite/config";
import { Link } from "react-router-dom";

function BlogCard({ post, onEdit, onDelete, currentUserId }) {
  const isOwner = currentUserId === post.userId;

  const preview = post.content?.replace(/<[^>]*>/g, "").slice(0, 120);

  return (
    <Link to={`/post/${post.$id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full hover:scale-[1.01] transition cursor-pointer">
        {/* IMAGE */}
        <div className="h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={Service.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col flex-1">
          {/* TITLE */}
          <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
            {post.title}
          </h2>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 mt-1">
            By {post.userName || "Unknown"}
          </p>

          {/* DESCRIPTION (SAFE TEXT ONLY) */}
          <p className="text-sm text-gray-600 mt-2 flex-1">{preview}...</p>

          {/* ACTIONS */}
          {isOwner && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => onEdit(post)}
                className="px-3 py-1 text-xs bg-green-800 text-white rounded hover:bg-green-700"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(post.$id)}
                className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 "
              >
                Delete
              </button>
              <div className="w-full mt-3">
                <div className="flex justify-end">
                  <Link
                    to={`/post/${post.$id}`}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
