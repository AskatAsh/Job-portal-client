import { IoBookmarksOutline, IoBriefcaseOutline } from "react-icons/io5";
import Button from "./common/Button";
import { GrLocation } from "react-icons/gr";
import { format } from "date-fns";
import { FiClock } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import useGetSalary from "../hooks/useGetSalary";
import { PropTypes } from "prop-types";
const ApplyJobBanner = ({ job }) => {
  const {
    title,
    company_logo,
    location,
    salaryRange,
    company,
    status,
    jobType,
    category,
    applicationDeadline,
  } = job;
  const { salary } = useGetSalary(salaryRange);
  return (
    <section className="bg-gradient-to-br from-blue-50 from-0% via-whitea via-50% to-blue-50 to-100% dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <div className="max-w-7xl w-11/12 mx-auto flex flex-col md:flex-row md:items-center justify-between py-16 md:py-20 gap-4">
        {/* Left Section */}
        <div className="flex max-[400px]:flex-col items-start gap-4">
          {/* Logo */}
          <div className="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Job Info */}
          <div>
            {/* Job title */}
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
              {title}
            </h3>
            {/* Other info */}
            <div className="flex items-center flex-wrap gap-2 md:gap-3 text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-1">
              <span className="flex items-center gap-1">
                <IoBriefcaseOutline /> {company}
              </span>
              <span className="flex items-center gap-1">
                <GrLocation /> {location}
              </span>
              <span className="flex items-center gap-1">
                <FiClock /> Deadline:{" "}
                {format(new Date(applicationDeadline), "do LLL, yyyy")}
              </span>
              <span className="flex items-center gap-1">
                <GiMoneyStack size={16} /> {salary}
              </span>
            </div>

            {/* Job Types */}
            <div className="flex gap-2 mt-3">
              {/* Badges */}
              <span className="badge badge-sm text-blue-600 bg-blue-600 bg-opacity-15 dark:text-blue-400 py-2">
                {jobType}
              </span>
              <span className="badge badge-sm text-green-600 bg-green-600 bg-opacity-15 dark:text-green-400 py-2">
                {category}
              </span>
              <span className="badge badge-sm text-yellow-600 bg-yellow-600 bg-opacity-15 dark:text-yellow-400 py-2">
                {status}
              </span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="flex items-center justify-end gap-3">
          <Button
            btnText="Apply for Job"
            btnStyle="btn-md bg-blue-500 hover:bg-blue-600 outline-none border-none text-white bg-opacity-90"
          />
          <Button
            btnText={<IoBookmarksOutline size={20} />}
            btnStyle="btn-md text-blue-500 bg-blue-500 bg-opacity-15 hover:bg-opacity-90 hover:text-blue-50 dark:text-blue-400 dark:hover:text-blue-50"
          />
        </div>
      </div>
    </section>
  );
};

ApplyJobBanner.propTypes = {
  job: PropTypes.object,
};

export default ApplyJobBanner;
