import Button from "@/src/components/button";
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

            <div className="
            absolute 
            inset-0 
            flex 
            flex-col 
            items-center 
            justify-center 
            text-center"
            >
                <h1 className="
                font-bold 
                whitespace-normal 
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
                    Micro-soldagem ·
                    Limpeza de Computadores ·
                    Recuperação de Placas de Eletrodomésticos
                </strong>

                <div className="mt-20 flex flex-col sm:flex-row gap-4 sm:space-x-4">
                    <Button
                        href=""
                        text="Acessar formulário"
                        bgColor="var(--third)"
                        hoverColor="var(--second)"
                    />
                    <Button
                        href=""
                        text="Falar com um consultor"
                        bgColor="transparent"
                        bdColor="var(--foreground)"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;