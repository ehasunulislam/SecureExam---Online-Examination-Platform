"use client";
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      role,
      email: form.email,
      password: form.password,
    };

    console.log("LOGIN DATA:", payload);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[linear-gradient(145deg,#f8fafc_0%,#f1f5f9_100%)] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-[0_20px_40px_-15px_rgba(13,124,102,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(13,124,102,0.25)] rounded-2xl p-8 transition-all">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#0D7C66] flex items-center justify-center text-white text-2xl font-bold mb-4">
              s
            </div>
            <h1 className="text-3xl font-bold text-[#1e293b]">Welcome Back</h1>
            <p className="text-[#64748b] mt-2">Please sign in to continue</p>
          </div>

          {/* Role Pills */}
          <div className="flex gap-2 mb-6 justify-center">
            {[
              { key: "admin", label: "Admin" },
              { key: "instructor", label: "Instructor" },
              { key: "student", label: "Student" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setRole(item.key)}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    role === item.key
                      ? "bg-[#0D7C66] text-white shadow-md scale-105"
                      : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#334155]"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1e293b]">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">✉️</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#41B3A2] focus:ring-4 focus:ring-[#41B3A21A] outline-none text-[#1e293b] placeholder:text-[#94a3b8]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#1e293b]">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">🔒</span>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#41B3A2] focus:ring-4 focus:ring-[#41B3A21A] outline-none text-[#1e293b] placeholder:text-[#94a3b8]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0D7C66] cursor-pointer"
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-[#475569] hover:text-[#334155]">
                <input type="checkbox" className="accent-[#0D7C66]" />
                Remember me
              </label>
              <a href="#" className="text-[#64748b] hover:text-[#0D7C66]">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0D7C66] text-white py-2 rounded-lg font-medium hover:bg-[#41B3A2] hover:-translate-y-[1px] transition-all"
            >
              Sign in as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 gap-3">
            <div className="flex-1 border-t border-[#e2e8f0]"></div>
            <span className="text-[#94a3b8] text-sm">or sign in with</span>
            <div className="flex-1 border-t border-[#e2e8f0]"></div>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white hover:border-[#41B3A2] transition text-[#475569] hover:text-[#1e293b] font-medium">
            <span className="text-[#DB4437] text-lg">G</span>
            Google
          </button>

          {/* Register */}
          <p className="text-sm text-center text-[#64748b] mt-6">
            Don’t have an account?{" "}
            <a href="#" className="underline text-[#0D7C66]">
              Create an account
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}
