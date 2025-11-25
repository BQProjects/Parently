import React from 'react'
import { IoSearch } from "react-icons/io5";
import Demo_Image from "../../assets/Images/Demo_Image.jpg"

const Qued_Videos = () => {

    const videos = [
        {
            id: 1,
            thumbnail: Demo_Image,
            title: "Fun at the Playground",
            category: "Play"
        },
        {
            id: 2,
            thumbnail: Demo_Image,
            title: "Shopping Guide for Kids",
            category: "Shop"
        },
        {
            id: 3,
            thumbnail: Demo_Image,
            title: "Basic Dance Moves Tutorial",
            category: "Dance"
        },
        {
            id: 4,
            thumbnail: Demo_Image,
            title: "Outdoor Play Activities",
            category: "Play"
        },
        {
            id: 5,
            thumbnail: Demo_Image,
            title: "Kids Shopping Adventure",
            category: "Shop"
        },
        {
            id: 6,
            thumbnail: Demo_Image,
            title: "Dance Workout for Children",
            category: "Dance"
        },
        {
            id: 7,
            thumbnail: Demo_Image,
            title: "Playground Safety Tips",
            category: "Play"
        },
        {
            id: 8,
            thumbnail: Demo_Image,
            title: "Online Shopping Basics",
            category: "Shop"
        },
        {
            id: 9,
            thumbnail: Demo_Image,
            title: "Kids Freestyle Dance",
            category: "Dance"
        },
        {
            id: 10,
            thumbnail: Demo_Image,
            title: "Indoor Play Activities",
            category: "Play"
        }
    ];

    const [searchedVideos, setSearchedVideos] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [showDeletePopUp, setshowDeletePopUp] = React.useState(false);

    const SearchList = () => {
        if (searchedVideos === "")
            return videos
        else
            return videos.filter((video) => video.title.toLowerCase().includes(searchedVideos.toLowerCase()) ||
                video.category.toLowerCase().includes(searchedVideos.toLowerCase())
            )
    }

    const itemsPerPage = 4;
    const totalItems = SearchList().length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1);
    }

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    }

    const initalIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = initalIndex + itemsPerPage
    const pageData = SearchList().slice(initalIndex, endIndex);

    return (
        <div className='font-Inter mx-2 mb-12'>
            <h1 className='font-medium text-2xl mt-4 ml-2'>Que Videos</h1>
            <div className='border-[#adc98c] border-1 py-8 px-8 rounded-md flex my-4'>
                <div className="relative flex items-center w-[120%]">
                    <input
                        type='text'
                        placeholder='Search eBooks...'
                        className='border-[#adc98c] border-1 outline-none px-10 h-12 text-md rounded-md w-[100%]'
                        value={searchedVideos}
                        onChange={(e) => setSearchedVideos(e.target.value)}
                    />
                    <IoSearch className="absolute left-4" />
                </div>
            </div>

            <table className="border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-[#adc98c] text-black">
                        <th className="border border-gray-300 px-4 py-4 text-center">Video ID</th>
                        <th className="border border-gray-300 px-4 py-4 text-center">Thumbnail</th>
                        <th className="border border-gray-300 px-4 py-4 text-center">Title</th>
                        <th className="border border-gray-300 px-4 py-4 text-center">Category</th>
                        <th className="border border-gray-300 px-4 py-4 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pageData.length > 0 ? pageData.map((video, index) => (
                            <tr key={index} className="bg-[#f1f2f0]">
                                <td className="border border-gray-300 px-4 py-4 text-center">{`VID${String(index + 1).padStart(3, "0")}`}</td>
                                <td className="border border-gray-300 px-4 py-4 flex items-center justify-center">
                                    <img src={video.thumbnail} alt={video.id} className='h-16' />
                                </td>
                                <td className="border border-gray-300 px-4 py-4 text-center">{video.title}</td>
                                <td className="border border-gray-300 px-4 py-4 text-center">{video.category}</td>
                                <td className="border border-gray-300 px-4 py-4 text-center space-x-4">
                                    <button className='w-15 bg-gray-200 text-sm py-1.5 cursor-pointer rounded-md border-1'>View</button>
                                    <button className='w-20 bg-[#7B9D51] text-sm py-1.5 cursor-pointer rounded-md border-1 text-white'
                                        onClick={() => setshowDeletePopUp(!showDeletePopUp)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                        ) : (
                            <tr>
                                <td colSpan={7} className="text-center py-4">No Published eBooks Found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div className='flex justify-between items-center mt-4 mx-4'>
                <p>Showing {currentPage} to {endIndex} of {SearchList().length} Q Video's.</p>
                <div className='flex space-x-4'>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md bg-gray-300  ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                    >
                        Prev
                    </button>
                    {
                        Array.from({ length: totalPages }, (_, index) => index + 1).map((page, index) => (
                            <p
                                key={index}
                                onClick={() => { setCurrentPage(page) }}
                                className={`px-3 py-2 mr-2 rounded-md ${currentPage === page ? "bg-[#7B9D51] text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                {page}
                            </p>
                        ))
                    }
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-md bg-gray-300  ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {
                showDeletePopUp && (
                    <>
                        <div className="fixed inset-0 z-50 flex items-center justify-center font-Inter">
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                            <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg z-10">
                                <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
                                <p className="mb-6">Are you sure you want to delete this Video?</p>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        onClick={() => setshowDeletePopUp(!showDeletePopUp)}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        // onClick={() => { RemoveVideo(deleteVideo.id); setDeleteVideo(null); }}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Qued_Videos