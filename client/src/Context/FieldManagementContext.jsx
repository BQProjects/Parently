import { createContext, useContext, useState } from "react";

export const FieldManagementContext = createContext();

export const FieldManagementProvider = ({ children }) => {

    const [Categories, setCategories] = useState([]);
    const [AgeCategories, setAgeCategories] = useState([]);

    const Add_New_Category = (newCategory) => {
        setCategories(Categories => [...Categories, newCategory])
    }

    const update_Category = (index, category) => {
        setCategories(Categories => Categories.map((cat, i) => i === index ? category : cat))
    }

    const delete_Category = (index) => {
        setCategories(Categories => Categories.filter((_, i) => i !== index))
    }

    const Add_New_AgeCategory = (newCategory) => {
        setAgeCategories(AgeCategories => [...AgeCategories, newCategory])
    }

    const update_AgeCategory = (index, category) => {
        setAgeCategories(AgeCategories => AgeCategories.map((cat, i) => i === index ? category : cat))
    }

    const delete_AgeCategory = (index) => {
        setAgeCategories(AgeCategories => AgeCategories.filter((_, i) => i !==index))
    }

    return (
        <FieldManagementContext.Provider value={{ 
            Categories, Add_New_Category, update_Category, delete_Category,
            AgeCategories, Add_New_AgeCategory, update_AgeCategory, delete_AgeCategory,
         }}>
            {children}
        </FieldManagementContext.Provider>
    )

}

export const useFieldManagementContext = () => {
    return useContext(FieldManagementContext);
}