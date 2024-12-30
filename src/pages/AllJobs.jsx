import { BsSortDown } from "react-icons/bs";
import ErrorMessages from "../components/common/ErrorMessages";
import Loading from "../components/common/Loading";
import FeaturedJobCard from "../components/FeaturedJobCard";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const AllJobs = () => {
  const [sortBy, setSortBy] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [allJobs, isLoading, errorMessage, getAllJobsData] = useGetAllJobs(
    sortBy,
    searchKey
  );

  //   const [copyOfAllJobs, setCopyOfAllJobs] = useState([]);

  //   useEffect(() => {
  //     if (allJobs?.length && copyOfAllJobs.length === 0) {
  //       setCopyOfAllJobs([...allJobs]);
  //     }
  //   }, [allJobs, copyOfAllJobs]);

  const handleSortAllJobsByPrice = (e) => {
    e.preventDefault();
    const sortBy = e.target.value;
    // let sortedJobs;
    if (sortBy === "low2high") {
      //   sortedJobs = [...allJobs].sort(
      //     (a, b) => a?.salaryRange?.min - b?.salaryRange?.min
      //   );
      setSortBy("low2high");
    } else if (sortBy === "high2low") {
      //   sortedJobs = [...allJobs].sort(
      //     (a, b) => b?.salaryRange?.min - a?.salaryRange?.min
      //   );
      setSortBy("high2low");
    } else {
      //   sortedJobs = copyOfAllJobs;
      setSortBy("");
    }
    // setAllJobs(sortedJobs);
  };

  const handleJobSearch = (e) => {
    e.preventDefault();
    setSearchKey(e.target.keywords.value);
  };

  return (
    <>
      <section className="py-10 md:py-16">
        <h1 className="text-4xl font-bold text-center pt-10 md:pt-16 mb-8">
          All Jobs in JobHub
        </h1>
        <div className="max-w-7xl w-11/12 mx-auto flex items-center justify-between gap-3 border-b dark:border-b-gray-800 py-4">
          {/* search for jobs */}
          <form onSubmit={handleJobSearch} className="max-w-96 w-full">
            <label className="input input-bordered flex items-center gap-2 pr-0 py-6">
              <input
                onKeyUp={(e) => setSearchKey(e.target.value)}
                name="keywords"
                type="text"
                className="grow"
                placeholder="Search by location"
              />
              <button
                type="submit"
                className="btn btn-md rounded-l-none bg-base-200 dark:bg-base-300"
              >
                <IoSearch size={20} />
              </button>
            </label>
          </form>
          {/* filter by price */}
          <div className="flex items-center gap-2">
            <BsSortDown className="text-2xl sm:text-4xl" />
            <select
              onChange={handleSortAllJobsByPrice}
              defaultValue={""}
              className="select select-bordered select-sm sm:select-md"
            >
              <option value={""}>Default</option>
              <option value={"low2high"}>Salary Low to High</option>
              <option value={"high2low"}>Salary High to Low</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getAllJobsData()}
          />
        ) : (
          <>
            {allJobs.length === 0 ? (
              <><p className="text-center mt-10 text-xl">Sorry, No data found!</p></>
            ) : (
              <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {allJobs.map((job) => (
                  <FeaturedJobCard key={job._id} job={job} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default AllJobs;
