import Image from "next/image";
import React from "react";
import Link from "next/link";
import Img1 from "../../../../public/assets/journal/img10.jpg";
import Img2 from "../../../../public/assets/journal/img11.jpg";

const Component4 = ({ props }) => {
  let data = props;
  // generate modify url for slug

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
      <section>
        {data.map((item) => (
          <main key={item.id}>
            <div className="flex justify-center w-auto lg:h-lvh max-[425px]:h-[300px] min-[426px]:h-[400px]">
              <Image
                src={item.img}
                alt="img"
                className="w-auto h-full object-cover"
              />
            </div>

            <div className="w-full flex justify-center flex-col items-center 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] xl:pt-[30px]">
              <div className="flex flex-col gap-[20px]">
                <h1 className="2xl:text-[62px] min-[767px]:text-[42px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light max-[768px]:leading-8 leading-18 mt-[15px] text-left">
                  {item.title}
                </h1>
                <div className="flex justify-start w-full">
                  <button className="font-(family-name:--font-inter-tight) border h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]">
                    {item.date}
                  </button>
                  <Link
                    href={`/category/${generateSlug(item.type)}`}
                    className="font-(family-name:--font-inter-tight) border ml-[15px] h-[33px] border-[#ccc9c1] text-[14px] text-[#343733] w-auto rounded-[50em] px-[10px] py-[5px]"
                  >
                    {item.type}
                  </Link>
                </div>
                <p className="journal-content">{item.content}</p>
              </div>

              <div className="flex flex-col gap-[20px] lg:pt-[20px]">
                <h6 className="journal-title">Design that stays useful</h6>

                <p className="journal-content">
                  When a product is well-made and well-designed, it doesn’t need
                  to shout. It doesn’t go out of style. It quietly adapts —
                  across rooms, seasons, and even generations. This is the
                  difference between decoration and function.
                </p>

                <p className="journal-content">
                  Our goal is not to fill your home. It’s to offer pieces that
                  earn their place. A chair you keep moving from room to room. A
                  lamp that makes every corner feel complete. A cabinet that
                  works just as well in the entryway as it does in the bedroom.
                </p>

                <p className="journal-content">
                  We make furniture that works with you — not just for the day
                  you buy it, but for years after. Every item in our{" "}
                  <span className="text-[#fc6b00] hover:text-[#cf5600]">
                    collection
                  </span>
                  is designed with this long view in mind. That’s why we avoid
                  unnecessary detailing and favor strong materials, joinery, and
                  proportion.
                </p>
              </div>

              <div className="flex flex-col gap-[20px] lg:pt-[20px]">
                <h6 className="journal-title">Choosing better over more</h6>

                <p className="journal-content">
                  Quality isn’t just about durability. It’s also about clarity.
                  A product should feel resolved. Nothing extra. Nothing
                  uncertain. That’s why we edit ruthlessly in the design phase —
                  not to simplify style, but to remove confusion.
                </p>

                <p className="journal-content">
                  We make furniture that works with you — not just for the day
                  you buy it, but for years after. Every item in our{" "}
                  <span className="text-[#fc6b00] hover:text-[#cf5600]">
                    collection
                  </span>{" "}
                  is designed with this long view in mind. That’s why we avoid
                  unnecessary detailing and favor strong materials, joinery, and
                  proportion.
                </p>
              </div>
            </div>

            <div className="w-full flex max-[769px]:flex-col-reverse gap-[20px] px-[190px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] py-[30px]">
              <div className="lg:w-[50%] w-full relative">
                <Image
                  src={Img1}
                  alt="journal"
                  className="w-full h-full object-cover"
                />
                <p className="text-[12px] absolute text-[#fff] bottom-[10px] left-[30%] max-[425px]:left-[10%]">
                  In an world of excess,restraint is the ulimate luxury.
                </p>
              </div>
              <div className="lg:w-[50%] w-full relative">
                <Image
                  src={Img2}
                  alt="journal"
                  className="w-full h-full object-cover"
                />
                <p className="text-[12px] absolute text-[#fff] bottom-[10px] left-[30%] max-[425px]:left-[10%]">
                  Simplicity in form,strength in function.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] lg:pt-[20px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px]">
              <h6 className="journal-title">Living with intention</h6>

              <p className="journal-content">
                We don’t believe homes should feel like showrooms. They should
                feel like places where decisions have been made thoughtfully.
                Where nothing is rushed. Where furniture is chosen not to fill a
                gap, but to support the way you live.
              </p>

              <p className="journal-content">
                That’s why we design with restraint. We don’t release dozens of
                new products each season. Instead, we refine, rework, and
                revisit. We wait until a piece feels necessary — not just new.
              </p>

              <p className="journal-content">
                If you’re starting fresh or editing what you already have,
                consider beginning with our Living collection . Each piece is
                made to live simply, last well, and support what matters most:
                space, clarity, and time.
              </p>
            </div>

            <div className="flex justify-start gap-[10px] pt-[20px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] xl:pt-[30px]">
              <button className="cursor-pointer text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                intentional living
              </button>
              <button className="cursor-pointer text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                slow design
              </button>
              <button className="cursor-pointer  text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                timeless furniture
              </button>
            </div>
          </main>
        ))}
      </section>
    </>
  );
};

export default Component4;
