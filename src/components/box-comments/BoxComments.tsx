import Image from "next/image";

interface BoxCommentsProps {
    image: string,
    author: string,
    message: string
}

const BoxComments = ({ image, author, message }: BoxCommentsProps) => {

    return (
        <div className="
        mb-10
        bg-(--fourth)/30
        w-full
        min-h-60 
        border-2 
        border-(--second) 
        rounded-xl 
        flex 
        flex-col
        p-6
        gap-5
        overflow-hidden
        items-baseline
        "
        >

            <div className="flex items-center gap-4 ">
                <Image
                    src={image} alt={author} width={50}
                    height={50}
                    className="
                    rounded-lg 
                    object-cover 
                    aspect-square"
                />
                <h1 className="font-bold">{author}</h1>
            </div>
            <div className="div">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default BoxComments;