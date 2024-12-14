import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 md:px-8 xl:px-10 my-10">

      <FeaturedJobs />
      </div>
    </div>
  );
};

export default Home;
