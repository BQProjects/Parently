import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/adminAuth/AdminLogin";
import Layout from "../Compnents/globalComponents/Layout";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import SidebarLayout from "../Compnents/globalComponents/Siderbar";
import ContentManagement from "../pages/adminVideos/ContentManagement";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <AdminLogin /> }],
  },
  {
    path: "/admin",
    element: <SidebarLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "content-management", element: <ContentManagement /> },
    ],
  },
]);

export default Router;
