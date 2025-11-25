import { createContext, useContext, useState } from "react";

export const FieldManagementContext = createContext();

export const FieldManagementProvider = ({ children }) => {

    return(
        <FieldManagementContext.Provider value={{}}>
            {children}
        </FieldManagementContext.Provider>
    )
    
}

export const useFieldManagementContext = () => {
    return useContext(FieldManagementContext)
}