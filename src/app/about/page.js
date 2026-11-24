import React from "react";
import img1 from "../../../public/assets/about/img1.jpg";
import img2 from "../../../public/assets/about/img2.jpg";
import Image from "next/image";
import Phliosophy from "./philosophy";
import Makers from "./makers";

const About = () => {
  return (
    <main>
      <main className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col   flex justify-between border-t border-[#ccc9c1] items-center font-normal font-(family-name:--font-inter-tight)">
        <div className="flex w-[100%] gap-[48px] max-[1024px]:gap-[25px] max-[1024px]:flex-col-reverse">
          <div className="flex flex-col gap-[25px] w-[38%] max-[1024px]:w-full justify-between">
            <h1 className=" text-[72px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light leading-8 mt-[15px]">
              Our Story
            </h1>
            <div>
              {" "}
              <p className="text-[16px] text-[#383733] max-[769px]:text-[14px]   font-(family-name:--font-inter-tight) mb-[16px]">
                Furnistør was born from a passion for authentic design and
                exceptional quality. We create furniture that bridges timeless
                aesthetics with the evolving needs of modern life, believing
                that our homes should reflect both who we are and who we aspire
                to become.
              </p>
              <p className="text-[16px] text-[#383733] max-[769px]:text-[14px] font-(family-name:--font-inter-tight)">
                Our journey began with a deep appreciation for Scandinavian
                design heritage—where function meets beauty in perfect harmony.
                Yet we recognized the need to push beyond tradition, embracing
                innovation while honoring the craftsmanship that has defined
                great furniture for centuries.
              </p>{" "}
              <p className="text-[16px] mt-[15px] max-[769px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight)">
                We believe in creating pieces that tell stories worth passing
                down through generations. Today, every piece we create is
                conceived not just as furniture, but as an integral part of
                life’s most meaningful moments—from quiet morning coffees to
                gathered celebrations with loved ones.
              </p>
            </div>
          </div>
          <div className="w-[62%] max-[1024px]:w-full">
            <Image
              src={img1}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-[100%] gap-[48px] max-[1024px]:gap-[25px] max-[1024px]:w-full max-[1024px]:flex-col">
          <div className="w-[56%] max-[1024px]:w-full">
            <Image
              src={img2}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[25px] w-[44%] justify-end max-[1024px]:w-full">
            <h1 className="sec-title leading-13 mt-[15px] max-[769px]:leading-9">
              Where Timeless Design Meets Modern Living
            </h1>
            <div>
              {" "}
              <p className="text-[16px] max-[769px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight) mb-[16px]">
                Born from a passion for authentic design and exceptional
                quality, Furnistør emerged with a simple yet profound mission:
                to create furniture that tells a story worth passing down
                through generations. Founded on the belief that our homes should
                reflect both who we are and who we aspire to become, we bridge
                the gap between timeless aesthetics and the evolving needs of
                modern life.
              </p>
              <p className="text-[16px] max-[769px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight)">
                Our journey began with a deep appreciation for the Scandinavian
                design heritage—where function meets beauty in perfect harmony.
                Yet we recognized the need to push beyond tradition, embracing
                innovation while honoring the craftsmanship that has defined
                great furniture for centuries. Today, Furnistør stands as a
                testament to thoughtful design, where every piece is conceived
                not just as furniture, but as an integral part of life’s most
                meaningful moments.
              </p>{" "}
            </div>
          </div>
        </div>
      </main>
      <Phliosophy />
      <Makers />
    </main>
  );
};

export default About;
