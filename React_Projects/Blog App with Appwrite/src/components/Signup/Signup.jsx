import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useNavigate, Link } from "react-router-dom";
import { Button, Input } from "../index.js";

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
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center my-20">
      <div
        className={`mx-auto w-full max-w-lg bg-slate-900 rounded-xl p-10 border border-slate-800 text-white`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-white">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name:"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-balck placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              placeholder="Enter Your Full Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address";
                  },
                },
              })}
            />

            <Input
              label="Password :"
              placeholder="Enter Your Password :"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-600/20 transition duration-200"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
