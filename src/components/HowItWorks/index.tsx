"use client";

import Image from "next/image";

const HowItWorks = () => {
  const items = [
    {
      title: "Choose",
      text: "Tons of options: funnel layout, email, SMS, Invite, in-product widgets, QR codes.",
      img: "img-2.png",
    },
    {
      title: "Generate",
      text: "Automate and start seamlessly generating. Make leaving a review effortless.",
      img: "img-3.png",
    },
    {
      title: "Build Trust",
      text: "Showcase new reviews on your website and turn first-time visitors into repeat customers.",
      img: "img-4.png",
    },
  ];

  return (
    <section
      className="pt-[113px] pb-[270px]"
      style={{ backgroundImage: `url(/images/bg.png)` }}
    >
      <div className="container">
        <h2 className="text-[40px] text-[#000] font-bold text-center mb-[55px]">
          How it works
        </h2>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-8">
          {items.map((item) => (
            <div className="border border-[#000] p-5 rounded-[10px] text-[#000] bg-white">
              <div className="mb-[10px] h-[255px] relative">
                <Image src={`/images/${item.img}`} alt="" layout="fill" />
              </div>

              <h3 className="text-[36px] font-bold">{item.title}</h3>

              <p className="text-[20px] leading-[120%]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
