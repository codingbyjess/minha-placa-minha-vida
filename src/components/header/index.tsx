'use client';
import Image from 'next/image';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const navItems = [
        { label: 'Serviços', href: '#' },
        { label: 'Diagnóstico', href: '#' },
        { label: 'Suporte', href: '#' },
    ];

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="
        relative 
        flex 
        items-center 
        justify-between 
        px-10 
        py-5 
        border-2 
        border-(--third)"
        >

            <Image
                src="/minha-placa-minha-vida-icon.png"
                alt="Minha Placa Minha Vida"
                width={50}
                height={50}
            />

            <nav className="flex gap-8 max-sm:hidden">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="
                        text-(--second) 
                        hover:text-(--third) 
                        transition"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <button
                onClick={handleOpenMenu}
                className="hidden max-sm:flex flex-col gap-1"
                aria-label="Abrir menu"
            >
                <MenuIcon sx={{ fontSize: 50, color: 'var(--second)' }} />
            </button>

            {openMenu && (
                <div className="
                absolute 
                top-full 
                right-0 
                w-full 
                border-2 
                border-(--third)
                flex 
                flex-col 
                items-center 
                gap-4 
                py-3
                sm:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                            text-(--second) 
                            hover:text-(--third)
                            transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
