const Guarantees = () => {
    return (
        <section className="p-10">
            <h1 className="text-3xl text-foreground font-bold">
                Garantia, Segurança e Compromisso com o Seu Equipamento
            </h1>
            <div className="mt-4">
                <p className="
                whitespace-normal 
                xl:whitespace-nowrap 
                text-foreground"
                >
                    Seu equipamento é tratado com rigor técnico, transparência e máximo cuidado.
                </p>
            </div>
            <div className="mt-4">
                <ul className="list-disc gap-2 ml-4">
                    <li>
                        <h3 className="
                        whitespace-normal 
                        xl:whitespace-nowrap 
                        text-(--third)
                        text-2xl"
                        >
                            Garantia técnica{" "}
                            <span className="text-foreground">
                                em todos os serviços.
                            </span>
                        </h3>
                    </li>
                    <li>
                        <h3 className="
                        whitespace-normal 
                        xl:whitespace-nowrap 
                        text-(--third)
                        text-2xl"
                        >
                            Correção sem custo{" "}
                            <span className="text-foreground">
                                em caso de falhas relacionadas ao serviço.
                            </span>
                        </h3>
                    </li>
                    <li>
                        <h3 className="
                        whitespace-normal 
                        xl:whitespace-nowrap 
                        text-(--third)
                        text-2xl"
                        >
                            Sigilo absoluto dos seus dados
                            <span className="text-foreground">
                                ,{" "}sem acessos não autorizados.
                            </span>
                        </h3>
                    </li>
                    <li>
                        <h3 className="
                        whitespace-normal 
                        xl:whitespace-nowrap 
                        text-(--third)
                        text-2xl"
                        >
                            Processo controlado
                            <span className="text-foreground">
                                ,{" "}com diagnóstico, testes e validação final.
                            </span>
                        </h3>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Guarantees;