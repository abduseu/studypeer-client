import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
import AllAssignment from "./pages/AllAssignment";
import ManageAssignment from "./pages/ManageAssignment";
import GiveMark from "./pages/GiveMark";



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
        path: '/manage',
        element: <Private><ManageAssignment></ManageAssignment></Private>,
        loader: ()=>fetch(`http://localhost:5000/assignments`)
      },
      {
        path: '/all',
        element: <AllAssignment></AllAssignment>,
        loader: ()=>fetch(`http://localhost:5000/assignments`)
      },
      {
        path: '/create',
        element: <Private><CreateAssignment></CreateAssignment></Private>,
      },
      {
        path: '/update/:id',
        element: <Private><UpdateAssignment></UpdateAssignment></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: '/view/:id',
        element: <Private><ViewAssignment></ViewAssignment></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: '/take/:id',
        element: <Private><TakeAssignment></TakeAssignment></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: '/my',
        element: <Private><MyAssignment></MyAssignment></Private>,
      },
      {
        path: '/submitted',
        element: <Private><SubmittedAssignment></SubmittedAssignment></Private>,
        loader: ()=>fetch(`http://localhost:5000/submitted`)
      },
      {
        path: '/givemark/:id',
        element: <Private><GiveMark></GiveMark></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/submitted/${params.id}`)
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


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);