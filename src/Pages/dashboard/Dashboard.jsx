import { useContext, useState } from "react";
import { FaHome, FaList, FaNetworkWired } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../provider/AuthProvider";
import Spinner from "../../components/Spinner";

const Dashboard = () => {

  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Use state to store the designation
  const [designation, setDesignation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useQuery({
    queryKey: ["designation"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      setDesignation(res.data.designation);
      setIsLoading(false);
      return res.data;
    },
  });
  console.log(isLoading);
  console.log(designation);

  return (
    <>
{isLoading? <Spinner></Spinner> : 
      <div className="flex max-w-screen-2xl mx-auto">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-green-400">
        <ul className="menu p-4">
          {designation === "admin" && (
            <>
            <li>
              <NavLink to={"/dashboard/all-employee-list"}>
                All Employee List <FaList />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                Home <FaHome></FaHome>
              </NavLink>
            </li>
            </>
          )}
          {designation === "HR" && (
            <>
              <li>
                <NavLink to={"/dashboard/employee-list"}>
                  Employee List <FaList />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/progress"}>
                  Progress <FaNetworkWired />
                </NavLink>
              </li>
              <li>
              <NavLink to={"/"}>
                Home <FaHome></FaHome>
              </NavLink>
            </li>
            </>
          )}
          {designation === "employee" && (
            <>
              <li>
                <NavLink to={"/dashboard/payment-history"}>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/work-sheet"}>Work Sheet</NavLink>
              </li>
              <li>
              <NavLink to={"/"}>
                Home <FaHome></FaHome>
              </NavLink>
            </li>
            </>
          )}
        </ul>
      </div>
      {/* content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
}
    </>
  );
};

export default Dashboard;
