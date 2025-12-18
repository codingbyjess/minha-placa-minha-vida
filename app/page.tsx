import { Grid } from "@mui/material";
import BoxService from "./containers/box-service/BoxService";
import Hero from "./containers/hero/Hero";
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="p-10">
        <h1 className="text-3xl text-foreground font-bold">
          Seu equipamento em boas mãos
        </h1>
        <div className="mt-4">
          <h3 className="
                whitespace-normal 
                xl:whitespace-nowrap 
                text-foreground"
          >
            Com um{" "}
            <span className="text-(--third)">time especializado e tecnologia avançada</span>
            , cuidamos do seu equipamento como se fosse nosso.
          </h3>
        </div>
      </section>

      <section className="p-10">
        <h1 className="text-3xl text-foreground font-bold">Nossos serviços</h1>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <div className="w-180">
            <BoxService />
            <BoxService />
            <BoxService />
            <BoxService />
          </div>
        </div>
      </section>
    </main>
  );
}
