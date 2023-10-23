import type { Metadata } from "next";
import { Personalized, HowItWorks, Intro, SectionOne } from "@src/components";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Intro />
      <HowItWorks />
      <Personalized />
      <SectionOne />
    </main>
  );
}
