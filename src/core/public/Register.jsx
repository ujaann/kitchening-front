import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-peach">
      <div>
        <img src={Logo} className="max-sm:hidden"/>
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14 sm:m-4 bg-papayaWhip">
        <div className="text-lg font-semibold">Register</div>
        <div>
          Username
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" />
          </label>
        </div>
        <div>
          Password
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>
        <div>
          Confirm Password
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>
        <div>
          Email
          <label className="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>
        <div>
          <Link to="/login" className="btn btn-link">« Back to Login</Link >
        </div>
        <button className="btn bg-caribeanCurrent text-white">Register</button>
      </div>
    </div>
  );
};
