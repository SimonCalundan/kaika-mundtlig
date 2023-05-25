import artists from "../public/artists.json";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollReveal } from "reveal-on-scroll-react";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import BookingModal from "@/components/BookingModal";
import CompanyLogo from "@/components/CompanyLogo";
import ArtistModal from "@/components/ArtistModal";
import Typewriter from "typewriter-effect";

import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const data = artists;
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView(undefined);
  const [showNav, setShowNav] = useState(false);
  const [language, setLanguage] = useState("da");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [artistModalOpen, setArtistModalOpen] = useState("");

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const animateLines = () => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        line.classList.add("animate-line");
      });
    };
    if (inView) {
      animateLines();
    } else if (!inView) {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        line.classList.remove("animate-line");
      });
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>KAIKA MUSIC</title>
        <link rel="icon" href="/kaika_logo.png" />
        <meta name="description" content="Landsdækkende booking bureau" />
      </Head>
      <main className={montserrat.className}>
        {/* Artist modals */}
        {artistModalOpen === "Faustix" && (
          <ArtistModal
            pressekit="tom"
            link="tom"
            name="Faustix"
            image="/presse_kit/OUTLANDISH/Outlandish 2023 stor format.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            spotify="tomString"
            onClick={() => {
              setArtistModalOpen("");
            }}
          />
        )}
        {/* Booking modal */}
        {bookingModalOpen && (
          <BookingModal onClick={() => setBookingModalOpen(false)} />
        )}
        {/* Landing page */}
        <section className=" h-screen w-screen relative flex flex-col p-8">
          <div
            className={` duration-1000 delay-[1500ms] transition-all absolute top-0 left-0 w-screen h-screen bg-space-cadet ${
              inView ? "opacity-100 z-[9]" : "opacity-0 z-0"
            } `}
          ></div>
          {/* Logo and Navigation */}

          <nav
            className={` transition-all duration-500 flex justify-between h-auto top-0 z-[99999] left-0 right-0 fixed p-8 ${
              showNav ? "bg-space-cadet bg-opacity-40 backdrop-blur" : ""
            }`}
          >
            {/* Menu */}
            <div
              className={`left-0 h-screen p-8 transition-all duration-500 z-[9999999] absolute top-0 ${
                menuOpen ? "left-0" : "left-[-50%]"
              } w-80 h-full bg-true-black bg-opacity-95 backdrop-blur flex flex-col`}
            >
              <div className=" flex items-center justify-between">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-12 h-12 text-white ${
                      menuOpen ? "opacity-100" : "opacity-0"
                    } transition-all delay-300 duration-700 `}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Language options */}
                <div className=" flex gap-1">
                  <button
                    className={`text-white text-base font-bold uppercase ${
                      language === "da" && "underline underline-offset-2"
                    }`}
                  >
                    {" "}
                    DK{" "}
                  </button>
                  <button className="text-white text-base font-bold uppercase">
                    {" "}
                    EN{" "}
                  </button>
                  <button className="text-white text-base font-bold uppercase">
                    {" "}
                    DE{" "}
                  </button>
                </div>
              </div>
              {/* Menu links */}
              <div className=" flex flex-col py-12 px-4 text-3xl uppercase text-mint-green font-bold gap-y-8">
                <Link
                  className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                  href="/concerts"
                >
                  Koncerter
                </Link>
                <Link
                  className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                  href="/artists"
                >
                  Artister
                </Link>
                <Link
                  className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                  href="/"
                >
                  Om os
                </Link>
                <Link
                  className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                  href="/"
                >
                  Kontakt
                </Link>
                <Link
                  className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                  href="/"
                >
                  Booking
                </Link>
              </div>
            </div>
            {/* Burger menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                className=" translate-x-[-50%] absolute left-1/2 z-10"
                src="/kaika_logo.png"
                alt="kaika logo"
                width={130}
                height={130}
              />
            </Link>

            {/* CTA button */}
            <Link href="/" className=" ">
              <h2 className="uppercase flex justify-center text-sm items-center py-2 px-4 font-semibold text-white border  border-mint-green hover:bg-mint-green hover:text-space-cadet transition-all duration-300">
                Kontakt
              </h2>
            </Link>
          </nav>

          {/* Landing text */}
          <div className=" flex flex-col justify-center items-center z-10 mx-auto translate-x-[-50%] absolute left-1/2 top-[40%]">
            <Image
              src="/landing_text.png"
              alt="landing text"
              width={800}
              height={800}
              draggable={false}
              priority
            />
            <Typewriter
              options={{
                wrapperClassName: "text-2xl font-medium text-white",
                cursorClassName: "text-2xl font-medium text-white",
                deleteSpeed: 50,
                delay: 50,
                strings: [
                  "Landsdækkende booking bureau",
                  "Booking af bands, solister, standup og meget mere",
                  "Hundredevis af tilfredse kunder",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            <button
              onClick={() => setBookingModalOpen(true)}
              className=" mt-10  uppercase flex justify-center text-2xl items-center py-2 px-12 font-normal text-white border border-mauve my-4 hover:bg-mauve hover:text-space-cadet transition-all duration-300"
            >
              Book her
            </button>
          </div>
          {/* Video */}
          <video
            muted
            autoPlay
            loop
            className=" object-fill absolute top-[-4px] left-0 w-full h-full opacity-30"
            src="/video.mp4"
          ></video>
          {/* Overlay */}
          <Image
            src="/overlay.png"
            alt="overlay"
            width={1920}
            height={1080}
            className=" z-0 absolute top-0 left-0 w-full h-full"
          />

          <svg
            onClick={() => {
              // make function that scrolls to next section
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-white animate-bounce cursor-pointer absolute bottom-0 right-[48%] transform "
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </section>
        {/* Artist section */}
        <section className="w-screen h-auto flex flex-col justify-center items-center px-8 pt-32">
          {/* Lines */}
          <div className=" line absolute z-[0] top-0 left-0 w-screen h-0 flex  gap-36  ">
            <div className="  transition-all duration-1000 line left-[25%] fixed h-0 w-[8px] bg-mint-green delay-[300ms]  "></div>

            <div className="  transition-all duration-[3000ms] line left-[30%] fixed h-0 w-[8px] bg-sunglow delay-[600ms] "></div>

            <div className="  transition-all duration-[3000ms] line left-[71%] fixed h-0 w-[6px] bg-mauve delay-[150ms] "></div>

            <div className="  transition-all duration-[3000ms] line left-[72.5%] fixed h-0 w-[6px] bg-sunglow delay-[1000ms] "></div>

            <div className="  transition-all duration-[3000ms] line left-[74%] fixed h-0 w-[6px] bg-mint-green delay-[300ms] "></div>
          </div>
          {/* Section content */}
          <div className=" flex flex-col h-full w-full">
            <div
              ref={ref}
              className=" flex flex-col w-full gap-8 h-full items-center font-bold text-5xl uppercase text-white"
            >
              <h2>Mød Artisterne</h2>
              {/* Artist wrapper */}
              <div className=" [&>*:nth-child(2)]:translate-y-20  [&>*:nth-child(5)]:translate-y-20 gap-x-16 gap-y-32 flex flex-wrap w-full max-w-6xl h-full items-center justify-center py-20">
                {/* Artist 1 */}
                <ArtistCard
                  onClick={() => setArtistModalOpen("Faustix")}
                  name="Outlandish"
                  image="/presse_kit/OUTLANDISH/Outlandish 2023.jpg"
                />
                {/* Artist 2 */}
                <ArtistCard
                  onClick={() => console.log("clicked")}
                  name="Michelsen & Bramsen"
                  image="/presse_kit/MICHELSEN & BRAMSEN/Michelsen & Bramsen(1).jpg"
                />
                {/* Artist 3 */}
                <ArtistCard
                  onClick={() => console.log("clicked")}
                  name="Zididada"
                  image="/presse_kit/ZIDIDADA/Zididada - Presse Foto.jpg"
                />
                {/* Artist 4 */}
                <ArtistCard
                  onClick={() => console.log("clicked")}
                  name="Faustix"
                  image="/presse_kit/FAUSTIX/Faustix_november2022_@Nikolaj Osorio_WEB_4.jpg"
                />
                {/* Artist 5 */}
                <ArtistCard
                  onClick={() => console.log("clicked")}
                  name="Italo Brothers"
                  image="/presse_kit/ITALOBROTHERS/3F0A4859.jpg"
                />
                {/* Artist 6 */}
                <div className="  relative aspect-[5/7] h-[28rem] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ">
                  <div className=" top-0 left-0 z-10 absolute w-full h-full flex flex-col items-center justify-end py-20">
                    <h3 className=" text-center z-10 uppercase text-3xl text-white drop-shadow-lg ">
                      Basshunter
                    </h3>
                  </div>
                  <Image
                    alt="Basshunter"
                    width={500}
                    height={700}
                    className=" z-0 object-cover h-full top-0 left-0 absolute"
                    src="/presse_kit/BASSHUNTER/Basshunter - Presse Foto 1.jpg"
                  />
                </div>
              </div>
              <Link
                href="/artists"
                className=" flex items-center font-normal text-white text-2xl underline mt-20 mb-80 mx-auto"
              >
                <h2>Se alle artisterne </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              {/* Features cards section */}
              <div className=" max-w-6xl mx-auto w-full h-auto flex flex-wrap justify-around gap-8">
                {/* Card 1 */}
                <div className=" justify-around flex flex-col items-center gap-12 aspect-[5/7] h-[28rem] border-4 bg-space-cadet border-mint-green text-mint-green z-50 p-8">
                  <h2 className=" text-4xl font-bold">Festival</h2>
                  <p className=" text-lg font-normal normal-case ">
                    Vi klarer alle arrangementer - store som små. KAIKA leverer
                    music, lyd/lys og scener til en stor del af landets
                    festivals. Oplev branchens bedste service!
                  </p>
                  <button
                    className=" text-lg underline font-bold hover:scale-105 active:scale-95 transition-all duration-300"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setTimeout(() => {
                        setBookingModalOpen(true);
                      }, 800);
                    }}
                  >
                    BOOK
                  </button>
                </div>
                {/* Card 2 */}
                <div className=" justify-around flex flex-col items-center gap-12 aspect-[5/7] h-[28rem] border-4 bg-space-cadet border-sunglow text-sunglow z-50 p-8">
                  <h2 className=" text-4xl font-bold">Firma</h2>
                  <p className=" text-lg font-normal normal-case ">
                    Skal vi sparke gang i festen til jeres næste arrangement? Vi
                    har gennem årene arrangeret en lang række events og
                    firmafester, og har stor erfaring med dette!
                  </p>
                  <button
                    className=" text-lg underline font-bold hover:scale-105 active:scale-95 transition-all duration-300"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setTimeout(() => {
                        setBookingModalOpen(true);
                      }, 800);
                    }}
                  >
                    BOOK
                  </button>
                </div>
                {/* Card 3 */}
                <div className=" justify-around flex flex-col items-center gap-12 aspect-[5/7] h-[28rem] border-4 bg-space-cadet border-mauve text-mauve z-50 p-8">
                  <h2 className=" text-4xl font-bold">Privat</h2>
                  <p className=" text-lg font-normal normal-case">
                    Booking branchen kan være en jungle fyldt af valgmuligheder.
                    Vi står til rådighed for din skyld og vi sørger for en
                    service som opfylder dine behov!
                  </p>
                  <button
                    className=" text-lg underline font-bold hover:scale-105 active:scale-95 transition-all duration-300"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                      setTimeout(() => {
                        setBookingModalOpen(true);
                      }, 800);
                    }}
                  >
                    BOOK
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Referencer */}
          <div className=" bg-space-cadet h-auto z-50 w-full flex flex-col items-center pt-20 ">
            <h2 className=" text-4xl font-bold text-white uppercase my-10">
              Referencer
            </h2>
            {/* Icon wrapper */}
            <div className=" flex flex-wrap justify-center items-center gap-y-2 gap-x-20 w-full max-w-6xl h-full translate-y-8 ">
              <CompanyLogo url="/company-icons/carlsberg__logo.png" />
              <CompanyLogo url="/company-icons/dr__logo.png" />
              <CompanyLogo url="/company-icons/hugo__boss.png" />
              <CompanyLogo url="/company-icons/jelling__logo.png" />
              <CompanyLogo url="/company-icons/lego__logo.png" />
              <CompanyLogo url="/company-icons/magasin__logo.png" />
              <CompanyLogo url="/company-icons/smukfest__logo.webp" />
              <CompanyLogo url="/company-icons/tivoli_logo.png" />
              <CompanyLogo url="/company-icons/tv2__logo.png" />
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </section>
      </main>
    </>
  );
}
