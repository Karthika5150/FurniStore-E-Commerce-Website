"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearch } from "@/app/context/context";
import Products from "./product";
import Img1 from "../../../../public/assets/img9.png";
import Image from "next/image";
import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import HashLoader from "react-spinners/HashLoader";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Zoomin from "../../../../public/assets/explore_products/zoom-in.svg";
import Zoomout from "../../../../public/assets/explore_products/zoom-out.svg";
import FullScreen from "../../../../public/assets/explore_products/full-screen.svg";
import MiniScreen from "../../../../public/assets/explore_products/mini-screen.svg";
import Download from "../../../../public/assets/explore_products/download.svg";
import Play from "../../../../public/assets/explore_products/play.svg";
import Pause from "../../../../public/assets/explore_products/pause.svg";
import Thumnails from "../../../../public/assets/explore_products/thumbnail.svg";
import Close from "../../../../public/assets/explore_products/close.svg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "next/navigation";
import { ProductsData } from "@/app/data/data";
import { FiMinus, FiPlus } from "react-icons/fi";
import User from "../../../../public/assets/journal/user3.jpg";

const ProductDetails = () => {
  const params = useParams();
  const [zoomIn, setZoomIn] = useState(false);
  const [pause, setPause] = useState(false);
  const [esc, setEsc] = useState(false);
  const [previouseProduct, setPreviouseProduct] = useState([]);
  const [nextProduct, setNextProduct] = useState([]);
  const { showModal, product, handleHideEnlarge, setProduct, wish } =
    useSearch();
  const [ratingCount, setRatingCount] = useState(0);
  const [countRate, setCountRate] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);
  const [imgId, setImgId] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [form, setForm] = useState(() => {
    if (typeof window != "undefined") {
      const SavedProfile = localStorage.getItem("ReviewedUser");
      return SavedProfile ? JSON.parse(SavedProfile) : [];
    }
  });
  const DownloadRef = useRef(null);
  const FullScreenRef = useRef(null);

  useEffect(() => {
    if (params.product === "common-pendant-cord-set") {
      setProductName("Common Pendant Cord Set");
    } else if (params.product === "compact-wood-nightstand") {
      setProductName("Compact Wood Nightstand");
    } else if (params.product === "steel-garden-armchair") {
      setProductName("Steel Garden Armchair");
    } else if (params.product === "tact-mirror") {
      setProductName("Tact Mirror");
    } else if (params.product === "linen-rocking-armchair") {
      setProductName("Linen Rocking Armchair");
    } else if (params.product === "linterna-wall-lamp") {
      setProductName("Linterna Wall Lamp");
    } else if (params.product === "round-bedside-table") {
      setProductName("Round Bedside Table");
    } else if (params.product === "minimalist-sideboard") {
      setProductName("Minimalist Sideboard");
    } else if (params.product === "desert-lounge-chair") {
      setProductName("Desert Lounge Chair");
    } else if (params.product === "glass-display-sideboard") {
      setProductName("Glass Display Sideboard");
    } else if (params.product === "vosco-lamp") {
      setProductName("Vosco Lamp");
    } else if (params.product === "swivel-steel-bar-stool") {
      setProductName("Swivel Steel Bar Stool");
    } else if (params.product === "sliding-wood-wardrobe") {
      setProductName("Sliding Wood Wardrobe");
    } else if (params.product === "oak-bedside-table") {
      setProductName("Oak Bedside Table");
    } else if (params.product === "rey-dining-chair") {
      setProductName("Ray Dining Chair");
    } else if (params.product === "check-wool-lap-robe") {
      setProductName("Check Wool Lap Robe");
    } else if (params.product === "alumnium-louge-chair") {
      setProductName("Alumnium-louge-chair");
    } else if (params.product === "apollo-portable-lamp") {
      setProductName("Apollo Portable Lamp");
    } else if (params.product === "compact-club-chair") {
      setProductName("Compact Club Chiar");
    } else if (params.product === "cement-garden-vase") {
      setProductName("Cement Garden Vase");
    } else if (params.product === "brim-pendant-lamp") {
      setProductName("Brim Pendant Lamp");
    } else if (params.product === "double-febric bed") {
      setProductName("Double Febric Bed");
    } else if (params.product === "double-upholstered-bed") {
      setProductName("Double Upholstered Bed");
    } else if (params.product === "geometric-sideboard") {
      setProductName("Geometric Sideboard");
    } else if (params.product === "glass-coffee-table") {
      setProductName("Glass Coffee Table");
    } else if (params.product === "glass-wardrobe") {
      setProductName("Glass Wardrobe");
    } else if (params.product === "modular-2-seater-corner-sofa") {
      setProductName("Modular 2-Seater Corner Sofa");
    } else if (params.product === "modular-3-seater-corner-sofa") {
      setProductName("Modular 3-Seater Corner Sofa");
    } else if (params.product === "sticky-tape-rug") {
      setProductName("Sticky Tape Rug");
    } else if (params.product === "tilting-table-top-brass-mirror") {
      setProductName("Tilting Table-Top Brass Mirror");
    }

    const finds = ProductsData.filter((item) => item.name === productName);

    setProduct(finds);
  }, [productName, params.product,setProduct]);

  useEffect(() => {
    const FindData = ProductsData.find((items) => items.name === productName);
    if (FindData != undefined) {
      const FindPrevious = FindData.id - 1;
      const FindNext = FindData.id + 1;
      const previous = ProductsData.filter((item) => item.id === FindPrevious);
      const Next = ProductsData.filter((items) => items.id === FindNext);
      setNextProduct(Next);
      setPreviouseProduct(previous);
    }

    if (product.length != 0) {
      const find = product.find((item) => item);
      const Find_Product = ProductsData.filter(
        (items) => items.type === find.type
      );
      setRelatedProduct(Find_Product);
    }
  }, [product, productName,setProduct]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: pause === true ? false : true,
    autoplayspeed: 500,
  };

  const hanldeMouseEnter = (id) => {
    setImgId(id);
  };

  const hanldeMouseLeave = () => {
    setImgId(null);
  };

  const handleRatingEnter = (counts) => {
    setRatingCount(counts);
  };

  const handleRatingLeave = (counts) => {
    if (counts >= 1) {
      setRatingCount(0);
    }
  };

  const handleRating = (counts) => {
    setCountRate(counts);
  };

  const handlePause = () => {
    setPause(!pause);
  };

  const handleZoom = () => {
    setZoomIn(!zoomIn);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    const source = DownloadRef.current.href;
    const imageblob = await (await fetch(source)).blob();
    DownloadRef.current.href = URL.createObjectURL(imageblob);
    DownloadRef.current.download = "Product";
    DownloadRef.current.click();
  };

  // esc functionality

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      // 'chrome'
      if (FullScreenRef.current.webkitRequestFullscreen) {
        FullScreenRef.current.webkitRequestFullscreen();
      }
      // edge
      else if (FullScreenRef.current.msRequestFullscreen) {
        FullScreenRef.current.msRequestFullscreen();
      }
    } else {
      // 'chrome'
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      // edge
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleChangeFullScreen = (e) => {
      setEsc(Boolean(document.fullscreenElement));
    };

    document.addEventListener("webkitfullscreenchange", handleChangeFullScreen);
    document.addEventListener("msfullscreenchange", handleChangeFullScreen);

    return () => {
      document.removeEventListener(
        "msfullscreenchange",
        handleChangeFullScreen
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleChangeFullScreen
      );
    };
  }, []);

  // review validation

  const handleChangeReview = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validation = () => {
    const newError = {};
    if (!form.name) {
      newError.name = "Name is required";
    }
    if (!form.email) {
      newError.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email)) {
      newError.email = "Email is invalid";
    }
    if (!form.message) {
      newError.message = "Message is required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
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

    if (validation()) {
      if (isChecked === true && countRate) {
        localStorage.setItem("ReviewedUser", JSON.stringify(form));
      } else {
        setForm({ name: "", message: "", email: "" });
      }

      const addReview = product.map((item) => {
        return {
          ...item,
          review: [
            ...item.review,
            {
              ...form,
              rating: countRate,
              name: form.name,
              content: form.message,
              date: FullDate,
              img: User,
              id: new Date(),
            },
          ],
        };
      });
      setProduct(addReview);
    }
  };

  const handleReviewCheck = () => {
    setIsChecked(!isChecked);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  return (
    <section className="relative">
      <section className="bg-[#e9e6e3] xl:px-[64px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px] max-[769px]:pb-[15px] 2xl:px-[153px] pt-[140px] pb-[48px]  flex-col   flex justify-between border-t border-[#ccc9c1] items-center font-normal font-(family-name:--font-inter-tight)">
        <Products />

        <main className="w-full pb-[40px] flex flex-col gap-[64px] pt-[48px] max-[769px]:pt-[25px]">
          <div className="w-full flex gap-[64px] max-xl:gap-[20px] justify-between max-xl:flex-col">
            <div className="w-[64%] p-[64px] max-xl:p-[15px] bg-[#fff] flex flex-col justify-end gap-[20px] max-xl:w-full">
              <p className="text-[16px] text-[#383733]">Meet the Designer</p>
              <>
                <h3 className="text-[#111] max-xl:text-[32px] text-[52px] font-(family-name:--font-fraunces) font-light">
                  Maria Larsson
                </h3>

                <p className="text-[16px] text-[#383733]">
                  With fifteen years in furniture design, Maria blends
                  Scandinavian heritage with global influences, creating pieces
                  that speak to both the heart and the home. She believes the
                  best furniture design happens when form, function, and feeling
                  unite, a philosophy that has guided her journey from her
                  childhood in Copenhagen to studios across three continents.
                </p>
                <p className="text-[16px] text-[#383733]">
                  Maria’s design philosophy was shaped early by her
                  grandmother’s workshop in rural Denmark, where she learned
                  that every piece of wood has a story to tell. This reverence
                  for natural materials, combined with the clean lines and
                  purposeful simplicity of Scandinavian design, forms the
                  foundation of her aesthetic. Yet her work is far from
                  traditional.{" "}
                </p>
                <p className="text-[16px] text-[#383733]">
                  Years spent collaborating with artisans in Morocco, studying
                  Japanese joinery techniques, and exploring the vibrant markets
                  of Mexico City have infused her designs with unexpected
                  textures, bold accents, and innovative approaches to space and
                  light.
                </p>
              </>
            </div>
            <div className="w-[35%] max-xl:w-full">
              <Image
                src={Img1}
                alt="designer-img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="py-[30px]  w-full border-t border-b border-[#ccc9c1] flex justify-between">
            {previouseProduct.map((item) => (
              <Link
                key={item.id}
                href={`/product_details/${item.id}`}
                className="flex gap-[16px]  group"
              >
                <p className="flex items-center">
                  <SlArrowLeft className="text-[20px] group-hover:text-[#cf5600] cursor-pointer transition-all duration-400 group-hover:translate-x-[-5px]" />
                </p>
                <div className="w-[50px] h-[37px]">
                  <Image
                    src={item.img1}
                    alt="img"
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
                <div>
                  <p className="cursor-pointer text-[16px] text-[#111] group-hover:text-[#cf5600]">
                    {item.name}
                  </p>
                  <p className="text-[14px] text-[#383733]">
                    {item.Dprice === "" ? item.Oprice : item.Dprice}
                  </p>
                </div>
              </Link>
            ))}
            <Link href="/products" className="flex items-center">
              <CgMenuGridR className="text-[30px] text-[#111] hover:text-[#cf5600] hover:blur-[1px]" />
            </Link>
            {nextProduct.map((item) => (
              <Link
                key={item.id}
                href={`/product_details/${item.id}`}
                className="flex gap-[16px]  group"
              >
                <div className="w-[50px] h-[37px]">
                  <Image
                    src={item.img1}
                    alt="img"
                    className="w-full h-full object-contain cursor-pointer"
                  />
                </div>
                <div>
                  <p className="cursor-pointer text-[16px] text-[#111] group-hover:text-[#cf5600]">
                    {item.name}
                  </p>
                  <p className="text-[14px] text-[#383733]">
                    {item.Dprice === "" ? item.Oprice : item.Dprice}
                  </p>
                </div>
                <p className="flex items-center">
                  <SlArrowRight className="text-[20px] group-hover:text-[#cf5600] cursor-pointer transition-all duration-400 group-hover:translate-x-[5px]" />
                </p>
              </Link>
            ))}
          </div>
        </main>
        {product?.map((item) => (
          <main
            href="#review"
            className="flex w-full justify-between max-xl:flex-col"
            key={item.id}
          >
            <div className="w-[53%] max-xl:w-full">
              <h5 className="text-[20px] text-[#111] font-(family-name:--font-inter-tight) font-medium">
                {item.review.length === 0
                  ? "Reviews"
                  : `${item.review.length} reviews for ${item.name}`}
              </h5>

              {item.review.length === 0 ? (
                <p className="text-[16px] text-[#636460] pt-[40px]">
                  {" "}
                  There are no reviews yet.
                </p>
              ) : (
                <>
                  {item.review.map((items, index) => (
                    <div
                      key={index}
                      className="font-(family-name:--font-inter-tight) flex flex-col pt-[20px]"
                    >
                      <div className="flex w-full justify-between">
                        <div className="flex gap-[24px]">
                          <div className="w-[50px] h-[50px] ">
                            <Image
                              src={items.img}
                              alt="user-img"
                              className="w-full h-full rounded-[50%] object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] text-[#383733] ">
                              {items.name}
                            </p>
                            <p className="text-[16px] text-[#646360]">
                              {items.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[5px] items-center">
                          <span
                            className={`w-[15px] h-[15px] rounded-[50%] border ${items.rating >= 1
                                ? "bg-[#ffba00] border-[#ffba00]"
                                : "bg-transparent border-[#ccc9c1]"
                              }`}
                          ></span>
                          <span
                            className={`w-[15px] h-[15px] rounded-[50%] border ${items.rating >= 2
                                ? "bg-[#ffba00] border-[#ffba00]"
                                : "bg-transparent border-[#ccc9c1]"
                              }`}
                          ></span>
                          <span
                            className={`w-[15px] h-[15px] rounded-[50%] border ${items.rating >= 3
                                ? "bg-[#ffba00] border-[#ffba00]"
                                : "bg-transparent border-[#ccc9c1]"
                              }`}
                          ></span>
                          <span
                            className={`w-[15px] h-[15px] rounded-[50%] border ${items.rating >= 4
                                ? "bg-[#ffba00] border-[#ffba00]"
                                : "bg-transparent border-[#ccc9c1]"
                              }`}
                          ></span>
                          <span
                            className={`w-[15px] h-[15px] rounded-[50%] border ${items.rating <= 5 && items.rating === 5
                                ? "bg-[#ffba00] border-[#ffba00]"
                                : "bg-transparent border-[#ccc9c1]"
                              }`}
                          ></span>
                        </div>
                      </div>
                      <p className="p-[20px] bg-[#f3f1ef] text-[#383733] text-[16px] relative mt-[25px]">
                        {items.content}
                        <span className="absolute border-8 border-[#f3f1ef] top-[-5px] left-5 rotate-z-[50deg]"></span>
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="w-[43%] max-xl:w-full">
              <h5 className="mb-[20px] text-[20px] font-medium ">
                {item.review.length === 0
                  ? `Be the first to review “${item.name}”`
                  : "Add a review"}
              </h5>

              <form
                onSubmit={handleSubmitReview}
                className="flex flex-col gap-[36px] max-[769px]:gap-[15px]"
              >
                <p className="text-[16px] text-[#383733] ">
                  Your email address will not be published.Required fields are
                  marked *
                </p>
                <div className="w-full flex justify-between">
                  <p className="text-[16px] text-[#383733] ">
                    Your rating <span className="text-red-500">*</span>
                  </p>
                  {/* rating */}
                  <div className="flex gap-[5px] group items-center">
                    <span
                      onMouseEnter={() => {
                        handleRatingEnter(1);
                      }}
                      onMouseLeave={() => {
                        handleRatingLeave(1);
                      }}
                      onClick={() => handleRating(1)}
                      className={`w-[18px] h-[18px] cursor-pointer rounded-[50%] border ${ratingCount >= 1
                          ? "group-hover:bg-[#ffba00]  duration-200 transition-all border-[#ffba00]"
                          : "bg-transparent border-[#ccc9c1] "
                        } ${countRate >= 1
                          ? "[&:not(:hover)]:bg-[#ffba00] border-[#ffba00]"
                          : "bg-transparent"
                        }`}
                    ></span>
                    <span
                      onMouseEnter={() => {
                        handleRatingEnter(2);
                      }}
                      onMouseLeave={() => {
                        handleRatingLeave(2);
                      }}
                      onClick={() => handleRating(2)}
                      className={`w-[18px] h-[18px] cursor-pointer rounded-[50%] border
                      ${ratingCount >= 2
                          ? "group-hover:bg-[#ffba00] border-[#ffba00] duration-200 transition-all"
                          : "bg-transparent border-[#ccc9c1]"
                        } ${countRate >= 2
                          ? "[&:not(:hover)]:bg-[#ffba00] border-[#ffba00]"
                          : "bg-transparent"
                        }`}
                    ></span>
                    <span
                      onMouseEnter={() => {
                        handleRatingEnter(3);
                      }}
                      onMouseLeave={() => {
                        handleRatingLeave(3);
                      }}
                      onClick={() => handleRating(3)}
                      className={`w-[18px] h-[18px] cursor-pointer rounded-[50%] border ${ratingCount >= 3
                          ? "group-hover:bg-[#ffba00] duration-200 transition-all border-[#ffba00]"
                          : "bg-transparent border-[#ccc9c1] "
                        } ${countRate >= 3
                          ? "[&:not(:hover)]:bg-[#ffba00] border-[#ffba00]"
                          : "bg-transparent"
                        }`}
                    ></span>
                    <span
                      onMouseEnter={() => {
                        handleRatingEnter(4);
                      }}
                      onMouseLeave={() => {
                        handleRatingLeave(4);
                      }}
                      onClick={() => handleRating(4)}
                      className={`w-[18px] h-[18px] cursor-pointer rounded-[50%] border ${ratingCount >= 4
                          ? "group-hover:bg-[#ffba00] duration-200 transition-all border-[#ffba00]"
                          : "bg-transparent border-[#ccc9c1] "
                        } ${countRate >= 4
                          ? "[&:not(:hover)]:bg-[#ffba00] border-[#ffba00]"
                          : "bg-transparent"
                        }`}
                    ></span>
                    <span
                      onMouseEnter={() => {
                        handleRatingEnter(5);
                      }}
                      onMouseLeave={() => {
                        handleRatingLeave(5);
                      }}
                      onClick={() => handleRating(5)}
                      className={`w-[18px] h-[18px] cursor-pointer rounded-[50%] border ${ratingCount === 5
                          ? "group-hover:bg-[#ffba00]  duration-200 transition-all border-[#ffba00]"
                          : "bg-transparent border-[#ccc9c1] "
                        } ${countRate === 5
                          ? "[&:not(:hover)]:bg-[#ffba00] border-[#ffba00]"
                          : "bg-transparent"
                        }`}
                    ></span>
                  </div>
                </div>
                <div className="flex gap-[8px] flex-col">
                  <label className="text-[16px] text-[#383733]">
                    Your review <span className="text-red-500 ">*</span>
                  </label>
                  <textarea
                    onChange={handleChangeReview}
                    value={form.message}
                    name="message"
                    className="px-[12px] outline-none py-[6px] min-h-[170px] bg-[#fff] w-full border border-[#ccc9c1] hover:border-[#111]"
                  ></textarea>
                </div>
                <div className="flex w-full gap-[30px] max-xl:flex-col">
                  <div className="flex gap-[8px] flex-col w-[49%] max-xl:w-full">
                    <label className="text-[16px] text-[#383733]">
                      Name <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      onChange={handleChangeReview}
                      name="name"
                      value={form.name || ""}
                      className="px-[12px] py-[6px] outline-none bg-[#fff] w-full border border-[#ccc9c1] hover:border-[#111]"
                    />
                  </div>
                  <div className="flex gap-[8px] outline-none flex-col w-[49%] max-xl:w-full">
                    <label className="text-[16px] text-[#383733]">
                      Email <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="email"
                      onChange={handleChangeReview}
                      name="email"
                      value={form.email || ""}
                      className="px-[12px] py-[6px] outline-none bg-[#fff] w-full border border-[#ccc9c1] hover:border-[#111]"
                    />
                  </div>
                </div>
                <div className="w-full flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    onChange={handleReviewCheck}
                    value={isChecked}
                    className="w-[16px] h-[16px] accent-[#111] cursor-pointer"
                  />
                  <p className="text-[16px] text-[#383733]">
                    Save my name,email,and website in this browser for the next
                    time I comment.
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-[#fff] w-[72px] px-[12px] py-[6px]  text-[16px] bg-[#111] font-medium cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </main>
        ))}

        <main>
          <h6 className="text-[#111] font-medium text-[20px] font-(family-name:--font-inter-tight)">
            Related products
          </h6>

          <div className="w-full grid grid-cols-4 grid-rows-1 gap-[48px] mt-[30px]">
            {relatedProduct.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto mb-0 duration-300 transition-all ease-in-out"
                onMouseEnter={() => hanldeMouseEnter(item.id)}
                onMouseLeave={hanldeMouseLeave}
              >
                <div
                  className={`bg-[#fff] relative h-[316px] w-full  max-[365px]:h-[150px] max-[424px]:h-[180px] max-[1440px]:h-[250px] cursor-pointer`}
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
                    className={`border py-[4.2px] px-[7.8px] absolute left-5 rounded-[3px] top-5 text-[12px] ${item.discount === "OUT OF STOCK" ||
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
                    className={`cursor-pointer ${imgId != null && imgId === item.id ? "block" : "hidden"
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
          </div>
        </main>
      </section>

      {/* enlarge animation */}

      {showModal && (
        <section
          ref={FullScreenRef}
          className={` w-full group h-lvh p-[4px] bg-[#18181bfa]  overflow-hidden fixed top-0 z-1000 ${showModal === true ? "block" : "hidden"
            }`}
        >
          {product.map((item) => (
            <main
              key={item.id}
              className="w-full h-screen relative bg-[#fffffffa] opacity-[0.95]"
            >
              <Slider {...settings} className="w-full h-screen absolute top-0">
                {item.productDeImg.map((items, index) => (
                  <div
                    className={`w-full h-screen bg-[url(${items})] !flex`}
                    key={index}
                  >
                    <div className="w-[100%] flex justify-evenly relative top-0 group">
                      <p className="text-[#111] text-[17px] flex gap-[5px] group-hover:visible invisible absolute left-2 top-0">
                        1 <span>/</span> <span>{item.productDeImg.length}</span>
                      </p>
                      <div className="w-full h-[600px]">
                        <div className="slider-container">
                          <Slider {...settings}>
                            <div className="w-full h-screen">
                              <Image
                                src={items}
                                alt="img"
                                className={`w-full h-full object-contain ${zoomIn === true
                                    ? "scale-190  ease-in duration-500 transition-all "
                                    : "ease-in duration-500 transition-all scale-none"
                                  }`}
                              />
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="flex gap-[5px] bg-[#ffffffa6] group-hover:visible invisible w-auto absolute right-2 top-0">
                        <div
                          onClick={handleZoom}
                          className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center"
                        >
                          <Image
                            onClick={handleZoom}
                            src={zoomIn === true ? Zoomout : Zoomin}
                            alt="zoom"
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </div>
                        <div
                          onClick={handlePause}
                          className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center"
                        >
                          <Image
                            src={pause === true ? Play : Pause}
                            onClick={handlePause}
                            alt="zoom"
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </div>
                        <a
                          ref={DownloadRef}
                          download="download"
                          href={items}
                          onClick={handleDownload}
                          className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center"
                        >
                          <Image
                            src={Download}
                            alt="zoom"
                            onClick={handleDownload}
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </a>
                        <div
                          onClick={handleFullScreen}
                          className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center"
                        >
                          <Image
                            src={esc ? MiniScreen : FullScreen}
                            onClick={handleFullScreen}
                            alt="zoom"
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </div>
                        <div className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center">
                          <Image
                            src={Thumnails}
                            alt="zoom"
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </div>
                        <button
                          onClick={handleHideEnlarge}
                          className="cursor-pointer w-[40px] h-[40px] hover:bg-[#e9e8e6] flex items-center justify-center"
                        >
                          <Image
                            src={Close}
                            onClick={handleHideEnlarge}
                            alt="zoom"
                            className="w-[20px] h-[20px] object-cover cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </main>
          ))}
        </section>
      )}
    </section>
  );
};

export default ProductDetails;
