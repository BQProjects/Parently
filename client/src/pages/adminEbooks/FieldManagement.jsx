import React from 'react'
import CategoryManagement from './CategoryManagement';
import AgeGroupManagement from './AgeGroupManagement';

const FieldManagement = () => {

    const tabs = [
        { tabName: "Category Management", value: "Category Management" },
        { tabName: "Age Group Management", value: "Age Group Management" },
    ]

    const [tabView, setTabView] = React.useState("Category Management");

    const renderComponent = () => {
        switch(tabView){
            case "Category Management":
                return <CategoryManagement />;
            case "Age Group Management":
                return <AgeGroupManagement />;
            default:
                return <CategoryManagement />;
        }
    }

    return (
        <div className='font-Inter mx-2 mb-12'>
            <h1 className='font-medium text-2xl mt-4 ml-2'>Field Management</h1>
            <div className='border-[#adc98c] border-1 py-8 px-8 rounded-md flex my-4 space-x-16' aria-label="Tabs">
                {
                    tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setTabView(tab.value)}
                            className={`${tabView === tab.value
                                ? 'border-[#7B9D51] '
                                : 'border-transparent'
                                }
                                    cursor-pointer py-2 px-1 border-b-3 text-sm transition-all duration-200
                                    focus:outline-none tracking-wide text-black font-semibold`}
                        >
                            {tab.tabName}
                        </button>
                    ))
                }
            </div>

            <div className="p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-in-out" >
                {renderComponent()}
            </div>
        </div>
    )
}

export default FieldManagement