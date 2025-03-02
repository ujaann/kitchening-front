import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const response = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (response.ok) {
      toast.success("Registration successful. Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-peach">
      <ToastContainer />
      <div>
        <img src={Logo} className="max-sm:hidden" />
      </div>
      <div className="w-2/5 flex flex-col border-2 p-8 rounded gap-2 shadow-lg mx-14 mt-4 my-14 sm:m-4 bg-papayaWhip">
        <div className="text-lg font-semibold">Register</div>
        <div>
          Username
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          Password
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          Confirm Password
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          Email
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <Link to="/login" className="btn btn-link">« Back to Login</Link>
        </div>
        <button className="btn bg-caribeanCurrent text-white" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};
