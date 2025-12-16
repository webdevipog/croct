import { fetchContent } from "@croct/plug-next/server"
import Image from "next/image"

export default async function SobrePage() {
  try {
    // Buscar conteúdo do slot "sobre-empresa1" versão 2
    const {content} = await fetchContent("sobre-empresa1@2");
    
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
            {[
              {
                titulo: "Inovação",
                descricao: "Sempre buscamos as tecnologias mais avançadas para criar soluções únicas",
                icone: "🚀"
              },
              {
                titulo: "Qualidade", 
                descricao: "Nossos produtos passam por rigorosos testes de qualidade",
                icone: "✨"
              },
              {
                titulo: "Suporte",
                descricao: "Oferecemos suporte completo em todas as etapas do projeto",
                icone: "🤝"
              }
            ].map((feature: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icone}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.descricao}
                </p>
              </div>
            ))}
          </div>

          {/* Chamada para ação */}
          <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h2>
            <a
              href="/contato"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Entre em Contato
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
    
    // Fallback para conteúdo estático
    const content = {
      titulo: "Sobre Nossa Empresa",
      subtitulo: "Inovação e excelência em cada projeto", 
      descricao: "Somos uma empresa dedicada a criar soluções tecnológicas inovadoras que transformam a maneira como as pessoas interagem com a tecnologia. Com uma equipe experiente e apaixonada por desafios, desenvolvemos produtos que fazem a diferença no mercado e na vida dos nossos clientes."
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {content.titulo}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {content.subtitulo}
            </p>
          </div>

          {/* Descrição principal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {content.descricao}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                titulo: "Inovação",
                descricao: "Sempre buscamos as tecnologias mais avançadas para criar soluções únicas",
                icone: "🚀"
              },
              {
                titulo: "Qualidade", 
                descricao: "Nossos produtos passam por rigorosos testes de qualidade",
                icone: "✨"
              },
              {
                titulo: "Suporte",
                descricao: "Oferecemos suporte completo em todas as etapas do projeto",
                icone: "🤝"
              }
            ].map((feature: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icone}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.descricao}
                </p>
              </div>
            ))}
          </div>

          {/* Chamada para ação */}
          <div className="bg-indigo-600 dark:bg-indigo-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h2>
            <a
              href="/contato"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Entre em Contato
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
  }
}