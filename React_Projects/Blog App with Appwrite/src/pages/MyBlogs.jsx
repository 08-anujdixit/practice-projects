import React, { useEffect, useState } from "react";
import Service from "../appwrite/config";
import BlogCard from "../components/Blog/BlogCard";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

function MyBlogs() {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      fetchPosts();
    }
  }, [userData]);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const blogs = await Service.getPosts([
        Query.equal("userId", userData.$id),
      ]);

      setPosts(blogs?.documents || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-gray-300">
        <p className="text-lg font-medium">Loading posts...</p>
        <p className="text-sm text-gray-500 mt-1">
          Please wait while we fetch your blogs
        </p>
      </div>
    );
  }

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

  if (!posts?.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-center my-50">
        <div className="text-6xl mb-4">📝</div>

        <h2 className="text-2xl font-bold text-white">No Posts Available</h2>

        <p className="text-gray-400 mt-2">
          Start writing your first blog and share your thoughts.
        </p>
      </div>
    );
  }

  return (
    <Container>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          My Blogs
        </h1>

        {posts.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <section>
            <div className="container mx-auto px-16 py-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {posts.map((post) => (
                  <BlogCard
                    key={post.$id}
                    post={post}
                    currentUserId={userData.$id}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Container>
  );
}

export default MyBlogs;
