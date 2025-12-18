'use client';
import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
    href: string,
    bgColor: string,
    hoverColor?: string,
    bdColor?: string,
    text: string
}

const Button = ({ href, bgColor, hoverColor, bdColor, text }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href}>
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    backgroundColor: isHovered ? hoverColor : bgColor,
                    borderColor: bdColor ?? bgColor,
                    borderWidth: bdColor ? 2 : 0,
                    borderStyle: 'solid',
                    borderRadius: '0.75rem',
                    marginTop: '2rem',      
                    paddingLeft: '1.5rem',   
                    paddingRight: '1.5rem',  
                    paddingTop: '0.75rem',  
                    paddingBottom: '0.75rem',
                    transition: '0.3s',
                    cursor: 'pointer',
                    color: 'var(--foreground)', 
                    outline: 'none'
                }}
            >
                {text}
            </button>
        </Link>
    );
}

export default Button;