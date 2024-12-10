import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from './../components/common/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default MainLayout;