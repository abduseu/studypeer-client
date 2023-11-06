import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateAssignment from "./pages/CreateAssignment";
import Private from "./components/Private";
import UpdateAssignment from "./pages/UpdateAssignment";
import ViewAssignment from "./pages/ViewAssignment";
import TakeAssignment from "./pages/TakeAssignment";
import MyAssignment from "./pages/MyAssignment";
import SubmittedAssignment from "./pages/SubmittedAssignment";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
      },
      {
        path: '/all',
        element: <Homepage></Homepage>,
      },
      {
        path: '/create',
        element: <Private><CreateAssignment></CreateAssignment></Private>,
      },
      {
        path: '/update',
        element: <Private><UpdateAssignment></UpdateAssignment></Private>,
      },
      {
        path: '/view',
        element: <Private><ViewAssignment></ViewAssignment></Private>,
      },
      {
        path: '/take',
        element: <Private><TakeAssignment></TakeAssignment></Private>,
      },
      {
        path: '/my',
        element: <Private><MyAssignment></MyAssignment></Private>,
      },
      {
        path: '/submitted',
        element: <Private><SubmittedAssignment></SubmittedAssignment></Private>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);