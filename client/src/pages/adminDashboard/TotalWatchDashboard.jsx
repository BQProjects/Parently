import React from 'react';
import { useNavigate } from 'react-router-dom';
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import Filter_Icon from "../../assets/Images/Filter_Icon.png";
import TotalWatch_Time_Logo from "../../assets/Images/TotalWatch_Time_Logo.png";
import Inc_Logo from "../../assets/Images/Inc_Logo.png";
import TotalUsers_Icon from "../../assets/Images/Total_Users_Icon.jpg";
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

const TotalWatchDashboard = () => {

    const navigate = useNavigate();

    const data = [
        { name: 'Figma', y2020: 90, y2021: 120, y2022: 200 },
        { name: 'Sketch', y2020: 110, y2021: 140, y2022: 180 },
        { name: 'XD', y2020: 40, y2021: 60, y2022: 60 },
        { name: 'PS', y2020: 70, y2021: 90, y2022: 120 },
        { name: 'AI', y2020: 85, y2021: 100, y2022: 240 },
        { name: 'CorelDRAW', y2020: 50, y2021: 130, y2022: 190 },
        { name: 'InDesign', y2020: 80, y2021: 110, y2022: 160 },
        { name: 'Canva', y2020: 30, y2021: 70, y2022: 180 },
        { name: 'Webflow', y2020: 60, y2021: 140, y2022: 160 },
        { name: 'Affinity', y2020: 45, y2021: 90, y2022: 190 },
        { name: 'Marker', y2020: 95, y2021: 60, y2022: 150 },
        { name: 'Figma2', y2020: 50, y2021: 80, y2022: 170 }
    ]; // Dummy Data for Charts

    const TopLocations = [
        { name: "Parenting Tips 101", Users: "2.1K Views" },
        { name: "Child Development", Users: "1.8K Views" },
        { name: "Safety Guidelines", Users: "1.5K Views" },
        { name: "Nutrition Guide", Users: "1.3K Views" },
        { name: "Sleep Routines", Users: "1.1K Views" },
    ]

    return (
        <>
            <div className="border border-[#7B9D51] h-32 w-98 rounded-[10px] flex flex-col justify-between">
                <div className='flex justify-between mt-4 mx-4 items-center'>
                    <h1 className='font-semibold text-base'>Total Watch Time</h1>
                    <img src={TotalWatch_Time_Logo} />
                </div>
                <div className='flex flex-col space-y-1 mb-4 mx-4'>
                    <p className='font-base text-gray-500 text-base'>12.4K hrs</p>
                    <p className='font-extralight text-gray-500 text-sm flex items-center'>
                        <img src={Inc_Logo} className='h-4' />
                        <p>+18.2%</p>
                    </p>
                </div>
            </div>

            <div className="border border-[#7B9D51] h-[50%] w-full rounded-[10px] mt-4 -mr-2 flex flex-col">
                <div className='flex justify-between my-6 mx-5'>
                    <div className='flex flex-col space-y-0.5'>
                        <h1 className='text-xl font-semibold'>Watch Time Trends</h1>
                    </div>
                    <button
                        className='bg-[#7B9D51] text-white flex items-center px-4 justify-between h-10 rounded-[4px] space-x-4'
                    >
                        <p className='font-base'>This Month</p>
                        <img src={Filter_Icon}
                            className='h-4'
                        />

                    </button>
                </div>

                <div className="w-[96%] h-[600px] pb-4 mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                padding={{ left: 50, right: 40 }}
                            />
                            <YAxis tickCount={7} domain={[0, 300]} interval={0} ticks={[0, 50, 100, 150, 200, 250, 300]} />
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

            <div className='flex space-x-4 mt-4'>
                <div className='border border-[#7B9D51] h-54 w-98 rounded-[10px] flex flex-col justify-between'>
                    <div className='flex justify-between mt-4 mx-4 items-center'>
                        <h1 className='font-semibold text-base'>Most Popular Category This Month</h1>
                        <img src={TotalUsers_Icon} />
                    </div>
                    <p className='font-base text-gray-500 text-base ml-4 mb-8'>Parenting Tips 101</p>
                    <div className="flex mx-4 items-center mb-14 space-x-4">
                        <p className='font-base text-gray-500'>2.1K hrs <br /> Total watch time</p>
                        <p className='font-base text-gray-500'>12.3%growth</p>
                    </div>
                    <div className="bg-gray-200 h-6 w-[90%] rounded-md relative bottom-10 left-4">
                        <div
                            className="bg-[#7B9D51] h-6 rounded-md flex items-center"
                            style={{ width: `${40}%` }}
                        >
                            <p className='text-[12px] text-white px-2'>+12.3% growth</p>
                        </div>
                    </div>
                </div>
                <div className='border border-[#7B9D51] h-[50%] w-98 rounded-[10px] flex flex-col justify-between px-6 p-4'>
                    <h1 className='text-lg font-semibold'>Most Popular Categories</h1>
                    <div className='mt-4'>
                        {
                            TopLocations.map((data) => (
                                <div
                                    key={data.index}
                                    className='flex justify-between w-full space-y-3 text-[14px]'
                                >
                                    <h1
                                        className='font-base text-gray-500'
                                    >{data.name}</h1>
                                    <p className='text-gray-500'>{data.Users}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default TotalWatchDashboard