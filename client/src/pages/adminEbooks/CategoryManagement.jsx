import React from 'react';
import Edit_Icon from "../../assets/Images/Edit_Icon.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import { useFieldManagementContext } from '../../Context/fieldManagementContext';

const CategoryManagement = () => {

    const { Add_New_Category, update_Category, delete_Category, Categories } = useFieldManagementContext();

    const DefaultValues = {
        CategoryName: "",
        edit: false,
    };

    const [Category, setCategory] = React.useState(DefaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...Category, [name]: value });
    };

    const handleSaveCategory = () => {
        if (!Category.CategoryName.trim())
            return;

        Add_New_Category(Category);
        setCategory(DefaultValues);
    };

    const handleUpdateButton = (index) => {
        update_Category(index, { ...Categories[index], edit: true })
    };

    const handleUpdateSave = (index) => {
        update_Category(index, { ...Categories[index], edit: false })
    };

    const handleDeleteButton = (index) => {
        delete_Category(index)
    };

    return (
        <>
            <div className='border-[#adc98c] border px-2 py-8 rounded-md font-Inter'>
                <h1 className='text-base font-semibold mb-4 mx-5'>Category Name</h1>

                <div className='w-full mx-4 space-y-1'>
                    <input
                        type='text'
                        name='CategoryName'
                        value={Category.CategoryName}
                        onChange={handleInputChange}
                        placeholder='Enter Category Name'
                        className='border px-4 py-2 w-[98%] rounded-sm border-[#adc98c] outline-none'
                    />
                    <p className='text-gray-400 text-sm mx-1 mt-1'>
                        This name will appear in dropdown menus when creating videos.
                    </p>
                </div>

                <div className='w-full flex justify-end space-x-4 -ml-6 mt-2'>
                    <button
                        className='border-[#adc98c] border px-6 py-2 rounded-md bg-gray-300'
                        onClick={() => setCategory(DefaultValues)}
                    >
                        Cancel
                    </button>
                    <button
                        className='bg-[#7B9D51] px-8 py-2 text-sm text-white rounded-md'
                        onClick={handleSaveCategory}
                    >
                        Save Category
                    </button>
                </div>
            </div>

            <div className='border-[#adc98c] border px-2 py-8 rounded-md font-Inter mt-4'>
                {Categories.length > 0 ? (
                    <>
                        <h1 className='font-semibold text-lg mb-6 mx-5'>Existing Category</h1>

                        {Categories.map((cat, index) => (
                            <div key={index} className='mb-3'>
                                {cat.edit ? (
                                    <div className='flex items-center w-full mx-4'>
                                        <input
                                            value={cat.CategoryName}
                                            onChange={(e) =>
                                                update_Category(index, {
                                                    ...cat,
                                                    CategoryName: e.target.value,
                                                    edit: true
                                                })
                                            }
                                            className='border px-3 py-2 rounded-md w-[95%]'
                                        />

                                        <button
                                            onClick={() => handleUpdateSave(index)}
                                            className='ml-2 text-green-600 relative -left-12'
                                        >
                                            <MdAdd size={30} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className='w-full flex items-center mt-2 mx-4'>
                                        <p className='w-[110%] border border-[#adc98c] px-4 py-3 rounded-md'>
                                            {cat.CategoryName}
                                        </p>

                                        <button
                                            onClick={() => handleUpdateButton(index)}
                                            className='ml-3 text-blue-600 relative right-24'
                                        >
                                            <img src={Edit_Icon} alt='Edit' className='h-5' />
                                        </button>

                                        <button
                                            onClick={() => handleDeleteButton(index)}
                                            className='ml-3 text-red-600 relative right-20'
                                        >
                                            <RiDeleteBin6Line size={22} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                ) :
                    <>
                        <div className='w-full flex justify-center'>
                            <p className='font-semibold tracking-wide text-[22px]'>
                                No Categories
                            </p>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default CategoryManagement;
