import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import Login from "../pages/register/Login";
import Register from "../pages/register/Register";
import AddClass from "../pages/dashboard/AddClass";
import AdminClass from "../pages/admin/AdminClass";
import AdminUser from "../pages/admin/AdminUser";
import AllClass from "../pages/allClass/AllClass";
import SelectedClass from "../pages/selectedClass/SelectedClass";
import Error from "../pages/error/Error";
import PrivateRoute from "./PrivateRoute";
import Instructor from "../pages/instructors/Instructors";

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
        element: (
          <PrivateRoute>
            <AddClass></AddClass>
          </PrivateRoute>
        ),
      },
      {
        path: "adminClass",
        element: (
          <PrivateRoute>
            <AdminClass></AdminClass>
          </PrivateRoute>
        ),
      },
      {
        path: "adminUser",
        element: (
          <PrivateRoute>
            <AdminUser></AdminUser>
          </PrivateRoute>
        ),
      },
      {
        path: "classes",
        element: <AllClass></AllClass>,
      },
      {
        path: "instructors",
        element:<Instructor></Instructor>,
      },
      {
        path: "selectedClass",
        element: (
          <PrivateRoute>
            <SelectedClass></SelectedClass>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
