import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, Outlet, NavLink } from "react-router-dom";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import Bell_Icon from "../../assets/Images/Bell_Icon.png";
import Dashboard_Icon_NotClicked from "../../assets/Images/Dashboard_Icon_NotClicked.png";
import Dashboard_Icon_Clicked from "../../assets/Images/Dashboard_Icon_Clicked.png";

const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-1 overflow-hidden">
            {/*Side Bar Layout */}
            <div className="w-60 border-r-2 border-gray-300 p-4 space-y-4 flex flex-col">
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded-md ${isActive ? "bg-[#cfedac] text-[#7B9D51]" : "text-black bg-gray-200"}`}
                >
                    {({ isActive }) => (
                    <>
                        <img
                            src={ isActive ? Dashboard_Icon_Clicked: Dashboard_Icon_NotClicked}
                            className="h-5"
                        />
                        <p> DashBoard </p>
                    </>
                    )}
                </NavLink>
                <Link to="/admin/content-management">Content Management</Link>
                <Link to="/dashboard">Subscription Management</Link>
                <Link to="/dashboard">Push Notifications Management</Link>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Secondary Navbar */}
                <div className="h-14 px-6 flex justify-end items-center space-x-6">
                <AiOutlineBell size={24} className="cursor-pointer" />
                <AiOutlineUser size={26} className="cursor-pointer" />
                </div>

                <main className="flex-1 overflow-y-auto py-2 px-4">
                    <Outlet />
                </main>
            </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
