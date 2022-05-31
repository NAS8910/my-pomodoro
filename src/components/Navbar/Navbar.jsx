import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("USER_TOKEN");
    localStorage.removeItem("USER_DATA");

    setAuth({
      isLoggedIn: localStorage.getItem("USER_TOKEN") ? true : false,
      token: localStorage.getItem("USER_TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_DATA")),
    });

    setShowProfileDropdown(false);
    navigate("/login");
  };

  return (
    <nav className="Navbar border-0 border-serene-yellow flex flex-row justify-between p-2">
      <div className="left-navbar flex flex-row items-center ml-12">
        <div className="brand-logo">
          <img className="h-20" src="/assets/logo/serene-logo.png" alt="" />
        </div>
        <Link to="/">
          <div className="brand-name text-serene-purple-800 font-bold text-3xl">
            serene
          </div>
        </Link>
      </div>
      <div className="right-navbar flex flex-row items-center justify-between mr-12">
        <button
          onClick={() => {
            auth.isLoggedIn ? navigate("/tasks") : navigate("/login");
          }}
          className="font-bold text-lg ml-8 text-serene-purple-800"
        >
          tasks
        </button>

        {auth.isLoggedIn ? (
          <div className="ml-8 mr-8 flex flex-col items-start text-serene-purple-800 relative">
            <div
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="cursor-pointer"
            >
              <p className="font-bold text-left">Hi, {auth.user.firstName}</p>
              <div className="flex items-center text-xs font-bold">
                <p>Account</p>
                <p>
                  <FaCaretDown />
                </p>
              </div>
            </div>
            {showProfileDropdown ? (
              <div className="border-2 border-serene-red absolute top-12 left-0 px-2 py-2 rounded-lg bg-serene-white">
                <button
                  onClick={logoutHandler}
                  className="bg-serene-red text-serene-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-serene-red text-white font-medium px-6 py-2 rounded-2xl rounded-bl-none ml-8 mr-8">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
