import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/error";
import TestPage from "./Pages/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Anjay Bisa Gitu Bang</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/main",
    element: <TestPage />,
  },  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
