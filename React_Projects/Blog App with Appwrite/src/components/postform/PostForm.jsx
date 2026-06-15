import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Service from "../../appwrite/config.js";

function PostForm({ post }) {
   
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
    const imageFile = watch("image");

  const submit = async function (data) {
    if (post) {
      const file = data.image[0]
        ? await Service.uploadFile(data.image[0])
        : null;
      if (file) {
        await Service.deleteFile(post.featuredImage);
      }

      const dbPost = await Service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await Service.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await Service.createPost({
          ...data,
          userId: userData.$id,
          userName: userData.name,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
  return () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };
}, [preview]);

useEffect(() => {
  if (imageFile && imageFile[0]) {
    const imageUrl = URL.createObjectURL(imageFile[0]);

    setPreview(imageUrl);

    return () => URL.revokeObjectURL(imageUrl);
  }
}, [imageFile]);


  return (
    <form
  onSubmit={handleSubmit(submit)}
  className="max-w-7xl mx-auto p-6 bg-white rounded-2xl shadow-lg"
>
  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Left Section */}
    <div className="md:col-span-2 space-y-6">
    <div className="border border-gray-500  rounded-lg p-5">

      <Input
        label="Title :"
        placeholder="Enter Blog Title"
        {...register("title", { required: true })}
        className="
          w-full
          px-4 py-3
          border border-gray-400
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />

      <Input
        label="Slug :"
        placeholder="slug"
        {...register("slug", { required: true })}
        onInput={(e) => {
          setValue("slug", slugTransform(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
        className="
          w-full
          px-4 py-3
          border border-gray-400
          rounded-lg
          bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />
    </div>
        <div className="border border-gray-500 rounded-lg">

      <RTE
        label="Blog Content"
        name="content"
        control={control}
        defaultValue={getValues("content")}
      />
        </div>
    </div>

    {/* Right Section */}
    <div className="space-y-6">
        <div className="">

      <Input
        label="Featured Image"
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        {...register("image", { required: !post })}

        className="
          w-full
          text-sm
          text-gray-700
          my-4
        "
      />

      {preview ? (
        <div>
          <img
            src={preview}
            alt="Preview"
            className="
              w-full
              h-64
              object-cover
              rounded-xl
              border
              shadow
               my-2
            "
          />
        </div>
      ) : (
        post && (
          <div>
            <img
              src={Service.getFileView(post.featuredImage)}
              alt={post.title}
              className="
                w-full
                h-64
                object-cover
                rounded-xl
                border
                shadow
               
              "
            />
          </div>
        )
      )}

      <Select
        options={["active", "inactive"]}
        label="Status"
        {...register("status", { required: true })}
        className="
          w-full
          px-4
          py-3
          border
          border-gray-400
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          my-4
          
        "
      />

      <Button
        type="submit"
        bgColor={post ? "bg-green-500" : undefined}
        className="
          w-full
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          font-semibold
          py-3
          rounded-lg
          transition
          shadow-md
          my-5
        "
      >
        {post ? "Update Blog" : "Publish Blog"}
      </Button>
        </div>

    </div>
  </div>
</form>
  );
}
export default PostForm;
