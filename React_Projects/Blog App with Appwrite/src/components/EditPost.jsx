import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Service from "../appwrite/config";
import PostForm from "./postform/PostForm";

function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Service.getPost(postId).then((post) => {
      if (post) {
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [postId, navigate]);

  return post ? <PostForm post={post} /> : <div>Loading...</div>;
}

export default EditPost;