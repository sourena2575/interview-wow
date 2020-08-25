import React from "react";
import TableRow from "../components/TableRow";
import CarouselFile from "../components/Carousel";
import DotIcon from "../components/icons/DotIcon";
const data = [
  { n: "1.", name: "محمد نظری", score: "480 k", grade: "12 th", words: "3228" },
  {
    n: "2.",
    name: " ابوالفضل قبادی",
    score: "480 k",
    grade: "12 th",
    words: "3228",
  },
  {
    n: "3.",
    name: " سهیل مرادی",
    score: "480 k",
    grade: "12 th",
    words: "3228",
  },
  {
    n: "4.",
    name: " آرمان شکر الهی",
    score: "480 k",
    grade: "12 th",
    words: "3228",
  },
  {
    n: "5.",
    name: " دریا کریم زاده",
    score: "480 k",
    grade: "12 th",
    words: "3228",
  },
  { n: "6.", name: "محمد نظری", score: "480 k", grade: "12 th", words: "3228" },
  {
    n: "7.",
    name: " ابوالفضل قبادی",
    score: "480 k",
    grade: "12 th",
    words: "3228",
  },
];

const Main = () => {
  return (
    <div className="flex  flex-col items-center">
      <p className="text-center text-blue-800 text-xl pt-16 font-semibold">
        Play with 7666 words and complete with 59346 learners in World of
        Worilds (WoW)
      </p>
      <select className="bg-white border-none shadow-md my-5 w-56 h-8 font-semibold">
        <option selected>
          Overall &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 66055
        </option>
      </select>
      <div className=" grid grid-cols-12 w-9/12 mt-6">
        <div className="col-span-1"></div>
        <div className="font-bold col-span-2 text-left">Name</div>
        <div className="font-bold  col-span-1 text-left">Score</div>
        <div className="font-bold  col-span-1 text-left">Grade</div>
        <div className="font-bold  col-span-1 text-left">Words</div>
        <div className="col-span-6"></div>
      </div>
      <div className="my-8 w-9/12">
        {data.map((item, index) => (
          <TableRow item={item} index={index} key={index} />
        ))}
      </div>
      <p className="text-center text-blue-800 text-xl pt-8 pb-16 font-semibold">
        Learn 7666 words from school textbooks IELTS, TOFEL and GRE exams
      </p>
      <CarouselFile />
    </div>
  );
};

export default Main;
