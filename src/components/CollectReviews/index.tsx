"use client";

import Image from "next/image";
import { SecondaryButton } from "@src/components";

const CollectReviews = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[410px]">
      <Image src="/images/img-7.png" alt="" width={136} height={57} />

      <h2 className="text-[30px] font-bold">Collect reviews in real-time</h2>

      <p className="text-[20px]">
        Ask for reviews before your customers leave — then send them straight to
        your favorite review site with a custom QR code.
      </p>

      <SecondaryButton text="Generate Reviews" />
    </div>
  );
};

export default CollectReviews;
