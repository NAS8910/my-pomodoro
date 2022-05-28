import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />

      <main className="main-landing grid grid-cols-2">
        <div className="left-landing-container flex justify-center">
          <div className="left-cta-container w-3/4 mt-32 flex flex-col items-start">
            <h1 className="text-6xl font-bold text-serene-purple-800 text-left">
              Stay Focused
            </h1>
            <h1 className="text-6xl font-bold text-serene-red text-left">
              Avoid Distractions
            </h1>
            <h1 className="text-6xl font-bold text-serene-yellow text-left">
              Track Time.
            </h1>
            <Link to="/tasks">
              <button className="bg-serene-red text-white font-bold px-12 py-4 rounded-3xl rounded-br-none mt-16 ml-12">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="right-landing-container flex flex-row items-center justify-center">
          <img
            src="/assets/vector/habit-vector.svg"
            className="h-[36rem]"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
