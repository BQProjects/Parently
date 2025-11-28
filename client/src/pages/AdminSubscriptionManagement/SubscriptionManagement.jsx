import React from 'react'
import { useSubscription } from '../../Context/SubscriptionContext';
import { FaPlus } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import Edit_Icon from "../../assets/Images/Edit_Icon.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Left_Arrow from '../../assets/Images/LeftArrow.png';
import line_edit from "../../assets/Images/line-md_edit.png";

const SubscriptionManagement = () => {

    const { subscriptionPlans, Add_New_Plan } = useSubscription();
    const fileInput = React.useRef(null);

    const DefaultValues = {
        plan_Name: "",
        Pack_Duration: "",
        pack_Price_Monthly: "",
        pack_Price_Yearly: "",
        Best_Value: false,
        features: [],
        featured_video: null,
        edit: false,
    }

    const [plans, setPlans] = React.useState([]);
    const [visibleSubscriptionForm, setVisibleSubscriptionFom] = React.useState(false);
    const [drag, setDrag] = React.useState(false);

    const [featuredList, setFeaturedList] = React.useState([]);
    const [SubscriptionForm, setSubscriptionForm] = React.useState(DefaultValues);

    React.useEffect(() => {
        const FetchPlans = () => {
            setPlans(subscriptionPlans);
        }

        FetchPlans();
    }, []);

    const handle_Add_New_feature = () => {
        setFeaturedList((prev) => [...prev, { name: "", edit: true }]);
    }

    const handle_Save_New_Feature = (index) => {

        if (featuredList[index].name.trim() !== "")
            setFeaturedList(prev =>
                prev.map((f, idx) => idx === index ? { ...f, edit: false } : f)
            );
        else
            alert("Feature name is required!");
    }

    const handle_Feature_Delete = (index) => {
        setFeaturedList((prev) => prev.filter((_, idx) => idx !== index));
    }

    const handle_Edit_Feature = (index) => {
        setFeaturedList((prev) => prev.map((f, idx) => idx === index ? { ...f, edit: true } : f));
    }
    console.log("Featured List: ", featuredList);

    const handleDrageOver = (e) => {
        e.preventDefault();
        setDrag(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setDrag(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            setFeaturedVideo({ ...featuredVideo, video: files[0] })
        }
    }

    const handleFileClick = () => {
        fileInput.current?.click();
    }

    const handleSubcriptionFrom = (e) => {
        const { name, value, files, checked } = e.target;

        if (files) {
            return setSubscriptionForm(prev => ({
                ...prev,
                featured_video: files[0]
            }));
        }

        if (name === "Best_Value") {
            return setSubscriptionForm(prev => ({
                ...prev,
                Best_Value: checked
            }));
        }

        setSubscriptionForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleDurationCheck = (type) => {
        setSubscriptionForm(prev => ({
            ...prev,
            Pack_Duration: type
        }));
    };

    const handleSaveChangesPlan = () => {

        const finalData = {
            ...SubscriptionForm,
            features: featuredList,
        };

        Add_New_Plan(finalData);
        setSubscriptionForm(DefaultValues);
    }

    const handleToogleButton = () => {
        setVisibleSubscriptionFom(false);
    }

    console.log(plans)

    return (
        <>
            {visibleSubscriptionForm ? (
                <>
                    <div className='flex items-center'>
                        <button
                            onClick={handleToogleButton}
                            className='cursor-pointer'
                        >
                            <img src={Left_Arrow} alt='' className='h-8 relative left-4 top-2' />
                        </button>
                        <div className='flex flex-col mt-4 ml-8 font-Inter space-y-1'>
                            <h1 className='text-lg'>Subscription Management</h1>
                            <p className='text-sm text-gray-500'>
                                Edit plan details, pricing, and included features.
                            </p>
                        </div>
                    </div>

                    <div className='w-[70%] mt-4 ml-6 mb-14'>
                        <div className='flex justify-end space-x-4 mb-4'>
                            <button
                                onClick={() => setVisibleSubscriptionFom(false)}
                                className='border border-[#adc98c] px-4 py-2 rounded-md text-gray-600'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSaveChangesPlan}
                                className='bg-[#7B9D51] px-6 py-2 rounded-md text-white'
                            >
                                Save Changes
                            </button>
                        </div>

                        <div className='border border-[#adc98c] py-2 rounded-md'>
                            <div className='flex justify-end space-x-4 mr-12 pb-2 mt-4'>
                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={SubscriptionForm.Pack_Duration === "Monthly"}
                                        onChange={() => handleDurationCheck("Monthly")}
                                        className='mr-1'
                                    />
                                    Monthly
                                </label>

                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={SubscriptionForm.Pack_Duration === "Yearly"}
                                        onChange={() => handleDurationCheck("Yearly")}
                                        className='mr-1'
                                    />
                                    Yearly
                                </label>
                            </div>

                            <div className='mt-4 mx-4 space-y-4'>
                                <label className='flex flex-col w-60 text-sm text-gray-500'>
                                    Plan Name
                                    <input
                                        name='plan_Name'
                                        value={SubscriptionForm.plan_Name}
                                        onChange={handleSubcriptionFrom}
                                        type='text'
                                        placeholder='Premium 2'
                                        className='mt-2 h-10 px-2 py-1 text-black rounded-md outline-none border-[1.5px] border-[#adc98c] font-semibold'
                                    />
                                </label>
                            </div>

                            <div className='flex space-x-10 mt-4 mx-4'>
                                <label className='flex flex-col w-60 text-sm text-gray-500'>
                                    Price per month (₹)
                                    <input
                                        name='pack_Price_Monthly'
                                        value={SubscriptionForm.pack_Price_Monthly}
                                        onChange={handleSubcriptionFrom}
                                        type='text'
                                        placeholder='599'
                                        className='mt-2 h-10 px-2 py-1 text-black rounded-md border-[1.5px] border-[#adc98c] font-semibold'
                                    />
                                </label>

                                <label className='flex flex-col w-60 text-sm text-gray-500'>
                                    Price per year (₹)
                                    <input
                                        name='pack_Price_Yearly'
                                        value={SubscriptionForm.pack_Price_Yearly}
                                        onChange={handleSubcriptionFrom}
                                        type='text'
                                        placeholder='1000'
                                        className='mt-2 h-10 px-2 py-1 text-black rounded-md border-[1.5px] border-[#adc98c] font-semibold'
                                    />
                                </label>
                            </div>

                            <label className='mx-4 mt-2 pt-0.5 text-sm flex items-center'>
                                <input
                                    type="checkbox"
                                    name='Best_Value'
                                    checked={SubscriptionForm.Best_Value}
                                    onChange={handleSubcriptionFrom}
                                    className='mr-1'
                                />
                                Mark as Best Value
                            </label>

                            <div className='flex flex-col items-start mt-4 mx-4'>
                                <h1 className='text-gray-500 mb-2'>Features</h1>

                                {featuredList.map((feature, index) => (
                                    <div key={index} className='mb-2 w-full'>
                                        {feature.edit ? (
                                            <>
                                                <div className='flex items-center'>
                                                    <input
                                                        value={feature.name}
                                                        onChange={(e) =>
                                                            setFeaturedList(prev =>
                                                                prev.map((f, i) =>
                                                                    i === index ? { ...f, name: e.target.value } : f
                                                                )
                                                            )
                                                        }
                                                        placeholder='Enter feature'
                                                        className='border px-2 py-2 rounded text-black w-[90%] mb-2'
                                                    />
                                                    <button
                                                        onClick={() => handle_Save_New_Feature(index)}
                                                        className='ml-2 text-gray-800 cursor-pointer mb-2'
                                                    >
                                                        <MdAdd size={30} />
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-full flex items-center'>
                                                    <p className='w-[90%] border border-[#adc98c] px-4 py-2 rounded-md'>{feature.name}</p>
                                                    <button
                                                        onClick={() => handle_Edit_Feature(index)}
                                                        className='ml-3 text-blue-600 relative right-12'
                                                    >
                                                        <img src={Edit_Icon} alt='' className='h-5' />
                                                    </button>
                                                    <button
                                                        onClick={() => handle_Feature_Delete(index)}
                                                        className='ml-3 text-red-600 relative right-8'
                                                    >
                                                        <RiDeleteBin6Line size={22} />
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}

                                <button
                                    onClick={handle_Add_New_feature}
                                    className='text-green-700 mt-2 text-sm font-semibold ml-2 flex items-center space-x-0.5'
                                >
                                    <MdAdd size={20} />
                                    <p> Add Features</p>
                                </button>
                            </div>

                            <div className="mb-6 px-6 pb-4 mt-6">
                                <label className='text-gray-500 mb-2'>Thumbnail Video Upload</label>

                                <div
                                    onDragOver={handleDrageOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={handleFileClick}
                                    className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer mt-2 w-94
                                        transition-colors ${drag ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'}
                                    `}
                                >
                                    <input
                                        ref={fileInput}
                                        type='file'
                                        accept="video/*"
                                        onChange={handleSubcriptionFrom}
                                        className="hidden"
                                    />

                                    <div className="flex flex-col items-center">
                                        <IoIosVideocam className='text-[#5a7a1e]' size={44} />
                                        <p className="text-gray-600 mb-0.5 font-semibold">Drop video here or click to browse</p>
                                        <p className="text-gray-400 text-sm">Supported formats: MP4, AVI, MOV</p>

                                        {SubscriptionForm.featured_video && (
                                            <p className="text-green-600 text-sm mt-2">
                                                Selected: {SubscriptionForm.featured_video.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    {plans.length === 0 ? (
                        <div className='border border-[#adc98c] border-dashed h-16 mt-20 mx-10 flex justify-center items-center'>
                            <button
                                onClick={() => setVisibleSubscriptionFom(true)}
                                className='flex items-center space-x-2'
                            >
                                <FaPlus className='text-gray-500' />
                                <p className='text-gray-500 text-[13px]'>Add New Plan</p>
                            </button>
                        </div>
                    ) : (
                        <div className='mb-20'>
                            <div
                                className='flex flex-col space-y-1 mt-6 mx-10'
                            >
                                <h1 className='text-2xl'>Subscription Management</h1>
                                <p className='text-sm text-gray-500'>Edit plan details, pricing, and included features.</p>
                            </div>
                            {plans.length > 0 && plans.map((plan, index) => (
                                <div key={index}
                                    className='mt-2 mx-10 font-Inter'
                                >
                                    <img
                                        src={line_edit}
                                        className='relative left-[95%] top-12'
                                    />
                                    <div className='border border-[#adc98c] rounded-md p-6 space-y-8 flex flex-col'>
                                        <div className='flex justify-between w-[60%] mb-2'>
                                            <h1>Plan Name</h1>
                                            <h1 className='text-gray-500'>{plan.plan_Name}</h1>
                                        </div>
                                        {
                                            plan.pack_Price_Monthly && (
                                                <div className='flex justify-between w-[60%] mb-2'>
                                                    <h1>Price per Month (₹)</h1>
                                                    <h1 className='text-gray-500'>{plan.pack_Price_Monthly}</h1>
                                                </div>
                                            )
                                        }
                                        {
                                            plan.pack_Price_Yearly && (
                                                <div className='flex justify-between w-[60%] mb-2'>
                                                    <h1>Price per Yearly (₹)</h1>
                                                    <h1 className='text-gray-500'>{plan.pack_Price_Yearly}</h1>
                                                </div>
                                            )
                                        }
                                        <div className='mb-2 mt-4'>
                                            <h1>Features</h1>
                                            {
                                                plan.features?.map((feature, index) => (
                                                    <div key={index} className='flex flex-col my-2'>
                                                        <p className='border border-[#adc98c] p-3 rounded-md'>{feature.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='border border-[#adc98c] border-dashed h-16 mt-10 mx-10 flex justify-center items-center'>
                                <button
                                    onClick={() => setVisibleSubscriptionFom(true)}
                                    className='flex items-center space-x-2'
                                >
                                    <FaPlus className='text-gray-500' />
                                    <p className='text-gray-500 text-[13px]'>Add New Plan</p>
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default SubscriptionManagement