import { useCallback, useEffect, useState } from "react";
import PostedJobsTable from "../components/PostedJobsTable";
import useAuthContext from "./../hooks/useAuthContext";
import axios from "axios";
import Loading from "../components/common/Loading";
import ErrorMessages from "../components/common/ErrorMessages";

const MyPostedJobs = () => {
  const { user } = useAuthContext();
  const [postedJobs, setPostedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getMyPostedJobs = useCallback(async () => {
    try {
      setIsLoading(true);
      // get posted jobs data
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/jobs?email=${user?.email}`
      );
    //   console.log(data);
      setPostedJobs(data);
    } catch (error) {
      // handle errors
      console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Posted Jobs."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      // close the loader
      setIsLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    getMyPostedJobs();
  }, [getMyPostedJobs]);

  return (
    <div className="pt-10 sm:pt-16">
      <h1 className="text-3xl font-semibold text-center px-4 text-gray-800 dark:text-gray-300 mt-16">
        My Posted Jobs
      </h1>
      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getMyPostedJobs()}
        />
      ) : (
        <PostedJobsTable postedJobs={postedJobs} />
      )}
    </div>
  );
};

export default MyPostedJobs;
