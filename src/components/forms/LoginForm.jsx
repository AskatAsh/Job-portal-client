import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Input from "../common/Input";

const LoginForm = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white text-gray-900">
          Welcome back
        </h2>

        <div className="flex gap-4 mb-4 flex-col lg:flex-row max-w-md w-full">
          <button className="btn border border-gray-200 bg-transparent hover:bg-gray-100 lg:w-auto gap-2 flex-1 text-gray-800">
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
          <button className="btn border border-gray-200 bg-transparent hover:bg-gray-100 lg:w-auto gap-2 flex-1 text-gray-800">
            <FaLinkedin className="text-xl text-blue-900 dark:text-white" />
            Sign in with Linkedin
          </button>
        </div>

        <div className="divider w-full max-w-md mx-auto font-semibold">or</div>

        <form className="w-full max-w-md space-y-4">
          <Input inputType="email" inputText="Email" />
          <Input inputType="password" inputText="Password" />

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-blue-500 text-sm">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary w-full">
            Sign in to your account
          </button>
        </form>

        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-blue-600 text-white flex flex-col justify-center items-center p-8">
        <h2 className="text-4xl font-bold mb-4">
          Explore the world’s leading design portfolios.
        </h2>
        <p className="text-lg mb-8 max-w-md text-center">
          Millions of designers and agencies around the world showcase their
          portfolio work on Flowbite - the home to the world’s best design and
          creative professionals.
        </p>
        <div className="flex items-center gap-4">
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="avatar"
                className="rounded-full border-2 border-white w-12 h-12"
              />
            </div>
          </div>
          <p className="text-lg">
            Over <span className="font-bold">15.7k</span> Happy Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
