import React from 'react';
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import TotalUsers_Icon from "../../assets/Images/Total_Users_Icon.jpg";
import Active_Uses_Icon from "../../assets/Images/Active_Uses_Icon.png";
import Expired_Users_Icon from "../../assets/Images/Expired_Users_Icon.png";
import Filter_Icon from "../../assets/Images/Filter_Icon.png";
import { useNavigate } from 'react-router-dom';
import Active_Today_Icon from "../../assets/Images/Active_Today_Icon.png";
import Total_Sub_Icon from "../../assets/Images/Total_Sub_Icon.png";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts"; // Charts 

const TotalUsersDashboard = () => {

    const navigate = useNavigate();

    const data = [
        { name: "Figma", y2020: 17, y2021: 40, y2022: 32 },
        { name: "Sketch", y2020: 30, y2021: 10, y2022: 18 },
        { name: "XD", y2020: 42, y2021: 22, y2022: 14 },
        { name: "PS", y2020: 58, y2021: 16, y2022: 58 },
        { name: "AI", y2020: 45, y2021: 44, y2022: 30 },
        { name: "CorelDRAW", y2020: 26, y2021: 12, y2022: 58 },
        { name: "InDesign", y2020: 14, y2021: 55, y2022: 55 },
    ]; // Dummy Data for Charts

    //Dumy Data for Top Locations

    const TopLocations = [
        { name: "United States", Users: "8947" },
        { name: "United Kingdom", Users: "4235" },
        { name: "Canada", Users: "3128" },
        { name: "Australia", Users: "2456" },
        { name: "Germany", Users: "1847" },
    ]

    const GridData = [
        { name: "Active Today", Users: "845", Daily_Usage: "71.5% of daily users", icon: Active_Today_Icon },
        { name: "New Today", Users: "127", Daily_Usage: "71.5% of daily users", icon: Active_Today_Icon },
        { name: "Total Subscribed Users", Users: "1845", Daily_Usage: "71.5% of daily users", icon: Active_Today_Icon },
        { name: "Total Non-Subscribed Users", Users: "2127", Daily_Usage: "71.5% of daily users", icon: Total_Sub_Icon },
    ]

    return (
        <>
            <div
                className='flex space-x-4 mt-6 ml-2 font-Inter'
            >
                <div className="border border-[#7B9D51] h-32 w-98 rounded-[10px] flex flex-col justify-between">
                    <div className='flex justify-between mt-4 mx-4 items-center'>
                        <p className='font-semibold text-base'>Total Users</p>
                        <img
                            src={TotalUsers_Icon}
                            className='mr-2 h-9'
                        />
                    </div>
                    <div className='flex flex-col space-y-1 mb-4 mx-4'>
                        <p className='font-extralight text-gray-500 text-base'>26,526</p>
                        <p className='font-extralight text-gray-500 text-sm'>+8.2% from Yesterday</p>
                    </div>
                </div>
                <div className="border border-[#7B9D51] h-32 w-98 rounded-[10px] flex flex-col justify-between">
                    <div className='flex justify-between mt-4 mx-4 items-center'>
                        <p className='font-semibold text-base'>Active Uses</p>
                        <img
                            src={Active_Uses_Icon}
                            className='mr-2 h-9'
                        />
                    </div>
                    <div className='flex flex-col space-y-1 mb-4 mx-4'>
                        <p className='font-extralight text-gray-500 text-base'>16,555</p>
                        <p className='font-extralight text-gray-500 text-sm'>71.5% of daily users</p>
                    </div>
                </div>
                <div className="border border-[#7B9D51] h-32 w-98 rounded-[10px] flex flex-col justify-between">
                    <div className='flex justify-between mt-4 mx-4 items-center'>
                        <p className='font-semibold text-base'>Expired Users</p>
                        <img
                            src={Expired_Users_Icon}
                            className='mr-2 h-9'
                        />
                    </div>
                    <div className='flex flex-col space-y-1 mb-4 mx-4'>
                        <p className='font-extralight text-gray-500 text-base'>9,756</p>
                        <p className='font-extralight text-gray-500 text-sm'>10.2% of daily users</p>
                    </div>
                </div>
            </div>

            <div className="border border-[#7B9D51] h-[50%] w-[99%] rounded-[10px] mt-4 ml-2 flex flex-col">
                <div className='flex justify-between my-6 mx-5'>
                    <div className='flex flex-col space-y-0.5'>
                        <h1 className='text-xl font-semibold'>User Growth Overview</h1>
                        <p className='text-sm text-gray-500'>View total users by week, month, 6 months, or 12 months.</p>
                    </div>
                    <button
                        className='bg-[#7B9D51] text-white flex items-center px-4 justify-between w-28 h-10 rounded-[4px]'
                    >
                        <p className='font-base'>Weekly</p>
                        <img src={Filter_Icon}
                            className='h-4'
                        />
                    </button>
                </div>

                <div className="w-[96%] h-[400px] ml-2 my-8 mr-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                padding={{ left: 50, right: 40 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend
                                verticalAlign="bottom"
                                wrapperStyle={{
                                    paddingTop: 20,
                                    display: "flex",
                                    gap: "30px",   // spacing between items
                                    justifyContent: "center"
                                }}
                            />

                            {/* Year 2020 */}
                            <Line
                                type="linear"
                                dataKey="y2020"
                                stroke="#7B61FF"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />

                            {/* Year 2021 */}
                            <Line
                                type="linear"
                                dataKey="y2021"
                                stroke="#FF6B6B"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />

                            {/* Year 2022 */}
                            <Line
                                type="linear"
                                dataKey="y2022"
                                stroke="#4BC6E8"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />

                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="flex space-x-4 mt-4 ml-2 font-Inter w-[98%] overflow-y-hidden">
                <div className="border border-[#7B9D51] w-[50%] rounded-[10px] px-6 p-4">
                    <h1 className='text-lg font-semibold'>Top Locations</h1>
                    <div className='mt-4'>
                        {
                            TopLocations.map((data) => (
                                <div
                                    key={data.index}
                                    className='flex justify-between w-full space-y-3 text-[14px]'
                                >
                                    <h1
                                        className='font-extralight'
                                    >{data.name}</h1>
                                    <p className='text-gray-500'>{Number(data.Users).toLocaleString()}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-[55%] grid grid-cols-2 gap-4">
                    {GridData.map((data, index) => (
                        <div
                            key={index}
                            className="border border-[#7B9D51] h-28 rounded-[10px] flex flex-col justify-between"
                        >
                            <div className="flex justify-between mt-3 mx-3 items-center">
                                <p className="font-semibold text-base">{data.name}</p>
                                <img src={data.icon} className="mr-2 h-9" />
                            </div>
                            <div className="flex flex-col space-y-1 mb-4 mx-3">
                                <p className="font-extralight text-gray-500 text-base">{data.Users}</p>
                                <p className="font-extralight text-gray-500 text-[10px]">{data.Daily_Usage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TotalUsersDashboard;