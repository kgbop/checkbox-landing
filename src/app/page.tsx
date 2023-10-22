import type { Metadata } from "next";
import { Personalized, HowItWorks } from "@src/components";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <HowItWorks />
      <Personalized />
    </main>
  );
}
