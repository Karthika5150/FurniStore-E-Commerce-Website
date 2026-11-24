"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img1 from "../../../public/assets/explore_products/img5.5.jpg";
import Link from "next/link";

const Signup = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "phone") {
      const re = /^\d+$/;
      if (re.test(value)) {
        setForms((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? isChecked : value,
        }));
      }
    } else {
      setForms((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? isChecked : value,
      }));
    }

    setShow(false);

    setError("");
  };

  const handleChecked = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      error.agree = "";
    } else {
      error.agree = "";
    }
    setIsChecked(checked);
  };

  const validation = () => {
    const newError = {};

    const storedUser = JSON.parse(localStorage.getItem("User"));

    if (storedUser != null) {
      if (storedUser.length > 0) {
        const finds = storedUser.some(
          (item) => item.email === forms.email || item.name === forms.name
        );

        if (finds === true && isChecked === true) {
          alert("This Username or Email already taken");
          newError.agree = "This username or email already taken";
        }
      }
      if (!forms.name) {
        newError.name = "Name is required";
      } else if (!forms.name.length >= 50) {
        newError.name = "Name length is min 50";
      }
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
      if (!forms.phone) {
        newError.phone = "PhoneNo is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(forms.phone)) {
        newError.phone = "PhoneNo is invalid";
      }
      if (forms.name && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.email && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.phone && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.password && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      }
    } else {
      if (!forms.name) {
        newError.name = "Name is required";
      } else if (!forms.name.length >= 50) {
        newError.name = "Name length is min 50";
      }
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
      if (!forms.phone) {
        newError.phone = "PhoneNo is required";
      } else if (!/^\+?[1-9][0-9]{7,14}$/.test(forms.phone)) {
        newError.phone = "PhoneNo is invalid";
      }
      if (forms.name && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.email && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.phone && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      } else if (forms.password && !isChecked) {
        newError.agree = "Agree to the terms & conditions";
      }
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const StoredUser = JSON.parse(localStorage.getItem("User")) || [];

    StoredUser.push({
      id: Date.now(),
      name: forms.name,
      email: forms.email,
      phone: forms.phone,
      password: forms.password,
      agree: isChecked,
    });

    if (validation()) {
      if (isChecked === true) {
        setShow(true);
        localStorage.setItem("User", JSON.stringify(StoredUser));
        localStorage.setItem(
          "Current-User",
          JSON.stringify({ email: "", password: "" })
        );
        setForms({ name: "", email: "", phone: "", passowrd: "", agree: "" });
        setIsChecked(false);
      } else {
        alert("Please agree the Terms & conditions");
      }
    }
  };

  return (
    <>
      <main className="bg-[#e9e6e3] xl:px-[64px] flex-col max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        <div>
          <h1 className=" text-[52px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
            Signup
          </h1>
          <p className="journal-content">
            Create your account and see your orders
          </p>
        </div>

        {show && (
          <div
            role="alert"
            className={`mt-3 relative flex w-full py-[25px] pr-[30px] pl-[60px] text-[16px] text-[#108642] bg-[#dcf3e6] rounded-[5px] ${show === true ? "block" : "hidden"
              }`}
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
            Account Created Successfully!!!
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
            <h6 className=" text-[52px] max-[767px]:text-[20px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
              Let is create your account!
            </h6>
            <form
              onSubmit={handleSubmit}
              className="font-(family-name:--font-inter-tight)"
            >
              <div className="flex flex-col mb-[20px] relative">
                <label
                  htmlFor="name"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Name <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms.name || ""}
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />

                {error.name && (
                  <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                    {error.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-[20px] relative">
                <label
                  htmlFor="email"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Email <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms.email || ""}
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
                  htmlFor="phone"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Phone No<span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms.phone || ""}
                  name="phone"
                  pattern="[0-9]*"
                  id="phone"
                  type="tel"
                  onChange={handleChange}
                  placeholder="Phone No"
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />
                {error.phone && (
                  <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                    {error.phone}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-[10px] relative">
                <label
                  htmlFor="password"
                  className="mb-[8px] text-[16px] text-[#383733]"
                >
                  Password <span className="text-[#d42d00]">*</span>
                </label>
                <input
                  value={forms.password || ""}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="px-[12px] py-[6px] border border-[#ccc9c1] outline-none hover:border-[#111] placeholder:text-[#ccc9c1] text-[#111] text-[16px]"
                />
                {error.password && (
                  <p className="text-[14px] text-[#d42d00] absolute -bottom-[20px]">
                    {error.password}
                  </p>
                )}
              </div>

              <div className="pt-[15px] relative flex max-[768px]:items-start max-[768px]:text-[14px]  items-center gap-[10px] text-[#383733] font-(family-name:--font-inter-tight)">
                <input
                  type="checkbox"
                  onChange={handleChecked}
                  checked={isChecked}
                  className="accent-[#111] cursor-pointer border-[#cc9c1] max-[768px]:mt-[5px]"
                />

                <label htmlFor="contact-check">
                  I agree Terms & Privacy conditions
                </label>

                {error.agree && (
                  <p className="text-[14px] text-[#d42d00] absolute bottom-[-20px]">
                    {error.agree}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="text-[#fff] lg:mt-[25px] mt-[10px] cursor-pointer hover:bg-[#383733] bg-[#111] px-[12px] py-[6px] w-[120px] flex justify-center items-center text-[16px]"
              >
                Signup
              </button>
              <p className="text-[#383733] pt-[10px] text-[16px] font-(family-name:--font-inter-tight)">
                Already have an account!{" "}
                <Link
                  href="/signin"
                  className="text-[#fc6b00] underline decoration-[#fc6b00]"
                >
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
