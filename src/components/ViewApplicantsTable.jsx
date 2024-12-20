import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PropTypes } from "prop-types";

const ViewApplicantsTable = ({ applications }) => {
  return (
    <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-16 md:my-20 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-xl shadow-md overflow-hidden">
      {/* Posted jobs table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-blue-50 dark:bg-blue-950 text-blue-500 text-base">
            <tr>
              <th></th>
              <th className="font-medium py-5">Email</th>
              <th className="font-medium py-5">Github</th>
              <th className="font-medium py-5">Linkedin</th>
              <th className="font-medium py-5">Resume</th>
              <th className="font-medium py-5">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-gray-500 dark:text-gray-400">
            {/* mapping applied jobs in rows */}
            {applications.map((application, idx) => (
              <tr
                key={application?._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-opacity-30"
              >
                <td className="py-6">{idx + 1}</td>
                <td className="py-6 text-sm">{application?.applicant_email}</td>
                <td className="py-6 text-sm hover:underline">
                  <a
                    href={application?.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application?.github_url}
                  </a>
                </td>
                <td className="py-6 text-sm">
                  <a
                    href={application?.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application?.linkedin_url}
                  </a>
                </td>
                <td className="py-6 text-sm">
                  <a
                    href={application?.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application?.resume_url}
                  </a>
                </td>
                <td className="py-6">
                  <div className="flex items-start gap-2">
                    {/* view details */}
                    <button
                      className="w-8 h-8 bg-blue-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-blue-500 hover:bg-blue-400 dark:hover:bg-blue-800 hover:text-white tooltip tooltip-top"
                      data-tip="View"
                    >
                      <FaRegEye />
                    </button>
                    {/* edit job post */}
                    <button
                      className="w-8 h-8 bg-green-50 dark:bg-gray-800 rounded-md flex items-center justify-center text-green-500 hover:bg-green-400 dark:hover:bg-green-800 hover:text-white tooltip tooltip-top"
                      data-tip="Edit"
                    >
                      <FaRegEdit />
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

ViewApplicantsTable.propTypes = {
  applications: PropTypes.array,
};

export default ViewApplicantsTable;
