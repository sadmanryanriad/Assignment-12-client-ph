import { useAos } from "../../hooks/useAos";
import LocationOnMap from "../../components/LocationOnMap";

const FindUs = () => {

  useAos();

  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-20">
      <div className="text-center">
        <div className="flex flex-col p-4 ">
          <div  data-aos="fade-right" data-aos-once className="flex-1  mt-5">
            <h2 className="text-4xl mb-8 font-extrabold">Find us on <span className="text-green-600">G<span className="text-yellow-400">oo</span>gle <span className="text-red-500">Map</span></span></h2>
            <address className="text-xl md:text-2xl space-y-5">
              <p className="hover:text-green-400  dark:hover:text-green-400">123 Hotel Street</p>
              <p className="hover:text-green-400  dark:hover:text-green-400">Dhaka, Bangladesh</p>
              <p className="hover:text-green-400  dark:hover:text-green-400">Postal Code: 12345</p>
              <p className="hover:text-green-400  dark:hover:text-green-400">Phone: +8801712345678</p>
            </address>
          </div>
            <div className="mx-auto">
                <LocationOnMap></LocationOnMap>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FindUs;
