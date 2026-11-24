"use client";
import { useSearch } from "@/app/context/context";
import React, { useEffect, useState } from "react";
import { RiScissorsCutLine } from "react-icons/ri";
import Image from "next/image";
import Img1 from "../../../../public/assets/visa.png";
import Img2 from "../../../../public/assets/master.png";
import Img3 from "../../../../public/assets/amex.png";
import Img4 from "../../../../public/assets/discover.png";
import { useRouter } from "next/navigation";
import { RxCopy } from "react-icons/rx";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import copy from "copy-to-clipboard";

const Checkout = () => {
  const [forms, setForms] = useState(() => {
    if (typeof window != "undefined") {
      const Loc = localStorage.getItem("User-Details");
      return Loc
        ? JSON.parse(Loc)
        : {
          first_name: "",
          last_name: "",
          countrie: "",
          state: "",
          street: "",
          apartment: "",
          city: "",
          pin_code: "",
          phone: "",
          email: "",
          notes: "",
        };
    }
  });
  const [userDetails, setUserDetails] = useState(() => {
    if (typeof window != "undefined") {
      const Loc = localStorage.getItem("User_Details");
      return Loc
        ? JSON.parse(Loc)
        : {
          first_name: "",
          last_name: "",
          countrie: "",
          state: "",
          street: "",
          apartment: "",
          city: "",
          pin_code: "",
          phone: "",
          email: "",
          notes: "",
        };
    }
  });
  const [differentforms, setDifferentForms] = useState(() => {
    if (typeof window != "undefined") {
      const Loc = localStorage.getItem("DifferentShip");
      return Loc
        ? JSON.parse(Loc)
        : {
          first_name: "",
          last_name: "",
          countrie: "",
          state: "",
          street: "",
          apartment: "",
          city: "",
          pin_code: "",
          notes: "",
        };
    }
  });
  const [payment, setPayment] = useState({
    card_number: "",
    expiry_date: "",
    security_code: "",
  });
  const {
    stateList,
    countriesList,
    showCoupon,
    handleApplyCoupon,
    showLogin,
    amount,
    totalAmount,
    coupon,
    disabledButton,
    count,
    setTotalAmount,
    country,
    currentState,
    setCartProducts,
    cartProducts,
    setCountry,
    setShowCoupon,
    setDisabledButton,
    setCoupon,
    setcurrentState,
  } = useSearch();
  const [ship, setShip] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [radios, setRadios] = useState(1);
  const [copied, setCopied] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(() => {
    if (typeof window != "undefined") {
      const payment = localStorage.getItem("PaymentMethod");
      return payment ? JSON.parse(payment) : "";
    }
  });
  const router = useRouter();
  const [error, setError] = useState({});
  const [error1, setError1] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin_code" || name === "phone") {
      const re = /^\d+$/;
      if (re.test(value)) {
        setForms((prev) => ({ ...prev, [name]: value }));
      }
    }
    if (name === "countrie") {
      setCountry(value);
      setForms((prev) => ({ ...prev, countrie: country }));
    }
    if (name === "state") {
      setcurrentState(value);
      setForms((prev) => ({ ...prev, state: currentState }));
    }
    setForms((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleChangeShip = (e) => {
    const { name, value } = e.target;
    if (name === "pin_code" || name === "phone") {
      const re = /^\d+$/;
      if (re.test(value)) {
        setForms((prev) => ({ ...prev, [name]: value }));
      }
    }
    if (name === "countrie") {
      setCountry(value);
      setDifferentForms((prev) => ({ ...prev, countrie: country }));
    }
    if (name === "state") {
      setcurrentState(value);
      setDifferentForms((prev) => ({ ...prev, state: currentState }));
    }
    setDifferentForms((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    const { name, value } = e.target;
    const re = /^\d+$/;
    if (re.test(value)) {
      setPayment((prev) => ({ ...prev, [name]: value }));
    }
    if (name === "expiry_date") {
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(payment.expiry_date)) {
        setPayment((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("Location", JSON.stringify(forms));
    localStorage.setItem("User_Details", JSON.stringify(userDetails));
    localStorage.setItem("DifferentShip", JSON.stringify(differentforms));
  }, [forms, differentforms, userDetails]);

  const validate = () => {
    const newError = {};

    if (!forms.first_name) {
      newError.first_name = "First name is a required";
    }
    if (!forms.last_name) {
      newError.last_name = "Last name is a required";
    }
    if (!forms.countrie) {
      newError.countrie = "Country is a required";
    }
    if (!forms.street) {
      newError.street = "Street is a required";
    }
    if (!forms.apartment) {
      newError.apartment = "Apartment is a required";
    }
    if (!forms.city) {
      newError.city = "City is a required";
    }
    if (!forms.pin_code) {
      newError.pin_code = "Zip code is a required";
    }
    if (!forms.phone) {
      newError.phone = "Phone is a required";
    }
    if (!forms.state) {
      newError.state = "State is a required";
    }
    if (!forms.email) {
      newError.email = "Email is a required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(forms.email)) {
      newError.email = "Email is a invalid";
    }
    if (!forms.notes) {
      newError.notes = "Order notes is a required";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const validateShip = () => {
    const newError = {};

    if (!differentforms.first_name) {
      newError.first_name = "First name is a required";
    }
    if (!differentforms.last_name) {
      newError.last_name = "Last name is a required";
    }
    if (!differentforms.countrie) {
      newError.countrie = "Country is a required";
    }
    if (!differentforms.street) {
      newError.street = "Street is a required";
    }
    if (!differentforms.apartment) {
      newError.apartment = "Apartment is a required";
    }
    if (!differentforms.city) {
      newError.city = "City is a required";
    }
    if (!differentforms.pin_code) {
      newError.pin_code = "Zip code is a required";
    }

    setError1(newError);
    return Object.keys(newError).length === 0;
  };

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
    if (coupon === "Furnistor05") {
      setShowCoupon(true);
    }
  };

  const handleshowCoupon = () => {
    if (coupon === "Furnistor05") {
      setShowCoupon(true);
    } else if (coupon === "") {
      setShowCoupon(!showCoupon);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (validate() && showShipping === false) {
      if (radios === 1) {
        setPaymentMethod("Card");
      } else if (radios === 2) {
        setPaymentMethod("Direct Bank Transfer");
      } else if (radios === 3) {
        setPaymentMethod("Cash on Delivery");
      }
      router.push("/view-cart/order_details");
      setCartProducts([]);
      setCoupon("");
      setDisabledButton(false);
      setShowCoupon(false);
      setTotalAmount(0);
      setUserDetails(forms);
      const UserShippingData = JSON.parse(localStorage.getItem("User-Details"));

      const UpdateData = UserShippingData.map((item) =>
        item.email === forms.email
          ? {
            ...item,
            first_name: forms.first_name,
            last_name: forms.last_name,
            countrie: forms.countrie,
            street: forms.street,
            apartment: forms.apartment,
            state: forms.state,
            email: forms.email,
            phone: forms.phone,
            city: forms.city,
            pin_code: forms.pin_code,
          }
          : item
      );

      // const UpdateData =
    } else if (validateShip() && showShipping === true) {
      if (radios === 1) {
        setPaymentMethod("Card");
      } else if (radios === 2) {
        setPaymentMethod("Direct Bank Transfer");
      } else if (radios === 3) {
        setPaymentMethod("Cash on Delivery");
      }
      router.push("/view-cart/order_details");
      setCartProducts([]);
      setCoupon("");
      setDisabledButton(false);
      setShowCoupon(false);
      setTotalAmount(0);
      setUserDetails(forms);
      setForms({
        first_name: "",
        last_name: "",
        apartment: "",
        city: "",
        street: "",
        countrie: "",
        email: "",
        notes: "",
        phone: "",
        pin_code: "",
        state: "",
      });
      setDifferentForms({
        first_name: "",
        last_name: "",
        apartment: "",
        city: "",
        street: "",
        countrie: "",
        pin_code: "",
        state: "",
      });
    } else {
      setAlertError(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("PaymentMethod", JSON.stringify(paymentMethod));
  }, [paymentMethod]);

  const handleCheck = (e) => {
    setShip(e.target.checked);
    if (ship === false) {
      setShowShipping(true);
    } else {
      setShowShipping(false);
    }
  };

  const handleRadio = (id) => {
    setRadios(id);

    if (id === 1) {
      setPaymentMethod('Card');
    }
    else if (id === 1) {
      setPaymentMethod('Direct payment transfer');
    }
    else {
      setPaymentMethod('Cash on delivery');
    }
  };

  const handleCopy = () => {
    copy(4242424242424242);
    alert("Copied");
    const Timeset = setInterval(() => {
      setCopied(true);
    }, 100);
    setCopied(false);

    return () => {
      clearInterval(Timeset);
      setCopied(false);
    };
  };

  return (
    <>
      {alertError === true && (
        <div
          role="alert"
          className="mt-[50px] mb-[20px] relative flex w-full py-[25px] pr-[30px] pl-[60px] text-[16px] text-[#c92e1f] bg-[#fce1de] rounded-[5px]"
        >
          <div className="flex items-center">
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
          </div>
          <div>
            <p>
              {" "}
              <a href="#billing_first_name">
                {" "}
                {error.first_name && `Billing ${error.first_name}`}
              </a>
            </p>
            <p>
              <a href="#billing_last_name">
                {" "}
                {error.last_name && `Billing ${error.last_name}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_countrie">
                {" "}
                {error.countrie && `Billing ${error.countrie}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_street">
                {" "}
                {error.street && `Billing ${error.street}`}
              </a>
            </p>
            <p>
              <a href="#billing_apartment">
                {" "}
                {error.apartment && `Billing ${error.apartment}`}
              </a>
            </p>
            <p>
              <a href="#billing_city">
                {" "}
                {error.city && `Billing ${error.city}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_city">
                {" "}
                {error.city && `Billing ${error.city}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_state">
                {" "}
                {error.state && `Billing ${error.state}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_pin_code">
                {" "}
                {error.pin_code && `Billing ${error.pin_code}`}
              </a>
            </p>
            <p>
              <a href="#billing_phone">
                {" "}
                {error.phone && `Billing ${error.phone}`}
              </a>
            </p>
            <p>
              {" "}
              <a href="#billing_email">
                {" "}
                {error.email && `Billing ${error.email}`}
              </a>
            </p>
            <p>
              <a href="#billing_notes">
                {" "}
                {error.notes && `Billing ${error.notes}`}
              </a>
            </p>
            {showShipping && (
              <div className={`${showShipping === true ? "block" : "hidden"}`}>
                <p>
                  {" "}
                  <a href="#shipping_first_name">
                    {" "}
                    {error.first_name && `Shipping ${error.first_name}`}
                  </a>
                </p>
                <p>
                  <a href="#shipping_last_name">
                    {" "}
                    {error.last_name && `Shipping ${error.last_name}`}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="#shipping_countrie">
                    {" "}
                    {error.countrie && `Shipping ${error.countrie}`}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="#shipping_street">
                    {" "}
                    {error.street && `Shipping ${error.street}`}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="#shipping_apartment">
                    {" "}
                    {error.apartment && `Shipping ${error.apartment}`}
                  </a>
                </p>
                <p>
                  <a href="#shipping_city">
                    {" "}
                    {error.city && `Shipping ${error.city}`}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="#shipping_state">
                    {" "}
                    {error.state && `Shipping ${error.state}`}
                  </a>
                </p>
                <p>
                  {" "}
                  <a href="#shipping_pin_code">
                    {" "}
                    {error.pin_code && `Shipping ${error.pin_code}`}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      <form
        onSubmit={handlePlaceOrder}
        className={`w-full xl:pt-[60px] items-stretch flex justify-between`}
      >
        <div className="w-[49%] h-full ">
          <div className="p-[20px] mb-[20px] border border-[#ccc9c1] rounded-[5px] font-(family-name:--font-inter-tight)">
            <div className="w-full rounded-full h-1.5 bg-[#ccc9c1]">
              <p
                className={`rounded-full h-1.5 bg-[#fc6b00] progress  ${amount >= 150
                  ? "w-full"
                  : amount <= 50
                    ? "w-[30%]"
                    : amount <= 75
                      ? "w-[50%]"
                      : amount <= 100
                        ? "w-[70%]"
                        : amount <= 150
                          ? "w-[90%]"
                          : "w-full"
                  }`}
              ></p>
            </div>
            <p className="text-[#383733] text-[16px] pt-[10px]">
              {amount >= 150
                ? "Free shipping will be applied at chechout!"
                : `$${amount} away from free shipping!`}
            </p>
          </div>
          <div
            className={`w-full flex gap-[24px] ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <div className="flex flex-col w-[49%] relative">
              <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                First name<span className="text-[#d42d00] text-[16px]">*</span>
              </label>
              <input
                id="first_name"
                name="first_name"
                value={forms.first_name}
                onChange={handleChange}
                className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
              />

              {error.first_name && forms && (
                <p
                  className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                  id="#billing_first_name"
                >
                  {error.first_name}
                </p>
              )}
            </div>
            <div className="flex flex-col w-[49%] relative">
              <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                Last name <span className="text-[#d42d00] text-[16px]">*</span>
              </label>
              <input
                id="last_name"
                name="last_name"
                value={forms.last_name}
                onChange={handleChange}
                className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
              />
              {error.last_name && forms && (
                <p
                  className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                  id="#billing_last_name"
                >
                  {error.last_name}
                </p>
              )}
            </div>
          </div>
          <div
            className={`flex flex-col relative ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Country / region{" "}
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <select
              onChange={handleChange}
              name="countrie"
              value={forms.countrie}
              className="px-[12px] py-[8px] bg-[#fff]  border border-[#ccc9c1] w-full outline-none"
            >
              <option value={""} className="text-[#383733] text-[16px]">
                Select Country
              </option>
              {countriesList.map((_country) => (
                <option
                  className="text-[#383733] text-[16px]"
                  key={_country.id}
                  value={_country.id || ""}
                >
                  {_country.name}
                </option>
              ))}
            </select>
            {error.countrie && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_countrie"
              >
                {error.countrie}
              </p>
            )}
          </div>
          <div
            className={`flex flex-col  ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Street address
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <p
              className={`relative flex flex-col w-full ${Object.keys(error).length === 0 ? "mb-[10px]" : "mb-[8px]"
                }`}
            >
              <input
                id="street"
                name="street"
                placeholder="House number and street name"
                value={forms.street}
                onChange={handleChange}
                className="px-[12px] w-full mb-[16px] outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
              />

              {error.street && forms && (
                <span
                  className="absolute text-[16px] z-10  text-[#383733] -bottom-[5px] "
                  id="#billing_street"
                >
                  {error.street}
                </span>
              )}
            </p>
            <p className="relative flex flex-col w-full ">
              <input
                id="apartment"
                name="apartment"
                value={forms.apartment}
                onChange={handleChange}
                placeholder="Apartment, suite, unit ,etc. (optional)"
                className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
              />
              {error.apartment && forms && (
                <span
                  className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                  id="#billing_apartment"
                >
                  {error.apartment}
                </span>
              )}
            </p>
          </div>
          <div
            className={`flex flex-col relative ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Town /City
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <input
              id="city"
              name="city"
              value={forms.city}
              onChange={handleChange}
              className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
            />

            {error.city && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_city"
              >
                {error.city}
              </p>
            )}
          </div>
          <div
            className={`flex flex-col relative ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              State <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <select
              // (e) => setcurrentState(e.target.value)
              onChange={handleChange}
              value={forms.state}
              name="state"
              //   value={currentState}
              className="px-[12px] py-[8px] bg-[#fff] border border-[#ccc9c1] w-full outline-none"
            >
              <option value={""}>Select State</option>
              {stateList.map((_state) => (
                <option key={_state.id} value={_state.id || ""}>
                  {_state.name}
                </option>
              ))}
            </select>
            {error.state && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_state"
              >
                {error.state}
              </p>
            )}
          </div>
          <div
            className={`flex flex-col relative ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              ZIP Code
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <input
              id="pin_code"
              pattern="[0-9]*"
              type="tel"
              name="pin_code"
              value={forms.pin_code}
              onChange={handleChange}
              className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
            />
            {error.pin_code && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_pin_code"
              >
                {error.pin_code}
              </p>
            )}
          </div>
          <div
            className={`flex flex-col relative  ${Object.keys(error).length === 0 ? "mb-[16px]" : "mb-[32px]"
              }`}
          >
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Phone
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              pattern="[0-9]*"
              type="tel"
              value={forms.phone}
              onChange={handleChange}
              className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
            />
            {error.phone && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_phone"
              >
                {error.phone}
              </p>
            )}
          </div>
          <div className="flex flex-col relative">
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Email address
              <span className="text-[#d42d00] text-[16px]">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={forms.email}
              onChange={handleChange}
              className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
            />
            {error.email && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_email"
              >
                {error.email}
              </p>
            )}
          </div>

          {/* ship different address */}

          <div className="mb-[10px] mt-[40px] w-full flex justify-between items-center">
            <label
              htmlFor="ship"
              className="text-[26px] font-light  font-(family-name:--font-fraunces)"
            >
              Ship to a different address?
            </label>
            <p>
              <input
                type="checkbox"
                onChange={handleCheck}
                id="ship"
                className="accent-[#111] w-[18px] h-[18px] cursor-pointer"
              />
            </p>
          </div>

          {showShipping && (
            <div className={`${showShipping === true ? "block" : "hidden"}`}>
              <div
                className={`w-full flex gap-[24px] ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <div className={` flex flex-col relative w-[49%]`}>
                  <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                    First name
                    <span className="text-[#d42d00] text-[16px]">*</span>
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    value={differentforms.first_name}
                    onChange={handleChangeShip}
                    className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                  />
                  {error1.first_name && differentforms && (
                    <p
                      className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                      id="#billing_first_name"
                    >
                      {error1.first_name}
                    </p>
                  )}
                </div>
                <div className="flex flex-col  w-[49%] relative">
                  <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                    Last name{" "}
                    <span className="text-[#d42d00] text-[16px]">*</span>
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    value={differentforms.last_name}
                    onChange={handleChangeShip}
                    className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                  />
                  {error1.last_name && differentforms && (
                    <p
                      className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                      id="#billing_last_name"
                    >
                      {error1.last_name}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                  Country / region{" "}
                  <span className="text-[#d42d00] text-[16px]">*</span>
                </label>
                <select
                  //   onChange={(e) => setCountry(e.target.value)}
                  //   value={country}
                  onChange={handleChangeShip}
                  name="countrie"
                  value={differentforms.countrie}
                  className="px-[12px] py-[8px] bg-[#fff] border border-[#ccc9c1] w-full outline-none"
                >
                  <option value={""} className="text-[#383733] text-[16px]">
                    Select Country
                  </option>
                  {countriesList.map((_country) => (
                    <option
                      className="text-[#383733] text-[16px]"
                      key={_country.id}
                      value={_country.id || ""}
                    >
                      {_country.name}
                    </option>
                  ))}
                </select>
                {error1.countrie && differentforms && (
                  <p
                    className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                    id="#billing_countrie"
                  >
                    {error1.countrie}
                  </p>
                )}
              </div>
              <div
                className={`flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <p
                  className={`relative w-full flex-flex-col ${Object.keys(error1).length === 0 ? "mb-[10px]" : "mb-[10px]"
                    }`}
                >
                  <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                    Street address
                    <span className="text-[#d42d00] text-[16px]">*</span>
                  </label>
                  <input
                    id="street"
                    name="street"
                    value={differentforms.street}
                    onChange={handleChangeShip}
                    className="px-[12px] w-full mb-[16px] outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                  />
                  {error1.street && differentforms && (
                    <span
                      className="absolute text-[16px] z-10 text-[#383733] -bottom-[5px] "
                      id="#billing_street"
                    >
                      {error1.street}
                    </span>
                  )}
                </p>
                <p
                  className={`relative w-full flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                    }`}
                >
                  <input
                    id="apartment"
                    name="apartment"
                    value={differentforms.apartment}
                    onChange={handleChangeShip}
                    className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                  />
                  {error1.apartment && differentforms && (
                    <p
                      className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                      id="#billing_apartment"
                    >
                      {error1.apartment}
                    </p>
                  )}
                </p>
              </div>
              <div
                className={`flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                  Town /City
                  <span className="text-[#d42d00] text-[16px]">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  value={differentforms.city}
                  onChange={handleChangeShip}
                  className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                />
                {error1.city && differentforms && (
                  <p
                    className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                    id="#billing_city"
                  >
                    {error1.city}
                  </p>
                )}
              </div>
              <div
                className={`flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                  State <span className="text-[#d42d00] text-[16px]">*</span>
                </label>
                <select
                  // (e) => setcurrentState(e.target.value)
                  onChange={handleChangeShip}
                  value={differentforms.state}
                  name="state"
                  // value={currentState}
                  className="px-[12px] py-[8px] bg-[#fff] border border-[#ccc9c1] w-full outline-none"
                >
                  <option value={""}>Select State</option>
                  {stateList.map((_state) => (
                    <option key={_state.id} value={_state.id || ""}>
                      {_state.name}
                    </option>
                  ))}
                </select>
                {error1.state && differentforms && (
                  <p
                    className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                    id="#billing_state"
                  >
                    {error1.state}
                  </p>
                )}
              </div>
              <div
                className={`flex flex-col ${Object.keys(error1).length === 0 ? "mb-[32px]" : "mb-[16px]"
                  }`}
              >
                <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                  ZIP Code
                  <span className="text-[#d42d00] text-[16px]">*</span>
                </label>
                <input
                  id="pin_code"
                  name="pin_code"
                  pattern="[0-9]*"
                  type="tel"
                  value={differentforms.pin_code}
                  onChange={handleChangeShip}
                  className="px-[12px] w-full outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                />
                {error1.pin_code && differentforms && (
                  <p
                    className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                    id="#billing_pin_code"
                  >
                    {error1.pin_code}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col  my-[20px] relative">
            <label className="text-left mb-[8px] text-[16px] text-[#383733]">
              Order notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={forms.notes}
              onChange={handleChange}
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="px-[12px] w-full  h-[120px] outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
            />
            {error.notes && forms && (
              <p
                className="absolute text-[16px] text-[#383733] -bottom-[25px] "
                id="#billing_notes"
              >
                {error.notes}
              </p>
            )}
          </div>
        </div>
        <div className="w-[40%] h-full relative font-(family-name:--font-inter-tight)">
          <div className="coupon-div1"></div>
          <div className="w-full h-auto bg-[#f3f1ef]">
            <div className="px-[40px] pt-[40px] pb-[25px]">
              <div className="border-b border-dotted border-[#ccc9c1]">
                {" "}
                {cartProducts.map((item) => (
                  <div
                    key={item.id}
                    className="pb-[10px] w-full flex justify-between items-center"
                  >
                    <div className="flex items-center gap-[15px]">
                      <div className="w-[82px] h-[82px]">
                        <Image
                          src={item.img1}
                          alt="img"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[16px] text-[#111] font-medium font-(family-name:--font-inter-tight)">
                        {item.options === "Select options"
                          ? `${item.name} - ${item.color} × ${item.quantity}`
                          : `${item.name} × ${item.quantity}`}
                      </p>
                    </div>
                    <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight)">
                      ${" "}
                      {item.Dprice === ""
                        ? (item.quantity * item.Oprice).toFixed(2)
                        : (item.quantity * item.Dprice).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between w-full pb-[20px] pt-[25px]">
                <p className="text-[#111] text-[16px]">Subamount</p>
                <p className="text-[#383733] text-[16px]">$ {amount}</p>
              </div>
              <div className="flex justify-between w-full ">
                <p className="text-[#111] text-[16px]">Shipping</p>
                <p
                  className={`text-[#383733] text-[16px] ${amount >= 150 ? "w-auto" : "w-[45%]"
                    }`}
                >
                  {amount >= 150
                    ? "Free shipping"
                    : "There are no shipping options avaliable. Please ensure that your address has been entered correctly,or contact us if you need any help."}
                </p>
              </div>
            </div>
            <div className="border-t-2 relative border-b-2 border-dashed border-[#e9e6e3] px-[40px] py-[25px]">
              <div className="before:w-[20px] before:h-[20px] before:rounded-[50%] before:border-10 before:border-[#e9e6e3] before:absolute before:top-[50%] before:content-[''] before:transform before:translate-y-[-50%] before:-left-[10px]"></div>
              <p
                onClick={handleshowCoupon}
                className={`flex gap-[10px] text-[#383733] items-center hover:text-[#cf5600] cursor-pointer ${showCoupon === true || coupon === "Furnistor05"
                  ? "hidden"
                  : "block"
                  }`}
              >
                <RiScissorsCutLine /> Have a coupon?
              </p>

              <div
                className={`flex w-full ${showCoupon === true || coupon === "Furnistor05"
                  ? "block"
                  : "hidden"
                  }`}
              >
                <div className="pr-[12px] w-full">
                  {" "}
                  <input
                    value={coupon}
                    name="coupon"
                    // readOnly={coupon === "" ? false : true}
                    onChange={handleCoupon}
                    className="px-[12px] font-bold font-(family-name:--font-fraunces)  outline-none hover:border-[#000] w-full py-[6px] border border-[#ccc9c1] text-[#fc6b00] placeholder:text-[#ccc9c1] lg:text-[16px] text-[14px] bg-[#fff]"
                    placeholder="Coupon code"
                  />
                </div>
                <div className="pl-[12px]">
                  {" "}
                  <button
                    onClick={() => {
                      handleApplyCoupon(1);
                    }}
                    disabled={disabledButton === true ? true : false}
                    className={`bg-[#000] text-[#fff] py-[6px] px-[12px] ${disabledButton === true
                      ? "cursor-not-allowed bg-[#999]"
                      : "cursor-pointer hover:bg-[#383733]"
                      }`}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="before:w-[20px] before:h-[20px] before:rounded-[50%] before:border-10 before:border-[#e9e6e3] before:absolute before:top-[50%] before:content-[''] before:transform before:translate-y-[-50%] before:-right-[10px]"></div>
            </div>
            <div className="py-[20px] px-[40px] border-b-2 border-dashed border-[#e9e6e3]">
              <div className="flex justify-between ">
                <p className="text-[22px] text-[#000] font-medium">Total</p>
                <p className="text-[22px] text-[#000] font-medium">
                  {" "}
                  ${totalAmount === 0 ? amount : totalAmount} USD
                </p>
              </div>
            </div>

            <div className="px-[40px] pt-[20px] pb-[40px]">
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-[10px]">
                  <label
                    className="relative flex items-center cursor-pointer"
                    htmlFor="Card"
                  >
                    <input
                      name="radios"
                      value={radios}
                      checked={radios === 1 ? true : false}
                      onChange={() => {
                        handleRadio(1);
                      }}
                      type="radio"
                      className="peer bg-[#fff]  h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                      id="Card"
                    />
                    <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                  </label>
                  <label
                    className=" text-[#383733] font-bold cursor-pointer text-[16px]"
                    htmlFor="Card"
                  >
                    Card
                  </label>
                </div>
                <div className="flex gap-[8px]">
                  <div className="w-[37px] bg-[#e9e6e3] h-[24px] p-[5px] mt-[5px] mb-[10px]">
                    <Image
                      src={Img1}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[37px] bg-[#e9e6e3]  h-[24px] p-[5px] mt-[5px] mb-[10px]">
                    <Image
                      src={Img2}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[37px] bg-[#e9e6e3]  h-[24px] p-[5px] mt-[5px] mb-[10px]">
                    <Image
                      src={Img3}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[37px] bg-[#e9e6e3]  h-[24px] p-[5px] mt-[5px] mb-[10px]">
                    <Image
                      src={Img4}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className={`${radios === 1 ? "block" : "hidden"}`}>
                <p className="text-[16px]  pl-[25px] text-[#646360] flex gap-[5px] items-center">
                  Use test card 4242 4242 4242 4242{" "}
                  <span onClick={handleCopy}>
                    {" "}
                    {copied === true ? (
                      <FaCheck className="text-[#646360]" />
                    ) : (
                      <RxCopy className="text-[#646360]" />
                    )}
                  </span>{" "}
                  or refer to our{" "}
                </p>
                <span className="text-[#f46b00] pl-[25px] mb-[10px]">
                  testing guide
                </span>{" "}
                .
                <div className="p-[14px] pl-[40px]">
                  <div className="flex flex-col  mb-[20px] ">
                    <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                      Card number
                    </label>
                    <input
                      id="card_number"
                      name="card_number"
                      value={payment.card_number}
                      onChange={handlePayment}
                      placeholder="1234 1234 1234 1234"
                      className="px-[12px] w-full outline-none placeholder:text-[#ccc9c1] bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                    />
                  </div>
                  <div className=" mb-[20px] w-full flex gap-[24px]">
                    <div className="flex w-[49%] flex-col">
                      <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                        Expiration date
                      </label>
                      <input
                        id="expiry_date"
                        name="expiry_date"
                        value={payment.expiry_date}
                        onChange={handlePayment}
                        placeholder="MM / YY"
                        className="px-[12px] w-full outline-none placeholder:text-[#ccc9c1] bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                      />
                    </div>
                    <div className="flex w-[49%] flex-col">
                      <label className="text-left mb-[8px] text-[16px] text-[#383733]">
                        Security code
                      </label>
                      <input
                        id="security_code"
                        name="security_code"
                        value={payment.security_code}
                        onChange={handlePayment}
                        placeholder="CVC"
                        className="px-[12px] w-full outline-none placeholder:text-[#ccc9c1] bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex gap-[10px] ${radios === 1 || radios === 3 ? "py-[20px]" : "p-0"
                  }`}
              >
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="bank"
                >
                  <input
                    onChange={() => {
                      handleRadio(2);
                    }}
                    name="radios"
                    checked={radios === 2 ? true : false}
                    value={radios}
                    type="radio"
                    className="peer bg-[#fff] h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                    id="bank"
                  />
                  <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className=" text-[#383733]  font-bold cursor-pointer text-[16px]"
                  htmlFor="bank"
                >
                  Direct bank transfer
                </label>
              </div>

              <div className={`${radios === 2 ? "block" : "hidden"}`}>
                <p
                  className={`text-[16px] text-[#383733] mb-[16px] mt-[10px] pl-[25px]`}
                >
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped unti the funds have cleared in our account.
                </p>
              </div>

              <div className="flex gap-[10px]">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor="cod"
                >
                  <input
                    name="radios"
                    type="radio"
                    value={radios}
                    checked={radios === 3 ? true : false}
                    onChange={() => {
                      handleRadio(3);
                    }}
                    className="peer bg-[#fff]  h-4 w-4 cursor-pointer appearance-none rounded-full border-1 border-[#ccc9c1] checked:border-4 checked:border-[#000] transition-all"
                    id="cod"
                  />
                  <span className="absolute bg-[#fff] w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className=" text-[#383733]  font-bold cursor-pointer text-[16px]"
                  htmlFor="cod"
                >
                  Cash on delivery
                </label>
              </div>
              <p
                className={`text-[#383733] pl-[25px] ${radios === 3 ? "block" : "hidden"
                  }`}
              >
                Pay with cash upon delivery
              </p>

              <p className="text-[16px] text-[#383733] mb-[16px] mt-[10px]">
                Your personal data will be used to process your order, support
                your experience throughtout this website,and for other purposes
                secribed in our{" "}
                <Link
                  href="/customer_care/privacy_policy"
                  className="text-[#fc6b00]"
                >
                  Privacy policy
                </Link>
                .
              </p>
              <div>
                <button
                  type="submit"
                  className="w-full mt-[20px] cursor-pointer py-[8px] px-[16px] flex gap-[10px] text-[22px] items-center justify-center bg-[#000] text-[#fff]"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>

          <div className={`coupon-div2`}></div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
