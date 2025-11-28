import React from 'react'
import { useNavigate } from 'react-router-dom';
import Total_Current_Revenue_Icon from "../../assets/Images/Total_Current_Revenue_Icon.png";
import Previous_Revenue_Icon from "../../assets/Images/Previous_Revenue_Icon.png";
import Filter_Icon from "../../assets/Images/Filter_Icon.png";
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

const Revenue_Dashboard = () => {

    const navigate = useNavigate();

    const DummyDataofChurn = [
        { name: "Total Revenue (Current)", icon: Total_Current_Revenue_Icon, value: "45280", progress: "+12.5% from last month" },
        { name: "Previous Period Revenue", icon: Previous_Revenue_Icon, value: "40220", progress: "Last month total" },
    ]

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

    return (
        <>
            <div
                className='flex w-full space-x-3 mt-4 font-Inter'
            >
                {
                    DummyDataofChurn.map((data) => (
                        <div className='border border-[#7B9D51] h-32 w-[50%] rounded-[10px] flex flex-col justify-between'>
                            <>
                                <div className='flex justify-between ml-4 mr-6 mt-4'>
                                    <h1 className='font-semibold'>{data.name}</h1>
                                    <img src={data.icon} />
                                </div>
                                <div className="flex flex-col mb-4 mx-4">
                                    <p className="text-gray-500 font-extralight mb-2 text-[15px]">$ {Number(data.value).toLocaleString(0)}</p>
                                    <p className="font-extralight text-gray-500 text-sm">{data.progress}</p>
                                </div>
                            </>
                        </div>
                    ))
                }
            </div>

            <div className="border border-[#7B9D51] h-[50%] w-full rounded-[10px] mt-4 -mr-2 flex flex-col">
                <div className='flex justify-between my-6 mx-5'>
                    <div className='flex flex-col space-y-0.5'>
                        <h1 className='text-xl font-semibold'>Revenue Over Time</h1>
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
        </>
    )
}

export default Revenue_Dashboard