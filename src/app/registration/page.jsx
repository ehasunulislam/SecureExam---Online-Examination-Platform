import { GraduationCap, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
      {/* Decorative Background Icons */}
      <div className="fixed top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <Shield className="w-70 h-70 text-[#0D7C66] absolute top-10 right-10 rotate-12" />
      </div>
      <div className="fixed bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <GraduationCap className="w-70 h-70 text-[#41B3A2] absolute bottom-10 left-10 -rotate-12" />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D7C66] flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#0D7C66]">
              SecureExam
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">Join SecureExam today</p>
        </div>

        {/* Role selection */}
        <div className="flex justify-center gap-2 mb-6">
          <span className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
            Admin
          </span>
          <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#0D7C66] text-white">
            Instructor
          </span>
          <span className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
            Student
          </span>
        </div>

        {/* registration form */}
        <form>
          {/* Full Name */}
          <div className="relative mb-5">
            <input
              required
              type="text"
              placeholder="Full name"
              className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700"
              readOnly
            />
          </div>

          {/* Email */}
          <div className="relative mb-5">
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700"
              readOnly
            />
          </div>
          {/* Password */}
          <div className="relative mb-2">
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700"
              readOnly
            />
          </div>

          {/* Password Strength Indicator */}
          <div className="mb-4">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-[#41B3A2] rounded-full"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Medium strength</p>
          </div>
          {/* Confirm Password */}
          <div className="relative mb-5">
            <input
              required
              type="password"
              placeholder="Confirm password"
              className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700"
              readOnly
            />
          </div>
          {/* Phone (Optional) */}
          <div className="relative mb-5">
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700"
              readOnly
            />
          </div>
          {/* Terms Checkbox */}
          <div className="flex items-start space-x-2 mb-6">
            <input
              type="checkbox"
              id="terms"
              checked
              readOnly
              className="w-4 h-4 mt-1 rounded border-gray-300 text-[#0D7C66]"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link
                href="#"
                className="text-[#0D7C66] hover:text-[#41B3A2] transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="text-[#0D7C66] hover:text-[#41B3A2] transition-colors"
              >
                Privacy Policy
              </Link>
            </label>
          </div>
          {/* Register Button */}
          <button
            type="button"
            className="w-full py-3 rounded-xl text-white font-semibold text-sm bg-[#0D7C66] cursor-default"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-xs text-gray-400">Or sign up with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 cursor-default mb-6"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0D7C66] font-medium hover:text-[#41B3A2] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default registration;
