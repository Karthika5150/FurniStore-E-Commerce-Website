"use client";
import React, { useState, useEffect } from "react";
import { BrandsData, ProductsData } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSearch } from "@/app/context/context";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useParams } from "next/navigation";
import Enlarge from "../../../../public/assets/explore_products/enlarge.svg";
import FSC from "../../../../public/assets/explore_products/fsc.svg";
import CE from "../../../../public/assets/explore_products/ce.svg";
import Ukca from "../../../../public/assets/explore_products/ukca.svg";

const Products = () => {
  const params = useParams();
  const {
    handleCartDetails,
    handleAddDetails,
    handleRemoveDetails,
    product,
    setProduct,
    handleEnlarge,
    colors,
    handleClear,
    setColor,
  } = useSearch();
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(0);
  const [optionImg, setOptionImg] = useState(null);
  const [optionColor, setOptionColor] = useState(null);
  const [productName, setProductName] = useState("");

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
  }, [productName, params.product, setProduct]);

  const handleHide = (id) => {
    setShowId(id);
    if (showId === 1) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    let findColorProduct = [];
    if (colors != null || colors != "") {
      findColorProduct = product.map((item) =>
        item.optionColorImg.length === 0
          ? null
          : item.optionColorImg.find((items) => items.color === colors)
      );
    }
    if (
      findColorProduct.length >= 1 &&
      findColorProduct != undefined &&
      colors != undefined
    ) {
      const findImg = findColorProduct.find((item) => item);
      if (findImg != undefined) {
        setOptionImg(findImg.img);
        if (findImg.color === colors) {
          setOptionColor(findImg.color);
        }
      }
    }
  }, [colors, optionColor, optionImg, product]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading/trailing hyphens
  };

  return (
    <>
      <section className="flex justify-between w-full">
        {product?.length === 0 ? (
          <p className="text-[24px] text-[#383733] font-medium">
            Product Not found
          </p>
        ) : (
          <main className="w-full">
            {product?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-[64px] items-stretch max-xl:flex-col"
              >
                <div
                  className={`w-[49%] h-auto max-xl:w-full max-xl:h-auto grid grid-cols-2 gap-[20px] `}
                >
                  {item.productDeImg.map((items, index) => (
                    <div
                      key={index}
                      className={`relative group ${index === 0 || index === 3 || index === 6
                        ? "col-span-2"
                        : "col-span-1"
                        }  ${index === 3
                          ? "h-[600px]"
                          : index === 0
                            ? "h-[750px]"
                            : "h-auto"
                        }`}
                    >
                      <Image
                        src={((index === 0 && colors ? optionImg : items) || null)}
                        alt="img"
                        className={`w-full h-full object-cover`}
                      />

                      <p
                        className={` bg-[#fff] border py-[2px] rounded-[5px] mb-0 px-[7.8px] text-[12px] w-auto absolute top-5 right-5 ${item.discount === "" ? "hidden" : "block"
                          }  ${index === 0 ? "block" : "hidden"} ${item.discount === "OUT OF STOCK"
                            ? "text-[#111] border-[#111]"
                            : "text-[#fc6b00] border-[#fc6b00]"
                          }`}
                      >
                        {item.discount}
                      </p>
                      <div
                        onClick={handleEnlarge}
                        className={`w-[30px] h-[30px] absolute top-4 left-4 hidden cursor-pointer group-hover:block px-[2px] py-[7px] hover:bg-[#e6e4e2]`}
                      >
                        <Image
                          src={Enlarge}
                          alt="enlarge"
                          className="w-full h-full object-full cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-[49%] max-xl:w-full max-xl:h-auto flex flex-col h-full  gap-[20px] sticky top-36 pb-[20px] z-90 overflow-y-auto no-scrollbar">
                  {BrandsData.map(
                    (items) =>
                      items.brand === item.brand && (
                        <Link
                          href={`/product_category/${generateSlug(item.brand)}`}
                          key={items.id}
                          className="w-auto h-[16px]"
                        >
                          <Image
                            alt="brand"
                            src={items.img}
                            className="w-auto h-[16px] object-cover"
                          />
                        </Link>
                      )
                  )}
                  <h5 className="text-[24px] text-[#111] font-(family-name:--font-inter-tight) font-medium">
                    {item.name}
                  </h5>

                  <div
                    className={`flex gap-[5px] ${item.review.length === 0 ? "hidden" : "block"
                      }`}
                  >
                    <div className="flex gap-[5px] items-center">
                      <span
                        className={`w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-[#ffba00]`}
                      ></span>
                      <span
                        className={`w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-[#ffba00]`}
                      ></span>
                      <span
                        className={`w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-[#ffba00]`}
                      ></span>
                      <span
                        className={`w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-[#ffba00]`}
                      ></span>
                      <span
                        className={`w-[15px] h-[15px] rounded-[50%]  cursor-pointer border border-[#ccc9c1] bg-[#ffba00]`}
                      ></span>
                    </div>
                    <a
                      href="#review"
                      className="text-[16px] hover:text-[#cf5600] text-[#383733] hover:decoration-[#cf5600] underline-offset-1"
                    >
                      {item.review.length} Customer reviews
                    </a>
                  </div>

                  <p className="text-[16px] text-[#383733]">{item.content}</p>
                  <p className="text-[16px] font-medium text-[#111] mb-[16px]">
                    $ {item.Dprice === "" ? item.Oprice : item.Dprice}
                  </p>
                  <div
                    className={`${item.options === "" || item.options === "Read more"
                      ? "hidden"
                      : "block"
                      }`}
                  >
                    <p className="text-[16px] text-[#646330] mb-[5px]">Color</p>

                    <div className="flex gap-[20px] items-center">
                      <select
                        id="color"
                        name="color"
                        onClick={handleColor}
                        className="py-[6px] text-[#383733] pl-[12px] cursor-pointer pr-[36px] bg-[#fff] border border-[#ccc9c1] outline-none appearance-none"
                      >
                        <option value={colors === null ? "" : ""}>
                          Choose an option&nbsp;&nbsp; &#11206;
                        </option>
                        {item.optionColorImg.length === 0
                          ? null
                          : item.optionColorImg.map((colors, index) => (
                            <option
                              value={colors.color}
                              key={index}
                              className="text-[#383733] cursor-pointer"
                            >
                              {colors.color}
                            </option>
                          ))}
                      </select>
                      <div
                        onClick={handleClear}
                        className={`${colors ? "block" : "hidden"
                          } px-[8.32px] h-[28px] flex items-center py-[4.8px] bg-[#f3f1ef] cursor-pointer text-[13px] text-[#383733]`}
                      >
                        {" "}
                        x Clear
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex gap-[20px] ${item.options === "Read more" ? "hidden" : "block"
                      }`}
                  >
                    <div className="p-[5px] items-center flex justify-between w-[150px] bg-[#fff] border border-[#ccc9c1]">
                      <div
                        className="p-[5px] cursor-pointer   flex items-center hover:bg-[#111] text-[18px] text-[#ccc9c1] hover:text-[#fff]"
                        onClick={() => {
                          handleRemoveDetails(item.id, item.quantity - 1, item);
                        }}
                      >
                        <FiMinus />
                      </div>
                      &nbsp;
                      {item.quantity}
                      &nbsp;
                      <div
                        className="p-[5px] cursor-pointer flex items-center  text-[18px] text-[#ccc9c1] hover:bg-[#111] hover:text-[#fff]"
                        onClick={() => {
                          handleAddDetails(item.id, item.quantity + 1, item);
                        }}
                      >
                        <FiPlus />
                      </div>
                    </div>
                    <div
                      onClick={() => handleCartDetails(item, colors, optionImg)}
                      className={`px-[12px] w-full py-[8px]  text-[#fff] flex items-center justify-center ${colors === null && item.options === "Select options"
                        ? "cursor-not-allowed bg-[#999] "
                        : "cursor-pointer bg-[#111]"
                        }`}
                    >
                      Add to cart
                    </div>
                  </div>
                  <p
                    className={` mb-[16px] ${item.options === "Read more" ? "block" : "hidden"
                      }`}
                  >
                    Out of stock
                  </p>
                  <p className="text-[#383733] text-[16px] pb-[20px] flex gap-[10px] items-center">
                    <MdOutlineLocalShipping className="text-[20px] text-[#383733]" />{" "}
                    Handcrafted upon purchase. Estimated delivery in 6-8 weeks.
                  </p>
                  <div>
                    <div className="border-t border-[#ccc9c1]">
                      <div
                        className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                        onClick={() => {
                          handleHide(1);
                        }}
                      >
                        <p className="text-[18px] text-[#111]  font-normal font-(family-name:--font-inter-tight)">
                          Description
                        </p>
                        <p className="flex items-center justify-center">
                          {show === true && 1 === showId ? (
                            <FiMinus className="text-[22px] text-[#383733]" />
                          ) : (
                            <FiPlus className="text-[22px] text-[#383733]" />
                          )}
                        </p>
                      </div>
                      <p
                        className={`text-[16px] text-[#383733] pb-[10px] font-normal font-(family-name:--font-inter-tight) ${(show === true) & (1 === showId) ? "block" : "hidden"
                          }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="border-t border-[#ccc9c1]">
                      <div
                        className="flex justify-between py-[10px] cursor-pointer transition-all linear duration-800 "
                        onClick={() => {
                          handleHide(2);
                        }}
                      >
                        <p className="text-[18px] text-[#111]   font-normal font-(family-name:--font-inter-tight)">
                          Additional Information
                        </p>
                        <p className="flex items-center justify-center">
                          {show === true && 2 === showId ? (
                            <FiMinus className="text-[22px] text-[#111]" />
                          ) : (
                            <FiPlus className="text-[22px] text-[#111]" />
                          )}
                        </p>
                      </div>
                      <div
                        className={`w-full text-[#383733] text-[16px] [&:nth-child(odd)]:bg-[#f3f1ef66] ${showId === 2 ? "block" : "hidden"
                          }`}
                      >
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px]  w-[30%] font-medium text-left py-[5px] ${item.weight === "" ? "hidden" : "block"
                              }`}
                          >
                            Weight
                          </div>
                          <div
                            className={`px-[10px] py-[5px] w-[70%] text-left ${item.weight === "" ? "hidden" : "block"
                              }`}
                          >
                            {item.weight}
                          </div>
                        </div>
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px] py-[5px] w-[30%] font-medium text-left`}
                          >
                            Dimensions
                          </div>
                          <div
                            className={`px-[10px] py-[5px] w-[70%]  text-left`}
                          >
                            {item.dimensions}
                          </div>
                        </div>
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px] py-[5px]  w-[200px] font-medium text-left ${item.materials === "" ? "hidden" : "block"
                              }`}
                          >
                            Materials
                          </div>
                          <div
                            className={`px-[10px] py-[5px] ${item.materials === "" ? "hidden" : "block"
                              }`}
                          >
                            {item.materials}
                          </div>
                        </div>
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px] py-[5px]   w-[200px] font-medium text-left ${item.frame === "" ? "hidden" : "block"
                              }`}
                          >
                            Frame
                          </div>
                          <div
                            className={`px-[10px] py-[5px] ${item.frame === "" ? "hidden" : "block"
                              }`}
                          >
                            {item.frame}
                          </div>
                        </div>
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px] py-[5px]   w-[200px] font-medium text-left ${item.designer === "" ? "hidden" : "block"
                              }`}
                          >
                            Designer
                          </div>
                          <div
                            className={`px-[10px] py-[5px] ${item.designer === "" ? "hidden" : "block"
                              }`}
                          >
                            {item.designer}
                          </div>
                        </div>
                        <div className="w-[100%] flex">
                          <div
                            className={`px-[10px] py-[5px] w-[200px] font-medium text-left ${item.color === "" ? "hidden" : "block"
                              }`}
                          >
                            Color
                          </div>
                          <div
                            className={`px-[10px] py-[5px] ${item.color === "" ? "hidden" : "block"
                              }`}
                          >
                            {item.color}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between gap-[24px]">
                    <div className="flex gap-[24px]">
                      <div className="w-[31px] ">
                        <Image
                          src={FSC}
                          alt="fsc-logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[14px] text-[#383733]">
                        Sustainably sourced wood materials.
                      </p>
                    </div>
                    <div
                      className={`flex gap-[24px] ${item.parent === "Lighting" ? "visible" : "invisible"
                        }`}
                    >
                      <div className="w-[31px] ">
                        <Image
                          src={CE}
                          alt="ce-logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[14px] text-[#383733]">
                        Meets European Union protection standards.
                      </p>
                    </div>
                    <div
                      className={`flex gap-[24px] ${item.parent === "Lighting" ? "visible" : "invisible"
                        }`}
                    >
                      <div className="w-[31px] ">
                        <Image
                          src={Ukca}
                          alt="ukca-logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[14px] text-[#383733]">
                        Approved for sale on the United Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
        )}
      </section>
    </>
  );
};

export default Products;
