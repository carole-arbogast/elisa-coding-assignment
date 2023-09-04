/* eslint-disable @next/next/no-img-element */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { navbarItems, upperNavbarItems } from "./_config/navbar";

export function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <div className="flex border-b border-zinc-100">
        <div className="flex ml-5">
          <a href="/" className="py-18px pr-6 pl-0">
            <img src="/Elisa_logo_blue_RGB.png" alt="Elisa" width={72} />
          </a>
        </div>
        <nav className="flex flex-1 items-center">
          <ul className="hidden lg:flex">
            {navbarItems.rightSide.map((item) => (
              <li
                key={item.title}
                className="font-semibold text-lg text-primary py-26px hover:bg-light-background"
              >
                <a href="/" className=" px-3 py-26px">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex content-end ml-auto px-6">
            {navbarItems.leftSide.map((item, i) => (
              <li key={i} className="px-3">
                <button title={item.title}>
                  {item.icon && (
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-primary w-6 px-0"
                    />
                  )}
                  {item.showTitle && (
                    <span className="hidden text-primary ml-1.5 lg:inline">
                      {item.title}
                    </span>
                  )}
                </button>
              </li>
            ))}
            <li>
              <button
                aria-label="Open menu"
                className="lg:hidden"
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-primary "
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {hamburgerOpen && (
        <nav className="w-96 h-screen border-x border-b border-zinc-100 ml-auto z-10 absolute right-0 bg-white">
          <ul className="flex flex-wrap">
            {upperNavbarItems.map((item) => (
              <li key={item.title} className="text-primary px-5 pr-5 py-2.5">
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
          <ul>
            {navbarItems.rightSide.map((item) => (
              <li
                key={item.title}
                className="px-5 h-16 text-primary font-semibold flex items-center border-b border-zinc-100"
              >
                <a href="#" className="flex justify-between w-full">
                  {item.title}
                  <span>{">"}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {hamburgerOpen && (
        <div
          className="absolute h-screen w-screen bg-slate-50 opacity-5"
          onClick={() => setHamburgerOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
