import { useParams } from "react-router-dom";
import ApplyJobBanner from "../components/ApplyJobBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/common/Loading";
import ErrorMessages from "../components/common/ErrorMessages";
import JobDetailSection from "../components/JobDetailSection";

const JobDetails = () => {
  const [jobData, setJobData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const { id } = useParams();

  // get Job Details with id
  useEffect(() => {
    getJobDetails(id);
  }, [id]);

  // function to get job details
  const getJobDetails = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/jobDetails/${id}`
      );
      // console.log(data);
      setJobData(data);
    } catch (error) {
      // handle any potential errors
      const errorDetails = {
        error: error.message,
        status: error.response?.status || "N/A",
        message:
          error.response?.data?.message ||
          (error.request
            ? "Bad Request: Failed to fetch Job Details."
            : "An unexpected error occurred. Please try again."),
        code: error.code || "N/A",
      };
      setErrorMessage(errorDetails);

      // console.log(error);
    } finally {
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
          onRetry={() => getJobDetails(id)}
        />
      ) : (
        <>
          <ApplyJobBanner job={jobData} />
          <JobDetailSection job={jobData} />
        </>
      )}
    </div>
  );
};

export default JobDetails;
