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
  }, [postId]);

  if (!post) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto py-8 text-white">
        <img
          src={Service.getFileView(post.featuredImage)}
          alt={post.title}
          className="w-full max-h-[500px] object-contain  rounded-xl border border-slate-800 bg-zinc-950"
        />

        <h1 className="text-4xl font-bold my-6 my-8">{post.title}</h1>

        {isAuthor && (
          <div className="flex gap-4 my-6">
            <Button
              className="bg-green-950"
              onClick={() => navigate(`/edit-post/${post.$id}`)}
            >
              Edit
            </Button>

            <Button
              onClick={async () => {
                const status = await Service.deletePost(post.$id);

                if (status) {
                  await Service.deleteFile(post.featuredImage);
                  navigate("/");
                }
              }}
              className="bg-red-700"
            >
              Delete
            </Button>
          </div>
        )}

        <div
          className="prose prose-invert lg:prose-lg max-w-none text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </>
  );
}

export default Post;
