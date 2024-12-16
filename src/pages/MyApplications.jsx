import { useEffect, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import axios from "axios";
import Loading from "../components/common/Loading";
import ErrorMessages from "../components/common/ErrorMessages";

const MyApplications = () => {
  const { user } = useAuthContext();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    getMyApplications();
  }, []);

  const getMyApplications = async () => {
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
  };

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
        <h1>My Applications: {appliedJobs.length}</h1>
      )}
    </div>
  );
};

export default MyApplications;
