import Image from 'next/image';

type Tone = 'gris' | 'blanco' | 'beige' | 'negro';

const sizes = {
  'logo-principal': { width: 1600, height: 296 },
  isologo: { width: 1600, height: 483 },
  'logo-secundario': { width: 894, height: 1600 },
};

type LogoProps = {
  variant?: keyof typeof sizes;
  tone?: Tone;
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = 'logo-principal', tone = 'gris', className = 'h-6 w-auto', priority }: LogoProps) {
  const { width, height } = sizes[variant];
  return (
    <Image
      src={`/images/marca/${variant}-${tone}.png`}
      alt="COCO Concrete Company"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
