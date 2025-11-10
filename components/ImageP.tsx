import Image, { StaticImageData } from "next/image";
import { JSX } from "react";
import { getUrl } from "@/lib/firebase";

interface ImagePProps {
    src: string | StaticImageData;
    width?: number;
    height?: number;
    alt?: string;
}

async function ImageP({ src, width, height, alt }: ImagePProps): Promise<JSX.Element> {
    const url = typeof src === "string" ? await getUrl(src) : src;
    return (
        <Image
            loading="lazy"
            src={url}
            alt={alt || "image"}
            width={width || 640}
            height={height || 640}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4//8/AwAI/AL+7VSuVQAAAABJRU5ErkJggg=="
            className="relative rounded-4xl w-full max-w-lg mx-auto img-fade-in"
        />
    );
}

export default ImageP;


