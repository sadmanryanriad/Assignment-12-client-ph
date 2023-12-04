import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Verified from "../../../components/Verified";
import Xicon from "../../../components/Xicon";

const AllEmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allEmployees = [], refetch } = useQuery({
      queryKey: ["allEmployees"],
      queryFn: async () => {
        const res = await axiosSecure.get("/allEmployees");
        return res.data;
      },
    });

    const handleVerified = (id) => {
        axiosSecure.patch(`users/admin/${id}`).then((res) => {
          refetch();
          // console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Status changed`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      };
      const handleMakeHR = (id) =>{
        axiosSecure.patch(`users/makeHR/${id}`)
        .then(res=>{
            refetch();
            if(res.data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Employee has been promoted to HR`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })
      }
      const handleFire = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`users/admin/fire/${id}`)
                .then(res=>{
                    refetch();
                    if(res.data.modifiedCount){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Fired`,
                            showConfirmButton: false,
                            timer: 1500,
                          });
                    }
                })
            }
          });
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
              <th>Designation</th>
              <th>Fire</th>
            </tr>
          </thead>
          {/* row 1 */}
          <tbody>
            {allEmployees.map((employee, index) => (
              <tr key={employee._id}>
                <th>{index + 1}</th>
                <td>{employee?.name}</td>
                <td>{employee?.email}</td>
                <td>
                  <button
                    onClick={() => handleVerified(employee._id)}
                    className="hover:scale-110"
                  >
                    {employee?.verified ? (
                      <Verified></Verified>
                    ) : (
                      <Xicon></Xicon>
                    )}
                  </button>
                </td>
                <td>{employee?.bankAccountNumber}</td>
                <td>{employee?.salary}</td>
                <td>{employee?.designation=='HR'? 'HR' : employee?.designation == 'fired'? "fired" : <button onClick={()=>handleMakeHR(employee._id)} className="btn btn-sm bg-success text-white">make HR</button>}</td>
                <td>
                  <button onClick={()=>handleFire(employee._id)} disabled={employee?.fired} className="btn btn-sm bg-red-500 text-white">Fire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllEmployeeList;