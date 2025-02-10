import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";

function HomePage() {
  const onlineCourses = [
    {
      heading: "Complete Syllabus with Clear Course Design",
      img: "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-1.png&w=384&q=75",
      content:
        "You can start with any section without order as live classes, videos, pdfs and tests are not only designed in a systematic path but also curated with flexibility.",
    },
    {
        heading: "Systematic but Flexible Learning Path",
        img: "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-2.png&w=384&q=75",
        content:
          "You can start with any section without order as live classes, videos, pdfs and tests are not only designed in a systematic path but also curated with flexibility.",
      },
      {
        heading: "Complete Syllabus with Clear Course Design",
        img: "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-1.png&w=384&q=75",
        content:
          "You can start with any section without order as live classes, videos, pdfs and tests are not only designed in a systematic path but also curated with flexibility.",
      },
      {
        heading: "Complete Syllabus with Clear Course Design",
        img: "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-1.png&w=384&q=75",
        content:
          "You can start with any section without order as live classes, videos, pdfs and tests are not only designed in a systematic path but also curated with flexibility.",
      },
  ];

  return (
    <>
      <Navbar />
      <HeroPage />

      <div className="w-full  bg-gray-50 items-center p-4">

        <div className="items-center mx-auto text-center mt-10 font-semibold">
          <h1 className="text-5xl">Exmays Course Advantages</h1>
          <h1 className="text-xl mt-3 text-gray-400">
            Access online courses for Govt. Exams systematically with Video
            classes, pdfs and quizzes
          </h1>
          <div className="container mx-auto grid grid-cols-4 gap-5 mt-7  p-4">

            {onlineCourses.map((values) => (
              <div className="w-70">
                <img src={values.img} alt="" className="object-fill" />
                <h1 className="mt-3 text-xl font-bold">{values.heading}</h1>
                <small className="text-gray-400 mt-3">{values.content}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
