import React from "react";
import Logo from "../../assets/logo_light.svg";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <img src={Logo} className="max-sm:hidden"/>
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14">
        <div>Sign in to your account</div>
        <div>Username</div>
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" />
        </label>
        <div>Password</div>
        <label class="input input-bordered flex items-center gap-2">
          <input type="password" />
        </label>
        <div className="flex items-center justify-between">
          <label class="label cursor-pointer gap-2">
            <input type="checkbox" checked="checked" class="checkbox" />
            Remember me
          </label>

          <div>Forgot Password?</div>
        </div>

        <button className="btn"> Login</button>
        <div className="my-0 mx-auto">
          New User? <a className="btn btn-link">Register</a>
        </div>
      </div>
    </div>
  );
};
