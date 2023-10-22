"use client";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="py-[10px] px-[15px] bg-[#000] text-white rounded-[4px]">
      {text}
    </button>
  );
};

export default Button;
