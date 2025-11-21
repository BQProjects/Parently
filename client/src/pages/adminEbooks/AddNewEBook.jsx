import React from 'react'
import { useEbook } from '../../Context/EbookContext';
import Upload_Icon from "../../assets/Images/Upload_Icon.png";

const AddNewEBook = () => {

    const { Add_e_Book } = useEbook();

    return (
        <>
            <div className="mt-4 mb-24 mx-2 flex flex-col w-full font-Inter">
                <h1 className='text-2xl font-medium mb-4'>Add New eBook</h1>

                <div className='border-1 border-gray-300 w-[70%] rounded-lg'>
                    <div className="mb-6 px-6 pt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                            required
                            type='text'
                            name='title'
                            // value={formData.title}
                            // onChange={handleValues}
                            placeholder='Enter video title...'
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6 px-6 pb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                name='category'
                                // value={formData.category}
                                // onChange={handleValues}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select category</option>
                                <option value="Play">Play</option>
                                <option value="Shop">Shop</option>
                                <option value="Dance">Dance</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                            <select
                                name='age_Group'
                                // value={formData.age_Group}
                                // onChange={handleValues}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select age group</option>
                                <option value="0-2">0-2</option>
                                <option value="2-4">2-4</option>
                                <option value="4-6">4-6</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6 px-6 pb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                            <select
                                name='category'
                                // value={formData.category}
                                // onChange={handleValues}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select Languages</option>
                                <option value="Play">Hindi</option>
                                <option value="Shop">English</option>
                                <option value="Dance">Telugu</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Narrator</label>
                            <select
                                name='age_Group'
                                // value={formData.age_Group}
                                // onChange={handleValues}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="">Select Narrator</option>
                                <option value="0-2">Narrator1</option>
                                <option value="2-4">Narrator2</option>
                                <option value="4-6">Narrator3</option>
                            </select>
                        </div>
                    </div>
                    {/* Video Upload */}
                    <div className="mb-6 px-6 pb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Upload</label>

                        <div
                            // onDragOver={handleDragOver}
                            // onDragLeave={handleDragLeave}
                            // onDrop={handleDrop}
                            // onClick={handleFileClick}
                            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors border-gray-400 bg-gray-100 hover:border-gray-400`}
                        >
                            <input
                                // ref={fileInputRef}
                                type='file'
                                name="video"
                                // onChange={handleValues}
                                accept="video/mp4,video/avi,video/mov"
                                className="hidden"
                            />

                            <div className="flex flex-col items-center">
                                <img
                                    src={Upload_Icon} 
                                />
                                <p className="text-gray-600 mb-2">Click to upload thumbnail</p>

                                {/* {formData.video && (
                                        <p className="text-green-600 text-sm mt-2">
                                            Selected: {formData.video.name}
                                        </p>
                                    )} */}
                            </div>
                        </div>
                    </div>

                    <div
                        className='mb-6 px-6 pb-4'
                    >
                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                            eBook Content
                        </label>
                        <textarea
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                            placeholder='write or copy text...'
                        >
                        </textarea>
                        <p
                            className='block text-sm font-medium text-[#7B9D51] mb-2 mt-1 ml-2'
                        >Write your complete eBook content. You can format text, and include any narrative elements.</p>
                    </div>

                    <div
                        className='flex justify-end pr-4 mb-4 mr-4 space-x-6'
                    >
                        <button
                            className='border-1 border-gray-300 px-8 py-2 rounded-md cursor-pointer font-extralight'
                        >
                            Save as draft
                        </button>
                        <button
                            className='bg-[#7B9D51] px-6 py-2 text-white rounded-md cursor-pointer font-extralight'
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewEBook