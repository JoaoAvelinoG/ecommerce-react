import { Container } from '@/components/Container';
import { TimerIcon } from 'lucide-react';

export const DailyOffer = () => {
  return (
    <>
      <Container>
        <div className='daily-offer-header w-full flex items-center justify-between text-white py-2 bg-amber-500 px-4'>
          <div className='daily-offer-header__title flex items-center gap-3'>
            <TimerIcon />
            <div className='leading-none'>
              <h1 className='text-normal font-bold'>Dia do Cliente</h1>
              <span className='text-sm'>
                Ofertas para clientes especiais. Aproveite!
              </span>
            </div>
          </div>
          <div className='daily-offer-header__countdown'>
            <div className='flex gap-3'>
              <span className='hidden md:inline-flex'>Oferta termina em:</span>
              <span>12:15:30</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
