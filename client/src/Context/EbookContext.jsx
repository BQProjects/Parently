import { createContext, useContext, useState } from "react";

const EbookContext = createContext();

export const EbookProvider = ({ children }) => {
    
    const [booksData, setBooksData] = useState([]);

    const Add_e_Book = (bookData) => {
        const EbookWithId = { ...bookData, id: Date.now() };
        setBooksData((prev) => [...prev, EbookWithId])
    }

    const Remove_e_Book = (id) => {
        setBooksData((prev) => prev.filter((book) => book.id !== id));
    }

    return (
        <EbookContext.Provider value={{ booksData, Add_e_Book, Remove_e_Book }} >
            {children}
        </EbookContext.Provider>
    )
}

export const useEbook = () => {
    return useContext(EbookContext);
}