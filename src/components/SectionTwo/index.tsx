"use client";

import Image from "next/image";
import { SecondaryButton } from "@src/components";
import classNames from "classnames";
import { Days_One } from "next/font/google";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

const SectionTwo = () => {
  return (
    <section className="py-[125px] border-t border-t-[#000] bg-[#E3E3E3]">
      <div className="container">
        <div className="grid grid-cols-[0.8fr_1fr] gap-[25px] h-[420px] md:grid-cols-[1fr] md:h-auto">
          <div className="relative h-full md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/funnel-layout.svg"
              alt=""
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col justify-center ml-auto">
            <div className="flex flex-col gap-3 max-w-[410px] md:max-w-none">
              <Image src="/images/puzzle.svg" alt="" width={80} height={80} />

              <h2
                className={classNames(
                  daysOne.className,
                  "text-[30px] font-bold max-w-[300px]"
                )}
              >
                Customizable Funnel Layouts
              </h2>

              <p className="text-[20px]">
                Create a path that gently guides customers from satisfaction to
                sharing their feedback. Customize the look and feel to match
                your brand’s aesthetic, ensuring a seamless experience.
              </p>

              <SecondaryButton text="Generate Reviews" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
