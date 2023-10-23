"use client";

import Image from "next/image";
import { Days_One } from "next/font/google";
import { SecondaryButton } from "@src/components";
import classNames from "classnames";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

const CollectReviews = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[410px] md:max-w-none">
      <Image src="/images/img-7.png" alt="" width={136} height={57} />

      <h2
        className={classNames(
          daysOne.className,
          "text-[30px] font-bold max-w-[300px]"
        )}
      >
        Collect reviews in real-time
      </h2>

      <p className="text-[20px]">
        Ask for reviews before your customers leave — then send them straight to
        your favorite review site with a custom QR code.
      </p>

      <SecondaryButton text="Generate Reviews" />
    </div>
  );
};

export default CollectReviews;
