import React from "react";
import Image from "next/image";
import { IoShieldCheckmark, IoStatsChart } from "react-icons/io5";
import { FaUsers, FaLightbulb } from "react-icons/fa";
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
      {/* mission section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="/images/heroimg.jpg"
              alt="Mission Image"
              width={400}
              height={400}
              className=""
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D7C66]">
              Our Mission
            </h2>

            <p className="text-gray-600 text-sm sm:text-base">
              Our mission is to build a trusted digital examination environment
              where institutions can conduct exams securely without compromising
              fairness.
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              We focus on automation, smart monitoring, and instant evaluation
              systems to improve academic efficiency.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-12 py-16 bg-[#BDE8CA]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D7C66]">
            Why Choose SecureExam?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#41B3A2]/20 flex flex-col items-center gap-4">
              <IoShieldCheckmark size={40} className="text-[#0D7C66]" />
              <h3 className="text-lg font-semibold text-[#0D7C66]">
                Secure Proctoring
              </h3>
              <p className="text-gray-600 mt-1 text-sm text-center">
                AI powered proctoring logs ensure fairness and prevent cheating.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-[#41B3A2]/20 flex flex-col items-center gap-4">
              <IoStatsChart size={40} className="text-[#0D7C66]" />
              <h3 className="text-lg font-semibold text-[#0D7C66]">
                Instant Evaluation
              </h3>
              <p className="text-gray-600 mt-1 text-sm text-center">
                Automatic grading system reduces manual workload.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-[#41B3A2]/20 flex flex-col items-center gap-4">
              <FaUsers size={40} className="text-[#0D7C66]" />
              <h3 className="text-lg font-semibold text-[#0D7C66]">
                Scalable Platform
              </h3>
              <p className="text-gray-600 mt-1 text-sm text-center">
                Handle thousands of students simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSction;
