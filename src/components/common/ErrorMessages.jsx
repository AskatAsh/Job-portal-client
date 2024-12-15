import { PropTypes } from "prop-types";

const ErrorMessages = ({ errorMessage, onRetry }) => {
  const { error, status, message, code } = errorMessage;
  return (
    <section className="h-screen max-w-3xl w-full px-4 md:px-8 flex flex-col items-center justify-center mx-auto text-center space-y-8">
      {status && (
        <p className="text-xl font-semibold">
          {status}: {code}
        </p>
      )}
      <p className="text-sm">{error}</p>
      <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-400">
        {message}
      </h1>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      )}
    </section>
  );
};

ErrorMessages.propTypes = {
  errorMessage: PropTypes.shape({
    error: PropTypes.string.isRequired,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message: PropTypes.string.isRequired,
    code: PropTypes.string,
  }).isRequired,
  onRetry: PropTypes.func,
};

export default ErrorMessages;