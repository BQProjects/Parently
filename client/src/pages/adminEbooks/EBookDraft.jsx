import React from 'react';
import { useEbook } from '../../Context/EbookContext';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const EBookDraft = () => {

    const { booksData, Remove_e_Book, CategoriesList, AccessLevel, Updating_e_Book_Status, Updating_Access_Level } = useEbook();
    const [deleteVideo, setDeleteVideo] = React.useState(null);

    const [publishedBooks, setPublishedBooks] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    const [selectedAccessLevel, setSelectedAccessLevel] = React.useState("all");
    const [search, setSearch] = React.useState("");
    const [PublishPopUp, setPublishPopUp] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);

    React.useEffect(() => {
        const FetchPublishedBooks = () => {
            const published = booksData.filter((book) => book.status === "draft");
            return published;
        }

        setPublishedBooks(FetchPublishedBooks);

        FetchPublishedBooks();
    }, [booksData]);

    const SelectedCatList = () => {
        if (selectedCategory.toLowerCase() === "all") {
            return publishedBooks;
        }
        else {
            return publishedBooks.filter((booksData) => booksData.category.toLowerCase() === selectedCategory.toLowerCase());
        }
    }

    const SelectedAccessLevel = () => {
        if (selectedAccessLevel.toLowerCase() === "all")
            return SelectedCatList();
        else {
            return SelectedCatList().filter((booksData) => booksData.AccessLevel.toLowerCase() === selectedAccessLevel.toLowerCase())
        }
    }

    const SearchedList = () => {
        if (search === "")
            return SelectedAccessLevel();
        else {
            return SelectedAccessLevel().filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
        }
    }

    const itemsPerPage = 4;
    const TotalItems = SearchedList().length;
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
    const pageData = SearchedList().slice(initalIndex, endIndex);

    return (
        <div className='font-Inter mx-2 mb-12'>
            <h1 className='font-medium text-2xl mt-4 ml-2'>eBook Draft</h1>
            <div className='border-[#adc98c] border py-8 px-8 rounded-md flex my-4'>
                <div className="relative flex items-center w-[120%]">
                    <input
                        type='text'
                        placeholder='Search eBooks...'
                        className='border-[#adc98c] border outline-none px-10 h-12 text-md rounded-md w-[97%]'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoSearch className="absolute left-4" />
                </div>
                <div className='flex space-x-4 w-[60%]'>
                    <div className="relative flex items-center w-[40%]">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            placeholder="Filter by Category"
                            className="border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer"
                        >
                            {CategoriesList().map((category, index) => (
                                <option key={index} value={category.toLowerCase()}>{category}</option>
                            ))
                            }
                        </select>
                        <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                    </div>
                    <div className="relative flex items-center w-[60%]">
                        <select
                            value={selectedAccessLevel}
                            onChange={(e) => setSelectedAccessLevel(e.target.value)}
                            placeholder="Filter by Access Level"
                            className='border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer'>
                            {AccessLevel().map((AccessLevel, index) => (
                                <option key={index} value={AccessLevel.toLowerCase()}>{AccessLevel}</option>
                            ))
                            }
                        </select>
                        <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                    </div>
                </div>
            </div>

            <table className="border-collapse border border-gray-300 w-full rounded-md">
                <thead>
                    <tr className="bg-[#adc98c] text-black">
                        <th className="border border-gray-300 px-4 py-4 text-start">eBook ID</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Thumbnail</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Title</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Category</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Access Level</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Upload Date</th>
                        <th className="border border-gray-300 px-4 py-4 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pageData.length > 0 ? pageData.map((data, index) => (
                        <tr key={index} className="bg-[#f1f2f0]">
                            <td className="border border-gray-300 px-4 py-4 text-center">{`BOOK${String(index + 1).padStart(3, "0")}`}</td>
                            <td className="border border-gray-300 px-4 py-4">
                                {data.thumbnail ? (
                                    <img
                                        src={URL.createObjectURL(data.thumbnail)}
                                        alt="Thumbnail"
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                ) : (
                                    "No Thumbnail"
                                )}
                            </td>
                            <td className="border border-gray-300 px-4 py-4">{data.title}</td>
                            <td className="border border-gray-300 px-4 py-4">{data.category}</td>
                            <td className="border border-gray-300 px-4 py-4">
                                <select
                                    value={data.AccessLevel}
                                    onChange={(e) => { Updating_Access_Level(data.id, e.target.value) }}
                                >
                                    <option value={data.AccessLevel}>{data.AccessLevel}</option>
                                    <option value={`${data.AccessLevel !== "Free" ? `Free` : `Premium`}`}>
                                        {`${data.AccessLevel !== "Free" ? `Free` : `Premium`}`}
                                    </option>
                                </select>
                            </td>
                            <td className="border border-gray-300 px-4 py-4">{data.date ? new Date(data.date).toISOString().split('T')[0] : "N/A"}</td>

                            <td className="border border-gray-300 py-4 text-center space-x-4">
                                <button className='w-15 bg-gray-200 text-sm py-1.5 cursor-pointer rounded-md border'>View</button>
                                <button className='w-15 bg-gray-200 text-sm py-1.5 cursor-pointer rounded-md border'
                                    onClick={() => setDeleteVideo(data)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => { Updating_e_Book_Status(data.id, "publish"); setPublishPopUp(!PublishPopUp) }}
                                    className='w-15 bg-[#7B9D51] text-sm py-1.5 cursor-pointer rounded-md border text-white'
                                >
                                    Publish
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4">No Drafted eBooks Found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className='flex justify-between items-center mt-4 mx-4'>
                <p> Showing {currentPage} to {endIndex} of {SearchedList().length} Drafted ebooks </p>
                <div className='flex space-x-4'>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-md bg-gray-300  ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                    >
                        Previous
                    </button>
                    {
                        Array.from({ length: totalPages }, (_, index) => index + 1).map((page, index) => (
                            <p
                                key={index}
                                onClick={() => setCurrentPage(page)}
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

            {deleteVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center font-Inter">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg z-10">
                        <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
                        <p className="mb-6">Are you sure you want to delete this eBook?</p>
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

            {PublishPopUp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center font-Inter">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg z-10 flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-2">Upload complete</h2>
                        <p className="mb-6">your eBook has been published successfully.</p>
                        <button
                            onClick={() => setPublishPopUp(!publishedBooks)}
                            className='bg-gray-300 px-6 w-40 py-2 rounded-md cursor-pointer font-semibold'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EBookDraft