import Swal from "sweetalert2";
import Heading from "../../../components/Heading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const WorkSheet = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const hour = form.hour.value;
    const date = form.date.value;
    // Convert the date to a JavaScript Date object
    const selectedDate = new Date(date);
    // Get the month name in the format "January", "February", etc.
    const month = selectedDate.toLocaleDateString("en-US", { month: "long" });
    console.log(task, hour, date, month);
    const workInfo = {
        task: task,
        hour: hour,
        date: date,
        month: month,
    }
    axiosSecure.post(`work-sheet`, workInfo)
    .then(res=>{
        console.log(res.data);
        if(res.data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };
  return (
    <div className="p-5 md:p-10">
      <Heading>Work Sheet</Heading>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        <label className="px-2">Tasks:</label>
        <select name="task" required className="select select-bordered w-36">
          <option>Sales</option>
          <option>Support</option>
          <option>Content</option>
          <option>Paper Work</option>
        </select>
        <label className="px-2">Hours:</label>
        <input
          name="hour"
          required
          type="number"
          placeholder="hour"
          className="input input-bordered w-28"
        />
        <label className="px-2">Date:</label>
        <input name="date" required type="date" />
        <button type="submit" className="btn btn-success text-white ml-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default WorkSheet;
