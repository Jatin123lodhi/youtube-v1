import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSideBar } from "../utils/appSlice";
import { logo, SEARCH_SUGGEST_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 mr-2 text-gray-500 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    //we have to make this call after 200ms
    const i = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);
    return () => clearTimeout(i);
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(SEARCH_SUGGEST_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);
    const obj = {
      [searchQuery]: json[1],
    };
    // console.log(obj, "my obj");
    dispatch(cacheResults(obj));
  };

  const handelSideBar = () => {
    //onClick btn -> action should dispatch (toggleSideBar) -> which will call dispatcher fun -> update the slice(sidebar) of my store
    // redux installed
    //1. store 2. slice, provide slice to store, then provide store to app    3.dipatcher fun 4.subscribe
    console.log("clicked");
    dispatch(toggleSideBar());
  };
  return (
    <div className="flex border  shadow-sm  items-center justify-between">
      {/* left part */}
      <div className="flex">
        <button onClick={() => handelSideBar()} className="m-2 p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <a href="/">
          <img className="p-2 my-2 w-16" src={logo} alt="youtube icon" />{" "}
        </a>
      </div>
      {/* middle section */}
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form summit");
        }}
      >
        <div className="flex item-center">
          <input
            className="border border-gray-300 rounded-l-full  p-2 pl-4 md:w-96 lg:w-[34rem]"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => {
              const timer = setTimeout(() => {
                console.log("blur");
                setShowSuggestion(false);
              }, 300);

            }}
          />
          <button className=" bg-gray-200  border border-gray-300 rounded-r-full  w-14 pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        {searchQuery.length!==0 && showSuggestion && (
          <div className="p-2 m-2 bg-gray-100 rounded-lg h-96 md:w-96 lg:w-[34rem] absolute">
            <ul>
              {/* <li className="p-1 m-1">{<SearchSVG/>}    </li> */}
              {suggestions.map((suggestion, index) => {
                return (
                   
                  <li
                    className="p-1  cursor-pointer hover:bg-gray-200 "
                    key={index}
                  >
                    <button
                      className="  z-10 w-full text-left"
                      onClick={(e) => {
                        console.log(e?.currentTarget?.children[1]?.innerHTML);
                        setsearchQuery(e?.currentTarget?.children[1]?.innerHTML);
                      }}
                    >
                      {<SearchSVG />} <span className="suggestion"> {suggestion} </span>
                    </button>
                  </li> 
                );
              })}
            </ul>
          </div>
        )}
      </form>
      {/* right part */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-gray-700 w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};
