"use client";

import Image from "next/image";
import { CollectReviews } from "@src/components";

const SectionTwo = () => {
  return (
    <section className="py-[125px] border-t border-t-[#000] bg-[#E3E3E3]">
      <div className="container">
        <div className="grid grid-cols-[0.8fr_1fr] gap-[25px] h-[420px] md:grid-cols-[1fr] md:h-auto">
          <div className="relative h-full md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/img-9.png"
              alt=""
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col justify-center ml-auto">
            <CollectReviews />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
