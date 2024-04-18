import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import HomePage from "../pages/HomePage";
import Hotels from "../pages/Hotels";
import PropertyPage from "../pages/PropertyPage";
import ProtectedRoute from "./ProtectedRoute";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<ErrorPage></ErrorPage>,
      
      children:[
        {
          path:'/',
          loader:()=>fetch('/properties.json'),
          element:<HomePage></HomePage>
        }
        ,{
            path:'/login',
            element:<LoginPage></LoginPage>,
        },
        {
            path:'/register',
            element:<RegisterPage></RegisterPage>
        },
        {
            path:'/profile',
            element:<ProfilePage></ProfilePage>
        },
        {
            path:'/hotels',
            loader:()=>fetch('/properties.json'),
            element:<ProtectedRoute><Hotels></Hotels></ProtectedRoute>
        },
        {
            path:'/property/:id',
            loader:()=>fetch('/properties.json'),
            element:<ProtectedRoute><PropertyPage></PropertyPage></ProtectedRoute>
        },
        {
            path:'/update',
            element:<UpdateProfile></UpdateProfile>
        },
      ]
    },
  ]);

  