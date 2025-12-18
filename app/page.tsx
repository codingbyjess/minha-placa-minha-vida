import Specialties from "./containers/specialties/Specialties";
import Diagnosis from "./containers/diagnosis/Diagnosis";
import Hero from "./containers/hero/Hero";
import Services from "./containers/services/Services";
import Review from "./containers/review/Review";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specialties />
      <Services />
      <Review />
      <Diagnosis />
    </main>
  );
}
