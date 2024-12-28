import SectionTitles from "./common/SectionTitles";
import FeaturedJobCard from "./FeaturedJobCard";
import ErrorMessages from "./common/ErrorMessages";
import Loading from "./common/Loading";
import useGetFeaturedJobsData from "../hooks/useGetFeaturedJobsData";
import { ImSpinner3 } from "react-icons/im";
import ReactiveButton from "reactive-button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = () => {
  const [state, setState] = useState("idle");
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to all jobs route
    // console.log("Navigating to allJobs...");
    setState("loading");
    setTimeout(() => {
      setState("success");
      navigate("/allJobs");
    }, 1000);
  };
  const [featuredJobs, isLoading, errorMessage, getFeaturedJobsData] =
    useGetFeaturedJobsData();

  // const getFeaturedJobsData = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     // get jobs
  //     const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/jobs`);
  //     setFeaturedJobs(data);
  //   } catch (error) {
  //     // handle errors
  //     // console.log(error);
  //     const errorMessage = {
  //       error: error.message,
  //       status: error.response?.status || "N/A",
  //       message:
  //         error.response?.data?.message ||
  //         (error.request
  //           ? "Bad Request: Failed to fetch Featured Jobs Data."
  //           : "An unexpected error occurred. Please try again."),
  //       code: error.code || "N/A",
  //     };
  //     setErrorMessage(errorMessage);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   getFeaturedJobsData();
  // }, [getFeaturedJobsData]);

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

          <div className="text-center my-10">
            <ReactiveButton
              buttonState={state}
              style={{
                borderRadius: "5px",
                backgroundColor: "#3B7BF2",
              }}
              block={false}
              type="button"
              size="large"
              onClick={handleClick}
              idleText={
                <span className="flex items-center gap-2">View All Jobs</span>
              }
              loadingText={
                <span className="flex items-center gap-2">
                  Loading.. <ImSpinner3 />
                </span>
              }
              animation={true}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default FeaturedJobs;
