import React from 'react'
import { useEbook } from '../../Context/EbookContext';
import Upload_Icon from "../../assets/Images/Upload_Icon.png";

const AddNewEBook = () => {

    const { Add_e_Book } = useEbook();

    const DefaultValues = {
        title: "",
        category: "",
        age_Group: "",
        language: "",
        narrator: "",
        thumbnail: null,
        content: "",
        status: "",
        AccessLevel: "Premium",
        date: new Date(),
    }

    const fileInputRef = React.useRef(null);
    const [formData, setFormData] = React.useState(DefaultValues);
    const [drag, setDrag] = React.useState(false);

    const handleDragOver = (e) => {
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
        if (files.length > 0)
            setFormData({ ...formData, thumbnail: files[0] });
    }

    const handleFileClick = () => {
        fileInputRef.current?.click();
    }

    const handleValues = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    }

    const handleSaveAsDraft = () => {
        const updatedStatus = { ...formData, status: "draft" }
        Add_e_Book(updatedStatus);
        setFormData({ ...DefaultValues, thumbnail: null });
    }

    const handlePublish = () => {
        const updatedStatus = { ...formData, status: "publish" }
        Add_e_Book(updatedStatus);
        setFormData({ ...DefaultValues, thumbnail: null });
    }

    return (
        <div className="mt-4 mb-24 mx-2 flex flex-col w-full font-Inter">

            <h1 className='text-2xl font-medium mb-4'>Add New eBook</h1>

            <div className='border-1 border-gray-300 w-[70%] rounded-lg'>

                <div className="mb-6 px-6 pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                        required
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleValues}
                        placeholder='Enter eBook title...'
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6 px-6 pb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            name='category'
                            value={formData.category}
                            onChange={handleValues}
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
                            value={formData.age_Group}
                            onChange={handleValues}
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
                            name='language'
                            value={formData.language}
                            onChange={handleValues}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select Languages</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                            <option value="Telugu">Telugu</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Narrator</label>
                        <select
                            name='narrator'
                            value={formData.narrator}
                            onChange={handleValues}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select Narrator</option>
                            <option value="Narrator1">Narrator1</option>
                            <option value="Narrator2">Narrator2</option>
                            <option value="Narrator3">Narrator3</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6 px-6 pb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Thumbnail Upload
                    </label>

                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={handleFileClick}
                        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors border-gray-400 bg-gray-100 hover:border-gray-400 ${drag ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                                }`}
                    >
                        <input
                            ref={fileInputRef}
                            type='file'
                            name="thumbnail"
                            onChange={handleValues}
                            accept=".png,.jpg,.jpeg"
                            className="hidden"
                        />

                        {!formData.thumbnail && (
                            <div className="flex flex-col items-center">
                                <img src={Upload_Icon} />
                                <p className="text-gray-600 mb-2">Click to upload thumbnail</p>
                            </div>
                        )}

                        {formData.thumbnail && (
                            <div className="mt-4 flex flex-col items-center">
                                {formData.thumbnail.type.startsWith("image/") ? (
                                    <img
                                        src={URL.createObjectURL(formData.thumbnail)}
                                        alt="Thumbnail Preview"
                                        className="w-32 h-32 object-cover rounded-md border"
                                    />
                                ) : (
                                    <p className="text-gray-700 font-medium">
                                        {formData.thumbnail.name}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className='mb-6 px-6 pb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                        eBook Content
                    </label>
                    <textarea
                        name='content'
                        value={formData.content}
                        onChange={handleValues}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                        placeholder='Write or copy text...'
                    />
                    <p className='block text-sm font-medium text-[#7B9D51] mb-2 mt-1 ml-2'>
                        Write your complete eBook content. You can format text, and include any narrative elements.
                    </p>
                </div>

                <div className='flex justify-end pr-4 mb-4 mr-4 space-x-6'>
                    <button
                        onClick={handleSaveAsDraft}
                        className='border-1 border-gray-300 px-8 py-2 rounded-md cursor-pointer font-extralight'
                    >
                        Save as draft
                    </button>
                    <button
                        onClick={handlePublish}
                        className='bg-[#7B9D51] px-6 py-2 text-white rounded-md cursor-pointer font-extralight'
                    >
                        Publish
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddNewEBook