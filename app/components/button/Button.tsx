import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
    href: string,
    bgColor: string,
    hoverColor: string,
    text: string
}

const Button = ({ href, bgColor, hoverColor, text }: ButtonProps) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href}>
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    backgroundColor: isHovered ? hoverColor : bgColor,
                    transition: '0.3s'
                }}
                className="
                    mt-8 
                    px-6 
                    py-3 
                    text-foreground 
                    rounded-xl
                    cursor-pointer"
            >
                {text}
            </button>
        </Link>
    );
}

export default Button;