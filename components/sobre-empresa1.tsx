import type {ReactElement} from 'react';
import {fetchContent} from '@croct/plug-next/server';

export default async function SobreEmpresa1(): Promise<ReactElement> {
  try {
    const {content} = await fetchContent('sobre-empresa1@2');

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <ul className="space-y-4">
              <li className="text-lg"><strong>Título:</strong> {content.titulo}</li>
              <li className="text-lg"><strong>Subtítulo:</strong> {content.subtitulo}</li>
              <li className="text-lg"><strong>Descrição:</strong> {content.descricao}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar conteúdo:", error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar conteúdo</h1>
            <p className="text-gray-700 dark:text-gray-300">
              Não foi possível conectar com o Croct. Verifique as configurações.
            </p>
          </div>
        </div>
      </div>
    );
  }
};
