import { useParams } from "react-router-dom";
import ApplyJobBanner from "../components/ApplyJobBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/common/Loading";

const JobDetails = () => {
  const [jobData, setJobData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getJobDetails(id);
  }, [id]);

  const getJobDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:5000/jobDetails/${id}`);
    console.log(data);
    setJobData(data);
    setIsLoading(false);
  };
  return (
    <div className="h-screen pt-20">
      {isLoading ? <Loading /> : <ApplyJobBanner job={jobData} />}

      <h1>Job Details page</h1>
    </div>
  );
};

export default JobDetails;
