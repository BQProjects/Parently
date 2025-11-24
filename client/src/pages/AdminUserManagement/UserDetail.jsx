import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import { UseUsers } from '../../Context/UsersContext';

const UserDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { Data } = UseUsers();

    const Finded_User_Data = Data.find((user) => user.id === parseInt(id));

    console.log("Finded User Data: ", Finded_User_Data);

    const ActivitiesData = Object.keys(Finded_User_Data.RecentActivity[0])
        .filter(key => key.startsWith('activity'))
        .map(key => ({
            activity: Finded_User_Data.RecentActivity[0][key],
            date: Finded_User_Data.RecentActivity[0][`date${key.slice(8)}`]
        })
    );

    console.log("ActivitiesData: ", ActivitiesData);

    return (
        <>
            <div className='fonts-Inter mx-2 mb-12'>
                <div className='mt-4 mx-4'>
                    <button
                        onClick={() => navigate("/admin/user-management")}
                        className='cursor-pointer flex items-center space-x-2'
                    >
                        <img src={Left_Arrow} alt='Left Arrow' className="h-8" />
                        <p className='text-xl'>User Detail</p>
                    </button>
                </div>

                <div className='grid grid-cols-2 gap-10 mt-8'>
                    <div className='border-[#adc98c] border-1 rounded-md pb-4'>
                        <h1 className='px-4 pt-4 pb-2 text-lg'>User Information</h1>
                        <div className='border-1 border-gray-300'></div>

                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px] mt-2'>
                            <p className='text-gray-500'>User ID:</p>
                            <p>{`USR${String(Finded_User_Data.id).padStart(3, "0")}`}</p>
                        </div>
                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px]'>
                            <p className='text-gray-500'>Registration Date:</p>
                            <p>{Finded_User_Data.date}</p>
                        </div>
                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px]'>
                            <p className='text-gray-500'>Subscription Status:</p>
                            <p>{Finded_User_Data.status}</p>
                        </div>
                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px]'>
                            <p className='text-gray-500'>Last Login Date:</p>
                            <p>{Finded_User_Data.date}</p>
                        </div>
                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px]'>
                            <p className='text-gray-500'>Account Status:</p>
                            <p>{Finded_User_Data.status}</p>
                        </div>
                        <div className='flex flex-row justify-between px-4 pt-2 text-[14px]'>
                            <p className='text-gray-500'>Subscription Type:</p>
                            <p>{Finded_User_Data.subScriptionType}</p>
                        </div>
                    </div>
                    <div className='border-[#adc98c] border-1 rounded-md'>
                        <h1 className='px-4 pt-4 pb-2 text-lg'>User Information</h1>
                        <div className='border-1 border-gray-300'></div>

                        <div className='flex flex-col justify-between px-4 pt-2 text-[14px] mt-2 space-y-4'>
                            {ActivitiesData.map((activity, index) => (
                                <div key={index}>
                                    <p>{activity.activity}</p>
                                    <p className='text-gray-500'>{activity.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail