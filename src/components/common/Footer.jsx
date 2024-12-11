import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import logo2 from "../../../src/assets/images/jobhub-logo-2.png";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosMailOpen } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-10 bg-white dark:bg-gray-950 sm:pt-16 lg:pt-24 border-t border-t-gray-200 dark:border-t-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <div className="flex items-center gap-2">
              <img className="w-10 h-auto" src={logo2} alt="JobHub logo" />
              <strong className="text-2xl text-gray-900 dark:text-gray-300">
                JobHub
              </strong>
            </div>

            <div className="text-gray-800 dark:text-gray-500 mt-5 space-y-2">
              <h4 className="font-semibold text-lg dark:text-gray-400">
                Support
              </h4>
              <p className="flex items-start gap-2">
                <GiRotaryPhone size={20} />
                <span className="text-sm">123 456 789</span>
              </p>
              <p className="flex items-start gap-2">
                <IoIosMailOpen size={20} />
                <span className="text-sm">support@jobhub.com</span>
              </p>
            </div>
            <div className="text-gray-800 dark:text-gray-500 mt-5 space-y-2 mr-4">
              <h4 className="font-semibold text-lg dark:text-gray-400">
                Location
              </h4>
              <p className="flex items-start gap-2">
                <HiOutlineLocationMarker size={24} />
                <span className="text-sm">
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Candidates
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="Search Jobs" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Categories" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Dashboard" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Job Alerts" linkPath="#" />
              </li>
              <li>
                <FooterLinks linkText="My Bookmarks" linkPath="#" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Employers
            </h4>

            <ul className="mt-6 space-y-4">
              <li>
                <FooterLinks linkText="Search Candidates" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Emplyer Dashboard" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Add Jobs" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Job Packages" linkPath="#" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              About Us
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="About Us" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Job Page" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Terms Page" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Blog" linkPath="#" />
              </li>
              <li>
                <FooterLinks linkText="Contact" linkPath="#" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Resources
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="Site Map" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Terms of Use" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Privacy Center" linkPath="#" />
              </li>

              <li>
                <FooterLinks linkText="Security Center" linkPath="#" />
              </li>
              <li>
                <FooterLinks linkText="Accessibility" linkPath="#" />
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200 dark:border-gray-800" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © Copyright 2024, All Rights Reserved by JobHub
          </p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaTwitter className="w-full group-hover:text-blue-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaLinkedin className="w-full group-hover:text-blue-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaGithub className="w-full group-hover:text-blue-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaInstagram className="w-full group-hover:text-blue-500 transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
