import Image, { StaticImageData } from "next/image";
import { JSX } from "react";
import { getUrl } from "@/lib/firebase";

const FALLBACK_SRC = "/fallback-image.png";

interface ImagePProps {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
}

async function ImageP({ src, width = 640, height = 640, alt = "image" }: ImagePProps): Promise<JSX.Element> {
  let resolvedSrc: string | StaticImageData = src;
  let isFallbackImage = false;

  if (typeof src === "string") {
    try {
      resolvedSrc = await getUrl(src);
    } catch (error) {
      console.warn(`Failed to load storage asset "${src}". Falling back.`, error);
      resolvedSrc = FALLBACK_SRC;
      isFallbackImage = true;
    }
  }

  return (
    <>
      {isFallbackImage && <span className="text-red-500"> Image not available </span>}
      <Image
        loading="lazy"
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4//8/AwAI/AL+7VSuVQAAAABJRU5ErkJggg=="
        className="relative rounded-4xl w-full max-w-lg mx-auto img-fade-in object-cover"
      />
    </>
  );
}

export default ImageP;


