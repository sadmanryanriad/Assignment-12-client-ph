import toast from "react-hot-toast";
import { useAos } from "../../hooks/useAos";

const handleSubmit = (e) => {
  e.preventDefault();
  toast.success("We will Contact you!");
};

const ContactUsForm = () => {
  useAos();
  return (
    <>
    
      <div
        id="contact-me"
        className="max-w-7xl mx-auto text-center pt-16 md:pt-24"
      >
        <h2 className="text-3xl md:text-5xl font-semibold">Contact US</h2>
        <div
          data-aos="fade-right"
          data-aos-once
          className="flex items-center justify-center p-12"
        >
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit}>
              <div className="mb-5"></div>
              <div className="mb-5">
                <label
                  name="email"
                  className="mb-3 block text-base font-medium "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border dark:border-none bg-white dark:bg-gray-600 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-400 focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  name="message"
                  className="mb-3 block text-base font-medium "
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border dark:border-none bg-white dark:bg-gray-600 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-400 focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button className="btn btn-btn btn-sm sm:btn-md dark:bg-gray-400 bg-gray-700 text-white dark:text-black border-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
