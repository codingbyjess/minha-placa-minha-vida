import BoxService from "@/app/components/box-service/BoxService";

const Services = () => {
    return (
        <section className="p-10">
            <h1 className="text-3xl text-foreground font-bold">
                Nossos serviços
            </h1>
            <div className="relative justify-items-center">
                <div className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                md:gap-10 
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
                    <div className="md:mt-20">
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
    );
}

export default Services;