import BoxComments from "@/src/components/box-comments/BoxComments";

const Review = () => {
    return (
        <section className="p-10">
            <h1 className="text-3xl text-foreground font-bold">
                Depoimentos
            </h1>
            <div className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                md:gap-10 
                mt-5"
            >
                <BoxComments
                    author="Carl Caterpillar"
                    image="/carl-photo.jpeg"
                    message="
                    O que mais me chamou atenção foi o cuidado na análise. 
                    Não foi aquele orçamento genérico. Eles testaram, 
                    identificaram a falha e só depois apresentaram a solução. 
                    Isso me passou muita confiança e o resultado foi excelente."
                />

                <BoxComments
                    author="Wanda Wingleton"
                    image="/wanda-photo.jpg"
                    message="
                    Além de resolverem o problema, explicaram o que causou a falha 
                    e como evitar no futuro. Não tentaram empurrar troca de peça 
                    nem serviço desnecessário. Dá pra ver que entendem muito do 
                    que fazem."
                />
            </div>
        </section>
    );
}

export default Review;