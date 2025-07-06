import { FaLocationArrow } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className=" text-[50px] text-center lg:max-w-[40vw]">
          آماده‌ای <span className="text-purple">کسب و کار دیجیتال</span> خودت
          رو متحول کنی؟
        </h1>
        <p className="text-white-200 md:mt-20 my-10 text-center">
          همین حالا با من تماس بگیر تا درباره راه‌هایی که می‌تونم به رشد
          کسب‌وکارت کمک کنم صحبت کنیم.
        </p>

        <div className="flex justify-center gap-2 items-center">
          <a href="mailto:pouya.ff7@gmail.com" aria-label="Send email">
            <MagicButton
              title="ایمیل"
              icon={<MdAlternateEmail />}
              position="right"
            />
          </a>

          <a
            href="https://t.me/pouy_7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Telegram channel"
          >
            <MagicButton
              title="تلگرام"
              icon={<BiLogoTelegram />}
              position="right"
            />
          </a>

          <a href="tel:+989914813565" aria-label="Call phone">
            <MagicButton title="تماس" icon={<FaPhone />} position="right" />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Pouya Fattahi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
