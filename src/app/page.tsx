import Diagnosis from "@/src/containers/diagnosis/Diagnosis";
import Guarantees from "@/src/containers/guarantees/Guarantees";
import Hero from "@/src/containers/hero/Hero";
import Review from "@/src/containers/review/Review";
import Services from "@/src/containers/services/Services";
import Specialties from "@/src/containers/specialties/Specialties";


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
