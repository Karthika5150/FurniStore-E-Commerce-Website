"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img1 from "../../../public/assets/explore_products/img29.1.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signin = () => {
  const [forms, setForms] = useState(() => {
    if (typeof window != "undefined") {
      const User = localStorage.getItem("Current-User");
      return User
        ? JSON.parse(User)
        : {
          email: "",
          password: "",
        };
    }
  });
  const router = useRouter();
  const [error, setError] = useState({});

  useEffect(() => {
    localStorage.setItem("Current-User", JSON.stringify(forms));
  }, [forms]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const re = /^\d+$/;
      if (re.test(value)) {
        setForms((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setForms((prev) => ({ ...prev, [name]: value }));
    }

    setError("");
  };

  const validation = () => {
    const newError = {};

    if (!forms.email) {
      newError.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(forms.email)) {
      newError.email = "Email is invalid";
    }
    if (!forms.password) {
      newError.password = "Password is required";
    }
    if (forms.password.length < 8 || forms.password.length > 12) {
      newError.password = "Password length is min 8 & max 12";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}/.test(
        forms.password
      )
    ) {
      newError.password = "Password is invalid";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const StoredUser = JSON.parse(localStorage.getItem("User")) || [];

    const findLoginUserDetails = StoredUser.filter(
      (item) => item.email === forms.email && item.password === forms.password
    );

    if (validation()) {
      if (findLoginUserDetails.length === 1) {
        alert("Your Account Login Successfully!!!");
        localStorage.setItem("Country", JSON.stringify(""));
        localStorage.setItem("State", JSON.stringify(""));
        router.push("/");
      } else {
        alert("Your credentials is invalid");
      }
    }
  };

  return (
    <>
      <main className="bg-[#e9e6e3] xl:px-[64px] flex-col max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        <div>
          <h1 className=" text-[52px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
            Signin
          </h1>
          <p className="journal-content">
            Mange your account and see your orders
          </p>
        </div>
        <div className="grid min-[1440px]:grid-cols-2 grid-cols-1 grid-rows-1 h-auto min-[1440px]:h-[650px] bg-[#f4f4f4]">
          <div className="w-full p-[32px] max-[1440px]:p-[20px] flex-col flex gap-[30px]">
            <h6 className=" text-[52px] max-[767px]:text-[20px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
              Let is Login your account!
            </h6>
            <form
              onSubmit={handleSubmit}
              className="font-(family-name:--font-inter-tight)"
            >
              <div className="flex flex-col mb-[20px] relative">
                <label
                  htmlFor="email"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Email <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms?.email || ""}
                  name="email"
                  id="email"
                  onChange={handleChange}
                  placeholder="Email"
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />
                {error.email && (
                  <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                    {error.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col mb-[20px] relative">
                <label
                  htmlFor="password"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Password <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms?.password || ""}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />
                {error.password && (
                  <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                    {error.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="text-[#fff] mt-[30px] cursor-pointer hover:bg-[#383733] bg-[#111] px-[12px] py-[6px] w-[120px] flex justify-center items-center text-[16px]"
              >
                Signin
              </button>
              <div className="py-[15px] flex max-[768px]:items-start max-[768px]:text-[14px]  items-center gap-[10px] text-[#383733] font-(family-name:--font-inter-tight)">
                <input
                  type="checkbox"
                  id="contact-check"
                  className="accent-[#111] border-[#cc9c1] max-[768px]:mt-[5px]"
                />

                <label htmlFor="contact-check">Rememebr me</label>
              </div>
              <div className="flex w-full gap-[20px] flex-col">
                <Link
                  href="/signup"
                  className="text-[#fc6b00] underline decoration-[#fc6b00]"
                >
                  Signup
                </Link>
                <Link
                  href="/lost-password"
                  className="text-[#fc6b00] underline decoration-[#fc6b00]"
                >
                  Lost your passowrd
                </Link>
              </div>
            </form>
          </div>
          <div className="w-full p-[32px] max-[1440px]:hidden">
            <Image
              src={Img1}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
