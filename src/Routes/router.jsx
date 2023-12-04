import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/home/Home";
import Registration from "../Pages/registration/Registration";
import Login from "../Pages/login/Login";
import ContactUs from "../Pages/contact/ContactUs";
import Dashboard from "../Pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Progress from "../Pages/dashboard/progress/Progress";
import VerifyDesignation from "./VerifyDesignation";
import PaymentHistory from "../Pages/dashboard/paymentHistory/PaymentHistory";
import WorkSheet from "../Pages/dashboard/work-sheet/WorkSheet";
import EmployeeDetails from "../Pages/dashboard/hr/EmployeeDetails";
import ErrorPage from "../shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <h2 className="p-10 text-2xl font-semibold">Welcome to Back</h2>
      },
      {
        path: "employee-list",
        element: <VerifyDesignation></VerifyDesignation>
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "work-sheet",
        element: <WorkSheet></WorkSheet>
      },
      {
        path: "details/:id",
        element: <EmployeeDetails></EmployeeDetails>
      },
      {
        path: "progress",
        element: <Progress></Progress>
      }
    ]
  }
]);

export default router;
