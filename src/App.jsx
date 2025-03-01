import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./core/public/Home";
import { Login } from "./core/public/Login";
import { AuthProvider } from "./core/context/AuthContext";
import { Register } from "./core/public/Register";

import TopBar from "./core/global/Navbar";
import SingleRecipe from "./core/public/SingleRecipe";
import { AllRecipe } from "./core/public/AllRecipe";

function App() {
  const privateRoutes = [];
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {path: "/allRecipe/:cuisine", element: <AllRecipe />},
    {path: "/allRecipe/", element: <AllRecipe />},
    
    { path: "/recipe/:recipeId", element: <SingleRecipe /> },
  ];

  const isAuthenticated = false;
  const routes = isAuthenticated ? privateRoutes.concat(publicRoutes) : publicRoutes;

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <TopBar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
