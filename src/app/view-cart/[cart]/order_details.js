"use client";
import { useSearch } from "@/app/context/context";
import React, { useEffect, useState } from "react";
import { RiScissorsCutLine } from "react-icons/ri";

const OrderDetails = () => {
  const [paymenttype, setPaymentTYpe] = useState("");
  const [userAddress, setUserAddress] = useState({});
  const [shipped, setShipped] = useState({});
  const {
    totalAmount,
    orderProduct,
    coupon,
    stateName,
    countryName,
    amount,
    Total,
  } = useSearch();

  useEffect(() => {
    if (typeof window != "undefined") {
      const type = JSON.parse(localStorage.getItem("PaymentMethod"));
      const user = JSON.parse(localStorage.getItem("Location"));
      const shipping = JSON.parse(localStorage.getItem("DifferentShip"));
      setPaymentTYpe(type);
      setUserAddress(user);
      setShipped(shipping);
    }
  }, [paymenttype]);

  // get today date validation

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const months = [
    { id: 1, value: "January" },
    { id: 2, value: "February" },
    { id: 3, value: "March" },
    { id: 4, value: " April" },
    { id: 5, value: "May" },
    { id: 6, value: " June" },
    { id: 7, value: "July" },
    { id: 8, value: "Augest" },
    { id: 9, value: " September" },
    { id: 10, value: "October" },
    { id: 11, value: " November" },
    { id: 12, value: "Decemeber" },
  ];

  const find_Month = months.find((item) => item.id === month);
  const FullDate = `${find_Month.value} ${date},${year}`;
  return (
    <>
      <section className="flex flex-col items-center">
        <main className="py-[126px] max-lg:py-[50px] flex flex-col items-center justify-center">
          <h3 className="text-[52px] max-xl:text-[32px] text-[#111] font-(family-name:--font-fraunces) font-light">
            Order received 🎉
          </h3>
          <p className="py-[20px] text-[24px] text-[#383733] font-(family-name:--font-inter-tight) font-normal max-xl:text-[18px]">
            Thankyou ! Your order has been received.
          </p>
        </main>
        <main className="w-[66%] h-full relative mb-[60px]">
          <div className="coupon-div1"></div>
          <div className="w-full h-auto bg-[#f3f1ef] px-[30px] text-[#383733] py-[20px] font-(family-name:--font-inter-tight)">
            <div className="w-full flex  py-[5px]">
              <p className="text-[16px] font-normal w-[50%] ">Order number:</p>
              <p className="text-[16px] font-[600]">
                {Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}
              </p>
            </div>
            <div className="w-full flex  py-[5px]">
              <p className="text-[16px] w-[50%] font-normal">Date:</p>
              <p className="text-[16px] font-[600]">{FullDate}</p>
            </div>
            <div className="w-full flex  py-[5px]">
              <p className="text-[16px] w-[50%] font-normal">Total:</p>
              <p className="text-[16px] font-[600]">$ {Total} USD</p>
            </div>
            <div className="w-full flex py-[5px]">
              <p className="text-[16px] w-[50%] font-normal">Payment Method:</p>
              <p className="text-[16px] font-[600]">{paymenttype}</p>
            </div>
          </div>
          <div className="coupon-div2"></div>
        </main>
        <main className="w-[66%]">
          <p
            className={`text-[#383733] mb-[16px] text-[16px] font-(family-name:--font-inter-tight) w-full ${paymenttype === "Cash on Delivery" ? "block" : "hidden"
              }`}
          >
            Pay with cash upon delivery.
          </p>
          <h5 className="mb-[50px] text-[#111] text-[52px] max-xl:text-[32px] font-(family-name:--font-fraunces) font-light">
            Order details
          </h5>
          <div>
            <div className="w-full flex">
              <p className="w-[50%]  bg-[#f3f1ef] text-left border-r-1 border-[#e9e6e3] px-[20px] py-[15px] font-normal">
                Product
              </p>
              <p className="w-[50%]  bg-[#f3f1ef] text-left border-l-1 border-[#e9e6e3] px-[20px] py-[15px] font-normal">
                Total
              </p>
            </div>

            <div className="border-b-1 border-dashed border-black relative  w-full">
              {orderProduct.map((item) => (
                <div
                  key={item.id}
                  className="w-[100%] flex border-b border-[#f3f1ef]"
                >
                  <p className="w-1/2 px-[20px] py-[15px]">
                    {item.options === "Select options"
                      ? `${item.name} - ${item.color} × ${item.quantity}`
                      : `${item.name} × ${item.quantity}`}
                  </p>
                  <p className="w-1/2 px-[20px] py-[15px]">
                    $
                    {item.Dprice === ""
                      ? (item.quantity * item.Oprice).toFixed(2)
                      : (item.quantity * item.Dprice).toFixed(2)}
                  </p>
                </div>
              ))}
              <p className="w-[20px] py-[5px] h-[24px] bg-[#fff] absolute -bottom-[12px] left-0 flex items-center justify-center">
                <RiScissorsCutLine className="text-[16px] text-[#111]" />
              </p>
            </div>
            <div>
              <div className="w-[100%] flex  border-b border-[#f3f1ef] text-[#383733]">
                <p className="w-1/2 px-[20px] py-[15px]">Subtotal:</p>
                <p className="w-1/2 px-[20px] py-[15px]">
                  ${coupon === "" ? amount : Total}
                </p>
              </div>
              <div className="w-[100%] flex  border-b border-[#f3f1ef] text-[#383733]">
                <p className="w-1/2 px-[20px] py-[15px]">Shipping:</p>
                <p className="w-1/2 px-[20px] py-[15px]">Free shipping</p>
              </div>
              <div className="w-[100%] flex  border-b border-[#f3f1ef] text-[#383733]">
                <p className="w-1/2 px-[20px] py-[15px]">Total:</p>
                <p className="w-1/2 px-[20px] py-[15px]">
                  ${coupon === "" ? amount : Total} USD
                </p>
              </div>
              <div className="w-[100%] flex   text-[#383733] font-semibold">
                <p className="w-1/2 px-[20px] py-[15px] ">Payment method:</p>
                <p className="w-1/2 px-[20px] py-[15px]">{paymenttype}</p>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-[24px] pt-[50px]">
            <div className="w-1/2 bg-[#f3f1ef]">
              <h5 className="px-[25px] py-[20px] border-b border-[#fff] text-[20px] font-(family-name:--font-fraunces) font-light text-[#111]">
                Billing address
              </h5>
              <div className="px-[25px] py-[20px] text-[16px] text-[#383733]">
                <p>
                  {userAddress.first_name} {userAddress.last_name}
                </p>
                <p>{userAddress.street}</p>
                <p>{userAddress.apartment}</p>
                <p>
                  {userAddress.city} - {userAddress.pin_code}
                </p>
                <p className="pb-[15px]">
                  {stateName} , {countryName}
                </p>
                <p>{userAddress.phone}</p>
                <p>{userAddress.email}</p>
              </div>
            </div>
            <div
              className={`w-1/2 bg-[#f3f1ef] ${Object.keys(shipped).length === 0 ? "block" : "hidden"
                }`}
            >
              <h5 className="px-[25px] py-[20px] border-b border-[#fff] text-[20px] font-(family-name:--font-fraunces) font-light text-[#111]">
                Shipping address
              </h5>
              <div className="px-[25px] py-[20px] text-[16px] text-[#383733]">
                <p>
                  {userAddress.first_name} {userAddress.last_name}
                </p>
                <p>{userAddress.street}</p>
                <p>{userAddress.apartment}</p>
                <p>
                  {userAddress.city} - {userAddress.pin_code}
                </p>
                <p className="pb-[15px]">
                  {stateName} , {countryName}
                </p>
              </div>
            </div>
            <div
              className={`w-1/2 bg-[#f3f1ef] ${Object.keys(shipped).length === 0 ? "hidden" : "block"
                }`}
            >
              <h5 className="px-[25px] py-[20px] border-b border-[#fff] text-[20px] font-(family-name:--font-fraunces) font-light text-[#111]">
                Shipping address
              </h5>
              <div className="px-[25px] py-[20px] text-[16px] text-[#383733]">
                <p>
                  {shipped.first_name} {shipped.last_name}
                </p>
                <p>{shipped.street}</p>
                <p>{shipped.apartment}</p>
                <p>
                  {shipped.city} - {shipped.pin_code}
                </p>
                <p className="pb-[15px]">
                  {stateName} , {countryName}
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default OrderDetails;
