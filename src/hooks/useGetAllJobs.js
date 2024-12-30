import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetAllJobs = (sortBy = "", searchKey = "", minSalary, maxSalary) => {
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getAllJobsData = useCallback(async () => {
    try {
      setIsLoading(true);
      // get all jobs
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER
        }/jobs?sortBy=${sortBy}&searchKey=${searchKey}&min=${minSalary}&max=${maxSalary}`
      );
      setAllJobs(data);
    } catch (error) {
      // handle errors
      // console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch All Jobs Data."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [sortBy, searchKey, minSalary, maxSalary]);

  useEffect(() => {
    getAllJobsData();
  }, [getAllJobsData]);

  return [allJobs, isLoading, errorMessage, getAllJobsData];
};

export default useGetAllJobs;
