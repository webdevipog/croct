import type {ReactElement} from 'react';
import {fetchContent} from '@croct/plug-next/server';

export default async function SobreEmpresa1(): Promise<ReactElement> {
  const {content} = await fetchContent('sobre-empresa1@2');

  return (
    <ul>
      <li><strong>titulo:</strong> {content.titulo}</li>
      <li><strong>subtitulo:</strong> {content.subtitulo}</li>
      <li><strong>descricao:</strong> {content.descricao}</li>
    </ul>
  );
};
