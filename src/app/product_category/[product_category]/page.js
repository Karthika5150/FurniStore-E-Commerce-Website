"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BrandsData, ColorData, ProductsData } from "../../data/data";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import Buzzer from "../../../../public/assets/buzzer.png";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import HashLoader from "react-spinners/HashLoader";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSearch } from "../../context/context";
import Link from "next/link";

const Find_Product = () => {
  const params = useParams();
  const [parentName, setParentName] = useState("");
  const [data, setData] = useState([]);

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
  const { handleCart, handleWish, wish } = useSearch();


  useEffect(() => {
    if (params.product_category === "living-room") {
      setParentName("Living Room");
      if (parentName === "Living Room") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "chair" &&
            item.type === "table" &&
            item.type === "Sideboard" &&
            item.type === "sofa"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "bed-room") {
      setParentName("Bed Room");
      if (parentName === "Bed Room") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "bed" &&
            item.type === "nightstands" &&
            item.type === "wardrobe"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "dining-room") {
      setParentName("Dining Room");
      if (parentName === "Dining Room") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "benches" &&
            item.type === "dining chair"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "home-decor") {
      setParentName("Home Decor");
      if (parentName === "Home Decor") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "rugs" &&
            item.type === "mirror"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "lighting") {
      setParentName("Lighting");
      if (parentName === "Lighting") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "walllamp" &&
            item.type === "floorlamp" &&
            item.type === "tablelamp"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "outdoor") {
      setParentName("Out Door");
      if (parentName === "Out Door") {
        const Sub_Product = ProductsData.filter(
          (item) =>
            item.parent === parentName &&
            item.type === "chair" &&
            item.type === "table" &&
            item.type === "lounge"
        );
        setData(Sub_Product);
      }
    } else if (params.product_category === "arm-chairs") {
      setParentName("Chair");
    } else if (params.product_category === "coffee-table") {
      setParentName("Table");
    } else if (params.product_category === "side-boards") {
      setParentName("SideBoard");
    } else if (params.product_category === "sofa") {
      setParentName("Sofa");
    } else if (params.product_category === "benches") {
      setParentName("Benches");
    } else if (params.product_category === "dining-chair") {
      setParentName("Dining Chair");
    } else if (params.product_category === "bed") {
      setParentName("Bed");
    } else if (params.product_category === "night-stand") {
      setParentName("Nightstand");
    } else if (params.product_category === "wardrobe") {
      setParentName("Wardrobe");
    } else if (params.product_category === "mirror") {
      setParentName("Mirror");
    } else if (params.product_category === "rugs") {
      setParentName("Rugs");
    } else if (params.product_category === "wall-lamps") {
      setParentName("WallLamp");
    } else if (params.product_category === "floor-lamps") {
      setParentName("FloorLamp");
    } else if (params.product_category === "table-lamps") {
      setParentName("Tablelamp");
    } else if (params.product_category === "ceilling") {
      setParentName("Ceilling");
    } else if (params.product_category === "accessories") {
      setParentName("Accessories");
    } else if (params.product_category === "chairs") {
      setParentName("Chair");
    } else if (params.product_category === "lounge") {
      setParentName("Lounge");
    } else if (params.product_category === "tables") {
      setParentName("Table");
    } else if (params.product_category === "justin") {
      setParentName("JustIn");

      if (parentName === "JustIn") {
        const find = ProductsData.filter(
          (item) =>
            item.discount === "OUT OF STOCK" &&
            item.discount === "AVAILABLE ON BACKORDER"
        );

        setData(find);
      }
    } else if (params.product_category === "roda") {
      setParentName("Roda");
    } else if (params.product_category === "unopiu") {
      setParentName("Unopiu");
    } else if (params.product_category === "hay") {
      setParentName("Hay");
    } else if (params.product_category === "moltenic") {
      setParentName("Molteni&c");
    } else if (params.product_category === "zeitraum") {
      setParentName("Zeitraum");
    } else if (params.product_category === "gervasoni") {
      setParentName("Gervasoni");
    } else if (params.product_category === "audo") {
      setParentName("Audo");
    } else if (params.product_category === "tradition") {
      setParentName("Tradition");
    } else if (params.product_category === "lema") {
      setParentName("Lema");
    } else if (params.product_category === "atmosphera") {
      setParentName("Atmosphera");
    } else if (params.product_category === "joyf") {
      setParentName("Joyf");
    } else if (params.product_category === "ethimo") {
      setParentName("Ethimo");
    } else if (params.product_category === "grado") {
      setParentName("Grado");
    } else if (params.product_category === "laredoute") {
      setParentName("Laredoute");
    } else if (params.product_category === "form refine") {
      setParentName("Form refine");
    } else if (params.product_category === "elitis") {
      setParentName("Elitis");
    } else if (params.product_category === "ambientec") {
      setParentName("Ambientec");
    } else if (params.product_category === "amura") {
      setParentName("Amura");
    }

    const find = ProductsData.filter(
      (item) =>
        item.parent === parentName ||
        item.type === parentName.toLowerCase() ||
        item.brand === parentName.toLowerCase()
    );

    setData(find);
  }, [parentName, params,data]);


  // pagination fun

  const startIndex = page * rowpage;
  const endIndex = startIndex - rowpage;
  let displayData = data.slice(endIndex, startIndex);
  const startCheck = 1 * pageCheck;
  const endCheck = startCheck - pageCheck;
  let displayCheck = ColorData.slice(endCheck, startCheck);

  const handlecheckFilter = (e, no) => {
    setPageCheck(no);
    displayCheck = ColorData.slice(endCheck, startCheck);
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
  }, [selected,data]);

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
  }, [sortActive, sort,data]);
  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px] gap-[48px] max-[769px]:gap-[25px]  flex-col   flex  border-t border-[#ccc9c1] ">
        <main>
          <h1 className=" text-[52px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light leading-8 ">
            {parentName}
          </h1>
          <div
            className={`flex w-full max-[769px]:flex-col justify-between mt-[25px] ${
              data.length > 0 ? "block" : "hidden"
            }`}
          >
            <p className="text-[#383733] text-[16px] font-(family-name:--font-inter-tight)">
              showing 1 - {data.length} of {data.length} results
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
                  className="w-full h-auto mb-0"
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
                      href={`/product_details/${item.id}`}
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
          <div
            role="alert"
            className="mt-3 relative flex w-full py-[25px] pr-[30px] font-normal font-(family-name:--font-inter-tight) pl-[60px] text-[16px] text-[#383733] bg-[#e1eff3] rounded-[5px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#0e6099"
              className="h-5 w-5 mr-2 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            No products were found matching your selection.
          </div>
        )}

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
                          <option value="chair">
                            &nbsp;&nbsp;&nbsp;Chairs
                          </option>
                          <option value="benches">
                            &nbsp;&nbsp;&nbsp;Benches
                          </option>
                          <option value="lounge">
                            &nbsp;&nbsp;&nbsp;Lounge
                          </option>
                          <option value="table">
                            &nbsp;&nbsp;&nbsp;Tables
                          </option>
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
                          <div
                            className="flex items-center mt-[8px]"
                            key={bg.id}
                          >
                            <input
                              id={bg.id}
                              onChange={() =>
                                handleChangeCheck(bg.Color, bg.id)
                              }
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
      </section>
    </>
  );
};

export default Find_Product;
