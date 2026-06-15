import React, { useEffect, useState } from "react";
import Service from "../../appwrite/config";
import BlogCard from "./BlogCard";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import Container from "../Container";
import { useNavigate } from "react-router-dom";

function CommunityBlogs() {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const blogs = await Service.getPosts([
        Query.orderDesc("$createdAt"),
      ]);

      setPosts(blogs?.documents || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Service.deletePost(id);
      setPosts((prev) => prev.filter((p) => p.$id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => {
    navigate(`/edit-post/${post.$id}`, { state: post });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-gray-300">
        <p className="text-lg font-medium">Loading posts...</p>
        <p className="text-sm text-gray-500 mt-1">
          Please wait while we fetch community blogs
        </p>
      </div>
    );
  }

  return (
    <Container>
      <div className="p-4">
         <h1 className="text-3xl md:text-4xl text-center text-white font-bold my-18 ">
          Community Blogs
        </h1>

        <section>
          <div className="container mx-auto px-16 py-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.$id}
                  post={post}
                  currentUserId={userData?.$id}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default CommunityBlogs;