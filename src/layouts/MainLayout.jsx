import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "./../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 dark:bg-custom-texture bg-repeat font-jost">
      {/* Header with Navbar */}
      <Navbar />

      {/* Main Body */}
      <main>
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
