import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./core/public/Home";
import { Login } from "./core/public/Login";
import { AuthContext, AuthProvider } from "./core/context/AuthContext";
import { Register } from "./core/public/Register";
import TopBar from "./core/global/Navbar";
import SingleRecipe from "./core/public/SingleRecipe";
import { AllRecipe } from "./core/public/AllRecipe";
import NotFound from "./core/public/NotFound";
import { Favourites } from "./core/private/Favourites";

function App() {
  const privateRoutes = [
    { path: "/favourites", element: <Favourites /> },
    
  ];
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/allRecipe/:cuisine", element: <AllRecipe /> },
    { path: "/allRecipe/", element: <AllRecipe /> },
    { path: "/recipe/:recipeId", element: <SingleRecipe /> },
  ];
  const { authInfo } = useContext(AuthContext);
  const isAuthenticated = authInfo.token?true:false;
  const routes = isAuthenticated ? privateRoutes.concat(publicRoutes) : publicRoutes;
  console.log(routes);
  
  return (
    <>

        <BrowserRouter>
          <TopBar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<NotFound />} /> {/* Add this line */}
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
