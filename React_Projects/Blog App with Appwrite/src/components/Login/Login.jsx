import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, Button } from "../index.js";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../../store/authSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(authLogin(userData));

        navigate("/");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      setError(error?.message || "Login Failed");
      alert(error?.message || "Login Failed");
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
          Welcome Back
        </h2>

        <p className="mt-2 text-center text-sm sm:text-base text-gray-400">
          Sign in to continue to your account
        </p>

        <p className="mt-3 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign Up
          </Link>
        </p>

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
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
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
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

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="
                w-full
                py-3
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                font-semibold
                rounded-lg
                shadow-lg
                shadow-indigo-600/20
                transition
              "
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
