import Image from "next/image";
import { Star } from "lucide-react";
import { Autour_One } from "next/font/google";
import Discover from "@/components/AboutUs/Discover";
import Founder from "@/components/AboutUs/Founder";
import Mission from "@/components/AboutUs/Mission";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Discover />
      <Mission />
      <Founder />
    </main>
  );
}
