import React from "react";
import Image from "next/image";
import { MakersData1, MakersData2 } from "../data/data";

const Makers = () => {
  return (
    <>
      <main className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:p-[15px] lg:px-[45px] min-[769px]:px-[25px] 2xl:px-[153px]  py-[64px] gap-[48px] max-[1024px]:gap-[20px] h-auto max-[1024px]:flex-col  flex justify-between  font-normal font-(family-name:--font-inter-tight)">
        <div className="w-[50%] flex flex-col justify-start h-full max-[1024px]:w-full">
          <h1 className="sec-title leading-13 max-[769px]:mt-[15px]">
            Meet the Makers
          </h1>
          <p className="text-[16px] text-[#383733] mt-[15px] max-[769px]:text-[14px] font-(family-name:--font-inter-tight) mb-[16px]">
            Behind every Furnistør piece is a dedicated team of designers,
            craftspeople, and specialists who share a common passion for
            exceptional furniture. We believe that great design comes from
            collaboration, expertise, and an unwavering commitment to quality.
          </p>
        </div>

        <div className="w-[50%] max-[1024px]:w-full flex flex-wrap justify-between space-y-[40px] ">
          {MakersData1.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col gap-[30px] max-[769px]:gap-[20px] min-[425px]:w-[46%] max-[425px]:w-full"
            >
              <div className="w-full bg-[#ccc9c1]">
                <Image
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[44px] lg:text-[28px] max-[769px]:text-[28px] text-[#111] font-(family-name:--font-fraunces) font-light">
                  {item.title}
                </h4>
                <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight)">
                  {item.role}
                </p>
                <p className="text-[16px] max-[769px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight) mt-[15px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <main className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:p-[15px] lg:px-[45px] min-[769px]:px-[25px] 2xl:px-[153px] pb-[64px] gap-[48px]  h-auto flex flex-col justify-between ">
        <div className="w-[100%] flex max-[1024px]:flex-col justify-between max-[1024px]:gap-[20px]">
          {MakersData2.map((items) => (
            <div
              key={items.id}
              className="w-[48.5%] h-[400px] relative max-[1024px]:w-full "
            >
              <div className="h-[400px] w-full brightness-80">
                <Image
                  src={items.img}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute p-[50px] max-[769px]:p-[25px] top-0 flex flex-col h-full justify-between">
                <h4 className="text-[#fff] max-[769px]:text-[32px] text-[52px] font-(family-name:--font-fraunces) font-light">
                  {items.title}
                </h4>
                <div>
                  <p className="text-[16px] max-[769px]:text-[14px]  text-[#fff] font-(family-name:--font-inter-tight)">
                    {items.content1}
                  </p>
                  <p className="text-[16px] max-[769px]:text-[14px]  text-[#fff] font-(family-name:--font-inter-tight)  mt-[15px]">
                    {items.content2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-[48px] max-[769px]:p-[16px] min-[769px]:p-[32px]">
          <h1 className=" max-[769px]:text-[24px] min-[769px]:text-[32px] lg:text-[40px] min-[769px]:leading-10 max-[769px]:leading-7 mb-[20px]  text-[#111111] font-(family-name:--font-fraunces) font-light text-center">
            Every Joint, every grain, every finish tells a story. Our job is to
            make sure it is a story worth telling for generations.
          </h1>
          <h6 className="text-[#111] text-[16px] font-(family-name:--font-inter-tight) text-center ">
            Erik Johannsen
          </h6>
          <p className="text-[#383733] text-[14px] font-(family-name:--font-inter-tight) text-center">
            Master Craftsman
          </p>
        </div>
      </main>
    </>
  );
};

export default Makers;
