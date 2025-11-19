import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/AdminLogin";
import Layout from "../Compnents/globalComponents/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Header + Footer wrapper Applies all child Routes
    children: [
      { path: "/", element: <Login /> },
    ],
  },
]);

export default Router;
