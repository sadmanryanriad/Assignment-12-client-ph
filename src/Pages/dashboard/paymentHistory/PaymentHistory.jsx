/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../../components/Spinner";
import { AuthContext } from "../../../provider/AuthProvider";

const PaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [localLoading,setLocalLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (loading) return;
    axiosSecure.get(`/transactions/${user?.email}`).then((res) => {
      setTransactions(res.data);
      setLocalLoading(false);
    });
  }, [axiosSecure, loading, user?.email]);

  return (
    <div className="p-5 md:p-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>month</th>
              <th>amount</th>
              <th>TransactionID</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, idx) => (
              <tr key={transaction._id}>
                <td>{idx+1}</td>
                <th>{transaction.month}</th>
                <td>{transaction.salary}</td>
                <td>{transaction._id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {localLoading && <Spinner></Spinner>}
      </div>
    </div>
  );
};

export default PaymentHistory;
