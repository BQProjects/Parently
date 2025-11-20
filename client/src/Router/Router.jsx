import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/adminAuth/AdminLogin";
import Layout from "../Compnents/globalComponents/Layout";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import SidebarLayout from "../Compnents/globalComponents/Siderbar";
import ContentManagement from "../pages/adminContentManagement/ContentManagement";
import TotalUsersDashboard from "../pages/adminDashboard/TotalUsersDashboard";
import ChurnDashboard from "../pages/adminDashboard/ChurnDashboard";
import Revenue_Dashboard from "../pages/adminDashboard/Revenue_Dashboard";
import TotalWatchDashboard from "../pages/adminDashboard/TotalWatchDashboard";

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
      {
        path: "dashboard",
        element: <AdminDashboard />,
        children: [
          { path: "total_users", element: <TotalUsersDashboard /> },
          { path: "churn_rate", element: <ChurnDashboard /> },
          { path: "revenue", element: <Revenue_Dashboard /> },
          { path: "total_watch", element: <TotalWatchDashboard /> },
        ]
      },
      { path: "content-management", element: <ContentManagement /> },
    ],
  },
]);

export default Router;
