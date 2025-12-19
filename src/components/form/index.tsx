'use client'
import { useState } from 'react';
import Image from 'next/image';

interface DiagnosisFormProps {
    serviceName: string
}

const DiagnosisForm = (
    { serviceName }: DiagnosisFormProps
) => {
    const [formData, setFormData] = useState({
        deviceType: '',
        problem: '',
        model: '',
        previousRepair: 'Não',
        liquidDamage: 'Não'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Olá! Meu ${formData.deviceType} (${formData.model}) 
        está com o seguinte problema: ${formData.problem}. 
        Previamente mexido: ${formData.previousRepair}. 
        Contato com líquido/queda: ${formData.liquidDamage}. 
        Gostaria de um orçamento para o serviço de ${serviceName}.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "5532985043788";

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const inputClass = "w-full bg-transparent border border-(--second) rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-(--third) transition";
    const labelClass = "text-foreground text-lg font-semibold mb-2 block";

    return (
        <form
            onSubmit={handleSubmit}
            className="
        border-2 
        border-(--second) 
        rounded-3xl 
        p-8 
        bg-foreground/5 
        space-y-6 
        max-w-3xl 
        mx-auto"
        >
            <div className="
            flex 
            items-center 
            gap-4 
            border-b 
            border-(--second) 
            pb-4 
            mb-6"
            >
                <Image
                    src="/minha-placa-minha-vida-icon.png"
                    alt="Minha Placa Minha Vida"
                    width={50}
                    height={50}
                />
                <p className="text-foreground/80 text-sm">
                    Preencha os dados abaixo para que nossa equipe
                    técnica possa realizar uma análise precisa.
                </p>
            </div>
            <div>
                <label className={labelClass}>
                    Qual é o{" "}
                    <span className="text-(--third)">tipo</span>
                    {" "}do seu aparelho?
                </label>
                <input
                    type="text"
                    placeholder="Ex: Notebook, Placa de Vídeo, MacBook..."
                    className={inputClass}
                    onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                    required
                />
            </div>
            <div>
                <label className={labelClass}>
                    Digite o{" "}
                    <span className="text-(--third)">
                        nome/modelo
                    </span>
                    {" "}do aparelho:
                </label>
                <input
                    type="text"
                    placeholder="Ex: Dell G15, RTX 3080, iPhone 13..."
                    className={inputClass}
                    onChange={(e) =>
                        setFormData({ ...formData, model: e.target.value })
                    }
                    required
                />
            </div>
            <div>
                <label className={labelClass}>
                    Descreva o{" "}
                    <span className="text-(--third)">
                        problema
                    </span>
                    {" "}do seu aparelho:
                </label>
                <textarea
                    placeholder="Descreva detalhadamente o que aconteceu..."
                    className={`${inputClass} h-32 resize-none`}
                    onChange={(e) =>
                        setFormData({ ...formData, problem: e.target.value })
                    }
                    required
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClass}>
                        Já passou por{" "}
                        <span className="text-(--third)">
                            assistência
                        </span>
                        ?
                    </label>
                    <select
                        className={inputClass}
                        onChange={(e) =>
                            setFormData({ ...formData, previousRepair: e.target.value })
                        }
                    >
                        <option value="Não">Não</option>
                        <option value="Sim">Sim</option>
                    </select>
                </div>
                <div>
                    <label className={labelClass}>
                        Teve contato com{" "}
                        <span className="text-(--third)">
                            líquido
                        </span>
                        ?
                    </label>
                    <select
                        className={inputClass}
                        onChange={(e) =>
                            setFormData({ ...formData, liquidDamage: e.target.value })
                        }
                    >
                        <option value="Não" className="bg-background text-foreground">Não</option>
                        <option value="Sim" className="bg-background text-foreground">Sim</option>
                    </select>
                
                </div>
            </div>

            <button
                type="submit"
                className="
                w-full 
                bg-(--third) 
                hover:bg-(--second)
                text-foreground 
                font-bold 
                py-4 
                rounded-xl 
                transition 
                mt-8"
            >
                Solicitar orçamento via WhatsApp
            </button>
        </form>
    );
}

export default DiagnosisForm;