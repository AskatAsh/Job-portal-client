import { format } from "date-fns";
import { FaRegEye } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PropTypes } from 'prop-types';

const PostedJobsTable = ({postedJobs}) => {
  return (
    <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-16 md:my-20 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-xl shadow-md overflow-hidden">
      {/* Posted jobs table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-50 dark:bg-blue-950 text-blue-500 text-base">
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
            {postedJobs.map((postedJob, idx) => (
              <tr
                key={postedJob?._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-30"
              >
                <td className="py-6">{idx + 1}</td>
                <td className="flex flex-col sm:flex-row gap-4 py-6">
                  <img
                    className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-md"
                    src={postedJob?.company_logo}
                    alt={`image of ${postedJob?.title}`}
                  />
                  <div>
                    <h2 className="text-gray-800 dark:text-gray-300 font-medium text-lg pb-2">
                      {postedJob?.title}
                    </h2>
                    <ul className="flex items-center gap-3 text-sm flex-wrap">
                      <li className="flex items-center gap-2 flex-shrink-0">
                        <IoBriefcaseOutline />
                        {postedJob?.company}
                      </li>
                      <li className="flex items-center gap-2 flex-shrink-0">
                        <GrLocation />
                        {postedJob?.location}
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="py-6 text-sm">
                  {format(new Date(postedJob?.applicationDeadline), "do LLL, yyyy")}
                </td>
                <td className="py-6 text-green-600">
                  {postedJob?.status}
                </td>
                <td className="py-6">
                  <div className="flex items-start gap-2">
                    <button
                      className="w-8 h-8 bg-blue-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-blue-500 hover:bg-blue-400 dark:hover:bg-blue-800 hover:text-white tooltip tooltip-top"
                      data-tip="view"
                    >
                      <FaRegEye />
                    </button>
                    <button
                      className="w-8 h-8 bg-red-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-red-500 hover:bg-red-400 dark:hover:bg-red-800 hover:text-white tooltip tooltip-top"
                      data-tip="Delete"
                    >
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

PostedJobsTable.propTypes = {
    postedJobs: PropTypes.array
}

export default PostedJobsTable;
