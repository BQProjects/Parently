import React from 'react'
import { useEbook } from '../../Context/EbookContext';
import { IoIosArrowDown } from "react-icons/io";

const ViewAllPublishedBooks = () => {

    const { booksData, Remove_e_Book } = useEbook();
    const [deleteVideo, setDeleteVideo] = React.useState(null);

    const [publishedBooks, setPublishedBooks] = React.useState([]);

    React.useEffect(() => {
        setPublishedBooks(booksData);
    }, [booksData]);

    return (
        <div className='font-Inter mx-2'>
            <h1 className='font-medium text-2xl mt-4 ml-2'>All Published Videos</h1>
            <div className='border-[#7B9D51] border-1 py-8 px-8 rounded-md flex space-x-4 my-4'>
                <input
                    type='text'
                    placeholder='Search Videos...'
                    className='border-[#adc98c] border-1 outline-none px-8 h-12 text-md rounded-md w-[60%]'
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                />
                <div className="relative flex items-center">
                    <select className="border-[#adc98c] border-1 pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer">
                        <option>Select By Category</option>
                    </select>
                    <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                </div>
                <div className="relative flex items-center">
                    <select className='border-[#adc98c] border-1 pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer'>
                        <option>Filter By Access Level</option>
                    </select>
                    <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                </div>
            </div>

            <table className="border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-[#7B9D51] text-white">
                        <th className="border border-gray-300 px-4 py-4 text-start">Video ID</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Thumbnail</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Title</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Category</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Access Level</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Upload Date</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {publishedBooks.length > 0 ? publishedBooks.map((data, index) => (
                        <tr key={index} className="bg-[#d8e8c6]">
                            <td className="border border-gray-300 px-4 py-4 text-center">{`VID${String(index + 1).padStart(3, "0")}`}</td>
                            <td className="border border-gray-300 px-4 py-4 text-center">{data.thumbnail}</td>
                            <td className="border border-gray-300 px-4 py-4">{data.title}</td>
                            <td className="border border-gray-300 px-4 py-4 text-center">{data.category}</td>
                            <td className="border border-gray-300 px-4 py-4 text-center">
                                <span className={`${data.access_Level === "Free" ? "bg-[#98a883] text-black" : "bg-[#7B9D51] text-white"} px-2 py-1 rounded`}>
                                    {data.access_Level}
                                </span>
                            </td>
                            <td className="border border-gray-300 px-4 py-4 text-center">{new Date(data.date).toISOString().split('T')[0]}</td>
                            <td className="px-4 py-4 flex justify-around">
                                <button className='w-15 bg-gray-200 text-sm py-2 cursor-pointer rounded-md border-1'>View</button>
                                <button className='w-15 bg-gray-200 text-sm py-2 cursor-pointer rounded-md border-1'
                                    onClick={() => setDeleteVideo(data)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4">No Published Videos Found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {deleteVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg z-10">
                        <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
                        <p className="mb-6">Are you sure you want to delete this E-Book?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setDeleteVideo(null)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => { RemoveVideo(deleteVideo.id); setDeleteVideo(null); }}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ViewAllPublishedBooks