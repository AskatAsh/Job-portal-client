import { BsSortDown } from "react-icons/bs";
import ErrorMessages from "../components/common/ErrorMessages";
import Loading from "../components/common/Loading";
import FeaturedJobCard from "../components/FeaturedJobCard";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const AllJobs = () => {
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [modal, setModal] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [debouncedSearchKey, setDebouncedSearchKey] = useState("");
  const [allJobs, isLoading, errorMessage, getAllJobsData] = useGetAllJobs(
    sortBy,
    debouncedSearchKey,
    minSalary,
    maxSalary
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

  // debounce logic
  useEffect(() => {
    const searchHandler = setTimeout(() => {
      setDebouncedSearchKey(searchKey);
    }, 1200);

    return () => clearTimeout(searchHandler);
  }, [searchKey]);

  const handleJobSearch = (e) => {
    e.preventDefault();
    setSearchKey(e.target.keywords.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filter = e.target;
    const minSalary = filter.minSalary.value;
    const maxSalary = filter.maxSalary.value;
    setMinSalary(minSalary);
    setMaxSalary(maxSalary);
  };

  return (
    <>
      <section className="py-10 md:py-16">
        <h1 className="text-4xl font-bold text-center pt-10 md:pt-16 mb-8">
          Jobs in JobHub
        </h1>
        <div className="max-w-7xl w-11/12 mx-auto flex items-center justify-between flex-wrap gap-3 border-b dark:border-b-gray-800 py-4">
          {/* search for jobs */}
          <form onSubmit={handleJobSearch} className="max-w-xl flex-1">
            <label className="input input-bordered flex items-center gap-2 pr-0 py-6">
              <input
                onKeyUp={(e) => setSearchKey(e.target.value)}
                name="keywords"
                type="text"
                className="grow"
                placeholder="Search with job title, category, company, location"
              />
              <button
                type="submit"
                className="btn btn-md rounded-l-none bg-base-200 dark:bg-base-300"
              >
                <IoSearch size={20} />
              </button>
            </label>
          </form>
          <div className="flex items-center gap-3 flex-1 justify-between sm:justify-end">
            {/* filter modal */}
            <button
              onClick={() => setModal(!modal)}
              className="btn bg-white dark:bg-base-100 border-gray-300 shadow-none dark:border-gray-700 flex items-center gap-2"
            >
              <FaFilter /> Filter
            </button>
            {/* select sort by price options */}
            <div className="flex items-center gap-2">
              <BsSortDown className="text-2xl" />
              <select
                onChange={handleSortAllJobsByPrice}
                defaultValue={""}
                className="select select-bordered select-md"
              >
                <option value={""}>Default</option>
                <option value={"low2high"}>Salary Low to High</option>
                <option value={"high2low"}>Salary High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <p className="py-3 max-w-7xl w-11/12 mx-auto">
          Showing [{allJobs.length}] Results
        </p>
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
              <>
                <p className="text-center mt-10 text-xl">
                  Sorry, No data found!
                </p>
              </>
            ) : (
              <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {allJobs.map((job) => (
                  <FeaturedJobCard key={job._id} job={job} />
                ))}
              </div>
            )}
          </>
        )}
        <dialog id="filter" className={`modal ${modal ? "modal-open" : ""}`}>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setModal(!modal)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg border-b dark:border-b-gray-700 pb-2 mb-6">
              Filter
            </h3>
            {/* filter*/}
            <form
              onSubmit={handleFilter}
              className="flex items-center flex-wrap gap-4"
            >
              {/* set minimum salary */}
              <input
                name="minSalary"
                type="number"
                placeholder="minimum salary"
                className="input input-bordered w-full flex-1"
              />
              {/* set maximum salary */}
              <input
                name="maxSalary"
                type="number"
                placeholder="maximum salary"
                className="input input-bordered w-full flex-1"
              />
              <button
                type="submit"
                onClick={() => setModal(!modal)}
                className="btn w-full bg-blue-500 text-white"
              >
                Apply Filter
              </button>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default AllJobs;
