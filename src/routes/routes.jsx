import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import Properties from "../components/Properties";
import HomePage from "../pages/HomePage";
import Hotels from "../pages/Hotels";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<ErrorPage></ErrorPage>,

      children:[
        {
          path:'/',
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
            element:<Hotels></Hotels>
        },
        {
            path:'/update',
            element:<UpdateProfile></UpdateProfile>
        },
      ]
    },
  ]);

  