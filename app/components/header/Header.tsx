'use client';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="relative flex items-center justify-between px-10 py-5 border-2 border-(--third)">

            <Image
                src="/minha-placa-minha-vida-icon.png"
                alt="Minha Placa Minha Vida"
                width={50}
                height={50}
            />

            <nav className="flex gap-8 max-[490px]:hidden">
                <span className="text-(--second) cursor-pointer">Serviços</span>
                <span className="text-(--second) cursor-pointer">Diagnóstico</span>
                <span className="text-(--second) cursor-pointer">Suporte</span>
            </nav>

            <button
                onClick={handleOpenMenu}
                className="hidden max-[490px]:flex flex-col gap-1"
                aria-label="Abrir menu"
            >
                <span className="w-6 h-0.5 bg-(--second)" />
                <span className="w-6 h-0.5 bg-(--second)" />
                <span className="w-6 h-0.5 bg-(--second)" />
            </button>

            {openMenu && (
                <div className="absolute top-full right-0 w-full border-2 border-(--third) flex flex-col items-center gap-4 py-6">
                    <span className="text-(--second)">Serviços</span>
                    <span className="text-(--second)">Diagnóstico</span>
                    <span className="text-(--second)">Suporte</span>
                </div>
            )}
        </header>
    );
};

export default Header;
