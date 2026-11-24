"use client";
import React, { useState } from "react";
import Img1 from "../../../public/assets/journal/img7.jpg";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);
  const [radioId, setRadioId] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState({});
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    region: "",
    department: "",
    message: "",
    agree: "",
  });

  const handleHide = (id) => {
    setShowId(id);
    setShow(true);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      region: radioId,
      [name]: type === "checkbox" ? isChecked : value,
    }));
    setError("");
  };

  const handleChangeRadio = (e, text) => {
    setRadioId(text);
  };

  const handleChangeChecked = (e) => {
    const checked = e.target.checked;

    if (!checked) {
      error.agree = "";
    }

    setIsChecked(checked);
  };

  const validate = () => {
    const newError = {};

    if (!form.name) {
      newError.name = "Name is required";
    }
    if (!form.email) {
      newError.email = "Email is Required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email)) {
      newError.email = "Email is invalid";
    }
    if (!form.message) {
      newError.message = "Message is required";
    }

    if (form.name && !isChecked) {
      newError.agree = "Agree to the Terms & Conditons";
    } else if (form.email && !isChecked) {
      newError.agree = "Agree to the Terms & Conditons";
    } else if (form.message && !isChecked) {
      newError.agree = "Agree to the Terms & Conditons";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setPopup(true);
    }
  };

  return (
    <>
      <main className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] max-xl:flex-col lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[64px] gap-[48px] max-[769px]:gap-[25px] flex justify-between border-t border-[#ccc9c1] items-center font-normal font-inter-tight">
        <div className="flex gap-[40px] items-end max-[768px]:flex-col">
          <div className="w-[387px] h-[300px] max-[768px]:w-full min-lg:w-[50%]">
            <Image
              src={Img1}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[340px] h-[600px] max-lg:hidden min-lg:w-[50%]">
            <Image src={Img1} alt="img" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="flex flex-col max-xl:gap-[20px] justify-between h-[600px] max-xl:h-auto">
          <h1 className=" text-[72px] max-lg:text-[28px] min-lg:text-[62px] text-[#111111] font-(family-name:--font-fraunces) font-light max-[769px]:leading-8 leading-18">
            Questions,requests,or just a hello,feel free to reach out.
          </h1>
          <div className="grid grid-rows-1 grid-cols-3 max-[768px]:grid-cols-1">
            <div>
              <p className="text-[#383733] font-medium mb-[16px]">Location</p>
              <p className="journal-content">Pilestraede 45, 1st Floor</p>
              <p className="journal-content">Copenhagen,Denmark</p>
              <p className="journal-content">1112</p>
            </div>
            <div>
              <p className="text-[#383733] font-medium mb-[16px]">Hours</p>
              <p className="journal-content">Monday-Tuesday</p>
              <p className="journal-content">10:30am-5:00pm</p>
            </div>
            <div>
              <p className="text-[#383733] font-medium mb-[16px]">Phone</p>
              <p className="journal-content">+45 89 88 12 45</p>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-[#e9e6e3] w-full xl:px-16 max-[769px]:px-[15px] max-xl:flex-col lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pb-[15px] 2xl:px-[153px] pb-16">
        <main className="bg-[#fff] max-[1440px]:flex-col flex">
          <div className="p-16 w-[50%] max-lg:border-b lg:border-r border-[#ccc9c1] max-[1440px]:p-4 max-[1440px]:w-full">
            <h6 className="text-[#111] font-light xl:text-[52px] max-lg:text-[28px] min-lg:text-[32px] font-(family-name:--font-fraunces) ">
              Departments
            </h6>

            <div className="w-full pt-[30px]">
              <div className="border-t border-[#ccc9c1]">
                <div
                  className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                  onClick={() => {
                    handleHide(0);
                  }}
                >
                  <p className="text-[18px] text-[#1f2124] font-normal font-inter-tight">
                    General Inquries
                  </p>
                  <p className="flex items-center justify-center">
                    {show === true && showId === 0 ? (
                      <FiMinus className="text-[22px] text-[#ccc9c1]" />
                    ) : (
                      <FiPlus className="text-[22px] text-[#ccc9c1]" />
                    )}
                  </p>
                </div>
                <p
                  className={`text-[16px] text-[#111111] pb-[10px] font-normal font-inter-tight ${
                    (show === true) & (showId === 0) ? "block" : "hidden"
                  }`}
                >
                  Got a question about a product, need help with an order,or
                  just want to reach out?
                </p>
                <p
                  className={`text-[16px] mb-[16px] text-[#111111] pb-[10px] font-normal font-inter-tight ${
                    (show === true) & (showId === 0) ? "block" : "hidden"
                  }`}
                >
                  We are here to Hepta_Slab. Reach us at info
                  <span className="text-[#fc6b00]"> info@example.com</span>
                </p>
                <p
                  className={`text-[14px]  text-[#111111] pb-[7px] font-normal font-inter-tight ${
                    (show === true) & (showId === 0) ? "block" : "hidden"
                  }`}
                >
                  <em>* We usually respond within 1-2 business days.</em>
                </p>
              </div>
              <div className="border-t border-[#ccc9c1]">
                <div
                  className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                  onClick={() => {
                    handleHide(1);
                  }}
                >
                  <p className="text-[18px] text-[#1f2124] font-normal font-inter-tight">
                    Trade & Wholesale
                  </p>
                  <p className="flex items-center justify-center">
                    {show === true && showId === 1 ? (
                      <FiMinus className="text-[22px] text-[#ccc9c1]" />
                    ) : (
                      <FiPlus className="text-[22px] text-[#ccc9c1]" />
                    )}
                  </p>
                </div>
                <p
                  className={`text-[16px] text-[#111111] font-normal font-inter-tight ${
                    (show === true) & (showId === 1) ? "block" : "hidden"
                  }`}
                >
                  Interested in stocking our products or setting up a trade
                  account?
                </p>
                <p
                  className={`text-[16px]  text-[#111111]  font-normal font-inter-tight ${
                    (show === true) & (showId === 1) ? "block" : "hidden"
                  }`}
                >
                  Email us at
                  <span className="text-[#fc6b00]"> sales@example.com</span>
                </p>
              </div>
              <div className="border-t border-[#ccc9c1]">
                <div
                  className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                  onClick={() => {
                    handleHide(2);
                  }}
                >
                  <p className="text-[18px] text-[#1f2124] font-normal font-inter-tight">
                    Press & Media
                  </p>
                  <p className="flex items-center justify-center">
                    {show === true && showId === 2 ? (
                      <FiMinus className="text-[22px] text-[#ccc9c1]" />
                    ) : (
                      <FiPlus className="text-[22px] text-[#ccc9c1]" />
                    )}
                  </p>
                </div>
                <p
                  className={`text-[16px] text-[#111111] font-normal font-inter-tight ${
                    (show === true) & (showId === 2) ? "block" : "hidden"
                  }`}
                >
                  Fore press-realted requestes,collaborations,or media kits,
                </p>
                <p
                  className={`text-[16px]  text-[#111111]  font-normal font-inter-tight ${
                    (show === true) & (showId === 2) ? "block" : "hidden"
                  }`}
                >
                  contact
                  <span className="text-[#fc6b00]">press@example.com</span>
                </p>
              </div>
              <div className="border-t border-[#ccc9c1]">
                <div
                  className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                  onClick={() => {
                    handleHide(3);
                  }}
                >
                  <p className="text-[18px] text-[#1f2124] font-normal font-inter-tight">
                    Showrooms
                  </p>
                  <p className="flex items-center justify-center">
                    {show === true && showId === 3 ? (
                      <FiMinus className="text-[22px] text-[#ccc9c1]" />
                    ) : (
                      <FiPlus className="text-[22px] text-[#ccc9c1]" />
                    )}
                  </p>
                </div>
                <p
                  className={`text-[16px] text-[#111111] font-normal font-inter-tight ${
                    (show === true) & (showId === 3) ? "block" : "hidden"
                  }`}
                >
                  Visit our showroom in copenhagen:
                </p>
                <p
                  className={`text-[16px] text-[#111111] font-normal font-inter-tight ${
                    (show === true) & (showId === 3) ? "block" : "hidden"
                  }`}
                >
                  Bredgade 45, Ground Floor
                </p>
                <p
                  className={`text-[16px] text-[#111111] font-normal font-inter-tight ${
                    (show === true) & (showId === 3) ? "block" : "hidden"
                  }`}
                >
                  1260 Copenhagen,Denmark
                </p>
              </div>
            </div>
          </div>
          <div className="p-16 w-[50%] max-[1440px]:p-4 max-[1440px]:w-full">
            <h6
              className={`text-[#111] font-light xl:text-[52px] max-lg:text-[28px] min-lg:text-[32px] font-(family-name:--font-fraunces) `}
            >
              Let is hear from you
            </h6>

            <form
              className={`pt-[30px] ${popup === true ? "hidden" : "block"}`}
              onSubmit={handleSubmit}
            >
              <div className="py-[15px] relative">
                <input
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border outline-none border-[#ccc9c1]  text-[#383733] text-[16px] w-full px-[12px] py-[6px] hover:border-[#383733]"
                />
                {error.name && (
                  <p className="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.name}
                  </p>
                )}
              </div>

              <div className="py-[15px] relative">
                <input
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border outline-none border-[#ccc9c1] text-[#383733] text-[16px] w-full px-[12px] py-[6px] hover:border-[#383733]"
                />
                {error.email && (
                  <p classemail="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.name}
                  </p>
                )}
              </div>

              <div className="py-[15px] realtive">
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className="appearance-none text-[#383733] hover:border-[#111]   px-[12px] py-[6px] border border-[#ccc9c1] w-full outline-none"
                >
                  <option value="" className="text-[#ccc9c1]">
                    Choose Department
                  </option>
                  <option value="Sales & Product Inquiry">
                    Sales & Product Inquiry
                  </option>
                  <option value="Interior Design Consultation">
                    Interior Design Consultation
                  </option>
                  <option value="After-Sales Support">
                    After-Sales Support
                  </option>
                  <option value="Shipping & Delivery">
                    Shipping & Delivery
                  </option>
                  <option value="Carrers / Collaborations">
                    Carrers / Collaborations
                  </option>
                  <option value="Others">Others</option>
                </select>
                {error.department && (
                  <p className="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.department}
                  </p>
                )}
              </div>

              <div className="py-[15px] font-inter-tight">
                <p className="font-medium text-[#111] text-[16px] font-inter-tight mb-[10px]">
                  Region *
                </p>
                <div className="flex justify-between max-[768px]:flex-wrap relative">
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="Europe"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "Europe");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="Europe"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="Europe"
                      >
                        Europe
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="North America"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "North America");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="North America"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="North America"
                      >
                        North America
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="South America"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "South America");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="South America"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="South America"
                      >
                        South America
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="Asia"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "Asia");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="Asia"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="Asia"
                      >
                        Asia
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="Africa"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "Africa");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="Africa"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="Africa"
                      >
                        Africa
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center cursor-pointer"
                        htmlFor="Asutralia/Oceania"
                      >
                        <input
                          name="radioId"
                          value={radioId}
                          onChange={(e) => {
                            handleChangeRadio(e, "Asutralia/Oceania");
                          }}
                          type="radio"
                          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                          id="Asutralia/Oceania"
                        />
                        <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                      </label>
                      <label
                        className="ml-2 text-[#383733] cursor-pointer text-[16px]"
                        htmlFor="Asutralia/Oceania"
                      >
                        Asutralia/Oceania
                      </label>
                    </div>
                  </div>
                </div>
                {error.region && (
                  <p className="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.region}
                  </p>
                )}
              </div>

              <div className="py-[15px] relative">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full  outline-none px-[12px] min-h-[120px] py-[6px] placeholder:text-[#ccc9c1] h-[105px] border border-[#ccc9c1] hover:border-[#111] text-[16px] text-[#383733]"
                ></textarea>
                {error.message && (
                  <p className="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.message}
                  </p>
                )}
              </div>

              <div className="py-[15px] relative flex max-[768px]:items-start max-[768px]:text-[14px]  items-center gap-[10px] text-[#383733] font-inter-tight">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChangeChecked}
                  className="accent-[#111] cursor-pointer w-[15px] h-[15px] border-[#cc9c1] max-[768px]:mt-[5px]"
                />

                <label htmlFor="contact-check">
                  I agree to the Privacy Policy and consent to be contacted by
                  Furnistør regarding my inquiry. *
                </label>
                {error.agree && (
                  <p className="text-[14px] text-red-500  absolute bottom-[-8px] font-inter-tight">
                    {error.agree}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-[72px] bg-[#111] mt-[20px] cursor-pointer font-inter-tight px-[12px] py-[6px] text-[#fff] hover:bg-[#383733] flex justify-center items-center"
              >
                Submit
              </button>
            </form>

            {popup && (
              <div
                className={` mt-[40px] font-inter-tight text-[#383733]  ${
                  popup === true ? "block" : "hidden"
                }`}
              >
                Thanks for contacting us! We will be touch with you shortly!
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
