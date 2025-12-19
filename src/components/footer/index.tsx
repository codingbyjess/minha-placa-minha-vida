import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex flex-col w-full">
            <div className="
            flex 
            flex-col 
            md:flex-row 
            justify-around 
            p-10 
            gap-10"
            >
                <div className="
                w-full 
                md:w-1/2 
                flex 
                justify-center 
                md:justify-start"
                >
                    <Image
                        src="/minha-placa-minha-vida-icon.png"
                        alt="Minha Placa Minha Vida"
                        width={100}
                        height={100}
                        className='mb-5'
                    />
                </div>

                <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-3 
                w-full 
                md:w-1/2 
                gap-8"
                >
                    <div className="flex flex-col gap-3">
                        <h2 className='font-bold text-foreground mb-2'>
                            Ferramentas e Serviços
                        </h2>
                        <Link
                            href={`/form-diagnosis?service=geral`}
                            className='
                        text-foreground/70 
                        hover:text-foreground/50 
                        transition'
                        >
                            Diagnóstico
                        </Link>
                        <Link href='' className='
                        text-foreground/70 
                        hover:text-foreground/50 
                        transition'
                        >
                            Serviços
                        </Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className='font-bold text-foreground mb-2'>
                            Institucional
                        </h2>
                        <Link href='' className='
                        text-foreground/70 
                        hover:text-foreground/50 
                        transition'
                        >
                            Sobre nós
                        </Link>
                        <Link href='' className='
                        text-foreground/70 
                        hover:text-foreground/50 
                        transition'
                        >
                            Termos de uso
                        </Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className='font-bold text-foreground mb-2'>
                            Suporte
                        </h2>
                        <Link href='' className='
                        text-foreground/70 
                        hover:text-foreground/50 
                        transition'
                        >
                            Contato
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-6 border-2 border-(--third) flex justify-center items-center">
                <p className="text-(--second) text-sm text-center">
                    Copyright © 2025 Minha Placa Minha Vida LTDA - CNPJ: 00.000.000/0000-00
                </p>
            </div>
        </footer>
    );
}

export default Footer;