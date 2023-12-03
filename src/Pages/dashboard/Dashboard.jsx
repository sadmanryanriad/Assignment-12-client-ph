import { FaHome, FaList, FaNetworkWired } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const userRole = "HR";

  return (
    <>
      <div className="flex max-w-screen-2xl mx-auto">
        {/* side bar */}
        <div className="w-64 min-h-screen bg-green-400">
          <ul className="menu p-4">
            {userRole === "admin" && (
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
            {userRole === "HR" && (
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
            {userRole === "employee" && (
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
    </>
  );
};

export default Dashboard;
