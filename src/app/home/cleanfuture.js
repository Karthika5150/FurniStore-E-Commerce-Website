import React from "react";
import Image from "next/image";
import img1 from "../../../public/assets/img2.png";
import img2 from "../../../public/assets/img1.png";

const CleanFuture = () => {
  return (
    <>
      <main className="max-[769px]:p-[15px] min-[769px]:px-[25px] lg:px-[45px] xl:px-[64px] 2xl:px-[153px] py-[64px] border-b border-[#ccc9c1] max-[768px]:flex-col  flex justify-between w-full bg-[#e9e6e3]">
        <div className="max-[768px]:w-full w-[48.3%] flex flex-col justify-between">
          <div className=" max-[767px]:h-[300px] h-[750px] min-[767px]:h-auto w-full">
            <Image src={img2} alt="img" className="object-cover w-full " />
          </div>
          <div className="flex flex-col gap-[25px]">
            <h1 className="sec-title max-md:leading-8 mt-[15px]">
              The Art of Furniture Making
            </h1>
            <div>
              {" "}
              <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight) mb-[16px]">
                Every Furnistør piece begins with a simple belief: exceptional
                furniture requires exceptional care. Our artisans spend years
                perfecting their craft, ensuring that each table, chair, and
                cabinet meets the exacting standards that have defined
                Scandinavian design for generations.
              </p>
              <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight)">
                The result? Furniture that improves with age, grows more
                beautiful with time, and becomes an integral part of your home’s
                story.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="max-[768px]:w-full w-[48.3%] flex flex-col gap-[50px] max-[767px]:mt-[15px] max-[767px]:flex-col-reverse">
          <div className="flex flex-col gap-[25px]">
            <h1 className="sec-title max-md:leading-8">
              Made with Care for a Cleaner Future
            </h1>
            <div>
              <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight) mb-[16px]">
                At Furnistør, we prioritize eco-friendly materials and ethical
                production practices in every aspect of our business. Our
                unwavering commitment to sustainability ensures that every piece
                of furniture we create is not only beautiful and stylish but
                also made with a sense of responsibility towards the
                environment.
              </p>
              <p className="text-[16px] text-[#383733] font-(family-name:--font-inter-tight)">
                We believe that our choices impact the planet, and we strive to
                make a positive difference through our high-quality designs. By
                selecting sustainable resources and promoting fair trade, we aim
                to deliver products that our customers can feel proud to own.
              </p>
            </div>
          </div>
          <div className="">
            <Image src={img1} alt="img" className="object-cover w-full " />
          </div>
        </div>
      </main>
    </>
  );
};

export default CleanFuture;
