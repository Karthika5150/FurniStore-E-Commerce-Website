"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { journalData } from "@/app/data/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import Component1 from "./c1";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { JournalComments } from "@/app/data/data";
import { FaXTwitter } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Component2 from "./c2";
import Component3 from "./c3";
import Component4 from "./c4";
import Component5 from "./c5";
import Component6 from "./c6";
import Component7 from "./c7";
import Component8 from "./c8";
import Component9 from "./c9";

const JournalDetails = () => {
  const params = useParams();
  const [components, setComponents] = useState(0);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [user, setUser] = useState(null);
  const [oldPost, setOldPost] = useState(0);
  const [newPost, setNewPost] = useState(0);

  useEffect(() => {
    if (params.journal === "why-fewer-better-pieces-still-matter") {
      setComponents(0);
      setTitle("Why fewer, better pieces still matter");
      setType("Journal");
      setOldPost(1);
      setNewPost(0);
    }
    if (params.journal === "corners-curves-and-the-geometry-of-calm") {
      setComponents(1);
      setTitle("Corners, curves, and the geometry of calm");
      setType("Design Notes");
      setOldPost(2);
      setNewPost(1);
    }
    if (params.journal === "soft-lighthard-edges") {
      setComponents(2);
      setTitle("Soft light,hard edges");
      setType("Materials & Crafts");
      setOldPost(3);
      setNewPost(2);
    }
    if (
      params.journal === "before-the-product-sketches-samples-and-decisions"
    ) {
      setComponents(3);
      setTitle("Before the product: sketches, samples, and decisions");
      setType("Design Notes");
      setOldPost(4);
      setNewPost(3);
    }
    if (params.journal === "furnistr-at-home") {
      setComponents(4);
      setTitle("Furnistør, at home");
      setType("Design Notes");
      setOldPost(5);
      setNewPost(4);
    }
    if (params.journal === "what-makes-a-table-worth-gathering-around") {
      setComponents(5);
      setTitle("What makes a table worth gathering around");
      setType("Journal");
      setOldPost(6);
      setNewPost(5);
    }
    if (params.journal === "solid-oak-and-why-we-keep-returning-to-it") {
      setComponents(6);
      setTitle("Solid oak and why we keep returning to it");
      setType("Materials & Crafts");
      setOldPost(7);
      setNewPost(6);
    }
    if (params.journal === "how-to-style-a-minimal-dining-space") {
      setComponents(7);
      setTitle("How to style a minimal dining space");
      setType("Styling Guides");
      setOldPost(8);
      setNewPost(7);
    }
    if (params.journal === "from-workshop-to-home-how-a-chair-is-made") {
      setComponents(8);
      setTitle("From workshop to home: how a chair is made");
      setType("Behind the Pieces");
      setOldPost(null);
      setNewPost(0);
    }
  }, [components, type, title, params.journal]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  let data = [];
  let stories = [];
  let comments = [];
  data = journalData.filter((item) => item.title === title);
  stories = journalData.filter((item) => item.type === type);
  comments = JournalComments.filter((item) => item.type === type);

  const handleReply = (name) => {
    if (comments.filter((item) => item.name === name)) {
      setUser(name);
    }
  };

  const handleCancel = () => {
    setUser(null);
  };

  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px] flex-col flex justify-between border-t border-[#ccc9c1]  font-normal font-(family-name:--font-inter-tight)">
        {type === "Journal" && components === 0 && (
          <Component1
            props={data}
            className={`${components === 0 && type === "Journal" ? "block" : "hidden"
              } ${components === 0 ? "block" : "hidden"}`}
          />
        )}

        {type === "Design Notes" && components === 1 && (
          <Component2
            props={data}
            className={` ${components === 1 && type === "Design Notes" ? "block" : "hidden"
              } ${components === 1 ? "block" : "hidden"}`}
          />
        )}

        {type === "Materials & Crafts" && components === 2 && (
          <Component3
            props={data}
            className={` ${components === 2 && type === "Materials & Crafts"
                ? "block"
                : "hidden"
              } ${components === 2 ? "block" : "hidden"}`}
          />
        )}

        {type === "Design Notes" && components === 3 && (
          <Component4
            props={data}
            className={` ${components === 3 && type === "Design Notes" ? "block" : "hidden"
              } ${components === 3 ? "block" : "hidden"}`}
          />
        )}

        {type === "Design Notes" && components === 4 && (
          <Component5
            props={data}
            className={` ${components === 4 && type === "Design Notes" ? "block" : "hidden"
              } ${components === 4 ? "block" : "hidden"}`}
          />
        )}

        {type === "Journal" && components === 5 && (
          <Component6
            props={data}
            className={`${components === 5 && type === "Journal" ? "block" : "hidden"
              } ${components === 5 ? "block" : "hidden"}`}
          />
        )}

        {type === "Materials & Crafts" && components === 6 && (
          <Component7
            props={data}
            className={` ${components === 6 && type === "Materials & Crafts"
                ? "block"
                : "hidden"
              } ${components === 6 ? "block" : "hidden"}`}
          />
        )}

        {type === "Styling Guides" && (
          <Component8
            props={data}
            className={` ${components === 7 && type === "Styling Guides" ? "block" : "hidden"
              } ${components === 7 ? "block" : "hidden"}`}
          />
        )}

        {type === "Behind the Pieces" && (
          <Component9
            props={data}
            className={` ${components === 8 && type === "Behind the Pieces"
                ? "block"
                : "hidden"
              } ${components === 8 ? "block" : "hidden"}`}
          />
        )}

        <main className="2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] py-[30px] max-[425px]:pb-0 flex flex-col gap-[20px]">
          <h6 className="lg:text-[22px] text-[#111] text-[18px] font-medium">
            Share:
          </h6>
          <div className="flex gap-[15px]">
            <div className="w-[40px] h-[40px] cursor-pointer bg-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#1877f2]">
              <FaFacebook className="text-[18px] text-[#111] hover:text-[#fff]" />
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer bg-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#000]">
              <FaXTwitter className="text-[18px] text-[#111] hover:text-[#fff]" />
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer bg-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#e60023]">
              <FaPinterest className="text-[18px] text-[#111] hover:text-[#fff]" />
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer bg-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#cf5600]">
              <TbMailFilled className="text-[18px] text-[#111] hover:text-[#fff]" />
            </div>
          </div>

          <div className="flex justify-between">
            <div
              className={`flex gap-[10px] group ${components === 8 || oldPost === null ? "invisible" : "visible"
                } `}
            >
              <p className="flex items-center ">
                <SlArrowLeft className="text-[22px] group-hover:text-[#cf5600]  text-[#111]" />
              </p>
              <div className="max-[769px]:hidden">
                {journalData.map((items) => (
                  <Link
                    key={items.id}
                    href={`/journal-details/${generateSlug(items.title)}`}
                    className="text-[#111] text-[16px] group-hover:text-[#cf5600]"
                  >
                    {items.id === oldPost ? items.title : ""}
                  </Link>
                ))}
                <p className="text-[#383733] text-[14px]">Older Post</p>
              </div>
            </div>
            <div
              className={`flex gap-[10px] group ${components === 0 ? "invisible" : "visible"
                }`}
            >
              <div className="max-[769px]:hidden">
                {journalData.map((items) => (
                  <Link
                    key={items.id}
                    href={`/journal-details/${generateSlug(items.title)}`}
                    className="text-[#111] text-[16px] group-hover:text-[#cf5600]"
                  >
                    {items.id === newPost ? items.title : ""}
                  </Link>
                ))}
                <p className="text-[#383733] text-[14px]">New Post</p>
              </div>

              <p className="flex items-center">
                <SlArrowRight className="text-[22px] group-hover:text-[#cf5600]  text-[#111]" />
              </p>
            </div>
          </div>

          <h6 className="lg:text-[28px] text-[#111] text-[18px] font-light font-(family-name:--font-fraunces)">
            More Stories
          </h6>
          <div className="grid lg:grid-cols-2 min-[767px]:grid-cols-2 grid-rows-1  gap-[48px] max-[767px]:grid-cols-1  max-[767px]:gap-[10px]">
            {stories.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col gap-[30px] w-full h-auto ${index === 0 && "hidden"
                  }`}
              >
                <div className="w-full h-[250px] cursor-pointer bg-cover overflow-hidden bg-no-repeat relative">
                  <Image
                    src={item.img}
                    alt="img"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0  h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
                </div>
                <div className="max-[767px]:pb-[20px] flex flex-col gap-[15px]">
                  <h6 className="2xl:text-[22px] text-[20px]  text-[#111111] hover:text-[#cf5600] cursor-pointer font-light font-(family-name:--font-fraunces) ">
                    {item.title}
                  </h6>
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

      <main className="bg-[#f3f1ef] 2xl:px-[500px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[130px] flex flex-col gap-[20px] relative  2xl:py-[50px] font-normal font-(family-name:--font-inter-tight)">
        <h6 className="lg:text-[28px] text-[#111] text-[18px] font-light font-(family-name:--font-fraunces)">
          {comments.length} Comments
        </h6>

        <p className="text-[#383733] text-[16px]">
          Join the discussion and tell us your opinion.
        </p>

        <div className="flex flex-col gap-[50px]  cursor-pointer">
          {comments.map((items) => (
            <div
              key={items.id}
              className="flex gap-[25px] group max-[425px]:gap-[20px]"
            >
              <div className="w-[60px] h-[60px] max-[425px]:w-[20%]">
                <Image
                  src={items.user}
                  alt="Journal-user"
                  className="w-full h-full rounded-[50%]"
                />
              </div>
              <div className="flex flex-col max-[425px]:w-[80%]">
                <div className="flex gap-[10px] items-center">
                  <h6 className="text-[20px] font-medium text-[#111] mb-0">
                    {items.name}
                  </h6>
                  <p
                    onClick={() => handleReply(items.name)}
                    className="invisible flex duration-500 ease-in-out group-hover:visible h-[15px] rounded-[3px] px-[5px] py-[7px] cursor-pointer  text-[12px] text-[#fff] bg-[#fc6b00] mb-0  items-center"
                  >
                    REPLY
                  </p>
                </div>
                <p className="text-[#383733] text-[16px] mb-0 max-[425px]:text-[14px]">
                  {items.date}
                </p>
                <p className="text-[#383733] text-[16px] mb-0 max-[425px]:text-[14px]">
                  {items.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="clip-path"></div>

        {user && (
          <div
            className={` px-[40px] py-[30px] rounded-[5px] flex flex-col gap-[20px]  bg-[#e9e6e3] ${user != null ? "block" : "hidden"
              }`}
          >
            <div className="flex justify-between items-center">
              <h6 className="text-[20px] mb-0 font-light font-(family-name:--font-fraunces) text-[#111]">
                Reply to {user}
              </h6>
              <p
                onClick={handleCancel}
                className="border px-[10px] rounded-[5px] py-[3px] cursor-pointer  mb-0 border-[#111] text-[16px] hover:text-[#cf5600] hover:border-[#cf5600]"
              >
                Cancel Reply
              </p>
            </div>

            <div>
              <label className="text-[#383733] text-[16px] ">
                Comment <span className="text-[#cf5600]"> *</span>
              </label>
              <textarea className="w-full mt-[10px] text-[#383733] rounded-[5px] h-[120px] border p-[10px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733] "></textarea>
            </div>

            <div className="flex justify-between">
              <div>
                <label className="text-[#383733] text-[16px] ">
                  Name<span className="text-[#cf5600]"> *</span>
                </label>
                <br />
                <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
              </div>
              <div className="w-[33%]">
                <label className="text-[#383733] text-[16px] ">
                  Email<span className="text-[#cf5600]"> *</span>
                </label>
                <br />
                <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
              </div>{" "}
              <div className="w-[33%]">
                <label className="text-[#383733] text-[16px] ">
                  Website <span className="text-[#cf5600]"> *</span>
                </label>
                <br />
                <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
              </div>
            </div>

            <p className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] cursor-pointer accent-[#111]"
              />
              Save my name,email, and website in this browser for the next time
              I comment.
            </p>

            <button className=" cursor-pointer py-[6px] px-[12px] w-[100px] inline-block justify-center items-center text-[#fff] bg-[#111] hover:bg-[#383733] text-[16px]">
              Comment
            </button>
          </div>
        )}
      </main>

      <main
        className={`bg-[#e9e6e3] 2xl:px-[500px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[130px] w-full flex flex-col gap-[20px] relative  2xl:py-[40px] font-normal font-(family-name:--font-inter-tight) ${user != null ? "hidden" : "block"
          }`}
      >
        <div
          className={` px-[40px] py-[30px] max-[425px]:p-[15px] rounded-[5px] flex flex-col gap-[20px]  bg-[#e9e6e3]`}
        >
          <h6 className="text-[44px] max-[769px]:text-[28px] mb-0 font-light font-(family-name:--font-fraunces) text-[#111]">
            Leave a reply
          </h6>

          <div>
            <label className="text-[#383733] text-[16px] ">
              Comment <span className="text-[#cf5600]"> *</span>
            </label>
            <textarea className="w-full mt-[10px] text-[#383733] rounded-[5px] h-[120px] border p-[10px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733] "></textarea>
          </div>

          <div className="flex justify-between max-[769px]:flex-col max-[769px]:gap-[20px]">
            <div>
              <label className="text-[#383733] text-[16px] ">
                Name<span className="text-[#cf5600]"> *</span>
              </label>
              <br />
              <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
            </div>
            <div className="w-[33%] max-[769px]:w-full">
              <label className="text-[#383733] text-[16px] ">
                Email<span className="text-[#cf5600]"> *</span>
              </label>
              <br />
              <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
            </div>{" "}
            <div className="w-[33%] max-[769px]:w-full">
              <label className="text-[#383733] text-[16px] ">
                Website <span className="text-[#cf5600]"> *</span>
              </label>
              <br />
              <input className="w-full text-[#383733] text-[16px] mt-[10px] rounded-[5px] border px-[12px] py-[6px] outline-none bg-[#fff] border-[#ccc9c1] hover:border-[#383733]" />
            </div>
          </div>

          <p className="flex gap-[10px] items-center max-[769px]:items-start ">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] cursor-pointer accent-[#111] mt-[5px]"
            />
            Save my name,email, and website in this browser for the next time I
            comment.
          </p>

          <button className=" cursor-pointer py-[6px] px-[12px] w-[100px] inline-block justify-center items-center text-[#fff] bg-[#111] hover:bg-[#383733] text-[16px]">
            Comment
          </button>
        </div>
      </main>
    </>
  );
};

export default JournalDetails;
