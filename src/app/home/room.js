"use client";
import React from "react";
import { roomData } from "../data/data";
import Image from "next/image";

const Room = () => {
  return (
    <>
      <main className="max-[768px]:p-[10px] max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[64px] border-b border-[#ccc9c1] bg-[#e9e6e3]">
        <h1 className="sec-title">Shop by room</h1>
        <div className=" mt-[30px] max-[767px]:mt-[10px] grid max-[767px]:grid-cols-2 min-[767px]:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10">
          {roomData.map((item) => (
            <div
              key={item.id}
              className="w-full  max-[767px]:h-auto cursor-pointer relative overflow-hidden bg-cover bg-no-repeat"
            >
              <Image
                src={item.img}
                alt="img"
                className="transition duration-300 ease-in-out hover:scale-105 brightness-70 hover:brightness-90"
              />
              <h5 className="absolute top-5 max-[767px]:top-2 px-[24px] max-[767px]:text-[18px] max-[767px]:px-[10px]  text-[24px] text-[#fff] font-(family-name:--font-inter-tight) font-normal">
                {item.content}
              </h5>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Room;
