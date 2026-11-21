import Image from 'next/image';

type ImageTriptychProps = {
  images: { src: string; alt: string }[];
  priority?: boolean;
};

// Tres fotos verticales en fila (en mobile se ve solo la primera).
export function ImageTriptych({ images, priority }: ImageTriptychProps) {
  return (
    <div className="grid gap-3 md:grid-cols-3 md:gap-6">
      {images.map((img, i) => (
        <div key={img.src} className={`relative aspect-[4/5] overflow-hidden ${i > 0 ? 'hidden md:block' : ''}`}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={priority && i === 0}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
