import React from "react";
import Footer from "./Footer";
import { Link, Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import Dashboard_Icon_NotClicked from "../../assets/Images/Dashboard_Icon_NotClicked.png";
import Dashboard_Icon_Clicked from "../../assets/Images/Dashboard_Icon_Clicked.png";
import Content_Management_NC from "../../assets/Images/Content_Management_NC_Logo.png";
import Content_Management_C from "../../assets/Images/Content_Management_C_Logo.png";
import Parently_Header_Logo  from "../../assets/Images/parently_header_logo.png";
import Left_Arrow from "../../assets/Images/LeftArrow.png";

const Sidebar = () => {

  const { pathname } = useLocation();
  const isChildren = pathname === "/admin/dashboard";
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="bg-[#FFFBF4] h-14 border-2 border-gray-300 flex space-x-2 px-6 justify-between items-center">
                <div className="flex items-center space-x-3">
                        <img 
                            src={Parently_Header_Logo}
                            className="h-8"
                        />
                        <h1 className="text-base font-Inter">Apparently CRM</h1>
                        {
                          !isChildren && (
                            <button
                                className='cursor-pointer ml-6'
                                onClick={() => { navigate("/admin/dashboard") }}
                            >
                                <img src={Left_Arrow}
                                  className='h-8'
                                />
                            </button>
                          )
                        }
                </div>
                <div className="h-14 px-6 flex justify-end items-center space-x-6">
                  <AiOutlineBell size={24} className="cursor-pointer" />
                  <AiOutlineUser size={26} className="cursor-pointer" />
                </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/*Side Bar Layout */}
            <div className="w-68 border-r-2 border-gray-300 p-4 space-y-4 flex flex-col">
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
                <NavLink 
                  className={({isActive}) =>  `
                    ${isActive ? "bg-[#cfedac] text-[#7B9D51]" : "text-black bg-gray-200" } flex items-center space-x-2 px-4 py-2 rounded-md `
                  }
                  to="/admin/content-management"
                  >
                    {({isActive}) => (
                      <>
                        <img 
                          src={isActive ? Content_Management_C : Content_Management_NC }
                          className="h-5"
                        />
                        <p>Content Management</p>
                      </>
                    )}
                </NavLink>
                <Link to="/dashboard">Subscription Management</Link>
                <Link to="/dashboard">Push Notifications Management</Link>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Secondary Navbar */}
                

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
