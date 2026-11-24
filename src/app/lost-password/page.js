"use client";
import Image from "next/image";
import React, { useState } from "react";
import Img1 from "../../../public/assets/explore_products/img29.1.jpg";
import Link from "next/link";

const Lost_Password = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({});
  const [isTyped, setIsTyped] = useState("text");
  const [alertId, setAlertId] = useState(0);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    const emailRegex = /@(\w+)/g;
    if (emailRegex.test(inputValue)) {
      setIsTyped("email");
    } else {
      setIsTyped("text");
    }
    setError("");
  };

  const validation = () => {
    const newError = {};

    const StoredUser = JSON.parse(localStorage.getItem("User")) || [];

    const findLoginUserDetails = StoredUser.filter(
      (item) => item.email === inputValue || item.name === inputValue
    );

    if (findLoginUserDetails != null) {
      if (findLoginUserDetails.length === 1) {
        if (!inputValue && isTyped === "text") {
          newError.name = "Username or email is required";
        }
        if (!inputValue && isTyped === "email") {
          newError.email = "Username or email is required";
        } else if (
          !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(inputValue)
        ) {
          newError.email = "Email is invalid";
        }

        setShow(true);
        setAlertId(1);
      } else {
        setShow(true);
        setAlertId(2);
      }
    } else {
      return null;
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {

    }
  };

  return (
    <>
      <main className="bg-[#e9e6e3] xl:px-[64px] flex-col max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        {show === true && alertId === 1 && (
          <div
            role="alert"
            className="mt-3 relative flex w-full py-[25px] pr-[30px] pl-[60px] text-[16px] text-[#383733] bg-[#dcf3e6] rounded-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#108642"
              className="h-5 w-5 mr-2 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            Your reset password link send your Email.
          </div>
        )}
        {show === true && alertId === 2 && (
          <div
            role="alert"
            className="mt-3 relative flex w-full py-[25px] pr-[30px] pl-[60px] text-[16px] text-[#c92e1f] bg-[#fce1de] rounded-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#c92e1f"
              className="h-5 w-5 mr-2 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            Your credentials are wrong.
          </div>
        )}
        {show === true && alertId === 3 && (
          <div
            role="alert"
            className="mt-3 relative flex w-full py-[25px] pr-[30px] pl-[60px] text-[16px] text-[#383733] bg-[#fcd1ef] rounded-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#c92e1f"
              className="h-5 w-5 mr-2 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            Please create Account!
          </div>
        )}

        <div className="grid min-[1440px]:grid-cols-2 grid-cols-1 grid-rows-1 h-auto min-[1440px]:h-[650px] bg-[#f4f4f4]">
          <div className="w-full p-[32px] max-[1440px]:hidden">
            <Image
              src={Img1}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
          <div className="w-full p-[32px] max-[1440px]:p-[20px] flex-col flex gap-[30px]">
            <h6 className="text-[52px] max-[767px]:text-[20px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
              Let is Reset your Password!
            </h6>
            <p className="journal-content">Recover your lost password</p>
            <form
              onSubmit={handleSubmit}
              className="font-(family-name:--font-inter-tight)"
            >
              <p className="journal-content">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
              <div className="flex flex-col my-[20px] relative">
                <label
                  htmlFor="email"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Username or Email <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={inputValue}
                  name="text"
                  onChange={handleChange}
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />
                {isTyped === "email" && (
                  <>
                    {error.email && (
                      <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                        {error.email}
                      </p>
                    )}
                  </>
                )}
                {isTyped === "text" && (
                  <>
                    {error.name && (
                      <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                        {error.name}
                      </p>
                    )}
                  </>
                )}
              </div>

              <button
                type="submit"
                className="text-[#fff] mt-[30px] cursor-pointer hover:bg-[#383733] bg-[#111] px-[12px] py-[6px]  flex justify-center items-center text-[16px]"
              >
                Reset Password
              </button>
              <p className="pt-[20px] ">
                <Link
                  href="/signin"
                  className="text-[#fc6b00] underline decoration-[#fc6b00]"
                >
                  Go back!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Lost_Password;
