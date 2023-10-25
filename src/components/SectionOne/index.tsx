"use client";

import Image from "next/image";
import { CollectReviews } from "@src/components";

const SectionOne = () => {
  return (
    <section className="py-[125px] border-t border-t-[#000]">
      <div className="container">
        <div className="grid grid-cols-[0.6fr_1fr] gap-[25px] h-[420px] md:grid-cols-[1fr] md:h-auto">
          <div className="flex flex-col justify-center">
            <CollectReviews />
          </div>

          <div className="relative h-full md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/img-8.png"
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

export default SectionOne;
