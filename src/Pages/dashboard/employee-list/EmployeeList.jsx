import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Xicon from "../../../components/Xicon";
import Verified from "../../../components/Verified";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employees = [], refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
//   console.log(employees);
  const handleVerified = (id)=>{
    axiosSecure.patch(`users/admin/${id}`)
    .then(res=>{
        refetch();
        // console.log(res.data);
        if(res.data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Status changed`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Bank Account</th>
              <th>Salary</th>
              <th>Pay</th>
              <th>Details</th>
            </tr>
          </thead>
          {/* row 1 */}
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <th>{index + 1}</th>
                <td>{employee?.name}</td>
                <td>{employee?.email}</td>
                <td>
                  <button onClick={()=>handleVerified(employee._id)} className="hover:scale-110">{employee?.verified ? <Verified></Verified> : <Xicon></Xicon>}</button>
                </td>
                <td>{employee?.bankAccountNumber}</td>
                <td>{employee?.salary}</td>
                <td>
                  <button  className="btn btn-sm bg-green-400">pay</button>
                </td>
                <td>
                  <button className="btn btn-sm bg-slate-300">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
