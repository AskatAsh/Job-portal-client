import Button from "./../common/Button";
import useAuthContext from "./../../hooks/useAuthContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const JobApplyForm = () => {
  const { user } = useAuthContext();
  const { id } = useParams();

  const handleJobApplication = async (e) => {
    e.preventDefault();
    const form = e.target;
    const github_url = form.github_url.value;
    const linkedin_url = form.linkedin_url.value;
    const resume_url = form.resume_url.value;
    const jobApplication = {
      github_url,
      linkedin_url,
      resume_url,
      job_id: id,
      applicant_email: user?.email,
    };
    // console.log(jobApplication);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/job-applications`,
        jobApplication,
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
          title: "Application Submitted",
          text: "Your application has been successfully submitted!",
        });
      }
    } catch (error) {
      // console.log("Error submitting application: ", error);
      // failure message
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <section className="pt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
        Apply Now!
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-4 mb-8">
        Please make sure to fill up the required fields before submit.
      </p>
      <form
        onSubmit={handleJobApplication}
        className="max-w-xl mx-auto p-5 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 dark:bg-opacity-80 space-y-6"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Github URL*</span>
          </div>
          <input
            type="url"
            name="github_url"
            placeholder="enter github link"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Linkedin URL*</span>
          </div>
          <input
            type="url"
            name="linkedin_url"
            placeholder="enter linkedin link"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Resume URL*</span>
          </div>
          <input
            type="url"
            name="resume_url"
            placeholder="enter resume link"
            className="input input-bordered w-full"
            required
          />
        </label>
        <Button
          btnType="submit"
          btnText="Submit Application"
          btnStyle="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
        />
      </form>
    </section>
  );
};

export default JobApplyForm;
