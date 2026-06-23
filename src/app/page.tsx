import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import SeatInsight from "@/components/SeatInsight";
import CounsellingPlans from "@/components/CounsellingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyChooseUs />
        <SeatInsight />
        <CounsellingPlans />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
