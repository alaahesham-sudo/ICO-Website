export const metadata = {
  title: "Home - In-Call Outsourcing LLC",
  description: "Accelerate Your Business Growth - Our proven methods and experienced team will take your business to the next level.",
};

import Hero from "@/components/hero-home";
import Statistics from "@/components/statistics";
import TeamGallery from "@/components/team-gallery";
import Clients from "@/components/clients";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <TeamGallery />
      <Clients />
      <Cta />
    </>
  );
}