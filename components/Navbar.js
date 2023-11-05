import React from "react";
import Image from "next/image";
import mypic from "../public/icon.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-10  ml-12">
        <Image src={mypic} alt="Picture of the author" href="/home" />
        <a className="font-semibold text-xl tracking-tight ml-4" href="/home">
          𝙵𝚒𝚝 𝙵𝚘𝚛 𝙻𝚒𝚏𝚎
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div
          className="text-lg lg:flex-grow flex justify-evenly items-center content-center flex-row"
          // style="display: flex;justify-content: space-evenly;align-items: center;align-content: center;flex-direction: row;"
        >
          <a
            href="/home"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:shadow-lg outline-none focus:outline-none"
          >
            Home
          </a>
          <a
            href="/schedule"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:shadow-lg outline-none focus:outline-none"
          >
            Schedule
          </a>
          <a
            href="/membership"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:shadow-lg outline-none focus:outline-none"
          >
            Membership
          </a>
          <a
            href="/shopping"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:shadow-lg outline-none focus:outline-none"
          >
            Shop HERE
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:shadow-lg outline-none focus:outline-none"
          >
            Contact US
          </a>
        </div>
        <div>
          <a
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-4 lg:mt-0"
          >
            Sign In
          </a>
        </div>
        <div>
          <a
            href="/register"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-12"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
