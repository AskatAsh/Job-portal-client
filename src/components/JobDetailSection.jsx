import { PropTypes } from "prop-types";
import useGetSalary from "../hooks/useGetSalary";
import { BsGeoAlt } from "react-icons/bs";
import { PiCoins } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import useFormatDeadline from "../hooks/useFormatDeadline";

const JobDetailSection = ({ job }) => {
  const {
    title,
    company_logo,
    location,
    salaryRange,
    company,
    status,
    jobType,
    category,
    description,
    requirements,
    responsibilities,
    applicationDeadline,
  } = job;
  const { salary } = useGetSalary(salaryRange);
  const formatedDeadline = useFormatDeadline(applicationDeadline);

  return (
    <div className="max-w-7xl w-full px-4 md:px-0 rounded-xl mx-auto grid grid-cols-1 md:grid-cols-12 my-16 gap-6">
      {/* left Section */}
      <section className="col-span-12 md:col-span-8 bg-white dark:bg-gray-900 rounded-xl p-5 sm:p-8">
        {/* Job Description */}
        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-5">
          Job Description
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{description}</p>

        {/* Key Responsibilities */}
        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-5">
          Key Responsibilities
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 list-disc space-y-4 pl-4 mb-8">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>

        {/* Skill & Experience */}
        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-5">
          Skill & Experience
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 list-disc space-y-4 pl-4">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </section>

      {/* right section */}
      <aside className="col-span-12 md:col-span-4">
        <div className="bg-blue-50 dark:bg-blue-950 dark:bg-opacity-70 p-5 sm:p-8 rounded-xl">
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Job Overview
          </h2>
          <ul className="space-y-4">
            {/* Date Posted */}
            <li className="flex items-start gap-4">
              <MdOutlineDateRange className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Date Posted:</p>
                <p className="text-gray-600 dark:text-gray-400">Posted 1 hours ago</p>
              </div>
            </li>

            {/* Expiration Date */}
            <li className="flex items-start gap-4">
              <IoHourglassOutline className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Expiration date:</p>
                <p className="text-gray-600 dark:text-gray-400">{formatedDeadline}</p>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-start gap-4">
              <BsGeoAlt className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Location:</p>
                <p className="text-gray-600 dark:text-gray-400">{location}</p>
              </div>
            </li>

            {/* Job Title */}
            <li className="flex items-start gap-4">
              <GoPerson className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Job Title:</p>
                <p className="text-gray-600 dark:text-gray-400">{title}</p>
              </div>
            </li>

            {/* Hours */}
            <li className="flex items-start gap-4">
              <AiOutlineClockCircle className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Hours:</p>
                <p className="text-gray-600 dark:text-gray-400">50h / week</p>
              </div>
            </li>

            {/* Rate */}
            <li className="flex items-start gap-4">
              <PiCoins className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Rate:</p>
                <p className="text-gray-600 dark:text-gray-400">$15 - $25 / hour</p>
              </div>
            </li>

            {/* Salary */}
            <li className="flex items-start gap-4">
              <GiMoneyStack className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Salary:</p>
                <p className="text-gray-600 dark:text-gray-400">{salary}</p>
              </div>
            </li>
          </ul>

          {/* Skills */}
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6 mt-10">
            Job Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {requirements.map((skill, idx) => (
              <li
                className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 border-none text-sm rounded-md px-4 py-1.5"
                key={idx}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

JobDetailSection.propTypes = {
  job: PropTypes.object,
};

export default JobDetailSection;
