import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let’s build something <span className="text-purple">awesome </span>{" "}
          together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Have an idea or a project in mind? Drop me a message, and let’s turn
          it into reality.
        </p>
        <a href="mailto:pratyush310599@gmail.com">
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Pratyush
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link href={profile.link} target="_blank" key={profile.id}>
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={profile.img} alt="profile" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
