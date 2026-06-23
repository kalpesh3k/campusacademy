import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SeatInsight from "@/components/SeatInsight";
import About from "@/components/About";
import Services from "@/components/Services";
import CounsellingPlans from "@/components/CounsellingPlans";
import AdmissionProcess from "@/components/AdmissionProcess";
import DocumentChecklist from "@/components/DocumentChecklist";
import BlogAndUpdates from "@/components/BlogAndUpdates";
import LiveSessions from "@/components/LiveSessions";
import Testimonials from "@/components/Testimonials";
import StudentsFeedback from "@/components/StudentsFeedback";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import LeadPopup from "@/components/LeadPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single-page Layout */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Seat Analytics Insight (10% DSE reservation mathematics) */}
        <SeatInsight />

        {/* About Campus Academy & Founder Card */}
        <About />

        {/* Educational Consulting Services Section */}
        <Services />

        {/* Counselling Pricing Packages */}
        <CounsellingPlans />

        {/* Visual 8-step DSE Timeline */}
        <AdmissionProcess />

        {/* Interactive documents checklist */}
        <DocumentChecklist />

        {/* Live streams scheduler */}
        <LiveSessions />

        {/* Admission Updates Blog posts */}
        <BlogAndUpdates />

        {/* Student Testimonials Slider & Verification screenshots */}
        <Testimonials />

        {/* Detailed WhatsApp Screenshots Feedback */}
        <StudentsFeedback />

        {/* Frequently Asked Questions accordion */}
        <FAQ />

        {/* Call/Social Channels & custom Lead Form */}
        <ContactForm />
      </main>

      {/* Site map Footer */}
      <Footer />

      {/* Constant Floating WhatsApp channel widget */}
      <FloatingWhatsApp />

      {/* Lead collection modal trigger */}
      <LeadPopup />
    </>
  );
}
