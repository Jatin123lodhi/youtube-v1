import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const isVisible = useSelector((store) => store.app.isSideBarOpen);
  //console.log(isVisible)
  if (isVisible == false) return;
  return (
    <div className="flex flex-col m-2 p-2 ">
      <div className="border m-2 p-2 ">
        <ul>
          <li className="p-2 hover:bg-gray-200">
            <div className="flex items-center ">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div>Home</div>
              </Link>
            </div>
          </li>
          <li className="p-2 hover:bg-gray-200">Shorts</li>
          <li className="p-2 hover:bg-gray-200">Subscriptions</li>
          <li className="p-2 hover:bg-gray-200">Originals</li>
          <li className="p-2 hover:bg-gray-200">Youtube Music</li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Library</li>
          <li className="p-2 hover:bg-gray-200">History</li>
          <li className="p-2 hover:bg-gray-200">Your videos</li>
          <li className="p-2 hover:bg-gray-200">Watch later</li>
          <li className="p-2 hover:bg-gray-200">Downloads</li>
          <li className="p-2 hover:bg-gray-200">Liked videos</li>
          <li className="p-2 hover:bg-gray-200">Downloads</li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Trending</li>
          <li className="p-2 hover:bg-gray-200">Music</li>
          <li className="p-2 hover:bg-gray-200">Movies</li>
          <li className="p-2 hover:bg-gray-200">Live</li>
          <li className="p-2 hover:bg-gray-200">Gaming</li>
          <li className="p-2 hover:bg-gray-200">News</li>
          <li className="p-2 hover:bg-gray-200">Sports</li>
        </ul>
      </div>
      <div className="border m-2 p-2">
        <ul>
          <li className="p-2 hover:bg-gray-200">Trending</li>
          <li className="p-2 hover:bg-gray-200">Music</li>
          <li className="p-2 hover:bg-gray-200">Movies</li>
          <li className="p-2 hover:bg-gray-200">Live</li>
          <li className="p-2 hover:bg-gray-200">Gaming</li>
          <li className="p-2 hover:bg-gray-200">News</li>
          <li className="p-2 hover:bg-gray-200">Sports</li>
        </ul>
      </div>
    </div>
  );
};
