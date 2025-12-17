import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-180 md:h-(400px)">
            <Image
                alt="Imagem de uma placa-mãe"
                src='/background-image.png'
                fill
                className="object-cover opacity-35 blur-xs"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="
                font-bold whitespace-normal 
                xl:whitespace-nowrap 
                text-4xl 
                sm:text-5xl 
                md:text-6xl 
                text-foreground"
                >
                    Soluções{" "}
                    <span className="text-(--third)">premium</span>{" "}
                    para seu aparelho
                </h1>

                <strong className="text-foreground mt-20 max-w-xl sm:text-3xl">
                    Micro-soldagem · Limpeza de Computadores · Recuperação de Placas de Eletrodomésticos
                </strong>

                <div className="whitespace-nowrap mt-20 space-x-4">
                    <button className="
                    mt-8 
                    px-6 
                    py-3 
                    bg-(--third) 
                    text-foreground 
                    rounded-xl 
                    hover:bg-(--second) 
                    transition 
                    cursor-pointer"
                    >
                        Quero um orçamento
                    </button>
                    <button className="
                    mt-8 
                    px-6 
                    py-3 
                    bg-transparent 
                    text-foreground 
                    rounded-xl 
                    border-2 
                    border-foreground 
                    transition 
                    cursor-pointer"
                    >
                        Falar com um consultor
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;