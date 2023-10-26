import Image from "next/image";
import { Button } from "@src/components";
import { Metadata } from "next";
import {Days_One, Lato} from "next/font/google";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Pricing",
  description: "",
};

const daysOne = Days_One({ weight: ["400"], subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

function Pricing() {
  const tableValues = [
    { label: "Dashboards", cell1: true, cell2: true, addon: false },
    { label: "Funnels", cell1: true, cell2: true, addon: false },
    { label: "Graphs & trends", cell1: true, cell2: true, addon: false },
    { label: "Paths", cell1: true, cell2: true, addon: false },
    {
      label: "Insight & dashboard subscriptions",
      cell1: false,
      cell2: true,
      addon: false,
    },
    { label: "Dashboard permissions", cell1: false, cell2: true, addon: false },
    { label: "Tags & text cards", cell1: false, cell2: true, addon: false },
    { label: "Correlation analysis", cell1: false, cell2: true, addon: false },
    { label: "Dashboard tags", cell1: false, cell2: true, addon: false },
    { label: "Lifecycle cohorts", cell1: false, cell2: true, addon: false },
    { label: "Group analytics", cell1: false, cell2: true, addon: true },
  ];

  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-[1fr_1.2fr] pt-[70px] gap-4 md:grid-cols-[1fr]">
          <div className="max-w-[400px]">
            <h1
              className={classNames(
                daysOne.className,
                "text-[38px] text-[#000]"
              )}
            >
              Pricing
            </h1>
            <p className="text-[18px]">
              Use Checkbox free forever (with generous usage limits). Or pay per
              use and get unrestricted access to everything.
            </p>
          </div>

          <div className="h-[173px] border border-[#000] rounded-[10px]">
            <Image
              src="/images/icon-5.svg"
              alt=""
              width={92}
              height={96}
              className="ml-5"
            />
          </div>
        </div>

        <div
          className={classNames(
              lato.className,
            "grid grid-cols-[1fr_1.2fr] pt-[70px] gap-4 md:grid-cols-[1fr]"
          )}
        >
          <div className="max-w-[340px]">
            <p className="text-[15px] font-bold">
              Checkbox ships with all products
            </p>
            <p className="text-[14px]">
              Generous free usage on every product.
            </p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] gap-4 sm:grid-cols-[1fr]">
            <div>
              <p className="text-[#000] text-[15px] font-bold">Free</p>
              <p className=" text-[14px] mb-3">
                Generous free usage on every business. Best for small businesses.
              </p>
              <Button text="Get started - free" className="w-full" />
            </div>

            <div>
              <p className="text-[#000] text-[15px] font-bold">
                Paid - $99/month
              </p>
              <p className="text-[14px] mb-3">
                Generous free usage on every product. Best for early-stage
                startups and hobbyists.
              </p>
              <Button text="Get started - free" className="w-full" />
            </div>
          </div>
        </div>

        <table className="border border-[#000] w-full mt-14 mb-[140px] rounded-[10px] border-separate px-5 py-7">
          <tbody>
            {tableValues.map((item, index) => (
              <tr key={index} className="[&>td]:p-[5px]">
                <td className={classNames(lato.className, "w-1/2 md:w-2/3")}>
                  <span className="border-b border-b-[rgba(20,20,20,0.50)] text-[14px] font-bold">
                    {item.label}
                  </span>
                  {item.addon && (
                    <span className="bg-[#E5E7E0] py-1 px-2 ml-3 rounded-md text-[12px] text-[#8F8F8C]">
                      Addon
                    </span>
                  )}
                </td>
                <td className="w-1/4 md:w-1/6">
                  {item.cell1 ? (
                    <svg className="h-5 w-5" aria-hidden="true">
                      <use xlinkHref="/sprites/sprite.svg#true"></use>
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" aria-hidden="true">
                      <use xlinkHref="/sprites/sprite.svg#false"></use>
                    </svg>
                  )}
                </td>
                <td className="w-1/4 md:w-1/6">
                  {item.cell2 ? (
                    <svg className="h-5 w-5" aria-hidden="true">
                      <use xlinkHref="/sprites/sprite.svg#true"></use>
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" aria-hidden="true">
                      <use xlinkHref="/sprites/sprite.svg#false"></use>
                    </svg>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Pricing;
