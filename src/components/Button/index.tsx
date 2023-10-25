"use client";

import classNames from "classnames";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={classNames(
        "py-[10px] px-[15px] bg-[#000] text-white rounded-[4px]",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
