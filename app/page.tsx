import FirstSection from "./containers/first-section/firstSection";
import Hero from "./containers/hero/Hero";
import SecondSection from "./containers/second-section/SecondSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
    </main>
  );
}
