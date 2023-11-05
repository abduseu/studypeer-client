import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <h2>Page Not Found!!!</h2>,
    children: [
      {
        path: '/',
        element: <h1>Hello from Home Page</h1>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);