import { BsSortDown } from "react-icons/bs";
import ErrorMessages from "../components/common/ErrorMessages";
import Loading from "../components/common/Loading";
import FeaturedJobCard from "../components/FeaturedJobCard";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useEffect, useState } from "react";

const AllJobs = () => {
  const [allJobs, setAllJobs, isLoading, errorMessage, getAllJobsData] =
    useGetAllJobs();
  const [copyOfAllJobs, setCopyOfAllJobs] = useState([]);

  useEffect(() => {
    if (allJobs?.length && copyOfAllJobs.length === 0) {
      setCopyOfAllJobs([...allJobs]);
    }
  }, [allJobs, copyOfAllJobs]);

  const handleSortAllJobsByPrice = (e) => {
    e.preventDefault();
    const sortBy = e.target.value;
    let sortedJobs;
    if (sortBy === "low2high") {
      sortedJobs = [...allJobs].sort(
        (a, b) => a?.salaryRange?.min - b?.salaryRange?.min
      );
    } else if (sortBy === "high2low") {
      sortedJobs = [...allJobs].sort(
        (a, b) => b?.salaryRange?.min - a?.salaryRange?.min
      );
    } else {
      sortedJobs = copyOfAllJobs;
    }
    setAllJobs(sortedJobs);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getAllJobsData()}
        />
      ) : (
        <section className="py-10 md:py-16">
          <h1 className="text-4xl font-bold text-center pt-10 md:pt-16">
            All Jobs in JobHub
          </h1>
          <div className="max-w-7xl w-full mx-auto flex items-center justify-end gap-3">
            {/* filter by price */}
            <div className="flex items-center gap-2">
              <BsSortDown size={40} />
              <select
                onChange={handleSortAllJobsByPrice}
                defaultValue={""}
                className="select select-bordered w-full max-w-xs"
              >
                <option value={""}>Default</option>
                <option value={"low2high"}>Salary Low to High</option>
                <option value={"high2low"}>Salary High to Low</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {allJobs.map((job) => (
              <FeaturedJobCard key={job._id} job={job} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default AllJobs;
