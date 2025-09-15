import { Container } from '@/components/Container';

import { DailyOfferHeader } from './DailyOfferHeader';
import { ProductSlider } from '@/components/Default/ProductSlider/ProductSlider';
import type { Product } from '@/@types/product';

export const DailyOffer = () => {
  // TODO: Substituir por dados reais de uma API ou estado global
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Tênis Asics Upcourt 6 Masculino',
      oldPrice: 475.0,
      finalPrice: 275.49,
      paymentMethod: 'pix',
      imageUrl: 'https://placehold.co/280x280',
      badgesDiscount: '-42% OFF',
      freeShipping: true,
      productStamps: ['Novo', 'Exclusivo'],
      isOnOffer: true,
    },
    {
      id: '2',
      name: 'Relógio Skmei 1335 Digital Retrô',
      oldPrice: 120.0,
      finalPrice: 69.54,
      paymentMethod: 'pix',
      imageUrl: 'https://placehold.co/280x280',
      badgesDiscount: '-37% OFF',
      freeShipping: false,
      productStamps: ['Mais Vendido'],
      isOnOffer: true,
    },
    {
      id: '3',
      name: 'Kit 3 Camisetas Básicas Masculinas',
      oldPrice: 199.99,
      finalPrice: 114.99,
      imageUrl: 'https://placehold.co/280x280',
      badgesDiscount: '-42% OFF',
      freeShipping: false,
      productStamps: ['Promoção'],
      isOnOffer: true,
    },
    {
      id: '4',
      name: 'Tênis Infantil Asics Buzz 4 GS',
      oldPrice: 349.99,
      finalPrice: 189.99,
      paymentMethod: 'pix',
      imageUrl: 'https://placehold.co/280x280',
      badgesDiscount: '-45% OFF',
      freeShipping: true,
      productStamps: ['Infantil'],
      isOnOffer: true,
    },
    {
      id: '5',
      name: 'Mochila Fila Classic',
      oldPrice: 229.9,
      finalPrice: 159.9,
      paymentMethod: 'avista',
      imageUrl: 'https://placehold.co/280x280',
      badgesDiscount: '-30% OFF',
      freeShipping: true,
      productStamps: ['Exclusivo Online'],
      isOnOffer: true,
    },
  ];

  return (
    <>
      <Container className='px-4'>
        <DailyOfferHeader />
        <ProductSlider data={mockProducts} sliderType='fastOffers' />
      </Container>
    </>
  );
};
