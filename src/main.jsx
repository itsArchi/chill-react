import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/error";
import Home from "./Pages/home";
import MyListPage from "./Pages/mylist";
import SeriesPage from "./Pages/series";
import FilmPage from "./Pages/film";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/mylist",
    element: <MyListPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/film",
    element: <FilmPage />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
