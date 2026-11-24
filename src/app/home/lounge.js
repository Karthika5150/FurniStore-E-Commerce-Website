import React from "react";
import Image from "next/image";
import Imgs from "../../../public/assets/img4.png";
import Img2 from "../../../public/assets/img3.png";

const Lounge = () => {
  return (
    <>
      <main className="bg-[#111111] 2xl:py-[64px] min-[767px]:py-[48px] max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] max-[1440px]:flex-col flex justify-between">
        <div className="w-[53%]  max-[1440px]:w-full flex  justify-between max-[1440px]:gap-[20px]">
          <div className="w-[47%] max-[600px]:h-[250px] min-[600px]:h-[500px] 2xl:h-[595px] ">
            <Image src={Img2} alt="img" className="object-cover w-full h-full" />
          </div>
          <div className="w-[47%] max-[600px]:h-[250px] min-[600px]:h-[500px] 2xl:h-[595px] ">
            <Image src={Imgs} alt="img" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-[44%] max-[1440px]:w-full flex justify-end max-[1440px]:justify-around flex-col gap-[48px]">
          <h1 className="text-[52px] max-[767px]:text-[32px] text-[#fff] font-(family-name:--font-fraunces) font-light">
            The Lounge Edit
          </h1>
          <p className="text-[#f3f1ef] text-[16px] font-(family-name:--font-inter-tight)">
            Unwind in style. Discover our handpicked selection of sofas, lounge
            chairs, and coffee tables designed for effortless comfort and
            timeless appeal.
          </p>
          <button className="font-(family-name:--font-inter-tight) w-[138px] inline-block text-[16px] cursor-pointer text-[#fff] py-[6px] px-[12px] border border-[#fff] bg-transparenti">
            Shop Collection
          </button>
        </div>
      </main>
    </>
  );
};

export default Lounge;
