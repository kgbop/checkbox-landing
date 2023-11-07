"use client";
import Image from "next/image";
import { Days_One } from "next/font/google";
import classNames from "classnames";

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });

export const OfferBlock = () => {
  const includedFeatures = [
    "Review Funnels tailored for you",
    "Help to get started (business accounts set up)",
    "Enhanced Online Reputation",
    "24/7 Support",
  ];

  return (
    <section className="pb-[125px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-[25px] lg:grid-cols-1 border border-black rounded-2xl overflow-hidden">
          <div className="flex flex-col justify-center p-8 lg:order-1">
            <h2
              className={classNames(
                daysOne.className,
                "text-[30px] font-bold tracking-tight text-gray-900"
              )}
            >
              Try Checkbox today
            </h2>
            <p className="mt-6 text-[20px]">
              Elevate your business's online reputation with Checkbox.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4
                className={classNames(
                  daysOne.className,
                  "flex-none text-[20px] font-semibold leading-6"
                )}
              >
                What’s included
              </h4>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-[20px] leading-6 sm:grid-cols-2">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {/* Make sure to adjust your Image component to control its size or provide a container */}
                  <Image
                    src="/images/check.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing component - this will be at the bottom when in single column layout */}
          <div className="flex flex-col justify-center p-8 bg-[#E3E3E3] py-10 text-center m-10 border border-black rounded-2xl">
            <div className="mx-auto max-w-xs px-2">
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span
                  className={classNames(
                    daysOne.className,
                    "text-5xl font-bold tracking-tight text-gray-900"
                  )}
                >
                  $49
                </span>
                <span className="text-sm font-bold leading-6 tracking-wide">
                  USD / month
                </span>
              </p>
              <a
                href="#"
                className="mt-5 block w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:ring focus-visible:ring-indigo-600 focus-visible:ring-opacity-50"
              >
                Start free trial
              </a>
              <p className="mt-5 text-s leading-5">+ 1-month free trial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBlock;
