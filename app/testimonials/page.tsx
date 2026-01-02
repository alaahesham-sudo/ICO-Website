"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Testimonials from "@/components/testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="grow">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}