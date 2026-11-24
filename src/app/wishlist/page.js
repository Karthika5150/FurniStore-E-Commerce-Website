"use client";
import React from "react";
import { useSearch } from "../context/context";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Wishlist = () => {
  const { wish, productId, handleRemoveWish, handleCartWish } = useSearch();

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") 
      .replace(/\s+/g, "-") 
      .replace(/-+/g, "-")
      .trim();
  };

  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col flex justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        {/* alert design */}

        {productId && (
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
            Product successfully removed.
          </div>
        )}

        <div className="flex gap-[20px] items-center">
          <h1
            className={`text-[52px] max-[767px]:text-[32px] group  text-[#111111] font-(family-name:--font-fraunces) font-light leading-8 `}
          >
            Wishlist
          </h1>
        </div>

        <main className="w-[100%]">
          <table className="border-separate w-full">
            <thead className="w-full h-[54px]">
              <tr>
                <th className="px-[15px] w-[3%] py-[20px] bg-[#f4f4f4]"></th>
                <th className="px-[15px] w-[6%] py-[20px] bg-[#f4f4f4]"></th>
                <th className="px-[15px] w-[25%] py-[20px] bg-[#f4f4f4] text-[#383733] font-(family-name:--font-inter-tight) font-normal text-left">
                  Product name
                </th>
                <th className="px-[15px] w-[15%] py-[20px] bg-[#f4f4f4] text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                  Unit price
                </th>
                <th className="px-[15px] w-[20%] py-[20px] bg-[#f4f4f4] text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                  Stock status
                </th>
                <th className="px-[15px] w-[34%] py-[20px] bg-[#f4f4f4]"></th>
              </tr>
            </thead>

            <tbody>
              {wish?.length === 0 ? (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center text-[#383733] px-[2px] py-[20px]">
                    No products added to the wishlist
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                <>
                  {wish?.map((item) => (
                    <tr key={item.id}>
                      <td className="px-[15px] w-[3%] py-[20px]  text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                        <p
                          onClick={() => {
                            handleRemoveWish(item.id);
                          }}
                          className="text-[#111] cursor-pointer w-[30px] h-[30px] flex items-center justify-center hover:bg-[#f4f4f4] rounded-[50%]"
                        >
                          <IoClose />
                        </p>
                      </td>
                      <td className="px-[15px] w-[6%] py-[20px]  text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                        <div className="w-[80px]">
                          <Image
                            src={item.img1}
                            alt="img"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="px-[15px] w-[25%] py-[20px]  text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                        {item.name}
                      </td>
                      <td className="px-[15px] w-[15%] py-[20px]  text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                        $ {item.Oprice}
                      </td>
                      <td className="px-[15px] w-[20%] py-[20px]  text-[#383733] font-(family-name:--font-inter-tight) font-normal">
                        <div className="px-[12px] py-[6px] cursor-pointer w-[95px] flex items-center justify-center bg-[#dcf3e6] text-[#108642] text-[16px] ">
                          {" "}
                          {item.stock}
                        </div>
                      </td>
                      <td className="px-[15px] w-[34%] py-[20px]">
                        <div className="flex justify-end gap-[10px]">
                          <p
                            onClick={() =>
                              handleCartWish(item, item.quantity + 1)
                            }
                            className={`${
                              item.options === "Select options"
                                ? "hidden"
                                : "block"
                            } px-[12px] py-[6px] cursor-pointer w-[109px] flex items-center justify-center bg-[#fc6b00] text-[#e9e6e3] text-[16px] `}
                          >
                            Add to cart
                          </p>
                          <Link
                            href={`/product_details/${generateSlug(item.name)}`}
                            className={`px-[12px] py-[6px] cursor-pointer w-auto flex items-center justify-center bg-[#fc6b00] text-[#e9e6e3] text-[16px]  ${
                              item.options === "Select options"
                                ? "block"
                                : "hidden"
                            }`}
                          >
                            Select Options
                          </Link>
                          <p
                            onClick={() => {
                              handleRemoveWish(item.id);
                            }}
                            className="px-[12px] py-[6px] cursor-pointer w-[90px] flex items-center justify-center bg-[#fce1de] text-[#c92e1f] text-[16px] "
                          >
                            Remove
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </main>
      </section>
    </>
  );
};

export default Wishlist;
