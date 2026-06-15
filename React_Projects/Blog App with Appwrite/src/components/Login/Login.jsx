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

        if (userData) dispatch(authLogin(userData)); //sending state for store
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full my-20 ">
      <div
        className={`mx-auto w-full max-w-lg h-110 bg-slate-900 rounded-xl p-10 border border-slate-800 text-white `}
      >
        <div className="mb-2 flex justify-center">
                 <div
            className="w-10 h-10 flex items-center justify-center rounded-lg 
                       bg-black text-white font-bold border border-gray-700 
                       cursor-pointer select-none"
          >
            AD
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-white">
          Don&apos;t have any account? &nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline "
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-balck placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
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
              label="Password: "
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition duration-200"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
