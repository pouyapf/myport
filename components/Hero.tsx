import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-red-600">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className=" flex justify-center gap-5 items-center">
        <div className="flex justify-center  relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] gap-7 flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xl text-center text-blue-100 ">
              پویا فتاحی هستم توسعه‌دهنده‌ی فرانت اند
            </p>

            <TextGenerateEffect
              words="توسعه‌دهنده‌ی فرانت‌اند با تخصص در React و Next.js. تمرکز روی طراحی رابط‌های سریع، زیبا و واکنش‌گرا."
              className="text-center  leading-10 text-[40px] md:text-5xl lg:text-3xl"
            />

            <a href="/Pouya Fattahi Cv.pdf">
              <MagicButton
                title="Download My CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Image
            className=" z-50 w-[700px] h-auto"
            src={"/me.png"}
            width={10000}
            height={10000}
            alt="alt_pic"
          />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
