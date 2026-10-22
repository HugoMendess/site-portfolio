/** @type {import('next').NextConfig} */
// output: "export" gera um site estático na pasta /out (ideal para Vercel, Netlify ou GitHub Pages).
const nextConfig = { output: "export", images: { unoptimized: true } };
export default nextConfig;
