"use client";

import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoShield } from "react-icons/io5";

export default function Navbar() {
  const nav = (
    <>
      <li className="text-[1rem]">
        <Link href="/">Home</Link>
      </li>

      <li className="text-[1rem]">
        <Link href="/features">Features</Link>
      </li>

      <li className="text-[1rem]">
        <Link href="/how-it-works">How It Works</Link>
      </li>

      <li className="text-[1rem]">
        <Link href="/pricing">Pricing</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 lg:px-8 fixed top-0 left-0 right-0 z-50">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiBars3BottomLeft size={25} />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold ml-2 flex items-center gap-2 ">
          <span className="text-primary gradient-badge p-2 rounded-lg"><IoShield /></span> 
          <span className="text-primary text-[1.5rem]">SecureExam</span>
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{nav}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-3">
        <Link href="/login" className="btn btn-ghost hidden lg:inline-flex">
          Login
        </Link>

        <Link href="/register" className="btn btn-primary text-white">
          Get Started
        </Link>
      </div>
    </div>
  );
}
