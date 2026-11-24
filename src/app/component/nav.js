"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { FiMenu } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useSearch } from "../context/context";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Img1 from '../../../public/assets/living/img1.jpg';
import Img2 from '../../../public/assets/outdoor/img1.jpg';
import Img3 from '../../../public/assets/cart.png';


const Headers = () => {
  let pathName = usePathname();
  const router = useRouter();
  const modalRef = useRef(null);
  const {
    handleMouseE,
    handleMouseL,
    show,
    openCart,
    setOpenCart,
    cartProducts,
    handleRemoveProduct,
    handleAdd,
    handleRemove,
    handleRouting,
    handleRouting1,
    showLogin,
    amount,
    cartLength,
  } = useSearch();
  const [shownav, setShowNav] = useState(false);
  const [productsDetails, setProductDetails] = useState(false);
  const [productChild, setProductChild] = useState(false);
  const [showId, setShowId] = useState(0);
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      ".show-nav",
      { y: 30, duration: 3, ease: "ease-in-out", yoyo: true },
      { y: 0, duration: 3, ease: "ease-in-out", yoyo: true }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".products",
      { y: 30, duration: 3, ease: "ease-in-out", yoyo: true },
      { y: -92, duration: 3, ease: "ease-in-out", yoyo: true }
    );
  }, []);

  const handleMenu = () => {
    setShowNav(!shownav);
  };

  const handleCloseMenu = () => {
    setShowNav(false);
  };

  const handleDowns = (item, id) => {
    if (item == "products") {
      if (id === 0) {
        setProductChild(true);
        setShowId(id);
      } else if (id === 1) {
        setProductChild(true);
        setShowId(id);
      } else if (id === 2) {
        setProductChild(true);
        setShowId(id);
      } else {
        setProductDetails(!productsDetails);
        setShowId(null);
      }
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

  const handleShowLogin = () => {
    router.push("/signin");
    setIsOpen(false);
  };

  return (
    <>
      <main className="fixed z-99 w-full top-0">
        <main className="relative w-full h-auto  ">
          {/* nav-1 */}
          <nav className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:p-[13px] min-[769px]:px-[25px] lg:px-[45px]  2xl:px-[153px]  py-[10px] max-[769px]:hidden flex justify-between border-b border-[#ccc9c1] items-center font-normal font-(family-name:--font-inter-tight)">
            <p className="text-[14px] text-[#383733]">
              Free shipping on order above 150&#8364;
            </p>
            <div className="flex gap-[24px] items-center">
              <div className="flex gap-[10px]">
                <Link
                  href="/customer_care/warranty"
                  className="text-[14px] text-[#111111]"
                >
                  Warranty
                </Link>
                <Link href="" className="text-[14px] text-[#111111]">
                  Shipping
                </Link>
                <Link href="/wishlist" className="text-[14px] text-[#111111]">
                  Wishlist
                </Link>
              </div>

              <Link href="/signin" className="text-[14px] text-[#383733]">
                Login
              </Link>

              <div className="flex">
                <input
                  placeholder="Search Site..."
                  className="text-[14px] text-[#111111] border-none w-[112px] outline-none"
                />
                <p className="flex items-center justify-center">
                  <IoIosSearch />
                </p>
              </div>
            </div>
          </nav>
          {/* nav-2 */}
          <div className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[13px] min-[769px]:px-[25px] lg:px-[45px] max-[769px]:py-[25px] 2xl:px-[153px]  py-[10px] flex justify-between border-b border-[#ccc9c1] items-center font-normal font-(family-name:--font-inter-tight)">
            <Link
              href="/"
              className=" text-[#111111] text-[20px] uppercase font-[500] cursor-pointer]"
            >
              Furnistør
            </Link>
            <div className="flex gap-[20px] max-[769px]:hidden">
              <Link
                href="/"
                onMouseLeave={handleMouseL}
                className={`text-[16px] font-normal  border-b transition-all ease-in-out duration-300 ${pathName === "/"
                  ? "text-[#cf5600] border-[#cf5600]"
                  : "text-[#111111] border-none"
                  }`}
              >
                Home
              </Link>
              <Link
                onMouseEnter={handleMouseE}
                onMouseLeave={handleMouseL}
                href="/products"
                className={`text-[16px] font-normal  border-b transition-all  ease-in-out duration-300 ${pathName === "/products"
                  ? "text-[#cf5600] border-[#cf5600]"
                  : "text-[#111111] border-none"
                  }`}
              >
                Products
              </Link>
              <Link
                href="/about"
                onMouseLeave={handleMouseL}
                className={`text-[16px] font-normal  border-b transition-all  ease-in-out duration-300 ${pathName === "/about"
                  ? "text-[#cf5600] border-[#cf5600]"
                  : "text-[#111111] border-none"
                  }`}
              >
                About
              </Link>
              <Link
                href="/journal"
                onMouseLeave={handleMouseL}
                className={`text-[16px] font-normal  border-b transition-all  ease-in-out duration-300 ${pathName === "/journal"
                  ? "text-[#cf5600] border-[#cf5600]"
                  : "text-[#111111] border-none"
                  }`}
              >
                Journal
              </Link>
              <Link
                href="/contact"
                onMouseLeave={handleMouseL}
                className={`text-[16px] font-normal  border-b transition-all  ease-in-out duration-300 ${pathName === "/contact"
                  ? "text-[#cf5600] border-[#cf5600]"
                  : "text-[#111111] border-none"
                  }`}
              >
                Contact
              </Link>
            </div>

            <div
              onClick={handleMenu}
              className={`max-[768px]:block min-[769px]:hidden mr-[25px]`}
            >
              {shownav === true ? (
                <IoClose
                  className={`text-[24px] text-[#111] cursor-pointer  `}
                />
              ) : (
                <FiMenu className="text-[24px] text-[#111] cursor-pointer" />
              )}
            </div>
            <div className="cursor-pointer relative">
              <p
                onClick={() => setOpenCart(true)}
                className="text-[16px] text-[#111111] hover:text-[#cf5600] flex gap-[10px]"
              >
                Cart
                <IoBagOutline className="font-normal text-[21px] hover:text-[#cf5600]" />
              </p>

              <p
                className={`absolute  bg-[#cf5600] text-[#fff] text-[10px] right-[-10px] top-[-8px] w-[17px] h-[17px] rounded-[50%] flex items-center justify-center ${cartProducts?.length === 0 ? "invisible" : "visible"
                  }`}
              >
                {cartLength}
              </p>
            </div>
          </div>

          {/* mobile products */}

          <nav className="show-nav">
            {shownav && (
              <div
                className={`bg-[#e9e6e3] w-fullpx-[20px] py-[30px] h-auto border-b border-[#ccc19c]  font-(family-name:--font-fraunces) ${shownav === true ? "block" : "hidden"
                  } max-[769px]:block min-[769px]:hidden`}
              >
                <div className="flex items-center px-[15px]">
                  <Link
                    href="/"
                    onClick={handleCloseMenu}
                    className={`text-[20px] font-normal   border-b transition-all ease-in-out duration-300 ${pathName === "/"
                      ? "text-[#cf5600] border-[#cf5600]"
                      : "text-[#111111] border-none"
                      }`}
                  >
                    Home
                  </Link>
                </div>
                <div className="flex items-center px-[15px]">
                  <Link
                    href="/products"
                    onClick={handleCloseMenu}
                    className={`text-[20px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products"
                      ? "text-[#cf5600] border-[#cf5600]"
                      : "text-[#111111] border-none"
                      }`}
                  >
                    Products
                  </Link>
                  <button
                    className="outline-hidden"
                    onClick={() => {
                      handleDowns("products", 6);
                    }}
                  >
                    {productsDetails === true ? (
                      <TiArrowSortedUp className="text-[#111] text-[18px]" />
                    ) : (
                      <TiArrowSortedDown className="text-[#111] text-[18px]" />
                    )}
                  </button>
                </div>

                {productsDetails && (
                  <div>
                    {/* beds */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/bedroom"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        Bed Room
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 0);
                        }}
                      >
                        {productChild === true && showId === 0 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 0 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/beds"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Beds
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/Floor Lamps"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Night Stands
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/wardobes"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Wardobes
                          </Link>
                        </p>
                      </div>
                    )}

                    {/* lighting */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/lighting"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        Lighting
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 1);
                        }}
                      >
                        {productChild === true && showId === 1 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 1 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/ceiling"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Ceiling
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/Floor Lamps"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Floor Lamps
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/tablelamps"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            TableLamps
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/walllamps"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            WallLamps
                          </Link>
                        </p>
                      </div>
                    )}

                    {/* Living Room */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/livingroom"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        Living Room
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 2);
                        }}
                      >
                        {productChild === true && showId === 2 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 2 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/armchairs"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Armchairs
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/coffetables"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Coffee Tables
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/Sideboards"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Sideboards
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/sofas"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Sofas
                          </Link>
                        </p>
                      </div>
                    )}

                    {/* homedecor */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/homedecor"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        Home Decor
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 3);
                        }}
                      >
                        {productChild === true && showId === 3 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 3 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/mirrors"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Mirrors
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/mugs"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Mugs
                          </Link>
                        </p>
                      </div>
                    )}

                    {/* homedecor */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/diningroom"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        Dining Room
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 4);
                        }}
                      >
                        {productChild === true && showId === 4 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 4 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/benches"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Benches
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/diningchairs"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Dining Chairs
                          </Link>
                        </p>
                      </div>
                    )}

                    {/* outdoor */}

                    <div className="flex items-center px-[25px]">
                      <Link
                        href=""
                        className={`text-[18px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/outdoor"
                          ? "text-[#cf5600] border-[#cf5600]"
                          : "text-[#111111] border-none"
                          }`}
                      >
                        OutDoor
                      </Link>
                      <button
                        className="outline-hidden"
                        onClick={() => {
                          handleDowns("products", 5);
                        }}
                      >
                        {productChild === true && showId === 5 ? (
                          <TiArrowSortedUp className="text-[#111] text-[18px]" />
                        ) : (
                          <TiArrowSortedDown className="text-[#111] text-[18px]" />
                        )}
                      </button>
                    </div>
                    {productChild && showId === 5 && (
                      <div className=" px-[35px]">
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/accessories"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Accessories
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/chairs"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Chairs
                          </Link>
                        </p>
                        <p>
                          {" "}
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/benches"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Benches
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/lounge"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Lounge
                          </Link>
                        </p>
                        <p>
                          <Link
                            href=""
                            className={`text-[16px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/products/tables"
                              ? "text-[#cf5600] border-[#cf5600]"
                              : "text-[#111111] border-none"
                              }`}
                          >
                            Tables
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex items-center px-[15px]">
                  <Link
                    onClick={handleCloseMenu}
                    href="/about"
                    className={`text-[20px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/about"
                      ? "text-[#cf5600] border-[#cf5600]"
                      : "text-[#111111] border-none"
                      }`}
                  >
                    About
                  </Link>
                </div>
                <div className="flex items-center px-[15px]">
                  <Link
                    href="/journal"
                    onClick={handleCloseMenu}
                    className={`text-[20px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/journal"
                      ? "text-[#cf5600] border-[#cf5600]"
                      : "text-[#111111] border-none"
                      }`}
                  >
                    Journal
                  </Link>
                </div>
                <div className="flex items-center px-[15px]">
                  <Link
                    href="/contact"
                    onClick={handleCloseMenu}
                    className={`text-[20px] font-normal   border-b transition-all  ease-in-out duration-300 ${pathName === "/contact"
                      ? "text-[#cf5600] border-[#cf5600]"
                      : "text-[#111111] border-none"
                      }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </nav>

          {/* products */}
          <nav className="products max-[769px]:hidden min-[769px]:block">
            {show && (
              <nav
                className={`bg-[#e9e6e3] z-10 absolute top-[92px] border-b border-[#ccc9c1] px-[153px] py-[30px] flex justify-between items-center w-full  ${show === true ? "block" : "hidden"
                  }`}
              >
                <div className="flex justify-between w-[70%]">
                  <div className="w-[25%] flex flex-col gap-[20px]">
                    <div>
                      <Link
                        className="nav-title"
                        href={`/product_category/${generateSlug(
                          "Living Room"
                        )}`}
                      >
                        Living Rooms
                      </Link>
                      <div className="flex flex-col my-[3px]">
                        <Link
                          href={`/product_category/${generateSlug(
                            "Arm chairs"
                          )}`}
                          className="footer-links"
                        >
                          Arm chairs
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug(
                            "Coffee Table"
                          )}`}
                          className="footer-links"
                        >
                          Coffee Table
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug(
                            "Side Boards"
                          )}`}
                          className="footer-links"
                        >
                          Side Boards
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug("Sofa")}`}
                          className="footer-links"
                        >
                          Sofas
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link
                        href={`/product_category/${generateSlug(
                          "Dining Room"
                        )}`}
                        className="nav-title"
                      >
                        Dining Room
                      </Link>
                      <div className="flex flex-col my-[3px]">
                        <Link
                          href={`/product_category/${generateSlug("Benches")}`}
                          className="footer-links"
                        >
                          Benches
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug(
                            "Dining Chair"
                          )}`}
                          className="footer-links"
                        >
                          Dining Chairs
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25%] flex flex-col gap-[20px]">
                    <div>
                      <Link
                        href={`/product_category/${generateSlug("Bed Room")}`}
                        className="nav-title"
                      >
                        Bed Room
                      </Link>
                      <div className="flex flex-col my-[3px]">
                        <Link
                          href={`/product_category/${generateSlug("Bed")}`}
                          className="footer-links"
                        >
                          Beds
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug(
                            "Night Stand"
                          )}`}
                          className="footer-links"
                        >
                          Night Stands
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug("Wardrobe")}`}
                          className="footer-links"
                        >
                          Wardrobes
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link
                        href={`/product_category/${generateSlug("Home Decor")}`}
                        className="nav-title"
                      >
                        Home Decor
                      </Link>
                      <div className="flex flex-col my-[3px]">
                        <Link
                          href={`/product_category/${generateSlug("mirror")}`}
                          className="footer-links"
                        >
                          Mirrors
                        </Link>
                        <Link
                          href={`/product_category/${generateSlug("rugs")}`}
                          className="footer-links"
                        >
                          Rugs
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25%]">
                    <Link
                      href={`/product_category/${generateSlug("Lighting")}`}
                      className="nav-title"
                    >
                      Lighting
                    </Link>
                    <div className="flex flex-col my-[3px]">
                      <Link
                        href={`/product_category/${generateSlug("ceilling")}`}
                        className="footer-links"
                      >
                        Ceilling
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug(
                          "Floor Lamps"
                        )}`}
                        className="footer-links"
                      >
                        Floor Lamps
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug(
                          "Table Lamps"
                        )}`}
                        className="footer-links"
                      >
                        Table Lamps
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug("Wall Lamps")}`}
                        className="footer-links"
                      >
                        Wall Lamps
                      </Link>
                    </div>
                  </div>
                  <div className="w-[25%]">
                    <Link
                      href={`/product_category/${generateSlug("Outdoor")}`}
                      className="nav-title"
                    >
                      OutDoor
                    </Link>
                    <div className="flex flex-col my-[3px]">
                      <Link
                        href={`/product_category/${generateSlug(
                          "accessories"
                        )}`}
                        className="footer-links"
                      >
                        Accessories
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug("chairs")}`}
                        className="footer-links"
                      >
                        Chairs
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug("benches")}`}
                        className="footer-links"
                      >
                        Benches
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug("lounge")}`}
                        className="footer-links"
                      >
                        Lounge
                      </Link>
                      <Link
                        href={`/product_category/${generateSlug("tables")}`}
                        className="footer-links"
                      >
                        Tables
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 w-[30%]">
                  <Link
                    href={`/product_category/${generateSlug("justin")}`}
                    className="w-full h-[320px] cursor-pointer relative overflow-hidden bg-cover bg-no-repeat"
                  >
                    <Image
                      src={Img1}
                      alt="img"
                      className="transition duration-300 ease-in-out hover:scale-105 brightness-70 hover:brightness-90"
                    />
                    <span className="absolute top-5 px-[24px]  text-[24px] text-[#fff] font-(family-name:--font-inter-tight) font-normal">
                      Just In
                    </span>
                  </Link>

                  <Link
                    href={`product_category/${generateSlug("Outlet")}`}
                    className="w-full h-[320px] cursor-pointer relative overflow-hidden bg-cover bg-no-repeat"
                  >
                    <Image
                      src={Img2}
                      alt="img"
                      className="transition duration-300 ease-in-out hover:scale-105 brightness-70 hover:brightness-90"
                    />
                    <span className="absolute top-5 px-[24px]  text-[24px] text-[#fff] font-(family-name:--font-inter-tight) font-normal">
                      Outlet
                    </span>
                  </Link>
                </div>
              </nav>
            )}
          </nav>
        </main>
      </main>

      {/* drawers */}

      <Dialog open={openCart} onClose={setOpenCart} className="relative z-100">
        <DialogBackdrop
          transition
          className="fixed inset-0 backdrop-brightness-50 transition-opacity duration-500 ease-in-out data-closed:opacity-0 "
        />

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0  right-0 flex max-w-full ">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-[100%] sm:duration-700"
              >
                <div className="relative overflow-auto flex h-full w-full md:w-[450px] flex-col overflow-y-auto bg-[#e9e6e3] no-scrollbar shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="flex justify-between p-[20px] border-b border-[#ccc9c1]">
                    <h6
                      className={`text-[22px] font-(family-name:--font-fraunces) font-light ${cartProducts?.length != 0 ? "visible" : "invisible"
                        }`}
                    >
                      Your Cart ({cartLength} item)
                    </h6>

                    <button
                      type="button"
                      onClick={() => setOpenCart(false)}
                      className="cursor-pointer"
                    >
                      <FaArrowRight aria-hidden="true" className="size-5" />
                    </button>
                  </div>

                  {cartProducts?.length === 0 ? (
                    <div className="w-full h-[100%] flex  flex-col items-center justify-center font-(family-name:--font-inter-tight)">
                      <div className="w-[64px] h-[64px] mb-[20px]">
                        <Image
                          src={Img3}
                          alt="cart"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <p className="text-[#111] text-[16px]">
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
                      <div className="p-[20px] border-b border-[#fff] no-scrollbar overflow-y-scroll h-[650px] flex flex-col gap-[30px]">
                        {cartProducts?.map((itemk) => (
                          <div
                            key={itemk.id}
                            className="flex justify-between group w-full font-(family-name:--font-inter-tight) "
                          >
                            <div className="flex gap-[15px]">
                              <div className="w-[82px] h-[82px] relative">
                                <Image
                                  src={itemk.img1}
                                  alt="product"
                                  className="w-full h-full object-cover"
                                />

                                <div
                                  onClick={() => handleRemoveProduct(itemk.id)}
                                  className="absolute group-hover:visible invisible top-[-10px] cursor-pointer transition-all duration-300 ease-in hover:scale-120  bg-[#111] w-[20px] h-[20px] rounded-[50%] flex items-center justify-center"
                                >
                                  <IoClose className="text-[#fff] text-[16px]" />
                                </div>
                              </div>

                              <div className="max-md:w-[70%]">
                                <Link
                                  href={`/product_details/${generateSlug(
                                    itemk.name
                                  )}`}
                                  className="text-[16px] text-[#111] font-medium"
                                >
                                  {itemk.options === "Select options"
                                    ? `${itemk.name} - ${itemk.color}`
                                    : itemk.name}
                                </Link>
                                <p className="text-[#383733] text-[14px] pb-[5px]">
                                  $
                                  {itemk.Dprice === ""
                                    ? itemk.Oprice
                                    : itemk.Dprice}
                                </p>
                                <div className="p-[5px] flex justify-between w-[80px] bg-[#fff] border border-[#ccc9c1]">
                                  <div
                                    className="px-[3px] cursor-pointer flex items-center hover:bg-[#111] text-[14px] text-[#ccc9c1] hover:text-[#fff]"
                                    onClick={() => {
                                      handleRemove(
                                        itemk.id,
                                        itemk.quantity - 1,
                                        itemk
                                      );
                                    }}
                                  >
                                    <FiMinus />
                                  </div>
                                  &nbsp;
                                  {itemk.quantity}
                                  &nbsp;
                                  <div
                                    className="px-[3px]  cursor-pointer flex items-center  text-[14px] text-[#ccc9c1] hover:bg-[#111] hover:text-[#fff]"
                                    onClick={() => {
                                      handleAdd(
                                        itemk.id,
                                        itemk.quantity + 1,
                                        itemk
                                      );
                                    }}
                                  >
                                    <FiPlus />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-[14px] text-[#383733]">
                              $
                              {itemk.Dprice === ""
                                ? (itemk.quantity * itemk.Oprice).toFixed(2)
                                : (itemk.quantity * itemk.Dprice).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="p-[20px] border-b border-[#fff] font-(family-name:--font-inter-tight)">
                        <div className="w-full rounded-full h-1.5 bg-[#ccc9c1]">
                          <p
                            className={`rounded-full h-1.5 bg-[#fc6b00] progress  ${amount >= 150
                              ? "w-full"
                              : amount <= 50
                                ? "w-[50px]"
                                : amount <= 75
                                  ? "w-[75px]"
                                  : amount <= 100
                                    ? "w-[200px]"
                                    : amount <= 150
                                      ? "w-[320px]"
                                      : "w-full"
                              }`}
                          ></p>
                        </div>
                        <p className="text-[#383733] text-[16px] pt-[10px]">
                          Free shipping applied at chechout!
                        </p>
                      </div>
                      <div className="p-[20px] font-(family-name:--font-inter-tight) flex flex-col gap-[20px]">
                        <div>
                          <div className="flex justify-between ">
                            <p className="text-[16px] text-[#111]">Subtotal</p>
                            <p className="text-[16px] text-[#111]">${amount}</p>
                          </div>
                          <p className="text-[#383733] text-[14px]">
                            Shipping,taxes,and discounts calculated at checkout.
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <button
                            onClick={handleRouting}
                            className="text-[16px] cursor-pointer w-[47%] font-normal flex justify-center items-center text-[#111] bg-transparent border border-[#111] px-[12px] py-[6px]"
                          >
                            View cart
                          </button>
                          <button
                            onClick={handleRouting1}
                            href="/view-cart/checkout"
                            className="text-[16px] w-[47%] font-normal flex justify-center items-center text-[#fff] bg-[#111] border border-[#111] px-[12px] py-[6px]"
                          >
                            checkout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      {/* modal */}

      {isOpen && showLogin && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            direction: "row",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: "100",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          className={`${showLogin === true ? "block" : "hidden"}`}
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setIsOpen(false);
          }}
        >
          <div className="bg-[#e9e6e3] w-[30%] p-[30px]" ref={modalRef}>
            <h1 className="text-[24px] text-[#111] font-light font-(family-name:--font-fraunces)">
              Signin or Create Account!!!
            </h1>
            <div className="mt-[30px] flex w-full justify-between font-(family-name:--font-inter-tight)">
              <button
                onClick={handleShowLogin}
                className="px-[12px] py-[6px] cursor-pointer text-[#fff] bg-[#111] font-medium text-[16px]"
              >
                Signin
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-[12px] py-[6px] cursor-pointer text-[#fff] bg-[#ed0a0a] font-medium text-[16px]"
              >
                {" "}
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Headers;
