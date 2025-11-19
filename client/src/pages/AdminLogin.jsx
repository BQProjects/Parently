import Apparently_Logo from "../../assets/Images/Apparently_Logo.png";

const AdminLogin = () => {

    return (
        <>
            <div className="bg-[#FFFBF4] w-full h-full min-h-full font-Inter">
                <div
                    className="relative bg-white w-[28%] border-2 border-gray-300 rounded-md left-[65%] top-10 flex flex-col justify-center py-8 px-6"
                >
                    <div className="flex flex-col items-center space-y-4">
                        <img src={Apparently_Logo} className="h-16" />
                        <div className="flex flex-col items-center space-y-0.5">
                            <h1 className="text-xl font-medium">
                                Admin Login
                            </h1>
                            <p className="text-sm tracking-wide font-extralight text-gray-500">
                                Access your CRM dashboard
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 px-6 w-full space-y-6">
                        <label className="text-sm font-medium text-gray-600">
                            Email ID
                        </label>
                        <input 
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 outline-none text-[15px]" 
                        />

                        <label className="text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            placeholder="Enter your password" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 outline-none text-[15px]" 
                        />

                        <div className="flex justify-between">
                            <div className="flex space-x-1.5 items-center">
                                <input type="checkbox" />
                                <p className="text-[14px] font-light">Remember me</p>
                            </div>
                        </div>

                        <button>
                            
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
