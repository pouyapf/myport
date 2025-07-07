"use client";

import React from "react";
import Image from "next/image";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        نظر برخی از
        <span className="text-purple  mr-2">کارفرمایان محترم </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex  flex-wrap items-center    justify-evenly gap-4 md:gap-16 max-lg:mt-10">
          <div className=" flex md:flex-row flex-col justify-start gap-2 items-center">
            <Image
              className="md:aspect-auto aspect-square  w-14 h-auto"
              src={"/icons/react.png"}
              width={100000}
              height={100000}
              alt="logo"
            />
            <span className="text-[14px] md:text-[24px] font-semibold">
              React
            </span>
          </div>

          <div className=" flex md:flex-row flex-col justify-start gap-2 items-center">
            <img
              className="md:aspect-auto aspect-square  w-14 h-auto"
              src={"/next.svg"}
              alt="logo"
            />
            <span className=" text-[14px] md:text-[24px] font-semibold">
              Next
            </span>
          </div>

          <div className=" flex md:flex-row flex-col justify-start gap-2 items-center">
            <img
              className="md:aspect-auto aspect-square  w-14 h-auto"
              src={"/icons/word.png"}
              alt="logo"
            />
            <span className=" text-[14px] md:text-[24px] font-semibold">
              Wordpress
            </span>
          </div>

          <div className=" flex md:flex-row flex-col justify-start gap-2 items-center">
            <img
              className="  w-14 md:aspect-auto aspect-square h-auto"
              src={"/icons/seo.png"}
              alt="logo"
            />
            <span className=" text-[14px] md:text-[24px] font-semibold">
              Seo
            </span>
          </div>

          <div className=" flex md:flex-row flex-col justify-start gap-2 items-center">
            <img
              className="  w-14 md:aspect-auto aspect-square h-auto"
              src={"/icons/tail.svg"}
            />
            <span className=" text-[14px] md:text-[24px] font-semibold">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
