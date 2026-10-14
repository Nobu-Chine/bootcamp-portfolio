import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import OtherWorks from "@/components/OtherWorks";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Tools />
        <OtherWorks />
        <Approach />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
