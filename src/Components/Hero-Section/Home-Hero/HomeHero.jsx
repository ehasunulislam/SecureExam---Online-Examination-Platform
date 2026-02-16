import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HomeHero = () => {
  return (
    <div>
      {/* Left-side */}
      <section className="left-side">
        <div className="checkMark-section flex items-center gap-2 px-4 py-2 gradient-badge w-14">
          <IoIosCheckmarkCircle size={20} />
          <span>Trusted by 500+ Institutions Worldwide</span>
        </div>
      </section>

      {/* Right-side */}
      <section className="right-side"></section>
    </div>
  );
};

export default HomeHero;
