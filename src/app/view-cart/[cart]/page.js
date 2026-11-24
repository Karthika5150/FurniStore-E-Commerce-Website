"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useParams } from "next/navigation";
import { FiMinus, FiPlus } from "react-icons/fi";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useSearch } from "@/app/context/context";
import Link from "next/link";
import Img1 from "../../../../public/assets/cart.png";
import { IoIosArrowDown } from "react-icons/io";
import { RiScissorsCutLine } from "react-icons/ri";
import Checkout from "./checkout";
import OrderDetails from "./order_details";
import { useRouter } from "next/navigation";

const ViewCart = () => {
  const params = useParams();
  const [componentId, setComponenetId] = useState(1);
  const {
    cartProducts,
    handleAdd,
    handleRemove,
    cartLength,
    amount,
    showCoupon,
    setShowCoupon,
    coupon,
    setCoupon,
    totalAmount,
    handleApplyCoupon,
    disabledButton,
    country,
    setCountry,
    stateList,
    countryName,
    setCountryName,
    countriesList,
    currentState,
    setcurrentState,
    stateName,
    counts,
    Total,
    setStateName,
    setShowLogin,
    orderProduct,
  } = useSearch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [showUserLoc, setShowUserLoc] = useState({});
  const router = useRouter();
  const [forms, setForms] = useState(() => {
    if (typeof window != undefined) {
      const Profile = localStorage.getItem("User-Details");
      return Profile
        ? JSON.parse(Profile)
        : {
            countrie: "",
            state: "",
            city: "",
            pin_code: "",
          };
    }
  });

  useEffect(() => {
    if (params.cart === "cart") {
      setComponenetId(1);
    } else if (params.cart === "checkout") {
      setComponenetId(2);
    } else if (params.cart === "order_details") {
      setComponenetId(3);
    }
  }, [componentId,params.cart]);


  useEffect(() => {
    let countries = {};
    let states = {};

    if (Object.keys(showUserLoc).length === 0) {
      countries = countriesList.find((item) => String(item.id) === country);
      states = stateList.find((item) => String(item.id) === currentState);
    } else {
      countries = countriesList.find(
        (item) => String(item.id) === showUserLoc.countrie
      );
      states = stateList.find((item) => String(item.id) === showUserLoc.state);
    }

    if (countries != undefined && states != undefined) {
      localStorage.setItem("Country", JSON.stringify(countries.name));
      setCountryName(countries ? countries.name : "");

      localStorage.setItem("State", JSON.stringify(states.name));
      setStateName(states ? states.name : "");
    }
  }, [forms, countriesList, stateList,country,currentState,setCountryName,setStateName,showUserLoc]);

  useEffect(() => {
    localStorage.setItem("TotalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("Coupon", JSON.stringify(coupon));
    localStorage.setItem("Total", JSON.stringify(Total));
    localStorage.setItem("DisabledButton", JSON.stringify(disabledButton));
  }, [totalAmount, disabledButton, Total, coupon]);

  const handleshowCoupon = () => {
    if (coupon === "Furnistor05") {
      setShowCoupon(true);
    } else if (coupon === "" || cartProducts.length === 0) {
      setShowCoupon(!showCoupon);
    }
  };

  const handleUpdate = () => {
    setShowUpdate(!showUpdate);
  };

  const handleAddress = (e) => {
    const { name, value } = e.target;

    if (name === "countrie") {
      setCountry(value);
      setForms((prev) => ({ ...prev, countrie: country }));
    }
    if (name === "state") {
      setcurrentState(value);
      setForms((prev) => ({ ...prev, state: currentState }));
    }
    setForms((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userLoc = JSON.parse(localStorage.getItem("User-Details")) || [];
    const ExactUser = JSON.parse(localStorage.getItem("Current-User"));

    if (ExactUser != null) {
      if (ExactUser.email != "" && ExactUser.password != "") {
        userLoc.push({
          countrie: forms.countrie,
          state: forms.state,
          city: forms.city,
          pin_code: forms.pin_code,
          email: ExactUser.email,
        });
      } else {
        setShowLogin(true);
      }
    } else {
      setShowLogin(true);
    }

    localStorage.setItem("User-Details", JSON.stringify(userLoc));
    setShowUpdate(false);
  };

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
    if (coupon === "Furnistor05") {
      setShowCoupon(true);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  const handleProceed = () => {
    if (amount < 150) {
      alert(`${amount} away from Free shipping!`);
      router.push("/products");
    } else {
      router.push("/view-cart/checkout");
    }
  };

  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col   flex justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        {cartProducts.length === 0 ? (
          <div
            className={`w-full h-[600px] flex  flex-col items-center justify-center  ${
              componentId === 3 ? "hidden" : "block"
            }`}
          >
            <div className="w-[72px] h-[72px] mb-[20px]">
              <Image
                src={Img1}
                alt="cart"
                className="w-full h-full object-cover"
              />{" "}
            </div>

            <p className="text-[#111] text-[27px] font-(family-name:--font-fraunces) font-light">
              Your cart is currently empty!
            </p>

            <p className="text-[#383733] text-[16px] mt-[10px]">
              Browse our store,find products,and happy shopping!
            </p>

            <div className="flex justify-center mt-[20px]">
              <Link
                href="/products"
                className="bg-[#111] text-[#fff]  px-[12px] py-[6px]  flex justify-center items-center"
              >
                Browse Products
              </Link>
            </div>
          </div>
        ) : (
          <>
            <main
              className={`flex w-full items-center justify-center ${
                componentId === 3 ? "hidden" : "block"
              }`}
            >
              <div className="flex">
                <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
                  <Link
                    href="/view-cart/cart"
                    className={`flex gap-[10px] items-center ${
                      componentId === 3 ? "hidden" : "block"
                    }`}
                  >
                    <button
                      className={`w-[32px] h-[32px] rounded-[50%] bg-[#383733] text-[#fff] text-[16px] `}
                    >
                      1
                    </button>
                    <p className={`text-[16px] text-[383733]`}>Shopping cart</p>
                  </Link>

                  <p className="flex items-center">
                    <FaArrowRight className="text-[#999] text-[16px]" />
                  </p>
                </div>
                <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
                  <Link
                    href="/view-cart/checkout"
                    className={`flex gap-[10px] items-center ${
                      componentId === 3 ? "hidden" : "block"
                    }`}
                  >
                    <button
                      className={`w-[32px] h-[32px] rounded-[50%] text-[16px] ${
                        componentId === 1
                          ? " bg-[#999999] text-[#fff]"
                          : " bg-[#383733] text-[#fff]"
                      }`}
                    >
                      2
                    </button>
                    <p
                      className={`text-[16px] ${
                        componentId === 1 ? "  text-[#999]" : " text-[#383733] "
                      }`}
                    >
                      Checkout
                    </p>
                  </Link>
                  <p className="flex items-center">
                    <FaArrowRight className="text-[#999] text-[16px]" />
                  </p>
                </div>
                <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
                  <div className="flex gap-[10px] items-center cursor-default">
                    <button
                      className={`w-[32px] h-[32px] rounded-[50%] text-[16px] ${
                        componentId === 1 || componentId === 2
                          ? " bg-[#999999] text-[#fff]"
                          : " bg-[#383733] text-[#fff]"
                      }`}
                    >
                      3
                    </button>
                    <p
                      className={`text-[16px] cursor-default ${
                        componentId === 1 || componentId === 2
                          ? "  text-[#999]"
                          : " text-[#383733] "
                      }`}
                    >
                      Order complete
                    </p>
                  </div>
                </div>
              </div>
            </main>
            <main className="w-full">
              <div className={`${componentId === 3 ? "hidden" : "block"}`}>
                <h1 className=" text-[72px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
                  {componentId === 1 ? "Cart" : " Checkout"}
                </h1>
                <p className="text-[#383733] text-[16px]">
                  You have got {cartLength} item in the cart
                </p>
              </div>

              {componentId === 1 && (
                <div
                  className={`w-full xl:pt-[60px] flex justify-between ${
                    componentId === 1 ? "block" : "hidden"
                  }`}
                >
                  <div className="w-[57%]">
                    <table className="w-full font-(family-name:--font-inter-tight)">
                      <thead className="border-b border-[#ccc9c1] pb-[10px]">
                        <tr>
                          <th className="w-[5%]"></th>
                          <th className="text-[16px] text-[#383733] font-normal pb-[10px] w-[40%] text-left">
                            Product
                          </th>
                          <th className="text-[16px] text-[#383733] font-normal pb-[10px] w-[10%]">
                            Price
                          </th>
                          <th className="text-[16px] text-[#383733] font-normal pb-[10px] w-[10%]">
                            Quantity
                          </th>
                          <th className="text-[16px] text-[#383733] font-normal pb-[10px] w-[10%] text-end">
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts.map((item) => (
                          <tr key={item.id} className="group">
                            <th className="w-[65px] py-[20px] pr-[25px]">
                              <div className="w-[65px] h-[65px] relative ">
                                <Image
                                  src={item.img1}
                                  alt="product"
                                  className="w-full h-full object-cover"
                                />
                                <div
                                  onClick={() => handleRemoveProduct(item.id)}
                                  className="absolute group-hover:visible invisible top-[-10px] cursor-pointer  hover:scale-120  bg-[#111] w-[20px] h-[20px] rounded-[50%] flex items-center justify-center"
                                >
                                  <IoClose className="text-[#fff] text-[16px]" />
                                </div>
                              </div>
                            </th>
                            <th className="text-left font-normal">
                              <Link
                                href={`/product_details/${generateSlug(
                                  item.name
                                )}`}
                              >
                                {item.options === "Select options"
                                  ? ` ${item.name} - ${item.color}`
                                  : item.name}
                              </Link>
                            </th>
                            <th className="font-normal  text-[#646360] text-[16px]">
                              ${item.Dprice === "" ? item.Oprice : item.Dprice}
                            </th>
                            <th className="font-normal">
                              <div className="p-[5px] flex justify-between w-[100px] bg-[#fff] border border-[#ccc9c1]">
                                <div
                                  className="px-[3px] cursor-pointer flex items-center hover:bg-[#111] text-[14px] text-[#ccc9c1] hover:text-[#fff]"
                                  onClick={() => {
                                    handleRemove(
                                      item.id,
                                      item.quantity - 1,
                                      item
                                    );
                                  }}
                                >
                                  <FiMinus />
                                </div>
                                &nbsp;
                                {item.quantity}
                                &nbsp;
                                <div
                                  className="px-[3px]  cursor-pointer flex items-center  text-[14px] text-[#ccc9c1] hover:bg-[#111] hover:text-[#fff]"
                                  onClick={() => {
                                    handleAdd(item.id, item.quantity + 1, item);
                                  }}
                                >
                                  <FiPlus />
                                </div>
                              </div>
                            </th>
                            <th className="font-normal text-end text-[#646360] text-[16px]">
                              $
                              {item.Dprice === ""
                                ? (item.quantity * item.Oprice).toFixed(2)
                                : (item.quantity * item.Dprice).toFixed(2)}
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="w-[40%] relative font-(family-name:--font-inter-tight)">
                    <div className="coupon-div1"></div>
                    <div className="w-full h-[100%] bg-[#f3f1ef]">
                      <div className="p-[40px]">
                        <div className="flex justify-between w-full pb-[20px]">
                          <p className="text-[#111] text-[16px]">Subtotal</p>
                          <p className="text-[#383733] text-[16px]">
                            $ {amount}
                          </p>
                        </div>
                        <div className="flex justify-between w-full ">
                          <p className="text-[#111] text-[16px]">Shipping</p>
                          <p className="text-[#383733] text-[16px]">
                            {amount >= 150
                              ? "Free shipping"
                              : "No shipping options were found for "}
                          </p>
                        </div>
                        <div className="flex justify-end w-full">
                          <p className="text-[#383733] text-[16px] pb-[20px] flex gap-[5px]">
                            Shipping to{" "}
                            {forms != null && (
                              <strong
                                className={`font-medium text-[#383733] text-[16px] ${
                                  stateName === "" || countryName === ""
                                    ? "hidden"
                                    : "block"
                                }`}
                              >
                                {`${forms.city} - ${forms.pin_code}, ${stateName},
                                ${countryName}`}
                              </strong>
                            )}
                          </p>
                        </div>
                        <div className="w-full cursor-pointer flex flex-col items-end pb-[20px] overflow-hidden  transition-all duration-300 ">
                          <p
                            onClick={handleUpdate}
                            className="text-[#383733] flex gap-[10px] items-center text-[16px] border border-[#000] px-[8px] py-[4px]"
                          >
                            Change address{" "}
                            <IoIosArrowDown className="text-[#383733] text-[16px]" />
                          </p>
                          <form
                            onSubmit={handleSubmit}
                            className={`w-full overflow-hidden transition-all duration-300 ${
                              showUpdate === true
                                ? "block max-h-auto"
                                : "hidden max-h-0"
                            }`}
                          >
                            <div className="flex flex-col mb-[16px] mt-[20px]">
                              <label className="text-right mb-[8px] text-[16px] text-[#383733]">
                                Country / region{" "}
                                <span className="text-[#d42d00] text-[16px]">
                                  *
                                </span>
                              </label>
                              <select
                                onChange={handleAddress}
                                name="countrie"
                                value={forms.countrie}
                                className="px-[12px] py-[6px] bg-[#fff] border border-[#ccc9c1] w-full outline-none"
                              >
                                <option
                                  value={""}
                                  className="text-[#383733] text-[16px]"
                                >
                                  Select Country
                                </option>
                                {countriesList.map((_country) => (
                                  <option
                                    className="text-[#383733] text-[16px]"
                                    key={_country.id}
                                    value={_country.id}
                                  >
                                    {_country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex flex-col mb-[16px] mt-[20px]">
                              <label className="text-right mb-[8px] text-[16px] text-[#383733]">
                                State{" "}
                                <span className="text-[#d42d00] text-[16px]">
                                  *
                                </span>
                              </label>
                              <select
                                onChange={handleAddress}
                                name="state"
                                value={forms.state}
                                className="px-[12px] py-[6px] bg-[#fff] border border-[#ccc9c1] w-full outline-none"
                              >
                                <option value={""}>Select State</option>
                                {stateList.map((_state) => (
                                  <option key={_state.id} value={_state.id}>
                                    {_state.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex flex-col mb-[16px] mt-[20px]">
                              <label className="text-right mb-[8px] text-[16px] text-[#383733]">
                                Town / City{" "}
                                <span className="text-[#d42d00] text-[16px]">
                                  *
                                </span>
                              </label>
                              <input
                                onChange={handleAddress}
                                id="city"
                                name="city"
                                value={forms.city}
                                className="px-[12px] outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                              />
                            </div>
                            <div className="flex flex-col mb-[16px] my-[20px]">
                              <label className="text-right mb-[8px] text-[16px] text-[#383733]">
                                Pin Code{" "}
                                <span className="text-[#d42d00] text-[16px]">
                                  *
                                </span>
                              </label>
                              <input
                                id="pin_code"
                                name="pin_code"
                                value={forms.pin_code}
                                onChange={handleAddress}
                                className="px-[12px] outline-none bg-[#fff] py-[6px] border border-[#ccc9c1] text-[16px] text-[#383733]"
                              />
                            </div>
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                className="px-[12px] cursor-pointer py-[6px] bg-[#111] text-[16px] text-[#fff] hover:bg-[#383733]"
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="border-t-3 relative border-b-3 border-dashed border-[#e9e6e3] px-[40px] py-[25px]">
                        <div className="before:w-[20px] before:h-[20px] before:rounded-[50%] before:border-10 before:border-[#e9e6e3] before:absolute before:top-[50%] before:content-[''] before:transform before:translate-y-[-50%] before:-left-[10px]"></div>
                        <p
                          onClick={handleshowCoupon}
                          className={`flex gap-[10px] text-[#383733] items-center hover:text-[#cf5600] cursor-pointer ${
                            showCoupon === true || coupon === "Furnistor05"
                              ? "hidden"
                              : "block"
                          }`}
                        >
                          <RiScissorsCutLine /> Have a coupon?
                        </p>

                        <div
                          className={`flex w-full ${
                            showCoupon === true || coupon === "Furnistor05"
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          <div className="pr-[12px] w-full">
                            {" "}
                            <input
                              value={coupon}
                              name="coupon"
                              onChange={handleCoupon}
                              className="px-[12px] font-bold font-(family-name:--font-fraunces)  outline-none hover:border-[#000] w-full py-[6px] border border-[#ccc9c1] text-[#fc6b00] placeholder:text-[#ccc9c1] lg:text-[16px] text-[14px] bg-[#fff]"
                              placeholder="Coupon code"
                            />
                          </div>
                          <div className="pl-[12px]">
                            {" "}
                            <button
                              onClick={() => {
                                handleApplyCoupon(counts + 1);
                              }}
                              disabled={disabledButton === true ? true : false}
                              className={`bg-[#000] text-[#fff] py-[6px] px-[12px] ${
                                disabledButton === true
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
                      <div className="p-[40px]">
                        <div className="flex justify-between pb-[20px]">
                          <p className="text-[22px] text-[#000] font-medium">
                            Total
                          </p>
                          <p className="text-[22px] text-[#000] font-medium">
                            {" "}
                            ${totalAmount === 0 ? amount : totalAmount} USD
                          </p>
                        </div>
                        <button
                          onClick={handleProceed}
                          className="w-full cursor-pointer py-[8px] px-[16px] flex gap-[10px] text-[22px] items-center justify-center bg-[#000] text-[#fff]"
                        >
                          Proceed to checkout{" "}
                          <FaArrowRight className="hover:mr-[5px]" />
                        </button>
                      </div>
                    </div>

                    <div className="coupon-div2"></div>
                  </div>
                </div>
              )}

              {componentId === 2 && (
                <Checkout
                  className={`${componentId === 2 ? "block" : "hidden"}`}
                />
              )}
            </main>
          </>
        )}

        {/* order details */}

        <main
          className={`flex w-full items-center justify-center ${
            componentId === 3 ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
              <Link
                href="/view-cart/cart"
                className={`flex gap-[10px] items-center ${
                  componentId === 3 ? "hidden" : "block"
                }`}
              >
                <button
                  className={`w-[32px] h-[32px] rounded-[50%] bg-[#383733] text-[#fff] text-[16px] `}
                >
                  1
                </button>
                <p className={`text-[16px] text-[383733]`}>Shopping cart</p>
              </Link>
              <div
                className={`flex gap-[10px] items-center cursor-default ${
                  componentId === 3 ? "block" : "hidden"
                }`}
              >
                <button
                  className={`w-[32px] h-[32px] rounded-[50%] bg-[#383733] text-[#fff] text-[16px] `}
                >
                  1
                </button>
                <p className={`text-[16px] text-[383733] cursor-default`}>
                  Shopping cart
                </p>
              </div>
              <p className="flex items-center">
                <FaArrowRight className="text-[#999] text-[16px]" />
              </p>
            </div>
            <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
              <Link
                href="/view-cart/checkout"
                className={`flex gap-[10px] items-center ${
                  componentId === 3 ? "hidden" : "block"
                }`}
              >
                <button
                  className={`w-[32px] h-[32px] rounded-[50%] text-[16px] ${
                    componentId === 1
                      ? " bg-[#999999] text-[#fff]"
                      : " bg-[#383733] text-[#fff]"
                  }`}
                >
                  2
                </button>
                <p
                  className={`text-[16px] ${
                    componentId === 1 ? "  text-[#999]" : " text-[#383733] "
                  }`}
                >
                  Checkout
                </p>
              </Link>
              <div
                className={`flex gap-[10px] items-center cursor-default ${
                  componentId === 3 ? "block" : "hidden"
                }`}
              >
                <button
                  className={`w-[32px] h-[32px] rounded-[50%] text-[16px] ${
                    componentId === 1
                      ? " bg-[#999999] text-[#fff]"
                      : " bg-[#383733] text-[#fff]"
                  }`}
                >
                  2
                </button>
                <p
                  className={`text-[16px] cursor-default ${
                    componentId === 1 ? "  text-[#999]" : " text-[#383733] "
                  }`}
                >
                  Checkout
                </p>
              </div>
              <p className="flex items-center">
                <FaArrowRight className="text-[#999] text-[16px]" />
              </p>
            </div>
            <div className="flex gap-[30px] items-center px-[15px] py-[10px]">
              <div className="flex gap-[10px] items-center cursor-default">
                <button
                  className={`w-[32px] h-[32px] rounded-[50%] text-[16px] ${
                    componentId === 1 || componentId === 2
                      ? " bg-[#999999] text-[#fff]"
                      : " bg-[#383733] text-[#fff]"
                  }`}
                >
                  3
                </button>
                <p
                  className={`text-[16px] cursor-default ${
                    componentId === 1 || componentId === 2
                      ? "  text-[#999]"
                      : " text-[#383733] "
                  }`}
                >
                  Order complete
                </p>
              </div>
            </div>
          </div>
        </main>

        {componentId === 3 && (
          <OrderDetails
            className={`${componentId === 3 ? "block" : "hidden"}`}
          />
        )}
      </section>
    </>
  );
};

export default ViewCart;
