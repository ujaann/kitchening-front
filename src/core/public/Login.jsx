import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    // Replace this with your actual authentication logic
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      login(data.token, username, data.userId);
      navigate("/");
    } else {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach">
      <ToastContainer/>
      <div>
        <img src={Logo} className="max-sm:hidden" />
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14 bg-papayaWhip">
        <div className="text-lg font-semibold">Sign in to your account</div>
        <div>Username</div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <div>Password</div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn bg-caribeanCurrent text-white" onClick={handleLogin}>
          Login
        </button>
        <div className="my-0 mx-auto">
          New User? <Link to="/register" className="btn btn-link">Register</Link>
        </div>
      </div>
    </div>
  );
};
