import { format } from "date-fns";
import { PropTypes } from "prop-types";
import { FaRegEye } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const AppliedJobsTable = ({ appliedJobs }) => {
  return (
    <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-16 md:my-20 bg-white rounded-xl shadow-md overflow-hidden">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
        My Applied Jobs
      </h1>

      {/* applied jobs table */}
      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-50 text-blue-500 text-base">
            <tr>
              <th></th>
              <th className="font-medium py-5">Job Title</th>
              <th className="font-medium py-5">Deadline</th>
              <th className="font-medium py-5">Status</th>
              <th className="font-medium py-5">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-gray-500 dark:text-gray-400">
            {/* mapping applied jobs in rows */}
            {appliedJobs.map((appliedJob, idx) => (
              <tr key={appliedJob?.job_id} className="hover:bg-gray-50">
                <td className="py-6">{idx + 1}</td>
                <td className="flex flex-col sm:flex-row gap-4 py-6">
                  <img
                    className="w-14 h-14 bg-gray-100 rounded-md"
                    src={appliedJob?.company_logo}
                    alt={`image of ${appliedJob?.title}`}
                  />
                  <div>
                    <h2 className="text-gray-800 dark:text-gray-300 font-medium text-lg pb-2">
                      {appliedJob?.title}
                    </h2>
                    <ul className="flex items-center gap-3 text-sm flex-wrap">
                      <li className="flex items-center gap-2 flex-shrink-0">
                        <IoBriefcaseOutline />
                        {appliedJob?.company}
                      </li>
                      <li className="flex items-center gap-2 flex-shrink-0">
                        <GrLocation />
                        {appliedJob?.location}
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="py-6 text-sm">
                  {format(new Date(appliedJob?.deadline), "do LLL, yyyy")}
                </td>
                <td className="py-6 text-green-600">
                  {appliedJob?.status.charAt(0).toUpperCase() +
                    appliedJob?.status.slice(1)}
                </td>
                <td className="py-6">
                  <div className="flex items-start gap-2">
                    <button className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-500 hover:bg-blue-400 hover:text-white tooltip tooltip-top" data-tip="view">
                      <FaRegEye />
                    </button>
                    <button className="w-8 h-8 bg-red-50 rounded-md flex items-center justify-center text-red-500 hover:bg-red-400 hover:text-white tooltip tooltip-top" data-tip="Delete">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

AppliedJobsTable.propTypes = {
  appliedJobs: PropTypes.array,
};

export default AppliedJobsTable;
