import React from "react";

function HeroPage() {
  return (
    <div className="p-5 bg-white">
      <div className="w-full bg-gradient-to-r from-violet-300 to-yellow-100 rounded-xl flex items-center justify-between h-80">
        <div className="mx-auto">
          <div className="items-center ">
            <h1 className="font-semibold text-5xl">Exam</h1>
            <h1 className="font-semibold text-5xl">UnLocked !</h1>
            <h1 className="font-semibold text-lg mt-3">
              Dive Into The Ocean of Courses and Test Series
            </h1>

            <div className="w-50 mt-10">
              <img
                src="https://www.examys.com/_next/image?url=%2Ficons%2FGooglePlay.jpg&w=384&q=75"
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex gap-5 p-2 mt-5">
          <img
            src="https://www.examys.com/_next/image?url=%2Fbanners%2Fandroid.png&w=384&q=75"
            alt=""
            className="h-70 mt-9"
          />

          <img
            src="https://www.examys.com/_next/image?url=%2Fbanners%2Fmac.png&w=640&q=75"
            alt=""
            className="h-80 mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
