import { memo } from "react";
import { Logo } from "../Navbar/NavIcons";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "./FooterIcons";

const Footer = memo(() => {
  return (
    <div className="h-72 flex flex-col md:flex-row items-center  md:justify-around justify-center bg-black">
      <div className="flex flex-col gap-10 justify-center p-10">
        <h1 className=" font-poppins text-[2rem] font-medium text-white ">
          चंद्रा फाउंडेशन
        </h1>
        <Logo />
      </div>
      <div className="flex flex-row gap-6 items-center">
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <FacebookIcon />
        </button>
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <InstagramIcon />
        </button>
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <WhatsappIcon />
        </button>
        <button
          onClick={() => {
            console.log("hello");
          }}
        >
          <TelegramIcon />
        </button>
      </div>
    </div>
  );
});

export default Footer;
