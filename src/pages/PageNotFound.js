import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import pageNotFound from "../assets/pageNotFound.png";

export const PageNotFound = ({ message }) => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-4xl text-gray-700 font-bold my-10 dark:text-white text-center">
            {message ? `${message} ` : "Page Not Found"}
          </p>
          <div className="max-w-xs">
            <img className="" src={pageNotFound} alt="pageNotFound" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="w-64 text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back to Shopping
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
