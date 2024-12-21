import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 dark:bg-custom-texture bg-repeat font-jost">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Toaster />
    </div>
  );
};

export default AuthLayout;
