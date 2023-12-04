import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";
import AllEmployeeList from "../Pages/dashboard/employee-list/AllEmployeeList";
import EmployeeList from "../Pages/dashboard/employee-list/EmployeeList";
import PaymentHistory from "../Pages/dashboard/paymentHistory/PaymentHistory";

const VerifyDesignation = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Use state to store the designation
  const [designation, setDesignation] = useState("");
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
  console.log(designation);
  return (
    <div>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          {designation === "admin" && <AllEmployeeList></AllEmployeeList>}
          {designation === "HR" && <EmployeeList></EmployeeList>}
          {designation === "employee" && <PaymentHistory email={user?.email}></PaymentHistory>}
        </div>
      )}
    </div>
  );
};

export default VerifyDesignation;
