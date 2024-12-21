import axios from "axios";
import { PropTypes } from "prop-types";
import Swal from "sweetalert2";

const ViewApplicantsTable = ({ applications }) => {
  const handleUpdateStatus = async (e, id) => {
    const status = e.target.value;
    console.log(status, id);

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER}/job-applications/${id}`,
        {status},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        // succes message
        Swal.fire({
          icon: "success",
          title: "Update Application Status",
          text: "Your application status has been successfully updated!",
        });
      }
    } catch (error) {
      // failure message
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error.response?.data?.message ||
          "An error occurred. Please try again later.",
      });
    }
  };

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
                <td className="py-6 text-sm hover:underline">
                  <a
                    href={application?.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application?.linkedin_url}
                  </a>
                </td>
                <td className="py-6 text-sm hover:underline">
                  <a
                    href={application?.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {application?.resume_url}
                  </a>
                </td>
                <td className="py-6">
                  <select
                    onChange={(e) => handleUpdateStatus(e, application?._id)}
                    className="select w-28 max-w-xs bg-white dark:bg-gray-800"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Status
                    </option>
                    <option>Under Review</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                    <option>Accepted</option>
                  </select>
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
