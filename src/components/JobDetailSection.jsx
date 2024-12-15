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
    requirements,
    applicationDeadline,
  } = job;
  const { salary } = useGetSalary(salaryRange);
  const formatedDeadline = useFormatDeadline(applicationDeadline);

  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-12 my-16">
      {/* left Section */}
      <section className="col-span-8"></section>

      {/* right section */}
      <aside className="col-span-4">
        <div className="bg-blue-50 p-4 md:p-8 rounded-xl">
          <h2 className="text-xl font-medium text-gray-700 mb-6">Job Overview</h2>
          <ul className="space-y-4">
            {/* Date Posted */}
            <li className="flex items-start gap-4">
              <MdOutlineDateRange className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Date Posted:</p>
                <p className="text-gray-600">Posted 1 hours ago</p>
              </div>
            </li>

            {/* Expiration Date */}
            <li className="flex items-start gap-4">
              <IoHourglassOutline className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Expiration date:</p>
                <p className="text-gray-600">{formatedDeadline}</p>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-start gap-4">
              <BsGeoAlt className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Location:</p>
                <p className="text-gray-600">{location}</p>
              </div>
            </li>

            {/* Job Title */}
            <li className="flex items-start gap-4">
              <GoPerson className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Job Title:</p>
                <p className="text-gray-600">{title}</p>
              </div>
            </li>

            {/* Hours */}
            <li className="flex items-start gap-4">
              <AiOutlineClockCircle className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Hours:</p>
                <p className="text-gray-600">50h / week</p>
              </div>
            </li>

            {/* Rate */}
            <li className="flex items-start gap-4">
              <PiCoins className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Rate:</p>
                <p className="text-gray-600">$15 - $25 / hour</p>
              </div>
            </li>

            {/* Salary */}
            <li className="flex items-start gap-4">
              <GiMoneyStack className="text-blue-500 text-xl flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">Salary:</p>
                <p className="text-gray-600">{salary}</p>
              </div>
            </li>
          </ul>

          {/* Skills */}
          <h2 className="text-xl font-medium text-gray-700 mb-6 mt-10">Job Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {
                requirements.map((skill, idx) => <li className="text-blue-600 bg-blue-100 border-none text-sm rounded-md px-4 py-1.5" key={idx}>{skill}</li>)
            }
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
