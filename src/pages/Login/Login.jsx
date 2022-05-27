import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <main className="flex justify-center mt-32">
        <div className="signup-container w-1/5">
          <form
            action=""
            className="border-2 border-serene-red rounded-2xl flex flex-col gap-4 p-6"
          >
            <h1 className="font-bold text-xl text-serene-red">Login</h1>

            <label
              className="text-left font-bold text-xs text-serene-black"
              htmlFor="signup-email"
            >
              Email
            </label>
            <input
              className="py-2 px-4 rounded-2xl text-sm font-semibold placeholder:text-gray-500 placeholder:text-sm placeholder:font-normal border-2  border-serene-red"
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
              className="py-2 px-4 rounded-2xl text-sm font-semibold placeholder:text-gray-500 placeholder:text-xl placeholder:font-normal border-2  border-serene-red"
              placeholder="·········"
              type="password"
              name=""
              id="signup-password"
            />

            <button className="bg-serene-red text-serene-white py-2 px-4 rounded-2xl rounded-bl-none">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
