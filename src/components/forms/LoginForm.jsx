import Input from "../common/Input";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { setUser, loginUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(async (result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful.");
        navigate(location?.state || '/');
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
      <Input inputType="email" inputText="Email" />
      <Input inputType="password" inputText="Password" />

      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-2 border-gray-300 dark:border-gray-500 rounded-md checked:border-none"
          />
          <span className="text-gray-600 dark:text-gray-500">Remember me</span>
        </label>
        <a
          href="#"
          className="text-blue-700 dark:text-blue-500 hover:underline text-sm"
        >
          Forgot password?
        </a>
      </div>

      <Button
        btnType="submit"
        btnText="Login to your account"
        btnStyle="w-full bg-blue-600 hover:bg-blue-800 outline-none border-none text-white"
      />
    </form>
  );
};

export default LoginForm;
