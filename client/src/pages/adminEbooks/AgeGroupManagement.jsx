import React from 'react'
import { useFieldManagementContext } from '../../Context/fieldManagementContext';
import Edit_Icon from "../../assets/Images/Edit_Icon.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import Age_Group_Icon from "../../assets/Images/Age_Group_Icon.png";

const AgeGroupManagement = () => {

    const { AgeCategories, Add_New_AgeCategory, update_AgeCategory, delete_AgeCategory } = useFieldManagementContext();

    const DefaultValues = {
        MinAge: "",
        MaxAge: "",
        edit: false,
    }

    const [AgeCategory, setAgeCategory] = React.useState(DefaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAgeCategory({ ...AgeCategory, [name]: value })
    };

    const handleSaveCategory = () => {
        if (AgeCategory.MinAge.trim() === "" && AgeCategory.MaxAge.trim() === "")
            return;

        Add_New_AgeCategory(AgeCategory);
        setAgeCategory(DefaultValues);
    }

    const handleUpdateButton = (index) => {
        update_AgeCategory(index, { ...AgeCategories[index], edit: true })
    };

    const handleUpdateSave = (index) => {
        update_AgeCategory(index, { ...AgeCategories[index], edit: false })
    };

    const handleDeleteButton = (index) => {
        delete_AgeCategory(index)
    };

    return (
        <>
            <div className='border-[#adc98c] border px-2 py-8 rounded-md font-Inter'>
                <h1 className='text-base font-semibold mb-4 mx-5'>Age Range Details</h1>

                <div className='w-full mx-4 space-y-1'>
                    <div className='flex w-full space-x-4'>
                        <div className='flex flex-col w-[48%]'>
                            <label
                                className='text-gray-700 text-sm'
                            >
                                Minimum Age
                            </label>
                            <input
                                name='MinAge'
                                value={AgeCategory.MinAge}
                                onChange={handleInputChange}
                                type="text"
                                className='border px-4 py-2 rounded-sm border-[#adc98c] outline-none'
                            />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label
                                className='text-gray-700 text-sm'
                            >
                                Maximum Age
                            </label>
                            <input
                                name="MaxAge"
                                value={AgeCategory.MaxAge}
                                onChange={handleInputChange}
                                type="text"
                                className='border px-4 py-2 rounded-sm border-[#adc98c] outline-none'
                            />
                        </div>
                    </div>
                    <p className='text-gray-400 text-[13px] mx-1 mt-2 w-[42%]'>
                        Specify the age range this group covers. Leave maximum age empty for open-ended ranges (e.g., "13+" years).
                    </p>
                    <div className='w-full flex justify-end space-x-3 -ml-10 mt-2'>
                        <button
                            className='border-[#adc98c] border px-6 py-2 rounded-md bg-gray-300'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveCategory}
                            className='bg-[#7B9D51] px-8 py-2 text-sm text-white rounded-md'
                        >
                            Save Category
                        </button>
                    </div>
                </div>
            </div>

            <div className='border-[#adc98c] border px-2 py-8 rounded-md font-Inter mt-4'>
                {
                    AgeCategories.length > 0
                        ?
                        (
                            <>
                                <h1 className='font-semibold text-lg mb-6 mx-5'>Existing Age Category</h1>
                                {AgeCategories.map((age, index) => (
                                    <div key={index} className='mb-3'>
                                        {age.edit ? (
                                            <div className='flex items-center w-full mx-4 space-x-3'>
                                                <input
                                                    type='text'
                                                    value={age.MinAge}
                                                    onChange={(e) =>
                                                        update_AgeCategory(index, {
                                                            ...age,
                                                            MinAge: e.target.value,
                                                        })
                                                    }
                                                    className='border px-3 py-2 rounded-md w-[43%]'
                                                />
                                                <p className='text-[32px]'>-</p>
                                                <input
                                                    type='text'
                                                    value={age.MaxAge}
                                                    onChange={(e) =>
                                                        update_AgeCategory(index, {
                                                            ...age,
                                                            MaxAge: e.target.value,
                                                        })
                                                    }
                                                    className='border px-3 py-2 rounded-md w-[43%]'
                                                />

                                                <button
                                                    onClick={() => handleUpdateSave(index)}
                                                    className='ml-2 text-green-600'
                                                >
                                                    <MdAdd size={28} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className='w-full flex items-center mt-2 mx-4'>
                                                <div className='w-[110%] border border-[#adc98c] px-4 py-3 rounded-md flex items-center space-x-4'>
                                                    <img src={Age_Group_Icon} alt='' className='h-7' />
                                                    <p>{age.MinAge} - {age.MaxAge} Years</p>
                                                </div>

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
                        )
                        :
                        <>
                            <div className='w-full flex justify-center'>
                                <p className='font-semibold tracking-wide text-[22px]'>
                                    No Age Categories
                                </p>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default AgeGroupManagement