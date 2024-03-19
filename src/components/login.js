"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import authService from "@/api/userApi";
import { useDispatch } from 'react-redux';
import { loginUser } from "@/redux/slices/userSlices";
import { loader } from "@/utils/loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const userData = { email, password };
      const response = await authService.login(userData);
      if (response?.status === 200) {
        dispatch(loginUser(response?.data));
        router.replace("/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Log in to your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="text-gray-800 block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-semibold rounded-md focus:outline-none transition-colors duration-300 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Not a member?{' '}
          <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
