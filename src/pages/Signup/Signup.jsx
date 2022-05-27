import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <main className="flex justify-center">
        <div className="signup-container w-1/5">
          <form
            action=""
            className="border-2 border-serene-red rounded-2xl flex flex-col gap-4 p-8"
          >
            <h1 className="font-bold text-xl text-serene-red">Signup</h1>

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-first-name"
            >
              First Name
            </label>
            <input
              className="text-sm font-semibold rounded-2xl py-2 px-4 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal border-2  border-serene-red"
              placeholder="John"
              type="text"
              name=""
              id="signup-first-name"
            />

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-last-name"
            >
              Last Name
            </label>
            <input
              className="text-sm font-semibold rounded-2xl py-2 px-4 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal border-2  border-serene-red"
              placeholder="Wick"
              type="text"
              name=""
              id="signup-last-name"
            />

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-email"
            >
              Email
            </label>
            <input
              className="text-sm font-semibold rounded-2xl py-2 px-4 placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal border-2  border-serene-red"
              placeholder="johnwick@gmail.com"
              type="email"
              name=""
              id="signup-email"
            />

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-password"
            >
              Password
            </label>
            <input
              className="text-sm font-semibold rounded-2xl py-2 px-4 placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal border-2  border-serene-red"
              placeholder="·········"
              type="password"
              name=""
              id="signup-password"
            />

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-password-again"
            >
              Password Again
            </label>
            <input
              className="text-sm font-semibold rounded-2xl py-2 px-4 placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal border-2  border-serene-red"
              placeholder="·········"
              type="password"
              name=""
              id="signup-password-again"
            />

            <button className="bg-serene-red rounded-2xl rounded-bl-none text-serene-white py-2 px-4">
              Signup
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
