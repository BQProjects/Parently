import React from 'react'
import { useSubscription } from '../../Context/SubscriptionContext';
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";

const SubscriptionManagement = () => {

    const { subscriptionPlans, Add_New_Plan } = useSubscription();

    const [plans, setPlans] = React.useState([]);
    const [visibleSubscriptionForm, setVisibleSubscriptionFom] = React.useState(false);

    const [featuredList, setFeaturedList] = React.useState([]);

    React.useEffect(() => {
        const FetchPlans = () => {
            setPlans(subscriptionPlans);
        }

        FetchPlans();
    }, []);

    return (
        <>
            {
                visibleSubscriptionForm ?
                    (
                        <>
                            <div className='flex flex-col mt-4 ml-8 font-Inter space-y-1'>
                                <h1 className='text-lg'>Subscription Management</h1>
                                <p className='text-sm text-gray-500'>Edit plan details, pricing, and included features.</p>
                            </div>

                            <div className='w-[70%] mt-4 ml-6'>
                                <div className='flex justify-end space-x-4 mb-4'>
                                    <button
                                        className='border-1 border-[#adc98c] px-4 py-2 rounded-md text-gray-600'
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className='bg-[#7B9D51] px-6 py-2 rounded-md text-white'
                                    >
                                        Save Changes
                                    </button>
                                </div>

                                <div className='border-1 border-[#adc98c] py-2 rounded-md'>
                                    <div className='flex justify-end space-x-4 mr-12 pb-2 mt-4'>
                                        <label className='flex items-center'>
                                            <input
                                                type="checkbox"
                                                className='mr-1'
                                            />Monthly
                                        </label>
                                        <label className='flex items-center'>
                                            <input
                                                type="checkbox"
                                                className='mr-1'
                                            />Yearly
                                        </label>
                                    </div>

                                    <div className='mt-4 mx-4 space-y-4'>
                                        <label className='flex flex-col justify-items-start flex-col w-60 text-sm text-gray-500'>
                                            Plan Name
                                            <input
                                                type='text'
                                                placeholder='Premium 2'
                                                className='mt-2 h-10 px-2 py-1 rounded-md outline-none border-[1.5px] border-[#adc98c] text-gray-900'
                                            />
                                        </label>
                                    </div>

                                    <div className='flex space-x-10 mt-4 mx-4'>
                                        <label className='flex flex-col justify-items-start w-60 text-sm text-gray-500'>
                                            Price per month (₹)
                                            <input
                                                type='text'
                                                placeholder='599'
                                                className='mt-2 h-10 px-2 py-1 rounded-md outline-none border-[1.5px] border-[#adc98c] text-gray-900'
                                            />
                                        </label>
                                        <label className='flex flex-col justify-items-start w-60 text-sm text-gray-500'>
                                            Price per year (₹)
                                            <input
                                                type='text'
                                                placeholder='1000'
                                                className='mt-2 h-10 px-2 py-1 rounded-md outline-none border-[1.5px] border-[#adc98c] text-gray-900'
                                            />
                                        </label>
                                    </div>
                                    <label className='mx-4 pt-0.5 text-sm flex items-center'>
                                        <input
                                            type="checkbox"
                                            className='mr-1'
                                        />
                                        Mark as Best Value
                                    </label>

                                    <div className='flex flex-col mt-4 mx-4'>
                                        <h1 className='text-gray-500 mb-2'>Features</h1>

                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {plans.length === 0 ? (
                                <>
                                    <div className='border-1 border-[#adc98c] border-dashed h-16 mt-20 mx-10 flex justify-center items-center font-Inter'>
                                        <button
                                            onClick={() => { setVisibleSubscriptionFom(!visibleSubscriptionForm) }}
                                            className='flex items-center space-x-2'
                                        >
                                            <FaPlus className='text-gray-500' />
                                            <p className='text-gray-500 text-[13px]'>
                                                Add New Plan
                                            </p>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1>Subscription Plans</h1>
                                    <div className='border-1 border-[#adc98c] border-dashed h-16 mt-20 mx-10 flex justify-center items-center font-Inter'>
                                        <button className='flex items-center space-x-2 cursor-pointer'>
                                            <FaPlus className='text-gray-500' />
                                            <p className='text-gray-500 text-[13px]'>
                                                Add New Plan
                                            </p>
                                        </button>
                                    </div>
                                </>
                            )
                            }
                        </>
                    )
            }
        </>
    )
}

export default SubscriptionManagement