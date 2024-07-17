import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import TitleCard from "../titles/TitleCard";

import navigationData from "./navigationData.json";
import legalMentionData from "./legalMentionsData.json";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-slate-300 text-slate-600 max-w-full">
      <div className="max-w-7xl mx-auto p-6 md:flex md:justify-between">
        <div className="flex flex-col mb-6">
          <Link href="#" className="mb-4">
            <Logo />
          </Link>
          <p className="w-96 font-medium text-slate-600 mb-4">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <TitleCard titleCard="navigation" />
            <ul className="text-medium text-slate-600">
              {navigationData.map((link, i) => (
                <li
                  key={i}
                  className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <TitleCard titleCard="mentions legal" />
            <ul className="text-medium text-slate-600">
              {legalMentionData.map((link, i) => (
                <li
                  key={i}
                  className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="w-full h-[510px] relative overflow-hidden bg-slate-900 border-t-2 border-r-0 border-b-0 border-l-0 border-[#036]">
    //   <div className="flex justify-start items-end absolute left-40 top-[43px] gap-[510px]">
    //     <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
    //       <p className="flex-grow-0 flex-shrink-0 text-5xl text-left text-[#db2a6b]">
    //         Hamid Coaching
    //       </p>
    //       <p className="flex-grow-0 flex-shrink-0 w-[489px] h-[147px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //         With lots of unique blocks, you can easily build a page without
    //         coding. Build your next landing page.
    //       </p>
    //       <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[26px]">
    //         <svg
    //           width={46}
    //           height={46}
    //           viewBox="0 0 46 46"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="flex-grow-0 flex-shrink-0 w-[45.24px] h-[45.24px]"
    //           preserveAspectRatio="none"
    //         >
    //           <path
    //             d="M42.8373 0H2.40659C1.07767 0 0 1.07767 0 2.40659V42.8373C0 44.1662 1.07767 45.2439 2.40659 45.2439H42.8373C44.1667 45.2439 45.2439 44.1662 45.2439 42.8373V2.40659C45.2439 1.07767 44.1667 0 42.8373 0ZM32.2146 10.2829L28.7366 10.2843C26.0104 10.2843 25.4824 11.58 25.4824 13.4817V17.6745H31.9855L31.9836 24.2416H25.4824V41.0935H18.7002V24.2416H13.0293V17.6745H18.7002V12.8315C18.7002 7.21111 22.1334 4.15041 27.1463 4.15041L32.2146 4.15859V10.2829Z"
    //             fill="#F7F7F7"
    //           />
    //         </svg>
    //         <svg
    //           width={46}
    //           height={46}
    //           viewBox="0 0 46 46"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="flex-grow-0 flex-shrink-0 w-[45.24px] h-[45.24px]"
    //           preserveAspectRatio="none"
    //         >
    //           <path
    //             d="M33.0017 0H12.7292C5.84482 0 0.243896 5.60119 0.243896 12.4856V32.758C0.243896 39.6427 5.84482 45.2436 12.7292 45.2436H33.0017C39.8866 45.2436 45.4875 39.6424 45.4875 32.758V12.4856C45.4878 5.60119 39.8866 0 33.0017 0ZM41.4736 32.758C41.4736 37.4293 37.6732 41.2294 33.0019 41.2294H12.7292C8.05827 41.2297 4.25813 37.4293 4.25813 32.758V12.4856C4.25813 7.81464 8.05827 4.01423 12.7292 4.01423H33.0017C37.6729 4.01423 41.4733 7.81464 41.4733 12.4856V32.758H41.4736Z"
    //             fill="#F7F7F7"
    //           />
    //           <path
    //             d="M22.8661 10.9648C16.4378 10.9648 11.208 16.1946 11.208 22.623C11.208 29.0511 16.4378 34.2806 22.8661 34.2806C29.2945 34.2806 34.5243 29.0511 34.5243 22.623C34.5243 16.1946 29.2945 10.9648 22.8661 10.9648ZM22.8661 30.2661C18.6515 30.2661 15.2222 26.8374 15.2222 22.6227C15.2222 18.4078 18.6512 14.9788 22.8661 14.9788C27.0811 14.9788 30.5101 18.4078 30.5101 22.6227C30.5101 26.8374 27.0808 30.2661 22.8661 30.2661Z"
    //             fill="#F7F7F7"
    //           />
    //           <path
    //             d="M35.013 7.56055C34.2396 7.56055 33.4798 7.87366 32.9336 8.42227C32.3847 8.96821 32.0692 9.72823 32.0692 10.5043C32.0692 11.278 32.385 12.0378 32.9336 12.5864C33.4795 13.1323 34.2396 13.4481 35.013 13.4481C35.7891 13.4481 36.5464 13.1323 37.095 12.5864C37.6436 12.0378 37.9568 11.2777 37.9568 10.5043C37.9568 9.72823 37.6436 8.96821 37.095 8.42227C36.5491 7.87366 35.7891 7.56055 35.013 7.56055Z"
    //             fill="#F7F7F7"
    //           />
    //         </svg>
    //       </div>
    //     </div>

    //     <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[118px]">
    //       <div className="flex-grow-0 flex-shrink-0 w-[201px] h-[246px] relative overflow-hidden">
    //         <p className="w-[269.51px] absolute left-0 top-0 text-[37px] text-left text-[#f7f7f7]">
    //           Navigation
    //         </p>
    //         <p className="w-[201px] absolute left-0 top-14 text-[32px] font-semibold text-left text-[#f7f7f7]">
    //           <span className="w-[201px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Accueil
    //           </span>
    //           <br />
    //           <span className="w-[201px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Pricing
    //           </span>
    //           <br />
    //           <span className="w-[201px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             News
    //           </span>
    //           <br />
    //           <span className="w-[201px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Help desk
    //           </span>
    //           <br />
    //           <span className="w-[201px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Support
    //           </span>
    //         </p>
    //       </div>
    //       <div className="flex-grow-0 flex-shrink-0 w-[278px] h-[246px] relative overflow-hidden">
    //         <p className="w-[405.24px] absolute left-0 top-0 text-[37px] text-left text-[#f7f7f7]">
    //           Mentions legal
    //         </p>
    //         <p className="w-[278px] absolute left-0 top-14 text-[32px] font-semibold text-left text-[#f7f7f7]">
    //           <span className="w-[278px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Accueil
    //           </span>
    //           <br />
    //           <span className="w-[278px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Pricing
    //           </span>
    //           <br />
    //           <span className="w-[278px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             News
    //           </span>
    //           <br />
    //           <span className="w-[278px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Help desk
    //           </span>
    //           <br />
    //           <span className="w-[278px] text-[32px] font-semibold text-left text-[#f7f7f7]">
    //             Support
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
