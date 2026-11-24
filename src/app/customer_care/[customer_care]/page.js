"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Warranty from "./warranty";
import Customer from "./customer";
import Shipping from "./shipping";
import Refund_Returns from "./refund_return";
import Product_Care from "./product_care";
import Terms_of_Service from "./terms_of_service";
import Privacy_Policy from "./privacy_policy";
const Customer_Care = () => {
  const pathName = usePathname();
  const params = useParams();
  const [componentId, setComponenetId] = useState(1);

  useEffect(() => {
    if (
      params.customer_care === "warranty" ||
      params.customer_care === "customer_care/warranty"
    ) {
      setComponenetId(1);
    } else if (params.customer_care === "customer_care") {
      setComponenetId(2);
    } else if (params.customer_care === "shipping") {
      setComponenetId(3);
    } else if (params.customer_care === "refund_return") {
      setComponenetId(4);
    } else if (params.customer_care === "product_care") {
      setComponenetId(5);
    } else if (params.customer_care === "terms_of_service") {
      setComponenetId(6);
    } else if (params.customer_care === "privacy_policy") {
      setComponenetId(7);
    }
  }, [componentId, params.customer_care]);

  return (
    <>
      <section className="bg-[#e9e6e3] xl:px-[64px] pb-[20px] max-[769px]:px-[15px] lg:px-[45px] min-[769px]:px-[25px] max-[769px]:pt-[95px]  2xl:px-[153px] pt-[140px] gap-[48px] max-[769px]:gap-[25px] flex max-[769px]:flex-col justify-between border-t border-[#ccc9c1] font-normal font-(family-name:--font-inter-tight)">
        <main className="flex flex-col xl:pr-[64px] min-[769px]:border-r min-[769px]:border-[#ccc9c1] min-[769px]:w-[32%] max-[769px]:w-full">
          <h6 className="text-[36px] text-[#111] font-(family-name:--font-fraunces) font-light pb-[10px]">
            Information
          </h6>
          <div className="flex flex-col gap-[6px] w-[130px]">
            <Link
              href="/customer_care/customer_care"
              className={`text-[16px]  underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/customer_care"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] decoration-none"
                }`}
            >
              Customer Care
            </Link>
            <Link
              href="/customer_care/shipping"
              className={`text-[16px] underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/shipping"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] decoration-none"
                }`}
            >
              Shipping
            </Link>
            <Link
              href="/customer_care/refund_return"
              className={`text-[16px] underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/refund_return"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] decoration-none"
                }`}
            >
              Refunds & Returns
            </Link>
            <Link
              href="/customer_care/product_care"
              className={`text-[16px] underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/product_care"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] decoration-none"
                }`}
            >
              Product Care
            </Link>
            <Link
              href="/customer_care/warranty"
              className={`text-[16px] font-normal w-[62px] hover-underline-animation left   ${pathName === "/customer_care/warranty"
                  ? "hover:text-[#cf5600] text-[#cf5600] underline underline-[#cf5600] underline-offset-4 "
                  : "text-[#383733] decoration-none"
                }`}
            >
              Warranty
            </Link>
            <Link
              href="/customer_care/terms_of_service"
              className={`text-[16px] underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/terms_of_service"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] decoration-none"
                }`}
            >
              Terms of Service
            </Link>
            <Link
              href="/customer_care/privacy_policy"
              className={`text-[16px] underline-offset-3 font-normal transition-all ease-in-out duration-300 ${pathName === "/customer_care/privacy_policy"
                  ? "text-[#cf5600] underline decoration-[#cf5600]"
                  : "text-[#383733] underline-none"
                }`}
            >
              Privacy Policy
            </Link>
          </div>
        </main>
        <main className="min-[769px]:w-[65%] h-lvh no-scrollbar overflow-y-auto  max-[769px]:w-full">
          {componentId === 2 && (
            <Customer className={`${componentId === 2 ? "block" : "hidden"}`} />
          )}
          {componentId === 1 && (
            <Warranty className={`${componentId === 1 ? "block" : "hidden"}`} />
          )}
          {componentId === 3 && (
            <Shipping className={`${componentId === 3 ? "block" : "hidden"}`} />
          )}
          {componentId === 4 && (
            <Refund_Returns
              className={`${componentId === 4 ? "block" : "hidden"}`}
            />
          )}
          {componentId === 5 && (
            <Product_Care
              className={`${componentId === 5 ? "block" : "hidden"}`}
            />
          )}
          {componentId === 6 && (
            <Terms_of_Service
              className={`${componentId === 6 ? "block" : "hidden"}`}
            />
          )}
          {componentId === 7 && (
            <Privacy_Policy
              className={`${componentId === 7 ? "block" : "hidden"}`}
            />
          )}
        </main>
      </section>
    </>
  );
};

export default Customer_Care;
