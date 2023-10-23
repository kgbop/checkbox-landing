"use client";

import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import classNames from "classnames";

const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] });

const Footer = () => {
  const socialItems = [
    { icon: "x", href: "#" },
    { icon: "in", href: "#" },
    { icon: "youtube", href: "#" },
    { icon: "github", href: "#" },
  ];

  const navItems = [
    { text: "System status", href: "#" },
    { text: "SOC 2", href: "#" },
    { text: "Privacy policy", href: "#" },
    { text: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-[#E3E3E3] relative border-t border-t-[#000]">
      <div className={classNames(ubuntu.className, "container pt-[73px] pb-6")}>
        <ul className="flex gap-10 justify-center">
          {socialItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <svg className="h-5 w-5" aria-hidden="true">
                  <use xlinkHref={`/sprites/sprite.svg#${item.icon}`}></use>
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-between text-[14px] font-bold leading-[28px] text-[#141414B2] md:flex-col md:text-center">
          <p className="">© 2023 Checkbox, Inc.</p>

          <ul className="flex gap-8 md:justify-center flex-wrap md:gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        className="absolute top-0 -translate-y-1/2 -translate-x-1/2 left-1/2"
        src="/images/icon-1.svg"
        alt=""
        width={45}
        height={48}
      />
    </footer>
  );
};

export default Footer;
