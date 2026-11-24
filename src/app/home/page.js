import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Room from "./room";
import CleanFuture from "./cleanfuture";
import Lounge from "./lounge";
import Category from "./category";
import JournalImg from "./journal";
import FAQ from "./faq";
import Explore from "./explore";

const Mainpage = () => {
  return (
    <>
      <main className="w-full h-[700px] relative">
        <div className="h-[700px] w-full ">
          <video
            muted
            autoPlay
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover brightness-70"
          >
            <source src="/assets/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute bottom-27 max-[768px]:px-[10px] px-[153px]">
          <h1 className="max-[768px]:text-[44px] text-[72px] text-[#fff] font-fraunces max-md:leading-10 font-light">
            Modern living, timeless design
          </h1>
          <p className="text-[18px] text-[#fff] font-(family-name:--font-inter-tight) pt-[10px]">
            Explore our curated selectin of handcrafted furniture and home
            accessories,rooted in Scandinavian simplicity and built to last.
          </p>
          <button className="flex items-center justify-center mt-[55px] cursor-pointer gap-[5px] text-[16px] text-[#fff] font-(family-name:--font-inter-tight)">
            Explore Now <FiArrowRight className="text-[20px] text-[#fff]" />
          </button>
        </div>
      </main>
      <Room />
      <CleanFuture />
      <Explore />
      <Lounge />
      <Category />
      <JournalImg />
      <FAQ />
    </>
  );
};

export default Mainpage;
