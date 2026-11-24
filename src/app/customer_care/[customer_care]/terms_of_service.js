import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Terms_of_Service = () => {
  return (
    <>
      <section>
        <h1 className=" text-[72px] max-[767px]:text-[32px]  text-[#111111] font-(family-name:--font-fraunces) font-light">
          Terms of Service
        </h1>
        <p className="journal-content flex items-center gap-[10px] mb-[16px]">
          Here is how it works:{""}you order <BsArrowRight /> we process{" "}
          <BsArrowRight /> we ship <BsArrowRight /> you receive your furniture
        </p>

        <p className="text-[#383733] font-medium">processing Time:</p>
        <p className="journal-content mb-[16px]">
          Most in-stock items are processed within 2-3 business days from our
          warehouse in Denmark.
        </p>

        <p className="journal-content">
          <span className="text-[#383733] font-medium">Delivery Time:</span>{" "}
          Once shipped, delivery typically takes 3-7 business days depending on
          your location.{" "}
          <span className="text-[#383733] font-medium">Total Timeline:</span>{" "}
          Expect to receive your order within 7-10 working days after placing
          your order, unless otherwise stated for specific products. You’ll
          receive a shipment notification email with tracking information as
          soon as your package ships.
        </p>

        <h6 className="warranty-stitle">Where Do We Ship?</h6>

        <p className="journal-content">
          We ship beautiful Danish furniture design across Europe to the
          following countries:{" "}
          <span className="text-[#383733] font-medium">Nordic Countries:</span>
        </p>
        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Denmark (1-3 business days)
          </li>
          <li className="journal-content list-disc">
            Sweden (3-5 business days)
          </li>
          <li className="journal-content list-disc">
            Norway (3-5 business days)
          </li>
          <li className="journal-content list-disc">
            Finland (4-6 business days)
          </li>
        </ul>

        <p className="text-[#383733] font-medium">Centeral Europe:</p>
        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Germany (3-5 business days)
          </li>
          <li className="journal-content list-disc">
            Netherlands (3-5 business days)
          </li>
          <li className="journal-content list-disc">
            Belgium (3-5 business days)
          </li>
          <li className="journal-content list-disc">
            Austira (4-6 business days)
          </li>
          <li className="journal-content list-disc">
            Switzerland (4-6 business days)
          </li>
        </ul>

        <p className="text-[#383733] font-medium">Other EU Countries:</p>
        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            France (4-6 business days)
          </li>
          <li className="journal-content list-disc">
            Italy (5-7 business days)
          </li>
          <li className="journal-content list-disc">
            Spain (5-7 business days)
          </li>
          <li className="journal-content list-disc">
            Poland (4-6 business days)
          </li>
        </ul>

        <p className="journal-content">
          <span className="text-[#383733] font-medium">
            Speical Shipping: {""}
          </span>
          For deliveries outside these regions,please contact us at
          shipping@kaliumtheme.com.We will work to find a shipping solution and
          provide you with delivery timeframes and costs.
        </p>

        <h6 className="warranty-stitle">Delivery Methods</h6>

        <p className="journal-content">
          <span className="text-[#383733] font-medium">
            Standard Shipping: {""}
          </span>
          Perfect for smaller items and accessories.Delivered to your door by
          our trusted carrier partners.
          <span className="text-[#383733] font-medium">
            Freight Delivery {""}
          </span>{" "}
          For large furniture pieces,we use specialized frigh services to ensure
          your items arrive safely.
          <span className="text-[#383733] font-medium">
            White Global Service {""}
          </span>{" "}
          Avaliable in Denmark and select cities.Includes scheduled
          delivery,room placement,and assembly assitance.
        </p>

        <h6 className="warranty-stitle">What Are the delivery Costs?</h6>
        <p className="journal-content">
          We belive in transparent pricing. Shipping costs are calculated bashed
          on the size and wight of your items and your delivery location.{" "}
          <span className="text-[#383733] font-medium">Denmark: {""}</span>
        </p>

        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Standard delivery:Free on orders over 5,000 DKK
          </li>
          <li className="journal-content list-disc">
            Under 5,000 DKK: 199 DKK
          </li>
          <li className="journal-content list-disc">
            White glove service:599 Dkk
          </li>
        </ul>
        <p className="text-[#383733] font-medium">Nordic Countries: {""}</p>
        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Standard delivery:299 DKK
          </li>
          <li className="journal-content list-disc">
            Free on orders over 8,000 DKK
          </li>
        </ul>
        <p className="text-[#383733] font-medium">EU Countries: {""}</p>
        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Standard delivery:399-599 DKK (depending on location)
          </li>
          <li className="journal-content list-disc">
            Free on orders over 12,000 DKK
          </li>
        </ul>
        <p className="journal-content">
          <span className="text-[#383733] font-medium">Large Items: {""}</span>
          Freight delivery costs vary by item size and destination.Exact costs
          are calculated at checkout.
        </p>
        <h6 className="warranty-stitle">Important Delivery Information</h6>

        <ul className="pl-[32px] mb-[16px]">
          <li className="journal-content list-disc">
            Always ensure your contact information is correct at checkout to
            aviod delays
          </li>
          <li className="journal-content list-disc">
            Someone must be avaliable to receive the delivery during business
            hours
          </li>
          <li className="journal-content list-disc">
            Always ensure your contact information is correct at checkout to
            aviod delays
          </li>
          <li className="journal-content list-disc">
            Someone must be avaliable to receive the delivery during business
            hours
          </li>
        </ul>
        <h6 className="warranty-stitle">Business Orders</h6>
        <p className="journal-content">
          We ship worldwide for B2B customers.Contact us at
          business@kaliumtheme.com for volume pricing and international shipping
          solutions.
        </p>
      </section>
    </>
  );
};

export default Terms_of_Service;
