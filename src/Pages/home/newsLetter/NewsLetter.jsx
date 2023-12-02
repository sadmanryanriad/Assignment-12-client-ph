import toast from "react-hot-toast";
import { useAos } from "../../../hooks/useAos";
import Bird from "../../../components/Bird";
import Heading from "../../../components/Heading";

const NewsLetter = () => {
  const handleNewsLetter = e =>{
    e.preventDefault();
    toast.success("You will get notified!");
  }

  useAos();


  return (
    <>
    <Heading>NewsLetter</Heading>
      <div className="max-w-7xl overflow-hidden mx-auto flex flex-col md:flex-row items-center">
        {/* newsletter side */}
        <div data-aos="fade-up" data-aos-once className="flex-1 dark:text-gray-300 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold dark:text-gray-300 sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the announcements and exclusive discounts
                feel free to sign up with your email.
              </p>
              <form onSubmit={handleNewsLetter} className="join">
                <input
                  className="input input-bordered dark:bg-gray-600 join-item p-2"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
                <button type="submit" className="btn join-item rounded-r-lg bg-green-400 border-none hover:bg-gray-600 hover:text-gray-200">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* animation side */}
        <div data-aos="fade-right" className="flex-1">
          <Bird></Bird>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
