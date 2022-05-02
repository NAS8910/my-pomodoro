import React from "react";

const Navbar = () => {
  return (
    <nav className="Navbar border-4 border-serene-red flex flex-row justify-between">
      <div className="left-navbar flex flex-row items-center">
        <div className="brand-logo">
          <img className="h-24" src="/assets/logo/serene-logo.png" alt="" />
        </div>
        <div className="brand-name text-serene-red font-bold text-3xl">
          serene
        </div>
      </div>
      <div className="right-navbar flex flex-row items-center justify-between">
        <p className="font-bold text-xl">tasks</p>
        <button className="bg-serene-red text-white px-3 py-1 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
