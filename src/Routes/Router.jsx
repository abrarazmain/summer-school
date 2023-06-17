import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import AddClass from "../pages/dashboard/AddClass";
import AdminClass from "../pages/admin/AdminClass";
import AdminUser from "../pages/admin/AdminUser";
import AllClass from "../pages/allClass/AllClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "adminClass",
        element: <AdminClass></AdminClass>,
      },
      {
        path: "adminUser",
        element: <AdminUser></AdminUser>,
      },
      {
        path: "classes",
        element: <AllClass></AllClass>,
      },
    ],
  },
]);

export default router;
