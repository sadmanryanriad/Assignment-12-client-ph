/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const PayModal = ({ handlePay, salary, closeModal }) => {
  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
          <div className="text-center">
            <h2 className="font-semibold text-2xl mb-3 p-3">Pay ${salary}?</h2>
            <form onSubmit={handlePay}>
              <label htmlFor="month" className="p-3">
                Choose a month:{" "}
              </label>
              <select
                name="month"
                className="select select-warning dark:bg-gray-500 dark:text-gray-300 select-bordered w-full max-w-xs"
              >
                {/* <option disabled selected>
                  select a rating
                </option> */}
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              {/* year */}
              <label htmlFor="month" className="px-5 mt-3">
                Choose a Year:{" "}
              </label>
              <select
                name="year"
                className="mt-3 select select-warning dark:bg-gray-500 dark:text-gray-300 select-bordered w-full max-w-xs"
              >
                <option>2023</option>
                <option>2024</option>
              </select>

              <div className="p-3 mt-4 text-center space-x-4 md:block">
                <p onClick={closeModal} className="btn btn-sm">
                  Cancel
                </p>
                <button type="submit" className="btn btn-success btn-sm ">
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

PayModal.propTypes = {
  handleRating: PropTypes.func,
  closeModal: PropTypes.func,
};

export default PayModal;
