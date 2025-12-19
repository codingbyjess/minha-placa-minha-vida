'use client';
import DiagnosisForm from '@/src/components/form';
import { useSearchParams } from 'next/navigation';

export default function DiagnosisFormPage() {
    const searchParams = useSearchParams();
    const selectedService = searchParams.get('service') || 'geral';

    return (
        <main className="
        min-h-screen
        p-10 
        flex 
        flex-col 
        items-center 
        justify-center 
        bg-background"
        >
            <div className="w-full max-w-3xl">
                <h1 className="
                text-foreground 
                text-4xl 
                font-bold 
                text-center 
                mb-4"
                >
                    Formulário de{" "}
                    <span className="text-(--third)">
                        Triagem
                    </span>
                </h1>
                <p className="
                text-foreground/60 
                text-center 
                mb-10"
                >
                    Você está solicitando orçamento para:{" "}
                    <strong>
                        {selectedService.replace('-', ' ')}
                        </strong>
                </p>

                <DiagnosisForm serviceName={selectedService} />
            </div>
        </main>
    );
}