import { useState } from "react";
import Button from "../common/button";
import Input from "./../common/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const checkPassword = (e) => {
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
  };

  return (
    <form onSubmit={handleSignUp} className="w-full max-w-md">
      <div className="space-y-4">
        <Input inputType="email" inputText="Email" />

        <div className="form-control relative">
          <label
            className="block text-sm font-medium text-gray-800"
            htmlFor="password"
          >
            Password*
          </label>
          <label className="input bg-gray-50 input-bordered mt-2 border-2 border-gray-200 focus-within:border-blue-700 focus-within:outline-none flex items-center gap-2 text-gray-800">
            <input
              onFocus={() => setPasswordValid(true)}
              onBlur={() => setPasswordValid(false)}
              onChange={checkPassword}
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="grow"
              id="password"
              required
            />
            <button
              onClick={handleShowPassword}
              className="text-xl text-lightgray"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </button>
          </label>
          {/* password verify info */}
          <div
            className={`p-3 max-w-[280px] rounded-xl z-50 absolute top-20 left-0 shadow-lg bg-white border text-gray-600 ${
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
        btnStyle="w-full bg-blue-700 hover:bg-blue-800 outline-none border-none text-white mt-8"
      />
    </form>
  );
};

export default SignUpForm;
