"use client";
import { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoSync } from "react-icons/io5";
import Image from "next/image";

import { MdKeyboardArrowLeft ,MdKeyboardArrowRight } from "react-icons/md";
import { LuZoomIn } from "react-icons/lu";
import { BsZoomOut } from "react-icons/bs";
import { MdCropRotate } from "react-icons/md";

export default function ExamPage() {
  const [selectedTab, setSelectedTab] = useState<"mcq" | "descriptive">("mcq");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Separate toggles for MCQ and Descriptive
  const [isToggledMCQ, setIsToggledMCQ] = useState(false);
  const [isToggledDescriptive, setIsToggledDescriptive] = useState(false);

  const toggleMCQ = () => setIsToggledMCQ((prev) => !prev);
  const toggleDescriptive = () => setIsToggledDescriptive((prev) => !prev);

  const options = [
    "National Highway Authority of India (NHAI) or Rural Electrification Corporation (REC)",
    "Power Finance Corporation Limited (PFC) or Indian Railway Finance Corporation Limited (IRFC)",
    "National Bank for Agriculture and Rural Development (NABARD) or Small Industries Development Bank of India (SIDBI)",
    "All of the Above",
  ];

  const questionPalette = Array.from({ length: 80 }, (_, i) => i + 1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-100 font-sans gap-4">
      {/* Left Section */}
      <div className="w-full lg:w-[70%] bg-white p-6 rounded-[10px] shadow-2xl border border-black min-h-[90vh]">
        {selectedTab === "mcq" ? (
          <>
            <div className="text-sm text-gray-600 mb-2">Questions 12 of 100</div>
            <div className="text-md mb-4">
              <strong className="text-blue-700 mr-2">12</strong>
              Under section 54EC of the Income Tax Act, exemption is available if
              investment is made in bonds issued by:
            </div>

            <form className="space-y-4">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-start space-x-2 cursor-pointer border rounded px-4 py-2 hover:bg-gray-100"
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="mt-1"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </form>

            {/* Action Row */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Mark & Clear */}
              <div className="flex items-center gap-4">
                <label
                  className="flex items-center space-x-2 text-gray-700 cursor-pointer"
                  onClick={toggleMCQ}
                >
                  {isToggledMCQ ? (
                    <FaToggleOn className="text-blue-600" size={35} />
                  ) : (
                    <FaToggleOff className="text-gray-300" size={35} />
                  )}
                  <span>{isToggledMCQ ? "Marked for review" : "Mark for review"}</span>
                </label>

                <button className="flex items-center space-x-2">
                  <IoSync className="text-lg text-gray-300" size={35} />
                  <span>Clear response</span>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-blue-600 rounded-[10px] text-gray-700">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-[10px]">
                  Save & Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center mb-4">
                <img
                  src="/Exam.png"
                  alt="Descriptive Question"
                  className="w-[300px] border rounded shadow"
                />
              </div>

              <div className="bg-blue-600 h-auto w-[300px] flex items-center justify-center gap-2 text-white text-sm px-2 py-2 rounded-[10px]">
              <MdKeyboardArrowLeft size={30} className="hover:cursor-pointer"/> 2 /5  <MdKeyboardArrowRight size={30} className="hover:cursor-pointer"/> <LuZoomIn size={20} className="hover:cursor-pointer"/> <BsZoomOut size={20} className="hover:cursor-pointer"/> <MdCropRotate size={20} className="hover:cursor-pointer"/>

              </div>
            </div>

            {/* Action Row for Descriptive */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Mark & Clear */}
              <div className="flex items-center gap-4">
                <label
                  className="flex items-center space-x-2 text-gray-700 cursor-pointer"
                  onClick={toggleDescriptive}
                >
                  {isToggledDescriptive ? (
                    <FaToggleOn className="text-blue-600" size={35} />
                  ) : (
                    <FaToggleOff className="text-gray-300" size={35} />
                  )}
                  <span>
                    {isToggledDescriptive ? "Marked for review" : "Mark for review"}
                  </span>
                </label>

                <button className="flex items-center space-x-2">
                  <IoSync className="text-lg text-gray-300" size={35} />
                  <span>Clear response</span>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-blue-600 rounded-[10px] text-gray-700">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-[10px]">
                  Save & Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[30%] p-4 bg-white rounded-[10px] border border-black shadow-2xl min-h-[90vh] flex flex-col justify-between">
        <div>
          {/* Tabs */}
          <div className="flex w-full mb-4 gap-1 rounded-[10px] overflow-hidden border border-black">
            <button
              className={`w-1/2 px-4 py-2 text-sm font-medium ${
                selectedTab === "mcq"
                  ? "bg-blue-600 text-white rounded-[10px]"
                  : "bg-gray-200 text-gray-800 rounded-[10px]"
              }`}
              onClick={() => setSelectedTab("mcq")}
            >
              MCQ questions
            </button>
            <button
              className={`w-1/2 px-4 py-2 text-sm font-medium ${
                selectedTab === "descriptive"
                  ? "bg-blue-600 text-white rounded-[10px]"
                  : "bg-gray-200 text-gray-800 rounded-[10px]"
              }`}
              onClick={() => setSelectedTab("descriptive")}
            >
              Descriptive questions
            </button>
          </div>

          {/* Tab Content */}
          {selectedTab === "mcq" ? (
            <div className="grid grid-cols-8 gap-2 text-center text-sm mb-4">
              {questionPalette.map((num) => {
                const baseStyle =
                  "w-8 h-8 rounded-[10px] flex items-center justify-center font-medium";

                let bg = "bg-gray-500 text-white";
                if ([1, 2, 3].includes(num)) bg = "bg-green-500 text-white";
                if ([4, 5, 6].includes(num)) bg = "bg-red-500 text-white";
                if ([9, 10].includes(num)) bg = "bg-purple-600 text-white";

                return (
                  <div key={num} className={`${baseStyle} ${bg}`}>
                    {num}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {file && (
                <div className="flex items-center justify-between p-2 border border-blue-400 rounded bg-blue-600/20">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/PDF_IMG.png"}
                      height={100}
                      width={100}
                      className="h-[50px] w-[50px]"
                      alt="pdf-image"
                    />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              )}
              <div className="mt-20">
                <h1 className="text-black ">Submit your answer PDF here</h1>
              </div>

              <div className="border-2 border-dashed border-black p-6 text-center h-auto py-10">
                <p className="text-sm text-gray-600 mb-2">Drag & Drop your file here</p>
                <p className="text-gray-500 mb-2">OR</p>
                <label className="inline-block px-4 py-2 bg-[#0048B0] text-white rounded-[10px] cursor-pointer">
                  Select File
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        <button className="w-full mt-6 px-4 py-2 border border-blue-600 text-blue-600  rounded">
          Submit Examination
        </button>
      </div>
    </div>
  );
}
