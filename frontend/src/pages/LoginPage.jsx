import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
     <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">


    <div
      className="w-full max-w-md rounded-2xl
                 bg-slate-900/75 backdrop-blur-xl
                 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                 border border-slate-800"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white">
          Welcome back
        </h1>
        <p className="text-slate-400 mt-2">
          Login to <span className="text-indigo-400 font-medium">BakBak</span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
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
                         outline-none
                         focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
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
                         outline-none
                         focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         transition"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoggingIn}
          className="w-full flex items-center justify-center gap-2
                     rounded-lg bg-indigo-600 py-3 text-white font-semibold
                     hover:bg-indigo-500 active:scale-[0.98]
                     transition disabled:opacity-60"
        >
          {isLoggingIn ? (
            <>
              <LoaderIcon className="size-5 animate-spin" />
              Logging in…
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-slate-400 mt-6">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-indigo-400 hover:text-indigo-300 font-medium transition"
        >
          Sign up
        </Link>
      </p>
    </div>
    </div>
  );
}

