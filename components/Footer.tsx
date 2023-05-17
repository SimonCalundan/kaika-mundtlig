import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-space-cadet h-[25rem] z-50">
      <Image
        className=" w-screen bg-space-cadet"
        alt="Footer overlay"
        src="/layered-peaks-haikei.png"
        width={1920}
        height={500}
        draggable={false}
      />
      <div className=" w-full bg-true-black h-auto ">
        {/* Row 1 Logo */}
        <div className="flex justify-start items-center h-20 py-20 px-20">
          <Image
            className="object-contain"
            alt="Logo"
            src="/logo_white.png"
            width={150}
            height={150}
          />
        </div>
        {/* Row 2 Links */}
        <div className="flex justify-center items-start pb-12 px-20 gap-64 text-white">
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
              <a href="#">Jobs</a>
              <a href="#">Medarbejdere</a>
              <a href="#">Værdier</a>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Musik</h2>
            <div className=" flex flex-col text-lg">
              <a href="#">Kalender</a>
              <a href="#">Artister</a>
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
