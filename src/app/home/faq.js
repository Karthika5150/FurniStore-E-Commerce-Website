"use client";
import React, { useState } from "react";
import { FAQData } from "../data/data";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);

  const handleHide = (id) => {
    if (
      FAQData.map((items) => {
        items.id === id;
      })
    ) {
      setShowId(id);
      setShow(true);
    }
  };

  return (
    <>
      <main className="max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[48px] 2xl:py-[64px] flex justify-between max-[767px]:flex-col">
        <div className="w-1/2 max-[767px]:w-full">
          <h1 className="sec-title max-[767px]:w-full w-[20%] max-md:leading-8">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-1/2 max-[767px]:w-full">
          {FAQData.map((item) => (
            <div key={item.id} className="border-t border-[#ccc9c1]">
              <div
                className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                onClick={() => {
                  handleHide(item.id);
                }}
              >
                <p className="lg:text-[18px] text-[16px] text-[#1f2124]   font-normal font-inter-tight">
                  {item.qus}
                </p>
                <p className="flex items-center justify-center">
                  {show === true && item.id === showId ? (
                    <FiMinus className="text-[22px] text-[#ccc9c1]" />
                  ) : (
                    <FiPlus className="text-[22px] text-[#ccc9c1]" />
                  )}
                </p>
              </div>
              <p
                className={`text-[16px] text-[#111111] pb-[10px] font-normal font-inter-tight ${
                  (show === true) & (item.id === showId) ? "block" : "hidden"
                }`}
              >
                {item.ans}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FAQ;
