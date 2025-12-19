import Image from "next/image";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { notFound } from "next/navigation";
import { dataServices } from "../data/dataServices";
import Button from "@/src/components/button";

export default async function ServiceSlugPage(
    { params }: { params: Promise<{ service: string }> }
) {
    const { service } = await params;
    const data = dataServices[service as keyof typeof dataServices];

    if (!data) return notFound();

    return (
        <main className="p-10 space-y-20">
            <div className="
            grid 
            grid-cols-1 
            justify-items-center 
            gap-15
            p-10"
            >
                <h1 className="
                text-4xl 
                md:text-6xl 
                text-foreground 
                font-bold 
                text-center"
                >
                    {data.title}
                </h1>
                <h2 className="
                text-3xl
                md:text-5xl 
                text-(--third) 
                font-bold 
                text-center"
                >
                    {data.subtitle}
                </h2>
                <Image
                    alt={data.p}
                    src={data.image}
                    width={400}
                    height={350}
                    className="object-cover rounded-xl"
                />
            </div>

            <div className="
            grid 
            grid-cols-1 
            lg:grid-cols-2 
            gap-10 
            items-start"
            >
                <div className="flex flex-col gap-8">
                    <h1 className="
                    text-foreground 
                    text-4xl 
                    font-bold 
                    leading-tight"
                    >
                        {data.copy}{" "}
                        <span className="text-(--third)">
                            {data.copyGreen}
                        </span>
                    </h1>
                    <Button
                        bgColor="var(--third)"
                        href={`/form-diagnosis?service=${data.service}`}
                        text="Acessar formulário"
                        hoverColor="var(--second)"
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="
                    border-2 
                    border-(--second) 
                    p-8 
                    rounded-2xl 
                    bg-foreground/5"
                    >
                        <div className="
                        flex 
                        items-center 
                        gap-3 
                        mb-4"
                        >
                            <CheckIcon
                                sx={{
                                    color: 'var(--third)',
                                    fontSize: '2rem'
                                }}
                            />
                            <h2 className="
                            text-foreground 
                            text-2xl 
                            font-bold"
                            >
                                O que está{" "}
                                <span className="text-(--third)">
                                    incluso
                                </span>:
                            </h2>
                        </div>
                        <ul className="space-y-3">
                            {data.includeList.map((item, index) => (
                                <li key={index} className="
                                flex 
                                items-start 
                                gap-2 
                                text-foreground/80 
                                text-lg"
                                >
                                    <span className="
                                    mt-2 
                                    w-1.5
                                    h-1.5 
                                    rounded-full 
                                    bg-(--third) 
                                    shrink-0"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="
                    border-2 
                    border-(--second)
                    p-8 
                    rounded-2xl 
                    bg-foreground/5"
                    >
                        <div className="
                        flex 
                        items-center 
                        gap-3 
                        mb-4"
                        >
                            <AccessTimeIcon
                                sx={{
                                    color: 'var(--third)',
                                    fontSize: '2rem'
                                }}
                            />
                            <h2 className="
                            text-foreground 
                            text-2xl 
                            font-bold"
                            >
                                Tempo médio de{" "}
                                <span className="text-(--third)">
                                    execução
                                </span>:
                            </h2>
                        </div>
                        <ul className="space-y-3">
                            {data.timeList.map((t, index) => (
                                <li key={index} className="
                                flex 
                                items-start 
                                gap-2 
                                text-foreground/80 
                                text-lg"
                                >
                                    <span className="
                                    mt-2 
                                    w-1.5
                                    h-1.5 
                                    rounded-full 
                                    bg-(--third) 
                                    shrink-0"
                                    />
                                    <span>
                                        <strong>{t.label}:</strong>
                                        {" "}
                                        {t.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}