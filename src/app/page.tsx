import type { Metadata } from "next";
import { Personalized } from "@src/components";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main>
      <Personalized />
    </main>
  );
}
