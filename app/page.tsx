import Specialties from "./containers/specialties/Specialties";
import Diagnosis from "./containers/diagnosis/Diagnosis";
import Hero from "./containers/hero/Hero";
import Services from "./containers/services/Services";
import Review from "./containers/review/Review";
import Guarantees from "./containers/guarantees/Guarantees";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specialties />
      <Services />
      <Guarantees />
      <Review />
      <Diagnosis />
    </main>
  );
}
