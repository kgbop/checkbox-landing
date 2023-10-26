"use client";

import Image from "next/image";
import { Days_One } from "next/font/google";
import classNames from "classnames";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

const HowItWorks = () => {
  const items = [
    {
      title: "Choose",
      text: "Tons of options: funnel layout, email, SMS, Invite, in-product widgets, QR codes.",
      img: "img-2.svg",
    },
    {
      title: "Generate",
      text: "Automate and start seamlessly generating. Make leaving a review effortless.",
      img: "img-3.svg",
    },
    {
      title: "Build Trust",
      text: "Showcase new reviews on your website and turn first-time visitors into repeat customers.",
      img: "img-4.svg",
    },
  ];

  return (
    <section
      className="pt-[113px] pb-[270px]"
      style={{ backgroundImage: `url(/images/bg.svg)` }}
    >
      <div className="container">
        <h2
          className={classNames(
            daysOne.className,
            "text-[40px] text-[#000] text-center mb-[55px]"
          )}
        >
          How it works
        </h2>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-8 lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-[#000] p-5 rounded-[10px] text-[#000] bg-white"
            >
              <div className="mb-[10px] h-[255px] relative">
                <Image
                  src={`/images/${item.img}`}
                  alt=""
                  fill
                  sizes="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3 className={classNames(daysOne.className, "text-[36px]")}>
                {item.title}
              </h3>

              <p className="text-[20px] leading-[120%]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
