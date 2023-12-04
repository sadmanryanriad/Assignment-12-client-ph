/* eslint-disable react/prop-types */
const WorkSheetTable = ({ data = [] }) => {
    const workSheetArray = data.slice().reverse();
  return (
    <div className="py-5 md:py-10 max-w-fit mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Task</th>
              <th>Hour</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {workSheetArray.map((work, idx) => (
              <tr key={work._id}>
                <th>{idx+1}</th>
                <td>{work.task}</td>
                <td>{work.hour}</td>
                <td>{work.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSheetTable;
