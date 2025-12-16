import type {ReactElement} from 'react';
import {fetchContent} from '@croct/plug-next/server';

export default async function LpCapacitacaoParaAplicadoresAbaEad(): Promise<ReactElement> {
  const {content} = await fetchContent('lp-capacitacao-para-aplicadores-aba-ead@2');

  return (
    <ul>
      <li>
        <strong>Hero</strong>
        <ul>
          {content.hero.preTitle && (
            <li><strong>Pre-title:</strong> {content.hero.preTitle}</li>
          )}
          <li><strong>Heading:</strong> {content.hero.heading}</li>
          {content.hero.tag && (
            <li><strong>Tag:</strong> {content.hero.tag}</li>
          )}
          <li><strong>Tagline:</strong> {content.hero.tagline}</li>
          <li><strong>Image:</strong> {content.hero.image}</li>
          <li>
            <strong>Card</strong>
            <ul>
              {content.hero.card.title && (
                <li><strong>Title:</strong> {content.hero.card.title}</li>
              )}
              <li>
                <strong>Full price</strong>
                <ul>
                  <li><strong>Value:</strong> {content.hero.card.fullPrice.value}</li>
                  {content.hero.card.fullPrice.label && (
                    <li><strong>Label:</strong> {content.hero.card.fullPrice.label}</li>
                  )}
                </ul>
              </li>
              <li>
                <strong>Alternate price</strong>
                <ul>
                  <li><strong>Installments:</strong> {content.hero.card.alternatePrice.installments}</li>
                  <li><strong>Value:</strong> {content.hero.card.alternatePrice.value}</li>
                  <li><strong>Label:</strong> {content.hero.card.alternatePrice.label}</li>
                </ul>
              </li>
              <li><strong>CTA label:</strong> {content.hero.card.ctaLabel}</li>
              {content.hero.card.color && (
                <li><strong>Color:</strong> {content.hero.card.color}</li>
              )}
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Highlights</strong>
        <ul>
          {content.highlights.title && (
            <li><strong>Title:</strong> {content.highlights.title}</li>
          )}
          <li>
            <strong>Items</strong>
            <ol>
              {content.highlights.items.map((item, index) => (
                <li key={index}>
                  <ul>
                    <li><strong>Image:</strong> {item.image}</li>
                    <li><strong>Text:</strong> {item.text}</li>
                  </ul>
                </li>
              ))}
            </ol>
          </li>
        </ul>
      </li>
    </ul>
  );
};
