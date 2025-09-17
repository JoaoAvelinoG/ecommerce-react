import { Container } from '@/components/Container';

import { DailyOfferHeader } from './DailyOfferHeader';
import { ProductSlider } from '@/components/Default/ProductSlider/ProductSlider';

import { mockProducts } from '@/data/mockProducts';

export const DailyOffer = () => {
  // TODO: Substituir por dados reais de uma API ou estado global

  return (
    <>
      <Container className='px-4'>
        <DailyOfferHeader />
        <ProductSlider data={mockProducts} sliderType='fastOffers' />
      </Container>
    </>
  );
};
