import { GraduationCap, Shield } from "lucide-react";
import React from "react";

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
      </div>
    </div>
  );
};

export default registration;
