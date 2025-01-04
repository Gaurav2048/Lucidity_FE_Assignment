import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirect to the home page or any other safe route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          403 - Unauthorized
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          You do not have the necessary permissions to access this page.
        </p>
        <button
          onClick={handleGoBack}
          className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium shadow-md transition duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
