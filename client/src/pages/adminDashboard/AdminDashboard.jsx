import React, { useState } from "react";
import Total_Users_Icon from "../../assets/Images/Total_Users_Icon.jpg";
import World_Map from "../../assets/Images/World_Map.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {

    { /* Child Routing */}
    const { pathname } = useLocation();
    const isChildren = pathname === "/admin/dashboard";

    const [active, setActive] = useState("yearly");

    return (
        <>
            {
                isChildren && (
                    <>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setActive("yearly")}
                                className={`px-5 py-2 border border-gray-300 rounded-md ${active === "yearly" ? "bg-[#7B9D51] text-white" : "bg-white text-black"}`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setActive("monthly")}
                                className={`px-5 py-1.5 border border-gray-300 rounded-md ${active === "monthly" ? "bg-[#7B9D51] text-white" : "bg-white text-black"}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setActive("weekly")}
                                className={`px-5 py-1.5 border border-gray-300 rounded-md ${active === "weekly" ? "bg-[#7B9D51] text-white" : "bg-white text-black"}`}
                            >
                                Weekly
                            </button>
                        </div>

                        {/* tabs for monthly and weekly, yeraly*/}

                        {
                            active === "yearly" && (
                                <>
                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <Link to="/admin/dashboard/total_users" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <div className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></div>
                                        <Link to="/admin/dashboard/churn_rate"  className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <Link to="/admin/dashboard/total_watch" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                    </div>

                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <div className="flex flex-col space-y-4">
                                            <div className="border border-[#7B9D51] h-20 w-78 rounded-[10px]"></div>
                                            <Link to="/admin/dashboard/revenue" className="border border-[#7B9D51] h-30.5 w-78 rounded-[10px]"></Link>
                                        </div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                    </div>

                                    <div className="border border-[#7B9D51] w-full rounded-[10px] mt-4">
                                        <h1
                                            className="font-Inter font-semibold text-lg my-4 mx-6"
                                        >Geographic Distribution</h1>
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <img
                                                src={World_Map}
                                                className="h-40 mt-6"
                                            />
                                            <div className="text-sm text-gray-400 text-center mt-4 mb-8">
                                                <p>World Map</p>
                                                <p>Top: US, UK, Canada, Australia</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        }

                        {
                            active === "monthly" && (
                                <>
                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <Link to="/admin/dashboard/total_users" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <div className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></div>
                                        <Link to="/admin/dashboard/churn_rate" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <Link to="/admin/dashboard/total_watch" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                    </div>

                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <div className="flex flex-col space-y-4">
                                            <div className="border border-[#7B9D51] h-20 w-78 rounded-[10px]"></div>
                                            <Link to="/admin/dashboard/revenue" className="border border-[#7B9D51] h-30.5 w-78 rounded-[10px]"></Link>
                                        </div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                    </div>

                                    <div className="border border-[#7B9D51] w-full rounded-[10px] mt-4">
                                        <h1
                                            className="font-Inter font-semibold text-lg my-4 mx-6"
                                        >Geographic Distribution</h1>
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <img
                                                src={World_Map}
                                                className="h-40 mt-6"
                                            />
                                            <div className="text-sm text-gray-400 text-center mt-4 mb-8">
                                                <p>World Map</p>
                                                <p>Top: US, UK, Canada, Australia</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        }

                        {
                            active === "weekly" && (
                                <>
                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <Link to="/admin/dashboard/total_users" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <div className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></div>
                                        <Link to="/admin/dashboard/churn_rate" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                        <Link to="/admin/dashboard/total_watch" className="border border-[#7B9D51] h-30 w-78 rounded-[10px]"></Link>
                                    </div>

                                    <div className="flex space-x-4 mt-6 font-Inter">
                                        <div className="flex flex-col space-y-4">
                                            <div className="border border-[#7B9D51] h-20 w-78 rounded-[10px]"></div>
                                            <Link to="/admin/dashboard/revenue" className="border border-[#7B9D51] h-30.5 w-78 rounded-[10px]"></Link>
                                        </div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                        <div className="border border-[#7B9D51] h-55 w-[40%] rounded-[10px]"></div>
                                    </div>

                                    <div className="border border-[#7B9D51] w-full rounded-[10px] mt-4">
                                        <h1
                                            className="font-Inter font-semibold text-lg my-4 mx-6"
                                        >Geographic Distribution</h1>
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <img
                                                src={World_Map}
                                                className="h-40 mt-6"
                                            />
                                            <div className="text-sm text-gray-400 text-center mt-4 mb-8">
                                                <p>World Map</p>
                                                <p>Top: US, UK, Canada, Australia</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </>
                )
            }

            <Outlet />
        </>
    );
};

export default AdminDashboard;
