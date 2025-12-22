'use client';

import { useContent } from '@croct/plug-react/hooks';
import { useEffect, useState } from 'react';
import LpCtaButton from '../LpCtaButton';

export default function CroctLPTest() {
  const [mounted, setMounted] = useState(false);
  const content = useContent('lp-teste', {
    fallback: {
      imagem: "#",
      titulo: "Titulo padrão",
      ctalabel: "#",
      descricao: "descricao padrão"
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Não renderizar nada até estar montado no cliente
  if (!mounted) {
    return null;
  }

  if (!content) {
    return <div>Carregando conteúdo...</div>;
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${content.imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {content.titulo}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8">
          {content.descricao}
        </p>

        {content.ctalabel && (
          <LpCtaButton
            href={content.ctalabel}
            label="Inscreva-se"
          />
        )}
      </div>
    </section>
  );
}