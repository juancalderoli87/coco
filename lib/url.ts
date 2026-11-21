// URL pública del sitio. En Vercel se toma del dominio de producción; NEXT_PUBLIC_SITE_URL permite fijarla al conectar el dominio propio.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');
