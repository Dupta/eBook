import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side - Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Hexagon size={150} />
        {/* <span className="text-xl font-bold uppercase tracking-light text-primary-500">
          Read. Learn. Grow.
        </span> */}
      </Link>

      {/* Right Side - Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="h-10 rounded-md border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 
          transition-all hover:border-orange-600 hover:bg-orange-50 active:border-orange-700 active:bg-orange-100"
        >
          Sign in
        </button>
        <button
          className="h-10 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white 
          transition-all hover:bg-orange-600 active:bg-orange-700"
        >
          Sign up
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Hexagon = ({ size = 200 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={(size * 100) / 270}
      viewBox="0 0 270 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="eBook Logo"
    >
      {/* Stylized "e" */}
      <g transform="translate(10,20)">
        <path
          d="M0,25 C0,10 10,0 25,0 L60,0 C70,0 75,5 75,15 L75,25 C75,35 70,40 60,40 L25,40 C15,40 10,35 10,30 L10,27 L55,27"
          fill="none"
          stroke="#F97316"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="25"
          y1="12"
          x2="55"
          y2="12"
          stroke="#F97316"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="18"
          x2="45"
          y2="18"
          stroke="#F97316"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Text "Book" */}
      <text
        x="95"
        y="55"
        fontFamily="Poppins, Arial, sans-serif"
        fontWeight="600"
        fontSize="48"
        fill="#444"
      >
        Book
      </text>
    </svg>
  );
};
