import React from "react";
import Logo from "../../assets/logo_light.svg";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <img src={Logo} className="max-sm:hidden"/>
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg  mx-14 mt-4 my-14 sm:m-4">
        <div>Register</div>
        <div>
          Username
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" />
          </label>
        </div>
        <div>
          Password
          <label class="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>
        <div>
          Confirm Password
          <label class="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>
        <div>
          Email
          <label class="input input-bordered flex items-center gap-2">
            <input type="password" />
          </label>
        </div>

        <div>
          <a className="btn btn-link">« Back to Login</a>
        </div>
        <button className="btn">Register</button>
      </div>
    </div>
  );
};
