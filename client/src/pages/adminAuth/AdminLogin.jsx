import React from "react";
import Apparently_Logo from "../../assets/Images/Apparently_Logo.png";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const DefaultValues = { email: "", password: "" };
    const navigate = useNavigate();

    const [Admin, setAdmin] = React.useState(DefaultValues); 
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleChange = (e) => {
        setAdmin({ ...Admin, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = () => {
        if(Admin.email.trim() !== "" && Admin.password.trim() !==""){
            if(Admin.email ==="admin@gmail.com" && Admin.password ==="admin"){
                navigate("/admin/dashboard");
                if(rememberMe)
                    localStorage.setItem("adminCred", "true");
                else
                    localStorage.removeItem("adminCred")
            }
        }
        else{
            alert("Enter the Fields!!!");
        }
    }

    React.useEffect(() => {

        const Saved = localStorage.getItem("adminCred");
        if(Saved){
            navigate("/admin/dashboard")
        }
    }, []);

    return (
        <>
            <div className="bg-[#FFFBF4] w-full h-full min-h-full font-Inter">
                <div
                    className="relative bg-white w-[28%] border-2 border-gray-300 rounded-md left-[65%] top-8 flex flex-col justify-center py-8 px-6"
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
                            name="email"
                            value={Admin.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 outline-none text-[15px]" 
                        />

                        <label className="text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            name="password"
                            value={Admin.password}
                            onChange={handleChange}
                            placeholder="Enter your password" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 outline-none text-[15px]" 
                        />

                        <div className="flex justify-between">
                            <div className="flex space-x-1.5 items-center">
                                <input 
                                    type="checkbox" 
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <p className="text-[14px] font-light">Remember me</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-3">
                            <button 
                                onClick={handleSubmit}
                                className="bg-[#7B9D51] w-full py-2 rounded-md text-white font-extralight"
                            >
                                Login
                            </button>
                            <p className="text-gray-400 text-[12px]">Need help? Contact your system administrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
