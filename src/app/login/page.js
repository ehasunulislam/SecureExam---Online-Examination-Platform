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
    console.log({ role, ...form });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[linear-gradient(145deg,#f8fafc_0%,#f1f5f9_100%)] px-4 py-6 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-[0_20px_40px_-15px_rgba(13,124,102,0.15)] rounded-3xl sm:rounded-4xl p-5 sm:p-8 transition-all">

          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#0D7C66] flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              ⛉
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1e293b]">Welcome Back</h1>
            <p className="text-sm sm:text-base text-[#64748b] mt-1 sm:mt-2">
              Please sign in to continue
            </p>
          </div>

          {/* Role Pills */}
          <div className="mb-5 sm:mb-6">
            <div className="grid grid-cols-1 sm:flex gap-2 place-items-center sm:justify-center">
              {[
                { key: "admin", label: "Admin" },
                { key: "instructor", label: "Instructor" },
                { key: "student", label: "Student" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setRole(item.key)}
                  type="button"
                  className={`px-6 py-2.5 min-w-[140px] sm:min-w-0 text-center rounded-full text-sm font-medium transition-all duration-200
                  ${
                    role === item.key
                      ? "bg-[#0D7C66] text-white shadow-md scale-[1.02]"
                      : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#334155]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>

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
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#41B3A2] focus:ring-4 focus:ring-[#41B3A21A] outline-none text-[16px] text-[#1e293b] placeholder:text-[#94a3b8]"
                />
              </div>
            </div>

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
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] focus:border-[#41B3A2] focus:ring-4 focus:ring-[#41B3A21A] outline-none text-[16px] text-[#1e293b] placeholder:text-[#94a3b8]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] active:scale-90 cursor-pointer"
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-[#475569]">
                <input type="checkbox" className="accent-[#0D7C66]" />
                Remember me
              </label>
              <a href="#" className="text-[#64748b] hover:text-[#0D7C66]">
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0D7C66] text-white py-2.5 rounded-lg font-medium hover:bg-[#41B3A2] active:scale-[0.98] transition-all"
            >
              Sign in as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <div className="flex items-center my-5 sm:my-6 gap-3">
            <div className="flex-1 border-t border-[#e2e8f0]"></div>
            <span className="text-[#94a3b8] text-xs sm:text-sm">or sign in with</span>
            <div className="flex-1 border-t border-[#e2e8f0]"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#41B3A2] transition text-[#475569] font-medium active:scale-[0.98]">
            <span className="text-[#DB4437] text-lg">G</span>
            Google
          </button>

          <p className="text-xs sm:text-sm text-center text-[#64748b] mt-5 sm:mt-6">
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
