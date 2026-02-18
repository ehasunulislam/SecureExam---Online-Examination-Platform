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
    </div>
  );
};

export default registration;
