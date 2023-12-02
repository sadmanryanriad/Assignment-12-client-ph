import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCursorText, BsImageFill } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { uploadImage } from "../../hooks/uploadImage";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Registration = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.files[0];
    const imageData = await uploadImage(image);
    // console.log(imageData?.data?.display_url);
    const uploadedImageLink = imageData?.data?.display_url;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{6,}$/.test(password)
    ) {
      toast.error(
        "Password must have 6 character, a capital and a special character."
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name, uploadedImageLink);
        console.log("updated");
                  //create user info in the database
                  const userInfo = {
                    name: name,
                    email: email,
                  }
                  axiosSecure.post('/users', userInfo)
                  .then(res=> {
                    if(res.data.insertedId) console.log('user data inserted into the database');
                  })
        toast.success("user created successfully!");
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-top  md:pt-10 ">
      <div className="flex flex-col dark:bg-slate-500 dark:text-gray-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase ">
          Create an Account
        </div>
        <div className="relative mt-10 h-px ">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className=" px-4 text-xs text-gray-800 uppercase font-semibold">
              fill up this form
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            {/* input */}
            <div className="flex flex-col mb-6">
              <label
                type="text"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
              >
                Name:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
                  <BsCursorText></BsCursorText>
                </div>

                <input
                  type="text"
                  name="name"
                  className="text-sm sm:text-base placeholder-gray-800 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400  dark:bg-slate-400 "
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                type="text"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
              >
                Select Image
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
                  <BsImageFill></BsImageFill>
                </div>

                <input
                required
                  type="file"
                  name="image"
                  accept="image/*"
                  className="text-sm sm:text-base placeholder-gray-800 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400  dark:bg-slate-400 "
                  placeholder="Image link"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                type="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="text-sm sm:text-base placeholder-gray-800 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400  dark:bg-slate-400 "
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                type="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-green-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="text-sm sm:text-base placeholder-gray-800 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-green-400  dark:bg-slate-400 "
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex w-full mt-10">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gradient-to-r from-green-500 via-success to-green-400 hover:text-black rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Create Account</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to={"/login"}
            className="inline-flex items-center font-bold text-green-500 hover:text-green-700 text-xs text-center"
          >
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            <span className="ml-2">Already have account? login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
