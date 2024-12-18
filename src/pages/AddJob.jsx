import AddJobForm from "../components/forms/AddJobForm";

const AddJob = () => {
    return (
        <div className="pt-14 sm:pt-20">
            <h1 className="text-3xl font-semibold text-center px-4 text-gray-800 dark:text-gray-300 mt-16">Add a Job Post</h1>
            <AddJobForm />
        </div>
    );
};

export default AddJob;