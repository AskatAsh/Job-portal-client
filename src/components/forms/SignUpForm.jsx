import { useState } from "react";
import Input from "./../common/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const { createUser, setUser } = useAuthContext();
  const [showPass, setShowPass] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkPasswordValidity = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordValid(true);
      return false;
    }
    return true;
  };

  const showPasswordInfo = (e) => {
    const password = e.target.value;
    if (password.length === 0) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    const isValid = checkPasswordValidity(password);
    if (!isValid) {
      return;
    }

    // create new user using email and password
    createUser(email, password)
      .then(async (result) => {
        const newUser = result.user;
        setUser(newUser);
        form.reset();
        toast.success("Account created Successfully!");
        navigate(location?.state || '/');
        // jwt web token
        const userInfo = { email: newUser.email };
        const { data } = await axios.post(
          `${import.meta.env.VITE_SERVER}/jwt`,
          userInfo,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(data);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <form onSubmit={handleSignUp} className="w-full max-w-md">
      <div className="space-y-6">
        <Input inputType="email" inputText="Email" />

        <div className="form-control relative">
          <label
            className="block text-sm font-medium text-gray-800 dark:text-gray-300"
            htmlFor="password"
          >
            Password*
          </label>
          <label className="input bg-gray-50 dark:bg-gray-900 input-bordered mt-2 border border-gray-300 dark:border-gray-800 focus-within:border-blue-700 focus-within:outline-none flex items-center gap-2 text-gray-800 dark:text-gray-50">
            <input
              onFocus={() => setPasswordValid(true)}
              onBlur={() => setPasswordValid(false)}
              onChange={showPasswordInfo}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              className="grow"
              id="password"
              required
            />
            <button
              onClick={handleShowPassword}
              className="text-xl text-gray-800 dark:text-gray-400"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </button>
          </label>
          <label className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border-2 border-gray-300 dark:border-gray-500 rounded-md checked:border-none"
            />
            <span className="text-gray-600 dark:text-gray-500">
              Agree to our{" "}
              <a href="*" className="text-blue-700 dark:text-blue-500 hover:underline">
                terms
              </a>{" "}
              &{" "}
              <a href="*" className="text-blue-700 dark:text-blue-500 hover:underline">
                conditions
              </a>
            </span>
          </label>
          {/* password verify info */}
          <div
            className={`p-3 max-w-[280px] rounded-xl z-50 absolute top-20 left-0 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 ${
              passwordValid ? "block" : "hidden"
            }`}
          >
            <p className="text-sm font-semibold text-left mb-1">Password -</p>
            <ul className="list-disc ml-5 text-left text-sm">
              <li>must be at least 6 characters long.</li>
              <li>Contain at least one lowercase letter.</li>
              <li>Contain at least one uppercase letter.</li>
            </ul>
          </div>
        </div>
      </div>

      <Button
        btnType="submit"
        btnText="Create new account"
        btnStyle="w-full bg-blue-600 hover:bg-blue-800 outline-none border-none text-white mt-6"
      />
    </form>
  );
};

export default SignUpForm;
