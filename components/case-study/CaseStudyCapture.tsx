import Image from "next/image";

type CaseStudyCaptureProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function CaseStudyCapture({ src, alt, priority = false }: CaseStudyCaptureProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border-subtle/28 bg-background/20">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 72ch"
        priority={priority}
      />
    </figure>
  );
}
