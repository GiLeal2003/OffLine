/** @type {import('next').NextConfig} */

//Atualiza partes da página conforme o usuário faz o request na página
const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };

export default nextConfig;
