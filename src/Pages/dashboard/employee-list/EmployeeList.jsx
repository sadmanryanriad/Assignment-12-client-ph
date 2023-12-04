import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Xicon from "../../../components/Xicon";
import Verified from "../../../components/Verified";
import Swal from "sweetalert2";
import { useState } from "react";
import PayModal from "./PayModal";

const EmployeeList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payId, setPayId] = useState();
  const [paySalary, setPaySalary] = useState();
  const [payEmail, setPayEmail] = useState();
  const axiosSecure = useAxiosSecure();
  const { data: employees = [], refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employees");
      return res.data;
    },
  });
  //   console.log(employees);
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
  const openModal = (id, salary, email) => {
    // console.log(id, salary);
    setPayId(id);
    setPaySalary(salary);
    setPayEmail(email);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handlePay = (e) => {
    e.preventDefault();
    const month = e.target.month.value;
    const year = e.target.year.value;
    const transactionInfo = {
        email: payEmail,
        salary: parseInt(paySalary),
        month: month,
        year: year
    }
    axiosSecure.post('/transaction',transactionInfo)
    .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Paid Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
        if(res.data.message) {
            // console.log(res.data.message);
            Swal.fire({
                icon: "error",
                title: "Already Paid",
                text: "You don't want to pay twice, right?",
              });
        }
    })
    closeModal();
  };

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
                <td>
                  <button
                    onClick={() => openModal(employee._id, employee.salary, employee.email)}
                    className="btn btn-sm bg-green-400"
                    disabled={!employee?.verified}
                  >
                    Pay
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm bg-slate-300">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* //modal  */}
      {isModalOpen && (
        <PayModal
          id={payId}
          salary={paySalary}
          handlePay={handlePay}
          closeModal={closeModal}
        ></PayModal>
      )}
    </div>
  );
};

export default EmployeeList;
