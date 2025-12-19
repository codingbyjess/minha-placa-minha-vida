import Button from "@/src/components/button";

const Diagnosis = () => {

    return (
        <section className="p-10">
            <h1 className="text-3xl text-foreground font-bold">
                Nos conte sobre seu problema
            </h1>
            <h2 className="mt-4 mb-10">
                Preencha o formulário abaixo e receba seu diagnóstico.
                Nosso time está à disposição para te ajudar!
            </h2>
            <div className="relative justify-baseline">
                <Button
                    href=""
                    bgColor="var(--third)"
                    text="Acessar formulário"
                    hoverColor="var(--second)"
                />
            </div>
        </section>
    );
}

export default Diagnosis;