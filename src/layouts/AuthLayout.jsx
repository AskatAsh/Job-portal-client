import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 font-jost">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
