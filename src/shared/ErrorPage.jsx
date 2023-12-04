import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from "../assets/404.json";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
      <Lottie animationData={notFound} loop={true} />
        <Link to={"/"}>
          <button className="btn bg-green-400 hover:text-white m-5 mx-auto">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
