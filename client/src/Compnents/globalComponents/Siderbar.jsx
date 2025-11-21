import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Outlet, NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import Dashboard_Icon_NotClicked from "../../assets/Images/Dashboard_Icon_NotClicked.png";
import Dashboard_Icon_Clicked from "../../assets/Images/Dashboard_Icon_Clicked.png";
import Content_Management_NC from "../../assets/Images/Content_Management_NC_Logo.png";
import Content_Management_C from "../../assets/Images/Content_Management_C_Logo.png";
import Parently_Header_Logo from "../../assets/Images/parently_header_logo.png";
import User_Export_NC from "../../assets/Images/User_Export_NC.png";
import User_Export_C from "../../assets/Images/User_Export_C.png";
import Subscription_Management_C from "../../assets/Images/Subscription_Management_C.png";
import Subscription_Management_NC from "../../assets/Images/Subscription_Management_NC.png";
import User_Management_NC from "../../assets/Images/User_Management_NC.png";
import User_Management_C from "../../assets/Images/User_Management_C.png";
import Push_Notificaton_NC from "../../assets/Images/Push_Notificaton_NC.png";
import Push_Notificaton_C from "../../assets/Images/Push_Notification_C.png";
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import Videos_NC from "../../assets/Images/Videos_Icon_NC.png";
import Videos_C from "../../assets/Images/Videos_C.png";
import Add_New_Video_C from "../../assets/Images/Add_New_Video_C.png";
import Add_New_Video_NC from "../../assets/Images/Add_New_Video_NC.png";
import View_All_C from "../../assets/Images/View_All_C.png";
import View_All_NC from "../../assets/Images/View_All_NC.png";
import Draft_Videos_NC from "../../assets/Images/Draft_Videos_NC.png";
import Draft_Videos_C from "../../assets/Images/Draft_Videos_C.png";
import E_Books_C from "../../assets/Images/E_Books_C.png";
import E_Books_NC from "../../assets/Images/E_Books_NC.png";
import Add_New_Book_C from "../../assets/Images/Add_New_Book_C.png";
import Add_New_Book_NC from "../../assets/Images/Add_New_Book_NC.png";
import E_Book_Draft_C from "../../assets/Images/E_Book_Draft_C.png";
import E_Book_Draft_NC from "../../assets/Images/E_Book_Draft_NC.png";
import Field_Management_NC from "../../assets/Images/Field_Management_NC.png";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isChildren = pathname.startsWith("/admin/dashboard") && pathname !== "/admin/dashboard";

  const [isContentOpen, setIsContentOpen] = useState(false);

  // push notifications group open state (same pattern as content)
  const [isPushOpen, setIsPushOpen] = useState(false);

  const [openMenus, setOpenMenus] = useState({
    videos: false,
    ebooks: false,
    notification: false,
  });

  // Auto-open menus based on current route
  useEffect(() => {
    setOpenMenus({
      videos: pathname.startsWith("/admin/content-management/videos"),
      ebooks: pathname.startsWith("/admin/content-management/e-books"),
      notification: pathname.startsWith("/admin/push-notification-management"),
    });
    // auto-open parent push group when on push-notification routes
    setIsPushOpen(pathname.startsWith("/admin/push-notification-management"));
    // auto-open content parent when on content routes
    setIsContentOpen(pathname.startsWith("/admin/content-management"));
  }, [pathname]);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const SubMenuItem = ({ to, label, imgC, imgNC }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 px-4 py-2 rounded-md mb-2 shadow-sm transition-all text-[14px]
        ${isActive ? "bg-[#D8E8C3] text-[#4F7F29]" : "bg-white text-gray-700"}`
      }
    >
      {({ isActive }) => (
        <>
          <img src={isActive ? imgC : imgNC} className="" />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* TOP HEADER */}
        <div className="bg-[#FFFBF4] h-14 border-2 border-gray-300 flex justify-between items-center px-6">
          <div className="flex items-center space-x-3">
            <img src={Parently_Header_Logo} className="h-8" />
            <h1 className="text-base font-Inter">Apparently CRM</h1>
            {isChildren && (
              <button className="ml-6" onClick={() => navigate("/admin/dashboard")}>
                <img src={Left_Arrow} className="h-7" />
              </button>
            )}
          </div>
          <div className="flex items-center space-x-6">
            <AiOutlineBell size={24} className="cursor-pointer" />
            <AiOutlineUser size={26} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* SIDEBAR */}
          <div className="w-72 border-r-2 border-gray-300 p-4 space-y-2 overflow-y-auto bg-white">

            {/* DASHBOARD */}
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md text-[15px] transition-all ${isActive
                  ? "bg-[#cfedac] text-[#7B9D51]"
                  : "bg-gray-200 text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? Dashboard_Icon_Clicked : Dashboard_Icon_NotClicked}
                    className="h-5"
                  />
                  <p>Dashboard</p>
                </>
              )}
            </NavLink>

            {/* CONTENT MANAGEMENT */}
            <div className={`p-2 rounded-md mt-2 ${isContentOpen ? "bg-[#cfedac] text-[#7B9D51]" :"bg-gray-200 text-black"}`}>

              {/* Title */}
              <div
                className="flex items-center gap-3 cursor-pointer px-2"
                onClick={() => setIsContentOpen(!isContentOpen)}
              >
                <Link 
                  to="/admin/content-management"
                  className={`flex items-center space-x-2 py-0.5 ${isContentOpen? "text-[#7B9D51]": "text-black"}`}
                >
                  <img
                    src={isContentOpen ? Content_Management_C : Content_Management_NC}
                    alt="content"
                    className="h-4"
                  />
                  <h1 className="">Content Management</h1>
                </Link>
              </div>

              {/* SHOW submenu only if open */}
              {isContentOpen && (
                <div className="mt-2">

                  {/* VIDEOS */}
                  <button
                    onClick={() => {
                      toggleMenu("videos");
                      navigate("/admin/content-management/videos");
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-md mb-2 shadow-sm transition-all
                      ${openMenus.videos ? "bg-white text-[#4F7F29]" : "bg-white text-gray-700"}
                    `}
                  >
                    <img src={openMenus.videos ? Videos_C : Videos_NC} className="h-5 mr-3" />
                    <span>Videos</span>
                  </button>

                  {/* VIDEOS SUBMENU */}
                  {openMenus.videos && (
                    <div className="pr-4">
                      <SubMenuItem
                        to="/admin/content-management/videos/add-new-video"
                        label="Add New Video"
                        imgC={Add_New_Video_C}
                        imgNC={Add_New_Video_NC}
                      />

                      <SubMenuItem
                        to="/admin/content-management/videos/published-videos"
                        label="View All Published Videos"
                        imgC={View_All_C}
                        imgNC={View_All_NC}
                      />

                      <SubMenuItem
                        to="/admin/content-management/videos/draft-videos"
                        label="Video Draft"
                        imgC={Draft_Videos_C}
                        imgNC={Draft_Videos_NC}
                      />
                    </div>
                  )}

                  {/* EBOOKS */}
                  <button
                    onClick={() => {
                      toggleMenu("ebooks");
                      navigate("/admin/content-management/e-books");
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-md mb-2 shadow-sm transition-all
                      ${openMenus.ebooks ? "bg-gray-100 text-[#4F7F29] " : "bg-white text-gray-700"}
                    `}
                  >
                    <img src={openMenus.ebooks ? E_Books_C : E_Books_NC} className="h-5 mr-3" />
                    <span>eBooks</span>
                  </button>

                  {/* EBOOKS SUBMENU */}
                  {openMenus.ebooks && (
                    <div className="pr-4">
                      <SubMenuItem
                        to="/admin/content-management/e-books/add-new-e-book"
                        label="Add New eBooks"
                        imgC={Add_New_Book_C}
                        imgNC={Add_New_Book_NC}
                      />

                      <SubMenuItem
                        to="/admin/content-management/e-books/published-e-books"
                        label="View All Published eBooks"
                        imgC={View_All_C}
                        imgNC={View_All_NC}
                      />

                      <SubMenuItem
                        to="/admin/content-management/e-books/e-book-draft"
                        label="eBook Draft"
                        imgC={E_Book_Draft_C}
                        imgNC={E_Book_Draft_NC}
                      />
                    </div>
                  )}

                  {/* FIELD MANAGEMENT */}
                  <SubMenuItem
                    to="/admin/content-management/field-management"
                    label="Field Management"
                    imgC={Field_Management_NC}
                    imgNC={Field_Management_NC}
                  />

                </div>
              )}
            </div>

            {/* USER MANAGEMENT */}
            <NavLink
              to="/admin/user-management"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md text-[15px] transition-all ${isActive
                  ? "bg-[#cfedac] text-[#7B9D51]"
                  : "bg-gray-200 text-black hover:bg-gray-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img src={isActive ? User_Management_C : User_Management_NC} className="h-5" />
                  <p>User Management</p>
                </>
              )}
            </NavLink>

            {/* SUBSCRIPTION MANAGEMENT */}
            <NavLink
              to="/admin/subscription-management"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md text-[15px] transition-all ${isActive
                  ? "bg-[#cfedac] text-[#7B9D51]"
                  : "bg-gray-200 text-black hover:bg-gray-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img src={isActive ? Subscription_Management_C : Subscription_Management_NC} className="h-5" />
                  <p>Subscription Management</p>
                </>
              )}
            </NavLink>

            {/* PUSH NOTIFICATION - use same style/logic as Content Management */}
            <div className={`p-2 rounded-md mt-2 ${isPushOpen ? "bg-[#cfedac] text-[#7B9D51]" : "bg-gray-200 text-black"}`}>
              <div
                className="flex items-center gap-3 cursor-pointer px-2"
                onClick={() => {
                  setIsPushOpen(!isPushOpen);
                  navigate("/admin/push-notification-management");
                }}
              >
                <img
                  src={isPushOpen ? Push_Notificaton_C : Push_Notificaton_NC}
                  alt="push"
                  className="w-6 h-6"
                />
                <h1 className="">Push Notification Management</h1>
              </div>

              {isPushOpen && (
                <div className="mt-2">
                  <button
                    onClick={() => {
                      // keep consistent behavior: this triggers highlight and updates route
                      toggleMenu("notification");
                      navigate("/admin/push-notification-management/create-new-notification");
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-md mb-2 shadow-sm transition-all
                      ${openMenus.notification && pathname.includes("create-new-notification") ? "bg-[#D8E8C3] text-[#4F7F29]" : "bg-white text-gray-700"}
                    `}
                  >
                    <img src={Add_New_Video_NC} className="h-5 mr-3" />
                    <span>Create New Notification</span>
                  </button>

                  <button
                    onClick={() => {
                      toggleMenu("notification");
                      navigate("/admin/push-notification-management/listed-videos");
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-md mb-2 shadow-sm transition-all
                      ${openMenus.notification && pathname.includes("listed-videos") ? "bg-[#D8E8C3] text-[#4F7F29]" : "bg-white text-gray-700"}
                    `}
                  >
                    <img src={View_All_NC} className="h-5 mr-3" />
                    <span>Listed Videos</span>
                  </button>

                  <button
                    onClick={() => {
                      toggleMenu("notification");
                      navigate("/admin/push-notification-management/q-videos");
                    }}
                    className={`w-full flex items-center px-4 py-2 rounded-md mb-2 shadow-sm transition-all
                      ${openMenus.notification && pathname.includes("q-videos") ? "bg-[#D8E8C3] text-[#4F7F29]" : "bg-white text-gray-700"}
                    `}
                  >
                    <img src={Videos_NC} className="h-5 mr-3" />
                    <span>Q Videos</span>
                  </button>
                </div>
              )}
            </div>

            {/* MANAGE EXPERTS */}
            <NavLink
              to="/admin/manage-experts"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-md text-[15px] transition-all ${isActive
                  ? "bg-[#cfedac] text-[#7B9D51]"
                  : "bg-gray-200 text-black hover:bg-gray-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img src={isActive ? User_Export_C : User_Export_NC} className="h-5" />
                  <p>Manage Experts</p>
                </>
              )}
            </NavLink>
          </div>

          {/* RIGHT SIDE - MAIN CONTENT */}
          <div className="flex-1 flex flex-col overflow-hidden">
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
