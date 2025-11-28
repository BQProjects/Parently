import React from 'react'
import { UseUsers } from '../../Context/UsersContext';
import { IoIosArrowDown } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UserManagement = () => {

    const { Data, SubscriptionList, RegisterationDate } = UseUsers();

    const [selectedSubscription, setSelectedSubscription] = React.useState("all");
    const [selectedDate, setSelectedDate] = React.useState("all");
    const [currentPage, setCurrentPage] = React.useState(1);

    const SelectedSubList = () => {
        if (selectedSubscription.toLowerCase().includes("all"))
            return Data;
        else {
            return Data.filter((User) => User.status.toLowerCase() === selectedSubscription.toLowerCase());
        }
    }

    const SelectedDateList = () => {
        if (selectedDate.toLowerCase().includes("all"))
            return SelectedSubList();
        else {
            return Data.filter((user) => user.date === selectedDate);
        }
    }

    const itemsPerPage = 4;
    const TotalItems = SelectedDateList().length;
    const totalPages = Math.ceil(TotalItems / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1);
    }

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }

    const initalIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = initalIndex + itemsPerPage;
    const pageData = SelectedDateList().slice(initalIndex, endIndex);

    return (
        <>
            <div className='font-Inter mx-2 mb-12'>
                <h1 className='font-medium text-2xl mt-4 ml-2'>All Registered Users</h1>
                <div className='border-[#adc98c] border py-8 px-8 rounded-md flex my-4'>
                    <div className='flex space-x-4 w-full'>
                        <div className='w-[50%] space-y-2'>
                            <h1 className='text-gray-500 text-[14px] tracking-wide'>Filter by Subscription</h1>
                            <div className="relative flex items-center w-[100%]">
                                <select
                                    value={selectedSubscription}
                                    onChange={(e) => setSelectedSubscription(e.target.value)}
                                    placeholder='Select Subscription'
                                    className="border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer"
                                >
                                    {SubscriptionList().map((sub, index) => (
                                        <option key={index} value={sub} >{sub}</option>
                                    ))}
                                </select>
                                <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                            </div>
                        </div>
                        <div className='w-[50%] space-y-2'>
                            <h1 className='text-gray-500 text-[14px] tracking-wide'>Sort By</h1>
                            <div className="relative flex items-center w-[100%]">
                                <select
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    placeholder="Registration Date"
                                    className="border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer"
                                >
                                    {
                                        RegisterationDate().map((date, index) => (
                                            <option key={index} value={date}>{date}</option>
                                        ))
                                    }
                                </select>
                                <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <table className="border-collapse border border-gray-300 w-full rounded-md">
                    <thead>
                        <tr className="bg-[#adc98c] text-black">
                            <th className="border border-gray-300 px-4 py-4 text-start">User ID</th>
                            <th className="border border-gray-300 px-4 py-4 text-start">Name</th>
                            <th className="border border-gray-300 px-4 py-4 text-start">Email Address</th>
                            <th className="border border-gray-300 px-4 py-4 text-start">Registration Date</th>
                            <th className="border border-gray-300 px-4 py-4 text-start">Subscription Status</th>
                            <th className="border border-gray-300 px-4 py-4 text-start">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            pageData.length > 0 ?
                                pageData.map((user, index) => (
                                    <tr key={index} className="bg-[#f1f2f0]">
                                        <td className="border border-gray-300 px-4 py-4 text-center">{`USR${String(index + 1).padEnd(3, "0")}`}</td>
                                        <td className="border border-gray-300 px-4 py-4">{user.name}</td>
                                        <td className="border border-gray-300 px-4 py-4">{user.emailId}</td>
                                        <td className="border border-gray-300 px-4 py-4">{user.date}</td>
                                        <td className="border border-gray-300 px-4 py-4">{user.status}</td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <Link to={`user-detail/${user.id}`}>
                                                <button className='flex flex-col items-center relative left-4 border border-[#adc98c] px-4 py-1 bg-gray-200 rounded-md cursor-pointer'>
                                                    <FaEye className='text-[#7B9D51]' />
                                                    <p className='text-sm text-gray-600'>User details</p>
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                                : (
                                    <tr>
                                        <td colSpan={7} className="text-center py-4">No Users Found</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
                <>
                    <div className='flex justify-between items-center mt-4 mx-4'>
                        <p>Showing {currentPage} to {endIndex} of {SelectedDateList().length} Users.</p>
                        <div className='flex space-x-4'>
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-md bg-gray-300  ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                            >
                                Previous
                            </button>
                            <div>
                                {
                                    Array.from({ length: totalPages }, (_, index) => index + 1).map((page, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-2 mr-2 rounded-md ${currentPage === page ? "bg-[#7B9D51] text-white" : "bg-gray-200 text-gray-700"}`}
                                        >
                                            {page}
                                        </button>
                                    ))
                                }
                            </div>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-md bg-gray-300  ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default UserManagement