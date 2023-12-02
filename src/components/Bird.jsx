import Lottie from "lottie-react";
import bird from "../../src/assets/bird.json";

const Bird = () => {
    return (
        <div className="w-full ">
            <Lottie animationData={bird} loop={true} />
        </div>
    );
};

export default Bird;