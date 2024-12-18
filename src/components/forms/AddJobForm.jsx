import Button from "./../common/Button";

const AddJobForm = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    const {min, max, currency, requirements, responsibilities, ...newJob} = formEntries;
    newJob.salary = {min: Number(min), max: Number(max), currency};
    newJob.requirements = requirements.split(', ');
    newJob.responsibilities = responsibilities.split(', ');
    // console.log("Form data: ", formEntries);
    console.log(newJob);
  };

  return (
    <section className="max-w-7xl mx-auto w-11/12 p-4 md:p-6 lg:p-8 my-10 md:my-16 bg-white dark:bg-gray-900 dark:bg-opacity-50 rounded-xl shadow-md overflow-hidden">
      {/* Add job form */}
      <form onSubmit={handleAddJob} className="grid grid-cols-12 gap-5">
        {/* Job title */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Job Title*</span>
          </div>
          <input
            name="title"
            type="text"
            placeholder="Enter job title"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* Company name */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Company Name*</span>
          </div>
          <input
            name="company"
            type="text"
            placeholder="Enter company name"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* Job location */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Job Location*</span>
          </div>
          <input
            name="location"
            type="text"
            placeholder="Enter job location"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* Company logo URL */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Company Logo URL*</span>
          </div>
          <input
            name="company_logo"
            type="url"
            placeholder="Enter company logo link URL"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* HR name */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">HR Name*</span>
          </div>
          <input
            name="hr_name"
            type="text"
            placeholder="Enter HR name"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* HR email */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">HR Email*</span>
          </div>
          <input
            name="hr_email"
            type="email"
            placeholder="e.g. name@gmail.com"
            className="input input-bordered w-full"
            required
          />
        </label>
        {/* Job category */}
        <label className="form-control w-full col-span-4">
          <div className="label">
            <span className="label-text">Job Category*</span>
          </div>
          <select defaultValue="" className="select select-bordered" name="category" required>
            <option disabled value="">
              Select Category
            </option>
            <option>Development</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Engineering</option>
            <option>Teaching</option>
            <option>Management</option>
            <option>Data Science</option>
            <option>Design</option>
          </select>
        </label>
        {/* Job type */}
        <label className="form-control w-full col-span-4">
          <div className="label">
            <span className="label-text">Job Type*</span>
          </div>
          <select defaultValue="" className="select select-bordered" name="jobType" required>
            <option disabled value="">
              Select Job Type
            </option>
            <option>Hybrid</option>
            <option>Intern</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
            <option>Contractual</option>
          </select>
        </label>
        {/* Job status */}
        <label className="form-control w-full col-span-4">
          <div className="label">
            <span className="label-text">Job Status*</span>
          </div>
          <select defaultValue="" className="select select-bordered" name="jobStatus" required>
            <option disabled value="">
              Select Job Status
            </option>
            <option>Active</option>
            <option>Not Active</option>
            <option>On Progress</option>
          </select>
        </label>
        {/* Application deadline */}
        <label className="form-control w-full col-span-3">
          <div className="label">
            <span className="label-text">Application Deadline*</span>
          </div>
          <input
            aria-label="Date"
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            placeholder="Application deadline"
            required
          />
        </label>
        {/* Minimum salary */}
        <label className="form-control w-full col-span-3">
          <div className="label">
            <span className="label-text">Salary (minimum)*</span>
          </div>
          <input
            type="number"
            name="min"
            min={0}
            className="input input-bordered w-full"
            placeholder="Minimum salary"
            required
          />
        </label>
        {/* Maximum salary */}
        <label className="form-control w-full col-span-3">
          <div className="label">
            <span className="label-text">Salary (maximum)*</span>
          </div>
          <input
            type="number"
            name="max"
            min={0}
            className="input input-bordered w-full"
            placeholder="Maximum salary"
            required
          />
        </label>
        {/* Currency */}
        <label className="form-control w-full col-span-3">
          <div className="label">
            <span className="label-text">Currency*</span>
          </div>
          <select defaultValue="" className="select select-bordered" name="currency" required>
            <option disabled value="">
              Select Currency
            </option>
            <option>bdt</option>
            <option>usd</option>
            <option>eur</option>
            <option>inr</option>
            <option>kwd</option>
            <option>cny</option>
          </select>
        </label>
        {/* Responsibilities */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Responsibilities*</span>
          </div>
          <textarea
            name="responsibilities"
            className="textarea textarea-bordered"
            placeholder="Enter responsibilities, separated by commas"
            required
          ></textarea>
        </label>
        {/* Requirements */}
        <label className="form-control w-full col-span-6">
          <div className="label">
            <span className="label-text">Requirements*</span>
          </div>
          <textarea
            name="requirements"
            className="textarea textarea-bordered"
            placeholder="Enter requirements, separated by commas"
            required
          ></textarea>
        </label>
        {/* Job Description */}
        <label className="form-control w-full col-span-12">
          <div className="label">
            <span className="label-text">Job Description*</span>
          </div>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Enter Job Description"
            required
          ></textarea>
        </label>
        {/* Submit job button */}
        <Button
          btnText="Add Job"
          btnStyle="col-span-12 mt-4 bg-blue-600 text-white hover:bg-blue-500"
          btnType="submit"
        />
      </form>
      {/* ------X------ */}
    </section>
  );
};

export default AddJobForm;