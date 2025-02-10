import React from "react";
import { Search } from "lucide-react";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuJapaneseYen } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

const navBarContent = [
  { name: "Coursers", icons: <RiGraduationCapLine className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-600" /> },
  { name: "Test Series", icons:<IoDocumentTextOutline className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-600" /> },
  { name: "Test Pass Pro+", icons: <RiGraduationCapLine className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-600" /> },
  { name: "Examys Ai", icons: <RiGraduationCapLine className="w-8 h-8 mx-auto text-gray-400 hover:text-blue-600" />},
];

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm p-5">
      <div className="p-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-[#5648ED] w-20 h-20 p-5  rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">Examys</span>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <div className="absolute left-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-70 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5648ED] focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-3 text-gray-400 text-lg font-normal mx-5 ">
                <h1 className="hover:text-black">Refer & Earn |</h1>
                <h1 className="hover:text-black">Coupon | </h1>
                <h1 className="hover:text-black">Download App </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 mx-auto mt-9 w-120">
              {navBarContent.map((values) => (
                <div className="bg-white mx-auto  items-center text-gray-700 hover-text-blue-600">
                  {values.icons}
                  <p className=" ">{values.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
      
            <div className="flex items-center space-x-1  bg-white rounded-md border-2 border-gray-300 p-1 w-20 ">
              <span className="text-large font-normal  text-black">English</span>
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Login Button */}
            <button className="bg-[#5648ED] text-white px-6 py-2 rounded-lg text-sm font-normal">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
