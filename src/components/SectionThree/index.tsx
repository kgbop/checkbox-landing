"use client";

import Image from "next/image";
import { CollectReviews, SecondaryButton } from "@src/components";
import classNames from "classnames";
import { Days_One } from "next/font/google";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

const SectionThree = () => {
  return (
    <section className="py-[125px] border-t border-t-[#000]">
      <div className="container">
        <div className="grid grid-cols-[0.7fr_1fr] gap-[25px] h-[520px] md:grid-cols-[1fr] md:h-auto">
          <div className="flex flex-col justify-center mr-auto">
            <div className="flex flex-col gap-3 max-w-[410px] md:max-w-none">
              <Image
                src="/images/icon-5.svg"
                alt=""
                width={100}
                height={40}
                className="ml-5"
              />

              <h2
                className={classNames(
                  daysOne.className,
                  "text-[30px] font-bold max-w-[300px]"
                )}
              >
                Flexible Touchpoints
              </h2>

              <p className="text-[20px]">
                Whether it’s right after a purchase, post-service, or at the
                point of product delivery, select the ideal moments to prompt
                for reviews.
              </p>

              <SecondaryButton text="Generate Reviews" />
            </div>
          </div>

          <div className="relative h-full md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/flexible-touchpoint.svg"
              alt=""
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
