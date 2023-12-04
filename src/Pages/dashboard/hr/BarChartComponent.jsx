/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis} from 'recharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const BarChartComponent = ({email}) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const url = `/transaction/${email}`;
    useEffect(()=>{
        axiosSecure.get(url)
        .then(res=>{
            setData(res.data);
            setLoading(false);
        })
    },[])

    if(loading) return <h2>Loading Bar chart...</h2>

    return (
        <div className="p-5 md:p-10">
            <h2 className='text-xl font-semibold mb-10'>Salary history: </h2>
            <ResponsiveContainer width={"50%"} aspect={3}>
                <BarChart data={data} width={400} height={400} >
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={"salary"} fill='blue'></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;