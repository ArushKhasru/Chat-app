import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LoaderIcon, Mail, Lock, LogIn } from "lucide-react";
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

    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#2D1B4E] via-[#1C1C2D] to-[#2D1B4E]">

      <div className="w-full max-w-md rounded-[2rem] 
                      bg-[#252331]/80 backdrop-blur-xl
                      p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                      border border-white/10"
      >

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white italic tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-400 mt-3 font-medium">
            Login to <span className="text-[#7B61FF] italic font-bold">BakBak</span>
          </p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6">


          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-2xl bg-[#1C1B2B]
                           pl-12 pr-4 py-4 text-white italic
                           border border-white/5
                           focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF]
                           outline-none transition-all duration-300 placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 ml-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-2xl bg-[#1C1B2B]
                           pl-12 pr-4 py-4 text-white
                           border border-white/5
                           focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF]
                           outline-none transition-all duration-300 placeholder:text-gray-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full flex items-center justify-center gap-3 mt-4
                       rounded-2xl bg-[#7B61FF] py-4 text-white font-bold
                       hover:bg-[#6a50e6] active:scale-[0.97]
                       transition-all duration-300 disabled:opacity-60 shadow-lg shadow-[#7B61FF]/20"
          >
            {isLoggingIn ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <>
                <span>Login</span>
                <LogIn size={18} />
              </>
            )}
          </button>
        </form>


        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#7B61FF] hover:text-white transition-colors font-bold underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}