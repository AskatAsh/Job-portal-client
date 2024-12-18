import { useCallback, useEffect, useState } from "react";
import SectionTitles from "./common/SectionTitles";
import axios from "axios";
import FeaturedJobCard from "./FeaturedJobCard";
import ErrorMessages from "./common/ErrorMessages";
import Loading from "./common/Loading";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getFeaturedJobsData = useCallback(async () => {
    try {
      setIsLoading(true);
      // get jobs
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/jobs`);
      setFeaturedJobs(data);
    } catch (error) {
      // handle errors
      console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Featured Jobs Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getFeaturedJobsData();
  }, [getFeaturedJobsData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getFeaturedJobsData()}
        />
      ) : (
        <section>
          <SectionTitles
            title="Featured Jobs"
            subtitle="Know your worth and find the job that qualify your life"
          />
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {featuredJobs.map((job) => (
              <FeaturedJobCard key={job._id} job={job} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedJobs;
