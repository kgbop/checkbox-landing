"use client";

import Image from "next/image";

import { Input, Button } from "@src/components";

const Intro = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-[0.7fr_1fr] h-[650px]">
          <div className="flex flex-col justify-center">
            <div className="max-w-[360px] flex flex-col gap-6">
              <div className="relative">
                <h1 className="text-[38px] text-[#000] font-bold">
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

              <div className="grid grid-cols-[1fr_1fr] gap-5 items-center">
                <Button text="Keep me in the loop" />

                <p className="text-[12px] text-[#C6C6C6]">
                  FREE FOREVER. <br /> NO CREDIT CARD.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/img-5.png"
              alt=""
              layout="fill"
              style={{ objectFit: "cover" }}
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
