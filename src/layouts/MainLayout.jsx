import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "./../components/common/Footer";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
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
