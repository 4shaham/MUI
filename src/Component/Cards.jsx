import React from "react";

function Cards() {
  return (
    <div className=" flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 p-6">
      <div className="mb-1 text-start">
        <h5 className="text-black text-xl font-semibold">
          Website Review Check
        </h5>
      </div>
      <p className="block text-gray-600 leading-normal font-light mb-4">
        <span className="text-red-400 font-bold">Focus pack</span> | 1 year
      </p>
      <p className="block text-slate-600 leading-normal font-light mb-4">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire others.
      </p>
      <div className="flex justify-between">
        <p className="text-green-500 font-bold text-lg">1200</p>
        <p className="text-end  text-blue-600 font-semibold text-lg hover:underline flex items-center">
          View Details
        </p>
      </div>
      
    </div>

  );
}

export default Cards;
