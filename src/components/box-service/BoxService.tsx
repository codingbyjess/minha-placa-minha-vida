'use client';
import Button from '@/src/components/button/Button';
import {
    Memory,
    DeveloperBoard,
    CleaningServices,
    Computer
} from '@mui/icons-material';

type iconName = "memory" | "devBoard" | "cleaningServices" | "computer"

type BoxServiceProps = {
    title: string,
    icon: iconName,
    href: string
};

const iconMap = {
    memory: <Memory sx={{ fontSize: 50, color: 'var(--third)' }} />,
    devBoard: <DeveloperBoard sx={{ fontSize: 50, color: 'var(--third)' }} />,
    cleaningServices: <CleaningServices sx={{ fontSize: 50, color: 'var(--third)' }} />,
    computer: <Computer sx={{ fontSize: 50, color: 'var(--third)' }} />
}

const BoxService = ({ title, icon, href }: BoxServiceProps) => {
    return (
        <div className="
        mb-10
        bg-(--fourth)/30
        w-full
        md:w-70 
        min-h-60 
        border-2 
        border-(--second) 
        rounded-xl 
        flex 
        flex-col
        p-6
        gap-5
        overflow-hidden
        items-center 
        justify-center
        "
        >

            <div className="flex justify-center">
                {iconMap[icon]}
            </div>
            <div className="flex justify-center w-full">
                <h2 className='text-2xl text-center'>{title}</h2>
            </div>
            <div className="flex justify-center">
                <Button
                    href={href}
                    bgColor='transparent'
                    text='Conhecer'
                    bdColor='var(--foreground)'
                />
            </div>
        </div>
    );
};

export default BoxService;
