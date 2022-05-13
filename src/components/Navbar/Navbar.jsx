import React from "react";

const Navbar = () => {
  return (
    <nav className="Navbar border-0 border-serene-yellow flex flex-row justify-between p-2">
      <div className="left-navbar flex flex-row items-center ml-12">
        <div className="brand-logo">
          <img className="h-20" src="/assets/logo/serene-logo.png" alt="" />
        </div>
        <div className="brand-name text-serene-purple-800 font-bold text-3xl">
          serene
        </div>
      </div>
      <div className="right-navbar flex flex-row items-center justify-between mr-12">
        <a href="" className="font-bold text-lg ml-8">
          tasks
        </a>
        <button className="bg-serene-red text-white font-medium px-6 py-2 rounded-2xl rounded-bl-none ml-8">
          Login
        </button>
        <i className="fa fa-solid fa-moon fa-lg ml-8"></i>
      </div>
    </nav>
  );
};

export default Navbar;
