import { createContext, useContext, useState } from "react";

export const adminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [adminData, setAdminData] = useState([]);

    const add_Admin_Data = (data) => {
        const adminData_with_Id = { id: Date.now(), ...data };
        setAdminData([ ...adminData, adminData_with_Id])
    }

    console.log("Context Admin Data: ", adminData);

    return(
        <adminContext.Provider value={{adminData, add_Admin_Data}}>
            {children}
        </adminContext.Provider>
    )

}

export const UseAdmin = () => {
    return useContext(adminContext)
}