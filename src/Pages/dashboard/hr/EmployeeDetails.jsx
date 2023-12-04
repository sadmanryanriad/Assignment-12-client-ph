import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../../components/Spinner";
import BarChartComponent from "./BarChartComponent";

const EmployeeDetails = () => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const url = `/details/${id}`;
    // console.log(url);

    useEffect(()=>{
        axiosSecure.get(url)
        .then(res=>{
            setDetails(res.data);
            setLoading(false);
            // console.log(res.data);
        })
    },[axiosSecure, url])

    if(loading) return <Spinner></Spinner>

    return (
        <div className="p-5 md:p-12">
            <h2 className="text-2xl font-semibold">Name: {details.name}</h2>
            <img className="w-28 mt-5 rounded-lg" src={details.image} alt="" />
            <h2 className="text-xl font-semibold text-blue-400">Designation: {details.designation}</h2>
            <BarChartComponent email={details.email}></BarChartComponent>

        </div>
    );
};

export default EmployeeDetails;