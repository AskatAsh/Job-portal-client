import { useEffect } from "react";
import SectionTitles from "./common/SectionTitles";
import axios from "axios";

const FeaturedJobs = () => {
    useEffect(() => {
        getFeaturedJobsData();
    }, [])
    const getFeaturedJobsData = async () => {
        const {data} = await axios.get('http://localhost:5000/jobs')
        console.log(data);
    }
    return (
        <section>
            <SectionTitles title="Featured Jobs" subtitle="Know your worth and find the job that qualify your life" />
            <div>

            </div>   
        </section>
    );
};

export default FeaturedJobs;