"use client";

import Image from "next/image";
import { Days_One } from "next/font/google";
import { Input, Button } from "@src/components";
import classNames from "classnames";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

const Intro = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-[0.7fr_1fr] h-[650px] md:grid-cols-[1fr] md:h-auto">
          <div className="flex flex-col justify-center">
            <div className="max-w-[370px] flex flex-col gap-6 md:max-w-none">
              <div className="relative">
                <h1
                  className={classNames(
                    daysOne.className,
                    "text-[38px] text-[#000]"
                  )}
                >
                  Double your <br /> five-star reviews.
                </h1>

                <Image
                  src="/images/img-6.png"
                  alt=""
                  width={151}
                  height={83}
                  className="absolute top-0 -translate-y-[40px]"
                />
              </div>

              <p className="text-[18px]">
                Intuitive. Effortless. Checkbox helps local businesses get more
                Google, Facebook reviews, stronger SEO, and an attractive online
                reputation.
              </p>

              <Input placeholder="Enter your email address" />

              <div className="grid grid-cols-[1fr_1fr] gap-5 items-center sm:grid-cols-[1fr]">
                <Button text="Keep me in the loop" />

                <p
                  className={classNames(
                    daysOne.className,
                    "text-[12px] text-[#C6C6C6]"
                  )}
                >
                  FREE FOREVER. <br /> NO CREDIT CARD.
                </p>
              </div>
            </div>
          </div>

          <div className="relative md:h-[400px]">
            <Image
              src="/images/img-5.png"
              alt=""
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />

            <button className="bg-[#D7D7D7] border border-[#000] rounded-[10px] h-11 w-[188px] text-[16px] font-bold cursor-pointer absolute bottom-0 flex items-center justify-center">
              <Image src="/images/icon-4.svg" alt="" width={29} height={22} />
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
