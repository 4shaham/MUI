import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
import Card from "../Component/card";

function HomePage() {
  const [button, setButtonStatus] = useState([
    { name: "Railway", status: true },
    { name: "SSC", status: false },
    { name: "Teaching", status: false },
  ]);
  const [currentButton, setCurrentButton] = useState("Railway");

  const buttonRelatedData = [
    { category: "Railway" },
    { category: "Railway" },
    { category: "Railway" },
    { category: "Railway" },
    { category: "Railway" },
    { category: "Railway" },
    { category: "SSC" },
    { category: "SSC" },
    { category: "SSC" },
    { category: "SSC" },
    { category: "SSC" },
    { category: "Teaching" },
  ];

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

  const handlButtonClickStatus = (name) => {
    setButtonStatus(
      button.filter((values) => {
        if (values.name == name) {
          values.status = true;
        } else {
          values.status = false;
        }
        return values;
      })
    );
    setCurrentButton(name);
  };

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

          <div className="text-start mt-7 mx-17">
            <h1 className="text-3xl font-bold">Some Courses You May Like</h1>
            <div className="flex gap-5 mt-5">
              {button.map((values) => (
                <button
                  className={
                    values.status == false
                      ? "py-2 px-3 rounded-md border border-blue-600"
                      : "p-2 rounded-md border text-white bg-blue-600"
                  }
                  onClick={() => handlButtonClickStatus(values.name)}
                >
                  {values.name}
                </button>
              ))}
            </div>

            <div className="container">
              <div className="grid grid-cols-4 gap-5 mt-5 mx-1">
                {buttonRelatedData
                  .filter((values) => values.category == currentButton)
                  ?.map((values) => (
                    <Card />
                  ))}
              </div>
              <div className="flex mx-auto justify-center mt-3">
                <button className="text-white text-lg bg-blue-600 rounded-sm p-2 w-100">
                  Explore All Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
