"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { journalData } from "@/app/data/data";
import { useParams } from "next/navigation";
import Link from "next/link";

const Category = () => {
  const params = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (params.journal === "materials-crafts") {
      setTitle("Materials & Craft");
    } else if (params.journal === "design-notes") {
      setTitle("Design Notes");
    } else if (params.journal === "behind-the-piece") {
      setTitle("Behind the Pieces");
    } else if (params.journal === "styling-guides") {
      setTitle("Styling Guides");
    } else {
      setTitle("Journal");
    }
  }, [title,params.journal]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  let data = [];
  data = journalData.filter((item) => item.type === title);

  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col   flex justify-between border-t border-[#ccc9c1]  font-normal font-(family-name:--font-inter-tight)">
        <h1 className="2xl:text-[62px]  min-[767px]:text-[42px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light leading-8 mt-[15px] text-left">
          Category / {title}
        </h1>
        {data.map((item, idx) => (
          <main
            key={item.id}
            className={`w-full flex gap-[50px] max-[768px]:flex-col max-[768px]:gap-[20px] pt-[30px] ${
              idx === 0 ? "block" : "hidden"
            }`}
          >
            <div className="w-[48%] cursor-pointer bg-cover overflow-hidden bg-no-repeat relative max-[768px]:w-full">
              <Image
                src={item.img}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
            </div>
            <div className="flex flex-col gap-[15px] w-[48%] max-[768px]:w-full">
              <Link
                href={`/journal-details/${generateSlug(item.title)}`}
                className="2xl:text-[40px] max-[769px]:text-[32px] lg:text-[40px] max-[768px]:leading-8 text-[#111111] hover:text-[#cf5600] cursor-pointer font-light font-(family-name:--font-fraunces) "
              >
                {item.title}
              </Link>
              <p className="text-[16px] text-[#383733]  max-[768px]:text-[14px] font-(family-name:--font-inter-tight)">
                {item.content}
              </p>
              <div>
                <button className="font-(family-name:--font-inter-tight) border h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                  {item.date}
                </button>
                <button className="font-(family-name:--font-inter-tight)  ml-[15px] border h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                  {item.type}
                </button>
              </div>
            </div>
          </main>
        ))}

        <main
          className={`w-full h-auto ${data.length > 1 ? "block" : "hidden"}`}
        >
          <div className="grid lg:grid-cols-3 min-[767px]:grid-cols-2 grid-rows-1 mt-[50px] gap-[48px] max-[767px]:grid-cols-1  max-[767px]:gap-[10px]">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col gap-[30px] w-full h-auto ${
                  index === 0 && "hidden"
                }`}
              >
                <div className="w-full max-[375px]:h-[215px] max-[425px]:h-[275px] max-[767px]:h-[300px] min-[767px]:h-[200px] lg:h-[300px] 2xl:h-[350px] cursor-pointer bg-cover overflow-hidden bg-no-repeat relative">
                  <Image
                    src={item.img}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
                </div>
                <div className="max-[767px]:pb-[20px] flex flex-col gap-[15px]">
                  <Link
                    href={`/journal-details/${generateSlug(item.title)}`}
                    className="2xl:text-[22px] text-[20px]  text-[#111111] hover:text-[#cf5600] cursor-pointer font-light font-(family-name:--font-fraunces) "
                  >
                    {item.title}
                  </Link>
                  <p className="text-[16px] text-[#383733] max-[769px]:text-[14px]">
                    {item.content}
                  </p>
                  <div>
                    <button className="font-(family-name:--font-inter-tight) border h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                      {item.date}
                    </button>
                    <button className="font-(family-name:--font-inter-tight) border ml-[15px] h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                      {item.type}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Category;
