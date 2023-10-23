"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@src/components";
import { ROUTES } from "@src/constants/";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  showMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "initial");

  const navItems = [
    { text: "Product", href: "#" },
    { text: "Pricing", href: "#" },
  ];

  return (
    <header>
      <div className="container py-[37px] flex items-center justify-between">
        <Link href={ROUTES.HOME}>
          <div className="w-[230px] h-[46px] relative">
            <Image src="/images/logo.svg" alt="" layout="fill" />
          </div>
        </Link>

        <div
          className={classNames(
            "flex items-center flex-auto md:absolute md:left-0 md:right-0 bg-white md:flex-col md:top-0 md:bottom-0 md:z-10 md:py-10 md:gap-7 duration-200",
            showMenu ? "md:opacity-100 md:visible" : "md:opacity-0 md:invisible"
          )}
        >
          <ul className="text-[#000] text-[20px] font-bold flex gap-7 ml-[55px] flex-auto md:ml-0 md:flex-col md:flex-none">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href="#">{item.text}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-[35px] items-center md:flex-col">
            <Link href="#" className="text-[#000] text-[20px] font-bold">
              Sign In
            </Link>

            <Button text="Join Waitlist" />
          </div>

          <button
            className="hidden md:block md:absolute top-3 right-3"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            X
          </button>
        </div>

        <button
          className="hidden md:block"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <svg className="h-[32px] w-[32px]" aria-hidden="true">
            <use xlinkHref="/sprites/sprite.svg#menu"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
