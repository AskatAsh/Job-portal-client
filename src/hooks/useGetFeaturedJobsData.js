import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetFeaturedJobsData = () => {
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
      // console.log(error);
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

  return [featuredJobs, isLoading, errorMessage, getFeaturedJobsData];
};

export default useGetFeaturedJobsData;
