import { FiClock } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import useGetSalary from "../hooks/useGetSalary";
import { format } from "date-fns";

const FeaturedJobCard = ({ job }) => {
  const { _id, title, company_logo, location, salaryRange, description, company, status, jobType, category, applicationDeadline } = job;
  const { salary } = useGetSalary(salaryRange);

  return (
    <div className="p-4 md:p-6 bg-white dark:bg-gray-800 dark:bg-opacity-30 rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-300">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-start gap-4">
        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-10 h-10 object-cover"
          />
        </div>

        {/* Job Info */}
        <div>
          {/* Job title */}
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
            <Link to={`/jobDetails/${_id}`} className="hover:text-blue-500">{title}</Link>
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
              <FiClock /> Deadline: {format(new Date(applicationDeadline), "do LLL, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <GiMoneyStack size={16} /> {salary}
            </span>
          </div>
          <p
            className="text-sm text-gray-500 mt-2 tooltip tooltip-top text-left"
            data-tip={description}
          >
            {description.substr(0, 65)}...{" "}
            <Link to={`/jobDetails/${_id}`} className="text-blue-500 dark:text-blue-400 hover:underline">
              Read More
            </Link>
          </p>
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
    </div>
  );
};

FeaturedJobCard.propTypes = {
  job: PropTypes.object,
};

export default FeaturedJobCard;
