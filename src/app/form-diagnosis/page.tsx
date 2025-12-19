'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DiagnosisForm from '@/src/components/form';

function FormWrapper() {
    const searchParams = useSearchParams();
    const selectedService = searchParams.get('service') || 'geral';

    return (
        <div className="w-full max-w-3xl">
            <h1 className="text-foreground text-4xl font-bold text-center mb-4">
                Formulário de <span className="text-(--third)">Triagem</span>
            </h1>
            <p className="text-foreground/60 text-center mb-10">
                Você está solicitando orçamento para:{" "}
                <strong className="capitalize">
                    {selectedService.replace(/-/g, ' ')}
                </strong>
            </p>

            <DiagnosisForm serviceName={selectedService} />
        </div>
    );
}

export default function DiagnosisFormPage() {
    return (
        <main className="min-h-screen p-10 flex flex-col items-center justify-center bg-background">
            <Suspense fallback={<p className="text-foreground text-center">Carregando formulário...</p>}>
                <FormWrapper />
            </Suspense>
        </main>
    );
}