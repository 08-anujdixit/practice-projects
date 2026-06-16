import React, { useEffect, useState } from "react";
import Service from "../appwrite/config.js";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./Button.jsx";

function Post() {
  const userData = useSelector((state) => state.auth.userData);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const navigate = useNavigate();

  useEffect(() => {
    async function displayPost() {
      const data = await Service.getPost(postId);

      if (data) {
        setPost(data);
      } else {
        navigate("/");
      }
    }

    displayPost();
  }, [postId, navigate]);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-indigo-400 hover:text-indigo-300 transition cursor-pointer font-medium"
      >
        ← Back
      </button>

      {/* Featured Image */}
      <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-800 bg-zinc-950">
        <img
          src={Service.getFileView(post.featuredImage)}
          alt={post.title}
          className="w-full h-64 sm:h-80 md:h-[450px] object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 leading-tight">
        {post.title}
      </h1>

      {/* Author Info */}
      <div className="mt-3 text-sm text-gray-400">
        By <span className="font-medium">{post.userName || "Unknown Author"}</span>
      </div>

      {/* Article Content */}
      <div className="mt-8 bg-white/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
        <div
          className="prose prose-invert prose-sm sm:prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>

      {/* Author Actions */}
      {isAuthor && (
        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
          <Button
            className="bg-green-700 hover:bg-green-800"
            onClick={() => navigate(`/edit-post/${post.$id}`)}
          >
            Edit Blog
          </Button>

          <Button
            onClick={async () => {
              const status = await Service.deletePost(post.$id);

              if (status) {
                await Service.deleteFile(post.featuredImage);
                navigate("/");
              }
            }}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete Blog
          </Button>
        </div>
      )}
    </div>
  );
}

export default Post;