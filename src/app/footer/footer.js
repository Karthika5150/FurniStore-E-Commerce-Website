"use client";
import React, { useEffect } from "react";
import { FaFacebook, FaPinterest, FaInstagram, FaHouzz } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { gsap } from "gsap";
import Image from "next/image";
import Img1 from "../../../public/assets/img5.png";
import Img2 from "../../../public/assets/fsc.svg";
import Img3 from "../../../public/assets/swan.svg";
import { FooterData } from "../data/data";
import Link from "next/link";

const Footer = () => {
  const handleTrigger = () => {
    if (typeof window != "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".scrolls",
      { duration: 3, ease: "linear", y: 0, x: 5, yoyo: true },
      { duration: 3, ease: "linear", y: 10, x: 5, yoyo: true, repeat: -1 }
    );
  }, []);

  return (
    <>
      <main className="relative" id="section">
        <main className="w-full h-[240px] max-[769px]:h-[300px] relative">
          <Image
            src={Img1}
            alt="bg-img"
            className="w-full h-full object-cover brightness-40"
          />

          <div className="absolute max-[769px]:h-[90%] h-full max-[769px]:top-[20px]  top-0 max-[769px]:px-[20px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[48px] max-[767px]:flex-col min-[769px]:gap-[20px] flex justify-between w-full items-center">
            <div className="min-[769px]:w-[40%] max-[769px]:w-full w-[55%]">
              <h1 className="text-[52px] max-[767px]:text-[32px]  min-[769px]:text-[44px] text-[#fff] font-(family-name:--font-fraunces) font-light">
                Stay Inspired
              </h1>
              <p className="text-[16px] text-[#fff] font-(family-name:--font-inter-tight) max-[769px]:text-[14px]">
                Subscribe to receive updates on new posts, exclusive offers, and
                special content just for you.
              </p>
            </div>
            <div className="max-[769px]:flex  max-[769px]:justify-between w-[45%] flex justify-end max-[769px]:w-[100%] min-[769px]:w-[60%]">
              <input
                className="bg-[#fff] rounded-[3px] w-[200px] outline-none max-[1024px]:w-[57%]   px-[12px] py-[6px]"
                placeholder="E-mail"
              />

              <button className="bg-[#111] ml-[20px] max-[1024px]:w-[37%] cursor-pointer w-[160px] px-[12px] py-[6px] hover:bg-[#383733] text-[#fff] text-[16px]">
                Subscribe
              </button>
            </div>
          </div>
        </main>

        <main className="w-full xl:px-[64px] h-[400px] lg:px-[45px] max-[1024px]:h-auto 2xl:px-[153px] py-[64px] max-[769px]:p-[15px] min-[769px]:px-[25px] min-[769px]:gap-[20px] max-[1024px]:flex-col flex justify-between border-b border-[#ccc9c1]">
          <div className="w-[30%] max-[1024px]:w-full">
            <h1 className="text-[52px] max-sm:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px]  2xl:text-[40px]  text-[#111111] font-fraunces font-light max-md:leading-8 md:leading-11 ">
              Handcrafted in københavn
            </h1>
            <div className="md:mt-4">
              <p className="text-[16px] max-[600px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight)">
                Pilestæde 45, 1st Floor,{" "}
              </p>
              <p className="text-[16px] max-[600px]:text-[14px] text-[#383733] font-(family-name:--font-inter-tight)">
                1112 Copenhagen, Denmark
              </p>
            </div>
            <div className="flex gap-[20px] md:mt-4 2xl:mt-8">
              <div className="w-[32px] h-[40px]">
                <Image
                  src={Img2}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[32px] h-[32px]">
                <Image
                  src={Img3}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          <div className="2xl:w-[65%] w-full flex max-md:flex-col max-md:mt-4 md:mt-6">
            <div className="w-full grid md:grid-cols-3 grid-cols-1 max-md:gap-3">
              {FooterData.map((value) => (
                <div className="flex flex-col w-full!" key={value.id}>
                  <h5 className="footer-title">{value.title}</h5>
                  {value.items.map((items) => (
                    <Link href={items.href} className="text-[16px] max-[769px]:text-[14px] cursor-pointer text-[#383733]  my-[3px] font-inter-tight hover:text-[#cf5600]" key={items.id}>{items.label}</Link>
                  ))}
                </div>
              ))}
            </div>



            <div className="flex flex-col md:w-[23%] max-md:w-full">
              <h5 className="footer-title">Stay Connected</h5>
              <p className="footer-links">
                Get exclusive updates,design tips, and previews of our newest
                collections.
              </p>
              <div className="flex gap-[24px] mt-[24px] max-[425px]:gap-[10px]">

                {
                  [
                    <FaInstagram key="instagram" />,
                    <FaPinterest key="pinterest" />,
                    <FaFacebook key="facebook" />,
                    <FaHouzz key="houzz" />
                  ].map((icon) => (
                    <div
                      className="flex items-center justify-center"
                      key={icon.key}
                    >
                      <p className="text-[20px] text-[#111111] cursor-pointer transition-all duration-500 hover:text-[#fc6b00]">
                        {icon}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </main>

        <main className="2xl:px-[153px] xl:px-[64px] lg:px-[45px] py-[32px] max-[769px]:px-[15px] min-[769px]:px-[25px] flex w-full max-[769px]:gap-[10px] max-[600px]:flex-col min-[600px]:flex-row justify-between max-[767px]:p-[10px] ">
          <p className="max-[769px]:text-[14px] text-[#383733] text-[16px] font-(family-name:--font-inter-tight) ">
            Furnistør ApS — CVR/VAT DK42168912 — Copenhagen, Denmark
          </p>
          <p className="max-[769px]:text-[14px] text-[#383733] text-[16px] font-(family-name:--font-inter-tight)">
            © 2026 Furnistør – WordPress theme by{" "}
            <span className="text-[#fc6b00] hover:text-[#cf5600] relative after:bg-[#cf5600] after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:duration-500 cursor-pointer">
              Laborator
            </span>
          </p>
        </main>

        <div
          onClick={handleTrigger}
          className="scrolls w-[32px] h-[32px] rounded-[50%] bg-[#fc6b00] absolute flex justify-center items-center max-[1024px]:top-80 top-60 right-5 cursor-pointer"
        >
          <FaArrowUp className="text-[#fff] text-16px] " />
        </div>
      </main>
    </>
  );
};

export default Footer;
