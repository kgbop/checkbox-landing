"use client";

import Image from "next/image";

const SecondaryButton = ({ text }: { text: string }) => {
  return (
    <button className="text-[17px] text-[#707070] font-bold flex gap-4 items-center">
      {text}
      <Image src="/images/icon-3.png" alt="" width={40} height={12} />
    </button>
  );
};

export default SecondaryButton;
