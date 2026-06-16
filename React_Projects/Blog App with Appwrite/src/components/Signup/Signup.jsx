import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "../index.js";
import { login } from "../../store/authSlice.js";

export default function Signup() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const create = async (data) => {
    setError("");

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) dispatch(login(currentUser));

        navigate("/");
      }
    } catch (error) {
      setError(error?.message || "Failed to create account");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div
            className="
              w-12 h-12
              flex items-center justify-center
              rounded-xl
              bg-black
              text-white
              font-bold
              border border-gray-700
              text-lg
              select-none
            "
          >
            AD
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold">
          Create Account
        </h2>

        <p className="mt-2 text-center text-sm sm:text-base text-gray-400">
          Join the community and start sharing your blogs
        </p>

        <p className="mt-3 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign In
          </Link>
        </p>

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              className="
                w-full
                px-4 py-3
                bg-slate-950
                border border-slate-700
                rounded-lg
                text-black
                placeholder-slate-500
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="
                w-full
                px-4 py-3
                bg-slate-950
                border border-slate-700
                rounded-lg
                text-black
                placeholder-slate-500
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="
                w-full
                px-4 py-3
                bg-slate-950
                border border-slate-700
                rounded-lg
                text-black
                placeholder-slate-500
                focus:outline-none
                focus:border-indigo-500
                focus:ring-1
                focus:ring-indigo-500
                transition
              "
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="
                w-full
                py-3
                bg-indigo-600
                hover:bg-indigo-700
                text-black
                font-semibold
                rounded-lg
                shadow-lg
                shadow-indigo-600/20
                transition
              "
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}