import React from "react";

const AboutSction = () => {
  return (
    <div className=" ">
      {/* hero section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-gradient-to-br from-[#f0f9f4] via-[#e6f3ff] to-[#f3e8ff] text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0D7C66] to-[#41B3A2] bg-clip-text text-transparent">
          About SecureExam
        </h1>

        <p className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          SecureExam is a modern online examination platform designed to ensure
          security, fairness, and automation for institutions, coaching centers,
          and online educators.
        </p>
      </section>
    </div>
  );
};

export default AboutSction;
