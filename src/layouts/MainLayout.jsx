import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "./../components/common/Footer";
// import Banner from '../components/Banner';
import Banner from './../components/Banner';

const MainLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 dark:bg-custom-texture bg-repeat font-jost">
      <Navbar />
      <Banner />
      <main className="">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
