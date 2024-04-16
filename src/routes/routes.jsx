import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/login',
            element:<LoginPage></LoginPage>,
        },
        {
            path:'/register',
            element:<RegisterPage></RegisterPage>
        },
      ]
    },
  ]);

  