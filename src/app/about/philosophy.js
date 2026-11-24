import React from "react";
import { PhilosophyData } from "../data/data";

const Phliosophy = () => {
  return (
    <>
      <main className="2xl:px-[153px] py-[48px] xl:px-[64px]  lg:px-[45px]  max-[769px]:p-[13px] min-[769px]:px-[25px] ">
        <h1 className="sec-title leading-13 max-[769px]:mt-[15px]">
          Design Philosophy
        </h1>

        <div className="flex w-[100%] max-[769px]:pt-[30px] pt-[150px] min-[769px]:pt-[50px] justify-between max-[425px]:flex-col min-[425px]:flex-wrap min-[800px]:flex-row max-[769px]:gap-[20px] min-[769px]:space-y-[20px]">
          {PhilosophyData.map((item) => (
            <div
              className="flex flex-col gap-[25px] w-[25%] max-[425px]:w-full  min-[425px]:w-[47%] lg:w-[25%]"
              key={item.id}
            >
              <div
                className={`flex justify-center items-center w-[96px] h-[96px] text-[50px] ${
                  item.id === 0
                    ? "bg-[#383733] text-[#fff]"
                    : item.id === 1
                    ? "bg-[#fc6b00] text-[#fff]"
                    : item.id === 2
                    ? "bg-[#ccc9c1] text-[#111]"
                    : "bg-[#f3f1ef] text-[#111]"
                }`}
              >
                {item.icon}
              </div>
              <div>
                <h6 className="text-[#111] text-[24px] font-(family-name:--font-fraunces) font-light">
                  {item.title}
                </h6>
                <p className="text-[#383733] max-[769px]:text-[14px] text-[16px] font-(family-name:--font-inter-tight) mt-[10px] max-[600px]:w-full w-[90%]">
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

export default Phliosophy;
