import React from "react";
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./core/public/Home";
import { Login } from "./core/public/Login";
import { AuthProvider } from "./core/context/AuthContext";

import { Register } from "./core/public/Register";
import UserDashboard from "./core/private/UserDashboard";
import TopBar from "./core/global/Navbar";

function App() {
  const privateRoutes = [];
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {path:"/dashboard",element:<UserDashboard/>},
  ];

  //Todo: logic login
  const isAuthenticated = false;

  const routes = isAuthenticated ? privateRoutes : publicRoutes;

  return (
    <>
      <AuthProvider>
        <TopBar/>
        <RouterProvider router={createBrowserRouter(routes)} />
      </AuthProvider>
    </>
  );
}

export default App;
