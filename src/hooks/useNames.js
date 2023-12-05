import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const [employeeData, setEmployeeData] = useState([]);
const axiosSecure = useAxiosSecure();

axiosSecure.get('work-sheet')
.then(res=>{
    setEmployeeData(res.data);
})

const names = () => {
    return
};

export default names;