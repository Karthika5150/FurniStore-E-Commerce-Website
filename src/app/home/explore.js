"use client";
import React, { useState } from "react";
import { ExploreData } from "../data/data";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";

const Explore = () => {
  const [imgId, setImgId] = useState(null);

  const hanldeMouseEnter = (id) => {
    setImgId(id);
  };

  const hanldeMouseLeave = () => {
    setImgId(null);
  };
  return (
    <>
      <main className="max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[64px] bg-[#e9e6e3]">
        <h1 className="sec-title">Explore products</h1>

        <div className=" max-[767px]:columns-2 max-[767px]:gap-[20px] min-[767px]:columns-3  lg:columns-4 min-[767px]:space-y-[40px] max-[767px]:space-y-[20px] min-[767px]:gap-[20px] xl:gap-[48px] space-y-[48px] pt-[32px]">
          {ExploreData.map((item) => (
            <div
              key={item.id}
              className="w-full h-auto transition duration-1000 linear "
              onMouseEnter={() => hanldeMouseEnter(item.id)}
              onMouseLeave={hanldeMouseLeave}
            >
              <div className="bg-[#fff] relative  w-full h-[400px] max-[365px]:h-[150px] max-[424px]:h-[180px] max-[1440px]:h-[250px] cursor-pointer ">
                <Image
                  src={imgId === item.id ? item.img2 : item.img1}
                  alt="product-img"
                  className=" object-cover w-full h-full"
                />
                <button
                  className={`border py-[4.2px] px-[7.8px] absolute left-5 rounded-[3px] top-5 text-[12px] ${
                    item.discount === "OUT OF STOCK"
                      ? "text-[#111] border-[#111] bg-[#fff]"
                      : "text-[#fc6b00] border-[#fc6b00] bg-[#fff]"
                  } ${item.discount === "" ? "hidden" : "block"}`}
                >
                  {item.discount}
                </button>
              </div>
              <div className="flex justify-between mt-[15px]">
                <h6 className="max-[767px]:line-clamp-1 text-[16px] font-(family-name:--font-inter-tight) font-medium cursor-pointer hover:text-[#cf5600]">
                  {item.name}
                </h6>
                <button
                  className={` ${
                    imgId != null && imgId === item.id ? "block" : "hidden"
                  }`}
                >
                  <IoMdHeartEmpty />
                </button>
              </div>
              <div className="text-[14px] pt-[5px] font-(family-name:--font-inter-tight) text-[#383733]">
                {imgId != null && imgId === item.id ? (
                  <p className="flex items-center ">
                    <FiPlus /> Add to Cart
                  </p>
                ) : item.Dprice !== "" ? (
                  <>
                    {item.Dprice}{" "}
                    <del className="text-[14px]  ml-[5px] font-(family-name:--font-inter-tight) text-[#646360]">
                      {item.Oprice}
                    </del>
                  </>
                ) : (
                  item.Oprice
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Explore;
