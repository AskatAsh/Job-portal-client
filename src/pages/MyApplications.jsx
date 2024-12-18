import { useCallback, useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import axios from "axios";
import Loading from "../components/common/Loading";
import ErrorMessages from "../components/common/ErrorMessages";
import AppliedJobsTable from "../components/AppliedJobsTable";

const MyApplications = () => {
  const { user } = useAuthContext();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getMyApplications = useCallback(async () => {
    try {
      setIsLoading(true);
      // get applied jobs data
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/job-applications?email=${user?.email}`
      );
      setAppliedJobs(data);
    } catch (error) {
      // handle errors
      console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Applied Jobs."
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
    getMyApplications();
  }, [getMyApplications]);


  return (
    <div className="pt-10 sm:pt-16">
      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getMyApplications()}
        />
      ) : (
        // <h1>My Applications: {appliedJobs.length}</h1>
        <AppliedJobsTable appliedJobs={appliedJobs} />
      )}
    </div>
  );
};

export default MyApplications;
