import Hero from "./containers/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="p-10">
        <h1 className="text-3xl text-foreground font-bold ">
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
    </main>
  );
}
