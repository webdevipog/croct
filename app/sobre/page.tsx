import { fetchContent } from "@croct/plug-next/server"
import Image from "next/image"

interface SobreContent {
  titulo: string;
  subtitulo: string;
  descricao: string;
  features: Array<{
    titulo: string;
    descricao: string;
    icone: string;
  }>;
  chamadaAcao: {
    titulo: string;
    botao: {
      texto: string;
      url: string;
    };
  };
}

export default async function SobrePage() {
  try {
    // Buscar conteúdo do slot "sobre-empresa"
    const {content} = await fetchContent("sobre-empresa@1");
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {content.titulo || "Sobre Nossa Empresa"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {content.subtitulo || "Inovação e excelência em cada projeto"}
            </p>
          </div>

          {/* Descrição principal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.descricao || "Conteúdo em desenvolvimento..."}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {(content.features || []).map((feature: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icone || "⭐"}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.titulo || `Feature ${index + 1}`}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.descricao || "Descrição da feature"}
                </p>
              </div>
            ))}
          </div>

          {/* Chamada para ação */}
          <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {content.chamadaAcao?.titulo || "Pronto para começar?"}
            </h2>
            <a
              href={content.chamadaAcao?.botao?.url || "/contato"}
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {content.chamadaAcao?.botao?.texto || "Entre em Contato"}
            </a>
          </div>

          {/* Link para voltar */}
          <div className="text-center mt-8">
            <a 
              href="/" 
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              ← Voltar para página inicial
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar conteúdo da página sobre:", error);
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Erro ao carregar conteúdo
          </h1>
          <p className="text-red-600 mb-4">
            Não foi possível conectar com o Croct
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Configure o slot "sobre-empresa@1" no Croct para ver esta página
          </p>
          <a 
            href="/" 
            className="text-indigo-600 hover:text-indigo-800"
          >
            ← Voltar para página inicial
          </a>
        </div>
      </div>
    );
  }
}