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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl border border-slate-800">

            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-2">
                Create your account
            </h1>
            <p className="text-center text-slate-400 mb-6">
                Join BakBak and start chatting 🚀
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                    <label className="block text-sm text-slate-400 mb-1">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full rounded-lg bg-slate-800 pl-11 pr-4 py-3 text-white
                         outline-none border border-slate-700
                         focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         transition"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm text-slate-400 mb-1">
                        Email
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-slate-800 pl-11 pr-4 py-3 text-white
                         outline-none border border-slate-700
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
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full rounded-lg bg-slate-800 pl-11 pr-4 py-3 text-white
                         outline-none border border-slate-700
                         focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                         transition"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSigningUp}
                    className="w-full flex items-center justify-center gap-2
                     rounded-lg bg-indigo-600 py-3 font-semibold
                     hover:bg-indigo-500 active:scale-[0.98]
                     transition disabled:opacity-70"
                >
                    {isSigningUp ? (
                        <>
                            <LoaderIcon className="animate-spin size-5" />
                            Creating account...
                        </>
                    ) : (
                        "Sign Up"
                    )}
                </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-slate-400 mt-6">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-indigo-400 hover:text-indigo-300 transition"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}
