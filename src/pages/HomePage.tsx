import { SecondarySlider } from '@/components/Default/SecondarySlider/SecondarySlider';
import { Grid, type ImageItem } from '@/components/Grid';
import { DailyOffer } from '@/components/Home/DailyOffer/DailyOffer';
import { BannerHighlights } from '@/components/Home/MainBanner/BannerHighlights';
import { MainBanner } from '@/components/Home/MainBanner/MainBanner';

import { Apagar } from '@/components/Apagar';
import { useGeneralStore } from '@/stores/useGeneralStore';
import { useEffect } from 'react';

export default function HomePage() {
  const { currentPageData, setCurrentPageData } = useGeneralStore();

  // Executa efeitos colaterais.
  useEffect(() => {
    setCurrentPageData({
      title: 'Loja de Artigos Esportivos Online',
      description: 'Página inicial da Netshoes',
    });
  }, [setCurrentPageData]);

  useEffect(() => {
    console.log('Homepage data updated: ', currentPageData);
    document.title =
      currentPageData?.title || 'Loja de Artigos Esportivos Online';
  }, [currentPageData]);

  // TODO: Substituir por dados vindos da API ou estado global
  const sliderData = [
    { id: 1, name: 'Tênis', image: 'https://placehold.co/120x120' },
    { id: 2, name: 'Chuteiras', image: 'https://placehold.co/120x120' },
    { id: 3, name: 'Camisas de Time', image: 'https://placehold.co/120x120' },
    { id: 4, name: 'Suplementos', image: 'https://placehold.co/120x120' },
    { id: 5, name: 'Camisetas', image: 'https://placehold.co/120x120' },
    { id: 6, name: 'Inverno', image: 'https://placehold.co/120x120' },
    { id: 7, name: 'Mochilas', image: 'https://placehold.co/120x120' },
  ];

  const sliderData2 = [
    { id: 1, image: 'https://placehold.co/120x120' },
    { id: 2, image: 'https://placehold.co/120x120' },
    { id: 3, image: 'https://placehold.co/120x120' },
    { id: 4, image: 'https://placehold.co/120x120' },
    { id: 5, image: 'https://placehold.co/120x120' },
    { id: 6, image: 'https://placehold.co/120x120' },
    { id: 7, image: 'https://placehold.co/120x120' },
  ];

  // TODO: Substituir por dados vindos da API ou estado global
  const feedData: ImageItem[] = [
    {
      image: 'https://placehold.co/410x410',
      description: 'Produto 1',
      link: 'https://www.netshoes.com.br',
    },
    {
      image: 'https://placehold.co/410x410',
      description: 'Produto 2',
      link: 'https://www.netshoes.com.br',
    },
    {
      image: 'https://placehold.co/410x410',
      description: 'Produto 3',
      link: 'https://www.netshoes.com.br',
    },
  ];

  return (
    <>
      <MainBanner />
      <BannerHighlights />
      <DailyOffer />
      <SecondarySlider
        id='destaques'
        title='Na Netshoes também tem!'
        data={sliderData}
      />
      <Grid title='Novidades' data={feedData} />
      <SecondarySlider
        id='marcas'
        title='Navegue por Marcas'
        data={sliderData2}
      />
      <Apagar />
    </>
  );
}
