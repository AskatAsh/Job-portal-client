import { useCallback, useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import ErrorMessages from "../components/common/ErrorMessages";
import ViewApplicantsTable from "../components/ViewApplicantsTable";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewApplications = () => {
  const { job_id } = useParams();
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const getJobApplicants = useCallback(async (job_id) => {
    try {
      setIsLoading(true);
      // get posted jobs data
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/job-applications/jobs/${job_id}`
      );
      //   console.log(data);
      setApplications(data);
    } catch (error) {
      // handle errors
      console.log(error);
      const errorMessage = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Applicants Info."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorMessage);
    } finally {
      // close the loader
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getJobApplicants(job_id);
  }, [getJobApplicants, job_id]);

  return (
    <div className="pt-10 sm:pt-16">
      <h1 className="text-3xl font-semibold text-center px-4 text-gray-800 dark:text-gray-300 mt-16">
        Applicants Information
      </h1>
      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getJobApplicants()}
        />
      ) : (
        <ViewApplicantsTable applications={applications} />
      )}
    </div>
  );
};

export default ViewApplications;
