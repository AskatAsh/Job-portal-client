import { PropTypes } from 'prop-types';
const Input = ({ inputType = "text", inputText = "Username" }) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-800"
        htmlFor={inputType}
      >
        {inputText}*
      </label>
      <input
        name={inputType}
        type={inputType}
        id={inputType}
        placeholder={`Enter your ${inputText}`}
        className="input input-bordered w-full mt-2 text-gray-800 bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-blue-700"
      />
    </div>
  );
};

Input.propTypes = {
    inputType: PropTypes.string,
    inputText: PropTypes.string
}

export default Input;
