import { FaList, FaNetworkWired } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";

const Dashboard = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className="flex max-w-screen-2xl mx-auto">
                {/* side bar */}
                <div className="w-64 min-h-screen bg-green-400">
                    <ul className="menu p-4">
                        <li><NavLink to={"/dashboard/employee-list"}>Employee List <FaList></FaList></NavLink></li>
                        <li><NavLink to={"/dashboard/progress"}> Progress <FaNetworkWired></FaNetworkWired></NavLink></li>
                    </ul>
                </div>
                {/* content */}
                <div className="flex-1"> 
                <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;