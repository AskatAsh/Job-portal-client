import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home";
import Error from "./../pages/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "./../pages/Auth/Login";
import SignUp from "./../pages/Auth/SignUp";
import { ROUTES } from "../shared/constants/routes";
import JobDetails from "../pages/JobDetails";
import ProtectedRoute from "./ProtectedRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ALLJOBS,
        element: <AllJobs />,
      },
      {
        path: ROUTES.JOBDETAILS,
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.JOBAPPLY,
        element: (
          <ProtectedRoute>
            <JobApply />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.MYAPPLICATIONS,
        element: (
          <ProtectedRoute>
            <MyApplications />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.ADDJOB,
        element: (
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.MYPOSTEDJOBS,
        element: (
          <ProtectedRoute>
            <MyPostedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.VIEWAPPLICATIONS,
        element: (
          <ProtectedRoute>
            <ViewApplications />
          </ProtectedRoute>
        ),
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
