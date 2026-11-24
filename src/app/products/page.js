"use client";
import React, { useState, useEffect } from "react";
import { BrandsData, ColorData, roomData, ProductsData } from "../data/data";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import Buzzer from "../../../public/assets/buzzer.png";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import HashLoader from "react-spinners/HashLoader";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSearch } from "../context/context";
import Link from "next/link";

const Products = () => {
  const [imgId, setImgId] = useState(null);
  const [columnId, setColumnId] = useState(5);
  const [pageCheck, setPageCheck] = useState(10);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(() => {
    if (typeof window != "undefined") {
      const savedPage = localStorage.getItem("Pagination");
      return savedPage ? JSON.parse(savedPage) : 1;
    }
  });
  const [rowpage, setRowPage] = useState(15);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkId, setCheckId] = useState();
  const [selected, setSelected] = useState("");
  const [filtered, setFilterd] = useState("Inactive");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [sortActive, setSortActive] = useState(false);
  const { handleCart, handleWish, wish, data, setData } = useSearch();

  // pagination fun

  const startIndex = page * rowpage;
  const endIndex = startIndex - rowpage;
  let displayData = data.slice(endIndex, startIndex);
  const startCheck = 1 * pageCheck;
  const endCheck = startCheck - pageCheck;
  let displayCheck = ColorData.slice(endCheck, startCheck);

  const handleChangePage = (e, newPage) => {
    localStorage.setItem("Pagination", JSON.stringify(newPage));
    setPage(newPage);
  };

  const handlecheckFilter = (e, no) => {
    setPageCheck(no);
    displayCheck = ColorData.slice(endCheck, startCheck);
  };

  const handleChangeNext = (newPage, type) => {
    if (type === "previous") {
      if (newPage === 3) {
        setPage(2);
      }
      if (newPage === 2) {
        setPage(1);
      }
    } else {
      if (newPage === 1) {
        setPage(2);
      }
      if (newPage === 2) {
        setPage(3);
      }
    }
  };

  const hanldeMouseEnter = (id) => {
    setImgId(id);
  };

  const hanldeMouseLeave = () => {
    setImgId(null);
  };

  const handleChangeColumn = (id) => {

    if (id === 1) {
      setColumnId(1);
    } else if (id === 3) {
      setColumnId(3);
    } else {
      setColumnId(5);
    }
  };

  const handleChangeCheck = (color, id) => {
    const findProduct = data.filter((item) => item.color === color);
    setData(findProduct);
    setChecked(!checked);
    setCheckId(id);
    setOpen(false);
    setFilterd("active");
  };

  const handlecheckReset = () => {
    setChecked(false);
    setData(ProductsData);
    setOpen(false);
    setFilterd("Inactive");
  };

  const handleBrand = (brand) => {
    const findProduct = ProductsData.filter((item) => item.brand === brand);
    setData(findProduct);
    setFilterd("active");
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setFilterd("active");
  };

  useEffect(() => {
    let findProduct = [];
    if (
      (findProduct = ProductsData.filter(
        (item) => item.parent === selected || item.type === selected
      )) &&
      selected
    ) {
      setData(findProduct);
    }
  }, [selected,data,setData]);

  const handleSearchEdit = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilterd("active");
  };

  const handleSearch = (e) => {
    setFilterd("active");
    const filterSearch = ProductsData.filter(
      (item) =>
        item.parent.toLocaleLowerCase().includes(search) ||
        item.type.toLocaleLowerCase().includes(search) ||
        item.name.toLocaleLowerCase().includes(search)
    );

    setData(filterSearch);
    setSearch("");
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    if (sort === "low") {
      const lowProducts = [...data].sort((a, b) => {
        const effectivePriceA = a.Dprice !== "" ? a.Dprice : a.Oprice;

        const effectivePriceB = b.Dprice !== "" ? b.Dprice : b.Oprice;

        return (
          Math.floor(effectivePriceA.replace(/[,]/g, "")) -
          Math.floor(effectivePriceB.replace(/[,]/g, ""))
        );
      });

      setData(lowProducts);
      setSortActive(false);
    }
    if (sort === "high") {
      const lowProducts = [...data].sort((a, b) => {
        const effectivePriceA = a.Dprice !== "" ? a.Dprice : a.Oprice;

        const effectivePriceB = b.Dprice !== "" ? b.Dprice : b.Oprice;

        return (
          Math.floor(effectivePriceB.replace(/[,]/g, "")) -
          Math.floor(effectivePriceA.replace(/[,]/g, ""))
        );
      });

      setData(lowProducts);
      setSortActive(false);
    }
    if (sort === "latest") {
      alert("1");
      const finds = data.filter((item) => item.sort === sort);
      setData(finds);
      setSortActive(true);
    }
    if (sort === "average") {
      const finds = data.filter((item) => item.sort === sort);
      setData(finds);
      setSortActive(true);
    }
    if (sort === "popular") {
      const finds = data.filter((item) => item.sort === sort);
      setData(finds);
      setSortActive(true);
    }
  }, [sortActive, sort,data,setData]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  return (
    <main className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col   flex  border-t border-[#ccc9c1] ">
      <main>
        <div className="mt-[30px] max-[767px]:mt-[10px] grid max-[767px]:grid-cols-2 max-[767px]:space-y-[20px] min-[767px]:grid-cols-3 lg:grid-cols-6 min-[767px]:space-y-[20px] xl:gap-[48px]">
          {roomData.map((item) => (
            <Link
              href={`product_category/${generateSlug(item.content)}`}
              key={item.id}
              className="w-full  max-[767px]:h-auto cursor-pointer relative overflow-hidden bg-cover bg-no-repeat"
            >
              <Image
                src={item.img}
                alt="img"
                priority={true}
                style={{
                  display: loading === false ? "hidden" : "block",
                }}
                onLoad={(e) => {
                  setLoading(false);
                }}
                className={`transition duration-300 ease-in-out hover:scale-105 brightness-70 hover:brightness-90`}
              />
              <HashLoader
                style={{ display: loading === true ? "block" : "none" }}
              />
              <h5
                className={`absolute top-5 max-[767px]:top-2 px-[24px] max-[767px]:text-[18px] max-[767px]:px-[10px]  text-[24px] text-[#fff] font-(family-name:--font-inter-tight) font-normal`}
              >
                {item.content}
              </h5>
            </Link>
          ))}
        </div>
      </main>

      <main>
        <h1 className=" text-[72px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light leading-8 ">
          Products
        </h1>
        <div className="flex w-full max-[769px]:flex-col justify-between mt-[25px]">
          <p className="text-[#383733] text-[16px] font-(family-name:--font-inter-tight)">
            showing 1-15 of {data.length} results
          </p>
          <div className="flex gap-[24px]">
            <div
              onClick={() => setOpen(true)}
              className="text-[#383733] text-[16px] w-[150px] cursor-pointer gap-[10px] group hover:bg-[#ccc9c1] px-[12px] py-[6px] font-(family-name:--font-inter-tight) flex items-center justify-evenly"
            >
              <p className="group-hover:text-[#cf5600] relative flex size-1 items-center">
                {open === true ? "Hide " : "Filters"}

                <span
                  className={`${
                    filtered === "active"
                      ? `absolute inline-flex h-[10px] w-[10px] animate-ping rounded-full bg-sky-400 opacity-75`
                      : "hidden"
                  }`}
                ></span>
                <span
                  className={`${
                    filtered === "active"
                      ? "relative inline-flex w-[10px] h-[10px] rounded-full bg-sky-500"
                      : "hidden"
                  }`}
                ></span>
              </p>
              <HiOutlineAdjustmentsHorizontal className="text-[20px] group-hover:text-[#cf5600] text-[#383733] ml-[10px]" />
            </div>
            <div className="flex gap-[15px] max-[1440px]:hidden items-center">
              <p
                title="column 1"
                onClick={() => {
                  handleChangeColumn(1);
                }}
                className={`cursor-pointer ${
                  columnId === 1 ? "bg-[#fff] p-0.5" : "p-0.5 bg-none"
                }`}
              >
                <FaListUl className="text-[24px] text-[#111] cursor-pointer" />
              </p>
              <p
                title="column 3"
                onClick={() => {
                  handleChangeColumn(3);
                }}
                className={`cursor-pointer ${
                  columnId === 3 ? "bg-[#fff] p-0.5" : "p-0.5 bg-none"
                }`}
              >
                <CgMenuGridR className="text-[24px] text-[#111] cursor-pointer" />
              </p>
              <div
                title="column 5"
                className={`w-[24px] h-[23px] cursor-pointer ${
                  columnId === 5 ? "bg-[#fff] p-0.5" : "p-0.5 bg-none"
                }`}
                onClick={() => {
                  handleChangeColumn(5);
                }}
              >
                <Image
                  src={Buzzer}
                  alt="icon"
                  className="w-full h-full object-fit "
                />
              </div>
            </div>
            <p className="flex items-center">
              <select
                id="sort"
                className="bg-[#fff] px-[12px] py-[6px] border border-[#ccc9c1] text-[#373833] font-(family-name:--font-inter-tight) cursor-pointer outline-none text-[14px] font-normal"
                onChange={handleSort}
              >
                <option
                  value=""
                  className="font-(family-name:--font-inter-tight)"
                >
                  Default Sorting
                </option>
                <option
                  value="popular"
                  className="font-(family-name:--font-inter-tight)"
                >
                  Sort by Popularity
                </option>
                <option
                  value="average"
                  className="font-(family-name:--font-inter-tight)"
                >
                  Sort by Average Rating
                </option>
                <option
                  value="latest"
                  className="font-(family-name:--font-inter-tight)"
                >
                  Sort by Latest
                </option>
                <option
                  value="low"
                  className="font-(family-name:--font-inter-tight)"
                >
                  Sort by : Price Low to High
                </option>
                <option
                  value="high"
                  className="font-(family-name:--font-inter-tight)"
                >
                  Sort by : Price High to Low
                </option>
              </select>
            </p>
          </div>
        </div>
      </main>

      {/* products */}

      {data.length != 0 ? (
        <>
          <section
            className={`${
              columnId === 1
                ? "xl:grid-cols-1"
                : columnId === 3
                ? "xl:grid-cols-3"
                : "xl:grid-cols-5"
            } max-[767px]:grid-cols-2 max-[767px]:gap-[20px] min-[767px]:grid-cols-3  lg:grid-cols-3  min-[767px]:space-y-[40px] max-[767px]:space-y-[20px] min-[767px]:gap-[20px] xl:gap-[48px] space-y-[48px]  grid`}
          >
            {displayData.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto mb-0 duration-300 transition-all ease-in-out"
                onMouseEnter={() => hanldeMouseEnter(item.id)}
                onMouseLeave={hanldeMouseLeave}
              >
                <div
                  className={`bg-[#fff] relative  ${
                    columnId === 1
                      ? "xl:grid-cols-1"
                      : columnId === 3
                      ? "xl:grid-cols-3 h-[500px]"
                      : "xl:grid-cols-5 h-[316px]"
                  } w-full  max-[365px]:h-[150px] max-[424px]:h-[180px] max-[1440px]:h-[250px] cursor-pointer`}
                >
                  <Image
                    src={imgId === item.id ? item.img2 : item.img1}
                    alt="product-img"
                    priority={true}
                    style={{
                      display: loading === false ? "hidden" : "block",
                    }}
                    onLoad={(e) => {
                      setLoading(false);
                    }}
                    className=" object-cover w-full h-full"
                  />

                  <HashLoader
                    style={{ display: loading === true ? "block" : "none" }}
                  />
                  <button
                    className={`border py-[4.2px] px-[7.8px] absolute left-5 rounded-[3px] top-5 text-[12px] ${
                      item.discount === "OUT OF STOCK" ||
                      item.discount === "AVAILABLE ON BACKORDER"
                        ? "text-[#111] border-[#111] bg-[#fff]"
                        : "text-[#fc6b00] border-[#fc6b00] bg-[#fff]"
                    } ${item.discount === "" ? "hidden" : "block"}`}
                  >
                    {item.discount}
                  </button>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <Link
                    href={`/product_details/${generateSlug(item.name)}`}
                    className="max-[767px]:line-clamp-1 text-[16px] font-(family-name:--font-inter-tight) font-medium cursor-pointer hover:text-[#cf5600]"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => handleWish(item)}
                    className={`cursor-pointer ${
                      imgId != null && imgId === item.id ? "block" : "hidden"
                    }`}
                  >
                    {wish.some((ids) => ids.id === item.id) ? (
                      <IoMdHeart className="cursor-pointer" />
                    ) : (
                      <IoMdHeartEmpty className="cursor-pointer" />
                    )}
                  </button>
                </div>
                <div className="text-[14px] pt-[5px] font-(family-name:--font-inter-tight) text-[#383733]">
                  {imgId != null && imgId === item.id ? (
                    <p
                      className="flex items-center cursor-pointer text-[14px] hover:text-[#cf5600]"
                      onClick={() =>
                        handleCart(item, item.quantity + 1, item.options)
                      }
                    >
                      <FiPlus />{" "}
                      {item.options === ""
                        ? "Add to Cart"
                        : item.options === "Select options"
                        ? "Select options"
                        : "Read more"}
                    </p>
                  ) : item.Dprice !== "" ? (
                    <>
                      ${item.Dprice}{" "}
                      <del className="text-[14px]  ml-[5px] font-(family-name:--font-inter-tight) text-[#646360]">
                        ${item.Oprice}
                      </del>
                    </>
                  ) : (
                    <>${item.Oprice}</>
                  )}
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <p className="text-[18px] text-[#111] font-(family-name:--font-inter-tight) w-full text-center">
          No Products Found
        </p>
      )}

      {/* pagination */}

      <div
        className={`w-full flex justify-between ${
          data.length != 0 ? "block" : "hidden"
        }`}
      >
        <div
          className={`flex gap-[10px] group cursor-pointer hover:bg-[#ccc9c1]  px-[12px] py-[6px] items-center text-[#383733] text-[16px] font-(family-name:--font-inter-tight) ${
            page === 2 ? "block" : "invisible"
          } ${
            filtered === "active" || sortActive === true ? "invisible" : "block"
          }`}
          onClick={() => handleChangeNext(page, "previous")}
        >
          <FaArrowLeft className="text-[#383733] text-[18px] group-hover:text-[#cf5600]" />
          <p className=" group-hover:text-[#cf5600] max-[769px]:hidden">
            {" "}
            Previous{" "}
          </p>
        </div>

        <div className="flex items-center">
          <div
            onClick={(e) => {
              handleChangePage(e, 1);
            }}
            className={`px-[12px] py-[6px] h-[33px] cursor-pointer font-normal ${
              page === 1
                ? " bg-[#111] text-[#fff]"
                : " hover:bg-[#ccc9c1] bg-transparent hover:text-[#cf5600]"
            }`}
          >
            1
          </div>
          <div
            onClick={(e) => {
              handleChangePage(e, 2);
            }}
            className={`px-[12px] ml-[10px] py-[6px] h-[33px] cursor-pointer font-normal ${
              filtered === "active" || sortActive === true
                ? "invisible"
                : "block"
            } ${
              page === 2
                ? " bg-[#111] text-[#fff]"
                : " hover:bg-[#ccc9c1] bg-transparent hover:text-[#cf5600]"
            }`}
          >
            2
          </div>
        </div>

        <div
          className={`flex gap-[10px] group cursor-pointer hover:bg-[#ccc9c1]  px-[12px] py-[6px] items-center text-[#383733] text-[16px] font-(family-name:--font-inter-tight) ${
            page === 1 ? "block" : "invisible"
          } ${
            filtered === "active" || sortActive === true ? "invisible" : "block"
          }`}
          onClick={() => handleChangeNext(page, "next")}
        >
          <p className=" group-hover:text-[#cf5600] max-[769px]:hidden">
            {" "}
            Next{" "}
          </p>
          <FaArrowRight className="text-[#383733] text-[18px] group-hover:text-[#cf5600]" />
        </div>
      </div>

      {/* drawers */}

      <Dialog open={open} onClose={setOpen} className="relative z-100">
        <DialogBackdrop
          transition
          className="fixed inset-0 backdrop-brightness-50 transition-opacity duration-500 ease-in-out data-closed:opacity-0 "
        />

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0  left-0 flex max-w-full ">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-[-100%] sm:duration-700"
              >
                <div className="relative overflow-auto flex h-full min-[451px]:!w-[450px] max-[450px]:!w-full flex-col overflow-y-auto bg-[#e9e6e3] no-scrollbar shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="flex justify-between w-full border-b border-[#ccc9c1] p-[20px] sticky top-0 z-101 bg-[#e9e6e3]">
                    <DialogTitle className="text-[#111] text-[22px] font-(family-name:--font-fraunces) font-light">
                      Filters
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="cursor-pointer"
                    >
                      <FaArrowLeft aria-hidden="true" className="size-5" />
                    </button>
                  </div>
                  <div className="relative flex-1">
                    <div className="border-b border-[#ccc9c1] p-[20px] ">
                      <h6
                        id="selected"
                        className="text-[#111] text-[22px] mb-[20px] font-(family-name:--font-fraunces) font-light"
                      >
                        Categories
                      </h6>
                      <select
                        onChange={handleSelect}
                        value={selected}
                        name="selected"
                        id="selected"
                        className="w-full bg-[#fff] no-scrollbar   outline-none border border-[#ccc9c1] cursor-pointer px-[12px] py-[7px] font-(family-name:--font-inter-tight)"
                      >
                        <option value="">Select Category</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="bed">&nbsp;&nbsp;&nbsp;Beds</option>
                        <option value="nightstand">
                          &nbsp;&nbsp;&nbsp;Night Stands
                        </option>
                        <option value="Wardrobe">
                          &nbsp;&nbsp;&nbsp;Wardrobes
                        </option>
                        <option value="Living Room">Living room</option>
                        <option value="chair">
                          &nbsp;&nbsp;&nbsp;Arm chairs
                        </option>
                        <option value="sideboard">
                          &nbsp;&nbsp;&nbsp;Side Boards
                        </option>
                        <option value="sofa">&nbsp;&nbsp;&nbsp;Sofas</option>
                        <option value="Home Decor">Home Decor</option>
                        <option value="mirror">
                          &nbsp;&nbsp;&nbsp;Mirrors
                        </option>
                        <option value="rug">&nbsp;&nbsp;&nbsp;Rugs</option>
                        <option value="Lighting">Lighting</option>
                        <option value="ceiling">
                          &nbsp;&nbsp;&nbsp;Ceiling
                        </option>
                        <option value="floorlamp">
                          &nbsp;&nbsp;&nbsp;Floor Lamps
                        </option>
                        <option value="tablelamp">
                          &nbsp;&nbsp;&nbsp;Table Lamps
                        </option>
                        <option value="walllamp">
                          &nbsp;&nbsp;&nbsp;Wall Lamps
                        </option>
                        <option value="Out Door">OutDoor</option>
                        <option value="accessories">
                          &nbsp;&nbsp;&nbsp;Accessories
                        </option>
                        <option value="chair">&nbsp;&nbsp;&nbsp;Chairs</option>
                        <option value="benches">
                          &nbsp;&nbsp;&nbsp;Benches
                        </option>
                        <option value="lounge">&nbsp;&nbsp;&nbsp;Lounge</option>
                        <option value="table">&nbsp;&nbsp;&nbsp;Tables</option>
                      </select>
                    </div>
                    <div className="border-b border-[#ccc9c1] p-[20px]">
                      <h6 className="text-[#111] text-[22px] mb-[20px] font-(family-name:--font-fraunces) font-light">
                        Brands
                      </h6>
                      <div className="w-full grid grid-cols-4 gap-[10px]">
                        {BrandsData.map((items) => (
                          <div
                            key={items.id}
                            className="w-full  bg-[#fff] p-[10px] cursor-pointer"
                            onClick={() => handleBrand(items.brand)}
                          >
                            <div className="h-[20px] w-full ">
                              <Image
                                src={items.img}
                                style={{ width: "100%", height: "100%" }}
                                alt="img"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-b border-[#ccc9c1] p-[20px] flex gap-[10px]">
                      <div className="w-[87%]">
                        <input
                          placeholder="Search Products..."
                          value={search}
                          name="search"
                          onChange={handleSearchEdit}
                          className="w-full p-[8px] border outline-none border-[#ccc9c1] bg-[#fff]  text-[#111] font-(family-name:--font-inter-tight) placeholder:text-[#111]"
                        />
                      </div>
                      <button
                        onClick={handleSearch}
                        className="bg-[#111] px-[12px] py-[5px] text-[#fff] cursor-pointer"
                      >
                        Search
                      </button>
                    </div>
                    <div className="border-b border-[#ccc9c1] p-[20px]">
                      <h6 className="text-[#111] text-[22px] mb-[20px] font-(family-name:--font-fraunces) font-light">
                        Color
                      </h6>
                      {displayCheck.map((bg) => (
                        <div className="flex items-center mt-[8px]" key={bg.id}>
                          <input
                            id={bg.id}
                            onChange={() => handleChangeCheck(bg.Color, bg.id)}
                            type="checkbox"
                            checked={
                              checked === true && checkId === bg.id
                                ? true
                                : false
                            }
                            value={bg.Color}
                            className="w-4 h-4 text-[#111] cursor-pointer accent-[#111] bg-[#fff] border-gray-300 rounded-sm "
                          />
                          <label
                            htmlFor={bg.id}
                            className="text-[16px] cursor-pointer ms-2 font-(family-name:--font-inter-tight) font-medium text-[#383733]"
                          >
                            {bg.Color}
                          </label>
                        </div>
                      ))}
                      <p
                        onClick={(e) => handlecheckFilter(e, 24)}
                        className={`cursor-pointer pt-[10px] underline text-[16px] font-(family-name:--font-inter-tight) ${
                          pageCheck === 24 ? "hidden" : "block"
                        }`}
                      >
                        Show 14 more
                      </p>
                      <p
                        onClick={(e) => handlecheckFilter(e, 10)}
                        className={`cursor-pointer pt-[10px] underline text-[16px] font-(family-name:--font-inter-tight) ${
                          pageCheck === 10 ? "hidden" : "block"
                        }`}
                      >
                        Show Less
                      </p>
                      <p
                        onClick={handlecheckReset}
                        className={`cursor-pointer pt-[10px] underline text-[14px] font-(family-name:--font-inter-tight) flex justify-end`}
                      >
                        Reset
                      </p>
                    </div>
                    <div className="border-b border-[#ccc9c1] p-[20px]">
                      <h6 className="text-[#111] text-[22px] mb-[20px] font-(family-name:--font-fraunces) font-light">
                        Filter by price
                      </h6>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default Products;
