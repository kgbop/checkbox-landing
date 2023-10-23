"use client";

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className="h-12 w-[326px] rounded-[5px] border border-[#000] focus:outline-none px-4 sm:w-full"
    />
  );
};

export default Input;
