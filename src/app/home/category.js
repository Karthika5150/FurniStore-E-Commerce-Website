import React from "react";
import { CategoryData, shippingDetails } from "../data/data";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <main className="max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[64px]  border-b border-[#ccc9c1] ">
        <h1 className="sec-title">Shop by category</h1>

        <div className="md:grid-cols-3 max-md:grid-cols-2 pt-[48px] w-[100%] max-[767px]:pt-[15px] flex justify-between flex-wrap max-[1440px]:gap-[20px] gap-[50px]">
          {CategoryData.map((items) => (
            <div
              key={items.id}
              className="relative  overflow-hidden bg-cover bg-no-repeat cursor-pointer max-[767px]:w-[46%] min-[767px]:w-[31.5%] xl:w-[30%]"
            >
              <Image
                src={items.img}
                alt="img"
                className="transition object-cover w-full duration-800 ease-in-out hover:scale-105 brightness-70 hover:brightness-90"
              />
              <h5 className="absolute max-[767px]:text-[18px] top-5 px-[24px]  text-[24px] text-[#fff] font-(family-name:--font-inter-tight) font-normal">
                {items.content}
              </h5>
            </div>
          ))}
        </div>


        <div className="xl:grid-cols-4 grid max-md:grid-cols-1 md:grid-cols-2 max-md:gap-5 pt-[48px] max-md:pt-[15px] gap-[105px]">
          {shippingDetails.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[35px]  max-[767px]:gap-[15px]  max-[767px]:pb-[10px]"
            >
              <div className="w-[40px] h-[40px]">
                <Image
                  src={item.icon}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h6 className="text-[20px]   max-[767px]:text-[18px] text-[#111111] font-normal font-(family-name:--font-inter-tight)">
                  {item.title}
                </h6>
                <p className="text-[16px] text-[#383733] font-normal font-(family-name:--font-inter-tight)">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

    </>
  );
};

export default Category;
