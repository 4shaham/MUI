import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroPage />

      <div className="w-full h-100 bg-gray-50 items-center p-4">
        <div className="items-center mx-auto text-center mt-10 font-semibold">
          <h1 className="text-5xl">Exmays Course Advantages</h1>
          <h1 className="text-xl mt-3 text-gray-400">Access  online  courses  for  Govt.  Exams systematically with Video classes,  pdfs and   quizzes</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
