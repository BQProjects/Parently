import { createContext, useContext, useState } from "react";

const EbookContext = createContext();

export const EbookProvider = ({ children }) => {
    
    const [booksData, setBooksData] = useState([]);

    const Add_e_Book = (bookData) => {
        const EbookWithId = { ...bookData, id: Date.now() };
        setBooksData((prev) => [...prev, EbookWithId])
    }

    console.log("Context Data: ",booksData);

    const Remove_e_Book = (id) => {
        setBooksData((prev) => prev.filter((book) => book.id !== id));
    }

    const CategoriesList = () => {
        const Unique_Cat = new Set(booksData.map((book) => book.category));
        
        return ["All", ...Unique_Cat];
    }

    console.log("Categories List: ", CategoriesList());

    const AccessLevel = () => {
        const Unique_Access = new Set(booksData.map((book) => book.AccessLevel));

        return ["All", ...Unique_Access];
    }

    console.log("AccessLevel List: ", AccessLevel());

    const Updating_e_Book_Status = (id, newStatus) => {
        setBooksData((prev) => prev.map((book) => book.id === id ? { ...book, status: newStatus} : book));
    }

    const Updating_Access_Level = (id, newAccessLevel) => {
        setBooksData((prev) => prev.map((book) => book.id === id ? { ...book, AccessLevel: newAccessLevel} : book));
    }

    return (
        <EbookContext.Provider value={{ booksData, Add_e_Book, Remove_e_Book, CategoriesList, AccessLevel, Updating_e_Book_Status, Updating_Access_Level }} >
            {children}
        </EbookContext.Provider>
    )
}

export const useEbook = () => {
    return useContext(EbookContext);
}