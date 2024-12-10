import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home";
import Error from "./../pages/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "./../pages/Auth/Login";
import SignUp from "./../pages/Auth/SignUp";
import { ROUTES } from "../shared/constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTES.AUTH,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;