import { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../../components/Spinner";
import WorkSheetTable from "../../../components/WorkSheetTable";

const Progress = () => {
  const [workSheetData, setWorkSheetData] = useState([]);
  const [allList, setAllList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [sortEmail, setSortEmail] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(""); 
  const axiosSecure = useAxiosSecure();
  
  useEffect(()=>{
    axiosSecure.get('/work-sheet')
    .then(res=>{
      setAllList(res.data);
    })
  },[axiosSecure])

  useEffect(()=>{
    let apiUrl = `/work-sheet?email=${sortEmail}&month=${selectedMonth}`;
    console.log(apiUrl);
    axiosSecure.get(apiUrl)
    .then(res=>{
      setWorkSheetData(res.data);
      setIsLoading(false);
    })
  },[axiosSecure, selectedMonth, sortEmail])



  const handleSortedEmail = (e) => {
    setSortEmail(e.target.value);
  };

  const handleSortedMonth = (e) => {
    setSelectedMonth(e.target.value);
  };

  const names = new Set(allList.map(item=>item.email));
  const namesArray = [...names]
  console.log(namesArray);

  if (isloading) return <Spinner></Spinner>;

  return (
    <div>
      <Heading>Work Sheets</Heading>
      <form className="mb-8 max-w-fit mx-auto">
        <h2 className="text-xl font-semibold mb-2">Sort by:</h2>
        <div className="flex gap-2 items-center justify-center">
          <label>Name:</label>
          <select
            className="select select-bordered w-full max-w-xs dark:bg-gray-700"
            onChange={handleSortedEmail}
          >
            <option value="">All</option>
            {namesArray?.map(name=><option key={name} value={name}>{name}</option>)}
          </select>
          <label>Month:</label>
          <select
            className="select select-bordered w-full max-w-xs dark:bg-gray-700"
            onChange={handleSortedMonth}
            value={selectedMonth}
          >
            <option value="">All</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </form>
      <WorkSheetTable data={workSheetData}></WorkSheetTable>
    </div>
  );
};

export default Progress;
