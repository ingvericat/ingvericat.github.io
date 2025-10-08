import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}