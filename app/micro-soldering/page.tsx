import Image from "next/image";

export default function MicroSolderingPage() {
    return (
        <main className="p-10">
            <div className="grid grid-cols-1 justify-items-center gap-20 p-10">
                <h1 className="
                text-4xl
                md:text-6xl 
                text-foreground
                font-bold
                text-center"
                >
                    Micro-soldagem não é tentativa.
                </h1>

                <h2 className="
                text-3xl
                md:text-5xl 
                text-(--third)
                font-bold
                text-center"
                >
                    É precisão absoluta
                </h2>

                <h3 className="
                text-2xl 
                text-foreground
                font-bold
                text-center"
                >
                    Reparamos placas eletrônicas a nível microscópico,
                    corrigindo falhas que a maioria das assistências
                    considera perda total.
                </h3>
                <Image
                    alt="Imagem de um homem fazendo micro-soldagem"
                    src='/micro-soldering.png'
                    width={400}
                    height={350}
                    className="object-cover"
                />
            </div>

            <div className="grid grid-cols-2 mt-5">
                <div className="justify-items-center">
                    <h1 className="text-foreground text-5xl font-bold">
                        Recupere sua placa com especialistas em {" "}
                        <span className="
                        text-(--third) 
                        text-5xl 
                        font-bold"
                        >
                            micro-soldagem
                        </span>
                    </h1>
                </div>
                <div className="border-2 border-(--second) p-6 rounded-lg">
                    <p className="text-foreground text-2xl font-bold">
                        Recupere sua placa com especialistas em {" "}
                        <span className="
                        text-(--third) 
                        text-5xl 
                        font-bold"
                        >
                            micro-soldagem
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}