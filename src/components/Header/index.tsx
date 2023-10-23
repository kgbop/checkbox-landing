"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@src/components";
import { ROUTES } from "@src/constants/";

const Header = () => {
  const navItems = [
    { text: "Product", href: "#" },
    { text: "Pricing", href: "#" },
  ];

  return (
    <header>
      <div className="container py-[37px] flex items-center md:flex-col md:gap-3">
        <Link href={ROUTES.HOME}>
          <div className="w-[230px] h-[46px] relative">
            <Image src="/images/logo.svg" alt="" layout="fill" />
          </div>
        </Link>

        <ul className="text-[#000] text-[20px] font-bold flex gap-7 ml-[55px] flex-auto md:ml-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href="#">{item.text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-[35px] items-center">
          <Link href="#" className="text-[#000] text-[20px] font-bold">
            Sign In
          </Link>

          <Button text="Join Waitlist" />
        </div>
      </div>
    </header>
  );
};

export default Header;
