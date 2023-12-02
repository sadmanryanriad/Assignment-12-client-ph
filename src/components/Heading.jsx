/* eslint-disable react/prop-types */
const Heading = ({ children }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 mt-6 md:mt-12 text-center dark:text-slate-300">
        {children}
      </h2>
    </div>
  );
};

export default Heading;
