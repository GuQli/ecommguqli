import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../utils";
import { getUser } from "../../utils";
import { useEffect, useState } from "react";

export const DropdownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogOut();
      } catch (error) {
        toast.error(`User Error: ${error.status} ${error.message}`, {
          position: "bottom-right",
          theme: "light",
          closeOnClick: true,
        });
      }
    }
    fetchData();
  });

  function handleLogOut() {
    logout();
    setDropDown(false);
    toast.success("Logged out");
    navigate("/");
  }
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <a
            onClick={() => setDropDown(false)}
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </a>
        </li>
        <li>
          <a
            onClick={() => setDropDown(false)}
            href="dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handleLogOut}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
