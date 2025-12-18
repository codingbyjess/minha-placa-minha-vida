import BoxService from "./containers/box-service/BoxService";
import Hero from "./containers/hero/Hero";

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
            <span className="text-(--third)">
              time especializado e tecnologia avançada
            </span>
            , cuidamos do seu equipamento como se fosse nosso.
          </h3>
        </div>
      </section>

      <section className="p-10">
        <h1 className="text-3xl text-foreground font-bold">
          Nossos serviços
        </h1>
        <div className="relative justify-items-center">
          <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-10 
          mt-5"
          >
            <div>
              <BoxService
                icon="devBoard"
                title="Micro-soldagem"
              />
              <BoxService
                icon="cleaningServices"
                title="Limpeza de Computadores"
              />
            </div>
            <div className="mt-20">
              <BoxService
                icon="memory"
                title="Recuperação de Placas de Eletrodomésticos"
              />
              <BoxService
                icon="computer"
                title="Formatações"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
