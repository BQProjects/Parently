import React from "react";
import Parently_Header_Logo  from "../Images/parently_header_logo.png"

const Header = () => {
    return(
        <>
            <div className="bg-[#FFFBF4] h-14 border-2 border-gray-300 flex items-center space-x-2 px-36">
                <img 
                    src={Parently_Header_Logo}
                    className="h-8"
                />
                <h1 className="text-base font-Inter">Apparently CRM</h1>
            </div>
        </>
    );
};

export default Header;
