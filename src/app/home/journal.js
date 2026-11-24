import React from "react";
import { journalHome } from "../data/data";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const JournalImg = () => {
  return (
    <>
      <main className="2xl:py-[64px] py-[48px] max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] border-b border-[#ccc9c1] bg-[#e9e6e3]">
        <div className="flex justify-between max-[767px]:flex-col gap-[10px]">
          <h1 className="sec-title">From our journal</h1>
          <div>
            <Link href='/journal' className="flex gap-[5px] justify-center duration-400  cursor-pointer font-(family-name:--font-inter-tight) border border-[#111111] items-center px-[12px] py-[6px] text-[#111111] bg-trasnparent hover:text-[#fff] hover:bg-[#111111]">
              View more <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="grid-cols-3 max-md:grid-cols-1 grid 2xl:gap-[48px] mt-[50px]">
          {journalHome.map((item) => (
            <div key={item.id} className="flex flex-col gap-[30px]">
              <div className="w-full min-[767px]:h-[200px] lg:h-[300px] 2xl:h-[350px] cursor-pointer bg-cover overflow-hidden bg-no-repeat relative">
                <Image
                  src={item.img}
                  alt="img"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
              </div>
              <div className="max-[767px]:pb-[20px]">
                <h6 className="2xl:text-[22px] text-[20px]  text-[#111111] hover:text-[#cf5600] cursor-pointer font-light font-(family-name:--font-fraunces) mb-[15px]">
                  {item.content}
                </h6>
                <button className="font-(family-name:--font-inter-tight) border h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                  {item.date}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default JournalImg;
