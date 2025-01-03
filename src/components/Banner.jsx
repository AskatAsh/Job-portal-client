import { IoSearch } from "react-icons/io5";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 from-0% via-blue-100 via-50% to-blue-50 to-100% dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 flex items-center justify-center overflow-hidden">
      {/* banner with text and image*/}
      <section className="py-24 lg:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 leading-tight">
              The <span className="text-blue-500">Easiest Way</span> to Get Your
              New Job
            </h1>
            <p className="text-gray-500 my-8 sm:text-lg max-w-lg">
              Each month, more than 3 million job seekers turn to our website in
              their search for work, making over 140,000 applications every
              single day.
            </p>

            {/* Search Box and select options*/}
            <div className="bg-[#ffffffec] dark:bg-gray-800 shadow-[0px_15px_30px_0px_#00000010] rounded-lg p-4 mt-6 flex flex-col sm:flex-row lg:flex-col gap-4 items-center">
              <div className="flex flex-1 w-full sm:w-auto lg:w-full gap-3">
                <div className="flex-1 flex items-center border dark:border-gray-600 rounded-lg px-4 h-12">
                  <select className="flex-1 bg-transparent outline-none text-gray-500 dark:text-gray-300 h-full">
                    <option>Industry</option>
                    <option>Tech</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div className="flex-1 flex items-center border dark:border-gray-600 rounded-lg px-4 h-12">
                  <select className="flex-1 bg-transparent dark:bg-gray-800 outline-none text-gray-500 dark:text-gray-300 h-full">
                    <option>Location</option>
                    <option>Bangladesh</option>
                    <option>Pakistan</option>
                    <option>Maldives</option>
                  </select>
                </div>
              </div>
              {/* -----------------search input with button---------------------- */}
              <div className="flex flex-1 gap-3 flex-col sm:flex-row w-full sm:w-auto lg:w-full">
                <div className="flex-1 flex items-center border dark:border-gray-600 rounded-lg px-4 py-2">
                  {/* <span className="material-icons text-gray-400">search</span> */}
                  <input
                    type="text"
                    placeholder="Your keyword..."
                    className="w-full md:w-auto  bg-transparent outline-none text-gray-500 dark:text-gray-300"
                  />
                </div>
                <button className="btn bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 border-none text-white md:px-6 lg:px-8 w-full sm:w-auto flex items-center gap-2">
                  <IoSearch size={18} />
                  Search
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <p className="mt-8 text-gray-500">
              {/* Designer, Web, IOS, Developer, PHP, Senior, Engineer, */}
              <span className="font-semibold dark:text-gray-400">Popular Searches: </span>
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Designer,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Web,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                IOS,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Developer,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                PHP,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Senior,
              </span>{" "}
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Engineer
              </span>
            </p>
          </div>

          {/* Images */}
          <div className="relative flex justify-start lg:justify-center sm:pl-10 md:pl-28 lg:pl-0 my-10 md:my-16 lg:my-0">
            <motion.div
              initial={{ translateX: -10, translateY: -20 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeIn" }}
              className="w-64 sm:w-80 sm:h-80 p-2 sm:p-4 bg-blue-300 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://i.ibb.co.com/16jsJXN/download.png"
                alt="Job Interview Preparation"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ translateX: -20, translateY: 70 }}
              animate={{ x: [30, 0, 30] }} // Keyframe positions
              transition={{
                delay: 1.2,
                duration: 8,
                repeat: Infinity,
                // repeatType: "reverse",
                ease: "easeOut",
              }}
              className="absolute lg:bottom-0 lg:right-0 w-60 sm:h-48 bg-white rounded-3xl overflow-hidden shadow-[0px_10px_20px_0px_#00000030] transform lg:translate-x-8 lg:translate-y-20 left-1/3 md:left-96 top-1/3 md:top-40 md:translate-x-0 md:translate-y-0 border-8"
            >
              <img
                src="https://i.ibb.co.com/NL1nV4X/happy-overjoyed-business-team-celebrate-corporate-victory-93675-134733.jpg"
                alt="Our friendly team members"
                className="w-full h-full object-cover rounded-[18px]"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ========x======== */}
    </div>
  );
};

export default Banner;
