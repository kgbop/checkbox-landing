"use client";

import Image from "next/image";
import { CollectReviews } from "@src/components";

const SectionThree = () => {
  return (
    <section className="py-[125px] border-t border-t-[#000]">
      <div className="container">
        <div className="grid grid-cols-[0.7fr_1fr] gap-[25px] h-[520px] md:grid-cols-[1fr] md:h-auto">
          <div className="flex flex-col justify-center mr-auto">
            <CollectReviews />
          </div>

          <div className="relative h-full md:h-[400px] sm:h-[200px]">
            <Image
              src="/images/img-10.png"
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
