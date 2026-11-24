import Image from "next/image";
import React from "react";
import Link from "next/link";

const Component2 = ({ props }) => {
  let data = props;
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
      <section>
        {data.map((item) => (
          <main key={item.id}>
            <div className="flex justify-center w-full lg:h-lvh max-[425px]:h-[300px] min-[426px]:h-[400px]">
              <Image
                src={item.img}
                alt="img"
                className="2xl:w-[70%] w-full h-full object-cover  "
              />
            </div>

            <div className="w-full flex justify-center max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] flex-col items-center 2xl:px-[350px] xl:pt-[30px]">
              <div className="flex flex-col gap-[20px]">
                <h1 className="2xl:text-[72px]   min-[767px]:text-[42px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light max-[768px]:leading-8 leading-18 mt-[15px] text-left">
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
                <p className="journal-content">
                  Geometry is everywhere in design — in the legs of a chair, the
                  shadow beneath a table, the gap between two surfaces. But not
                  all geometry is created equal. At Furnistør, we explore the
                  space between shapes and the emotional response they invite.
                </p>
              </div>

              <div className="flex flex-col gap-[20px] lg:pt-[20px]">
                <h6 className="journal-title">Why the edge matters</h6>

                <p className="journal-content">
                  Edges are the first point of contact. A table may look
                  minimal, but if the edge is too sharp, it feels cold. If it’s
                  too soft, it may lack clarity. We test multiple versions
                  before settling on the right curve — not for appearance, but
                  for
                </p>

                <p className="journal-content">
                  Our goal is not to fill your home. It’s to offer pieces that
                  earn their place. A chair you keep moving from room to room. A
                  lamp that makes every corner feel complete. A cabinet that
                  works just as well in the entryway as it does in the bedroom.
                </p>

                <p className="journal-content">
                  In our{" "}
                  <span className="text-[#fc6b00] hover:text-[#cf5600]">
                    dining Tables
                  </span>
                  , you’ll often find a softened chamfer. It’s subtle. Almost
                  invisible from across the room. But when you lean your elbow
                  or brush your sleeve against it, it registers as comfort.
                </p>
              </div>

              <div className="flex flex-col gap-[20px] lg:pt-[20px]">
                <h6 className="journal-title">
                  Straight lines that guide, not dominate
                </h6>

                <p className="journal-content">
                  Straight lines are essential for structure — but we use them
                  carefully. A shelf with too many sharp cuts can feel rigid. A
                  chair with overly geometric arms becomes uninviting. That’s
                  why we balance every linear form with a gesture: a taper, a
                  slight angle, or a visual pause.
                </p>

                <p className="journal-content">
                  Geomtery should provide{" "}
                  <span className="text-[#fc6b00] hover:text-[#cf5600]">
                    clarity
                  </span>{" "}
                  , not control. That’s why we avoid over-definition. We allow
                  pieces to speak quietly. A bench doesn’t need flared legs to
                  feel secure. A cabinet doesn’t need decorative angles to feel
                  intentional. Simplicity is where the confidence lives.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] lg:pt-[20px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px]">
              <h6 className="journal-title">Curves with purpose</h6>

              <p className="journal-content">
                We use curves sparingly, and only when they serve function or
                flow. Curved backrests improve comfort. Rounded corners create
                safe movement in smaller rooms. Arched base details help reduce
                visual weight without sacrificing strength.
              </p>

              <p className="journal-content">
                But every curve must have a job. It must help the object live
                better in space — not just exist for softness. That’s why you’ll
                see gentle curves in our sofas , but sharper lines in our
                shelving systems. Each shape follows use, not trend.
              </p>

              <p className="journal-content">
                We work primarily with circular arcs, not complex swoops. This
                gives the pieces a calm, stable energy — almost architectural in
                tone. You won’t find exaggeration here. Just balance.
              </p>
            </div>

            <div className="flex flex-col gap-[20px] lg:pt-[20px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px]">
              <h6 className="journal-title">Stillness through proportion</h6>

              <p className="journal-content">
                Form isn’t just about the edges. It’s about what happens between
                them. The height of a tabletop. The spacing between slats. The
                depth of a drawer pull. These micro-decisions establish pace,
                harmony, and ease — which, over time, register as a kind of{" "}
                <em>Stillness</em>
              </p>

              <p className="journal-content">
                When we say a piece “feels calm,” it’s not a mood — it’s math.
                Ratios, alignment, spatial rhythm. It’s a chair with arms that
                aren’t too high. A mirror with borders just wide enough to feel
                grounded. A lamp base that matches the thickness of the cord
                without drawing attention to either.
              </p>

              <p className="journal-content">
                And yes — these things take longer. But that’s the point. A calm
                object takes time to make, because it’s made to last.
              </p>

              <p>
                If you’d like to see how this thinking carries through across
                categories, start with our bedroom collection lighting journal
                entry . You’ll find the same geometry repeated — quietly,
                intentionally.
              </p>
            </div>

            <div className="flex justify-start gap-[10px] pt-[20px] 2xl:px-[350px] max-[425px]:px-[10px] min-[425px]:px-[15px] lg:px-[95px] xl:pt-[30px]">
              <button className="cursor-pointer text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                geometry
              </button>
              <button className="cursor-pointer text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                soft forms
              </button>
              <button className="cursor-pointer  text-[#383733] border border-[#111] px-[7px] hover:border-[#cf5600] py-[4.2px] rounded-[3px] hover:bg-[#cf5600] hover:text-[#fff]">
                visual balance
              </button>
            </div>
          </main>
        ))}
      </section>
    </>
  );
};

export default Component2;
