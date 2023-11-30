import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/home/Home";
import Registration from "../Pages/registration/Registration";
import Login from "../Pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path:'/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

export default router;