import { useEffect, useState } from "react";
import SectionTitles from "./common/SectionTitles";
import axios from "axios";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        getFeaturedJobsData();
    }, [])
    const getFeaturedJobsData = async () => {
        const {data} = await axios.get('http://localhost:5000/jobs')
        setFeaturedJobs(data);
    }
    return (
        <section>
            <SectionTitles title="Featured Jobs" subtitle="Know your worth and find the job that qualify your life" />
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    featuredJobs.map((job) => <FeaturedJobCard key={job._id} job={job} />)
                }
            </div>   
        </section>
    );
};

export default FeaturedJobs;