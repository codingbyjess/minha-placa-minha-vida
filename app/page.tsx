import FirstSection from "./containers/first-section/firstSection";
import FourthSection from "./containers/fourth-section/FourthSection";
import Hero from "./containers/hero/Hero";
import SecondSection from "./containers/second-section/SecondSection";
import ThirdSection from "./containers/third-section/ThirdSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
}
