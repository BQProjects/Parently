import React from 'react'
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import Churn_Rate_Total_Users_Icon from "../../assets/Images/Churn_Rate_Total_Users_Icon.png";
import Churn_Rate_Current_Icon from "../../assets/Images/Churn_Rate_Current_Icon.png";
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ChurnDashboard = () => {

    const navigate = useNavigate();

    const DummyDataofChurn = [
        { name: "Current Churn Rate", icon: Churn_Rate_Current_Icon, value: "2.4%", progress: 44 },
        { name: "Total Users Lost", icon: Churn_Rate_Total_Users_Icon, value: "589", progress: 29 },
    ]

    const lineData = [
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
    ];

    const barData = [
        { name: 'Figma', free: 41, basic: 55 },
        { name: 'Sketch', free: 39, basic: 62 },
        { name: 'XD', free: 33, basic: 52 },
        { name: 'PS', free: 25, basic: 74 },
        { name: 'AI', free: 66, basic: 90 },
        { name: 'CorelDRAW', free: 74, basic: 83 },
        { name: 'InDesign', free: 88, basic: 63 },
        { name: 'Canva', free: 25, basic: 81 },
        { name: 'Webflow', free: 33, basic: 64 },
        { name: 'Affinity', free: 42, basic: 58 },
        { name: 'Marker', free: 22, basic: 68 },
        { name: 'Figma2', free: 51, basic: 77 }
    ];

    return (
        <>
            <div
                className='flex w-full space-x-3 mt-4 font-Inter'
            >
                {
                    DummyDataofChurn.map((data) => (
                        <div className='border-1 border-[#7B9D51] h-32 w-[50%] rounded-[10px] flex flex-col justify-between'>
                            <>
                                <div className='flex justify-between ml-4 mr-6 mt-4'>
                                    <h1 className='font-semibold'>{data.name}</h1>
                                    <img src={data.icon} />
                                </div>
                                <div className="flex flex-col mb-4 mx-4">
                                    <p className="text-gray-500 font-extralight mb-2 text-[15px]">{data.value}</p>
                                    <div className="bg-gray-200 h-6 w-full rounded-md">
                                        <div
                                            className="bg-[#7B9D51] h-6 rounded-md"
                                            style={{ width: `${data.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </>
                        </div>
                    ))
                }
            </div>

            <div className="flex w-full space-x-3 mt-4">
                {/* Line Chart */}
                <div className="border border-[#7B9D51] h-80 w-1/2 rounded-[10px] p-4">
                    <div  className='flex justify-between items-center mb-2'>
                        <h2 className="text-lg font-semibold mb-4">Churn Trend Over Time</h2>
                        <p className='text-[12px]'>Hourly user activity (24 hours)</p>
                    </div>
                    <ResponsiveContainer width="100%" height={240} >
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" padding={{ left: 50, right: 40 }} />
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
                            <Line type="line" dataKey="y2020" stroke="#6C63FF" strokeWidth={3} dot={{ r:4 }} activeDot={{ r:6 }} strokeOpacity={1} />
                            <Line type="line" dataKey="y2021" stroke="#FF7B7B" strokeWidth={3} />
                            <Line type="line" dataKey="y2022" stroke="#5CD6FF" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="border border-[#7B9D51] h-80 w-1/2 rounded-[10px] p-4">
                    <div className='flex justify-between items-center mb-2'>
                        <h2 className="text-lg font-semibold mb-4">Churn Trend Over Time</h2>
                        <p className='text-[12px]'>Free: 45% | Basic: 35% | Premium: 20%</p>
                    </div>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="free" fill="#6C63FF" />
                            <Bar dataKey="basic" fill="#FF7B7B" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default ChurnDashboard