import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon, User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    /* 🔹 FULL SCREEN CENTER WRAPPER */
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">

      {/* 🔹 CARD */}
      <div className="w-full max-w-md rounded-2xl 
                      bg-slate-900/70 backdrop-blur-xl
                      p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                      border border-slate-800">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Create account
          </h1>
          <p className="text-slate-400 mt-2">
            Join <span className="text-indigo-400 font-medium">BakBak</span> and start chatting
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 size-5" />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-lg bg-slate-800/80
                           pl-11 pr-4 py-3 text-white
                           border border-slate-700
                           focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 size-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg bg-slate-800/80
                           pl-11 pr-4 py-3 text-white
                           border border-slate-700
                           focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           outline-none transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 size-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg bg-slate-800/80
                           pl-11 pr-4 py-3 text-white
                           border border-slate-700
                           focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                           outline-none transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSigningUp}
            className="w-full flex items-center justify-center gap-2
                       rounded-lg bg-indigo-600 py-3 text-white font-semibold
                       hover:bg-indigo-500 active:scale-[0.98]
                       transition disabled:opacity-60"
          >
            {isSigningUp ? (
              <>
                <LoaderIcon className="animate-spin size-5" />
                Creating account…
              </>
            ) : (
              "Create account"
            )}
          </button>
        </form>
        

        {/* Footer */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 transition font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
