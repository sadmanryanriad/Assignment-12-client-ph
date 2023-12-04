import { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../../components/Spinner";
import WorkSheetTable from "../../../components/WorkSheetTable";

const Progress = () => {
    const [workSheetData, setWorkSheetData] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(()=>{
        axiosSecure.get(`/work-sheet`)
        .then(res=>{
            setWorkSheetData(res.data);
            setIsLoading(false);
        })
    },[axiosSecure])

    if(isloading) return <Spinner></Spinner>
    
    return (
        <div>
            <Heading>Work Sheets</Heading>
            <WorkSheetTable data={workSheetData}></WorkSheetTable>
        </div>
    );
};

export default Progress;