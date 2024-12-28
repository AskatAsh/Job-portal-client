import ErrorMessages from "../components/common/ErrorMessages";
import Loading from "../components/common/Loading";
import FeaturedJobCard from "../components/FeaturedJobCard";
import useGetAllJobs from "../hooks/useGetAllJobs";

const AllJobs = () => {
    const [allJobs, isLoading, errorMessage, getAllJobsData] = useGetAllJobs();
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
          <h1 className="text-4xl font-bold text-center pt-10 md:pt-16">All Jobs in JobHub</h1>
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