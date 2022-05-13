import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <main className="flex justify-center">
        <div className="signup-container w-1/3">
          <form action="" className="border-2 flex flex-col p-12">
            <h1>Signup</h1>

            <label htmlFor="signup-first-name">First Name</label>
            <input type="text" name="" id="signup-first-name" />

            <label htmlFor="signup-last-name">Last Name</label>
            <input type="text" name="" id="signup-last-name" />

            <label htmlFor="signup-email">Email</label>
            <input type="email" name="" id="signup-email" />

            <label htmlFor="signup-password">Password</label>
            <input type="password" name="" id="signup-password" />

            <label htmlFor="signup-password-again">Password Again</label>
            <input type="password" name="" id="signup-password-again" />

            <button>Signup</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
