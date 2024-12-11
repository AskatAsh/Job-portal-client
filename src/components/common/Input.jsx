const Input = ({ inputType = "text", inputText = "Username" }) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-800"
        htmlFor={inputType}
      >
        {inputText}
      </label>
      <input
        name={inputType}
        type={inputType}
        id={inputType}
        placeholder={`Enter your ${inputText}`}
        className="input input-bordered w-full mt-2 text-gray-800 bg-transparent border-gray-300 focus:outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default Input;
