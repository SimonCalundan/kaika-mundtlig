import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-screen bg-space-cadet h-[25rem] z-[999] ">
      <Image
        className=" w-screen bg-space-cadet"
        alt="Footer overlay"
        src="/overlay4.svg"
        width={1920}
        height={100}
        draggable={false}
      />
      <div className=" w-full bg-true-black h-auto ">
        {/* Row 1 Logo */}
        <div className="flex justify-start items-center h-20 py-20 px-20">
          <Image
            className="object-contain z-[999]"
            alt="Logo"
            src="/logo_white.png"
            width={150}
            height={150}
          />
        </div>
        {/* Row 2 Links */}
        <div className="flex justify-center items-start pb-12 px-20 gap-64 text-white z-[999]">
          {/* Link box */}
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Kontakt</h2>
            <div className=" flex flex-col text-lg">
              <p>Egsagervej 14</p>
              <p>8230 Åbyhøj</p>
              <a href="tel:+45 70 231 233 ">Tlf: +45 70 231 233</a>
              <a href="mailto:mail@kaika.dk">mail@kaika.dk</a>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Om Kaika</h2>
            <div className=" flex flex-col text-lg">
              <a href="#">Om Kaika</a>
              <a className="cursor-not-allowed" href="#">
                Jobs
              </a>
              <a className="cursor-not-allowed" href="#">
                Medarbejdere
              </a>
              <a className=" cursor-not-allowed" href="#">
                Værdier
              </a>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Musik</h2>
            <div className=" flex flex-col text-lg">
              <Link href="/concerts">Kalender</Link>
              <Link href="/artists">Artister</Link>
              <div className=" flex gap-1 mt-4">
                <Link href="/">
                  <BsFacebook className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
                </Link>
                <Link href="/">
                  <BsSpotify className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
                </Link>
                <Link href="/">
                  <BsInstagram className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* KAIKA */}
        <div className="flex justify-center items-center h-20 py-20 px-20">
          <p className="text-white font-bold text-lg">Kaika Music</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
