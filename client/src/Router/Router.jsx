import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Main_Pages/Login";
import Forgotpassword from "../Main_Pages/Forgotpassword";
import Layout from "../Main_Layouts/Layout";
import NewPassword from "../Main_Pages/NewPassword";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Header + Footer wrapper Applies all child Routes
        children: [
            { path:"/", element: <Login /> },
            { path:"/forgot-password", element: <Forgotpassword /> },
            { path:"/new-password", element: <NewPassword /> }
        ]
    }
]);

export default Router;
