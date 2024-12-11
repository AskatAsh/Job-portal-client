import Input from "../common/Input";
import Button from "../common/button";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
      <Input inputType="email" inputText="Email" />
      <Input inputType="password" inputText="Password" />

      <div className="flex justify-between items-center mt-0">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-2 border-gray-300 rounded-md checked:border-none"
          />
          <span className="text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-blue-700 hover:underline text-sm">
          Forgot password?
        </a>
      </div>

      <Button
        btnType="submit"
        btnText="Login to your account"
        btnStyle="w-full bg-blue-700 hover:bg-blue-800 outline-none border-none text-white"
      />
    </form>
  );
};

export default LoginForm;
