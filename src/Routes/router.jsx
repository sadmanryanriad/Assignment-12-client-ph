import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/home/Home";
import Registration from "../Pages/registration/Registration";
import Login from "../Pages/login/Login";
import ContactUs from "../Pages/contact/ContactUs";
import Dashboard from "../Pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import EmployeeList from "../Pages/dashboard/employee-list/EmployeeList";
import Progress from "../Pages/dashboard/progress/Progress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "employee-list",
        element: <EmployeeList></EmployeeList>
      },
      {
        path: "details/:slug"
      },
      {
        path: "progress",
        element: <Progress></Progress>
      }
    ]
  }
]);

export default router;
