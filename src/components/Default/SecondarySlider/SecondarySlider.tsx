import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { SecondarySliderItem } from '@/@types/secondarySlider';
import { Container } from '@/components/Container';

type SecondarySliderProps = {
  id: string;
  title?: string;
  data: SecondarySliderItem[];
};

export const SecondarySlider = ({
  id,
  title = '',
  data,
}: SecondarySliderProps) => {
  return (
    <Container className='px-3'>
      <div className='relative w-full mt-8'>
        {title && <h2 className='text-xl font-bold mb-8'>{title}</h2>}

        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={16}
          slidesPerView={6}
          navigation={{
            prevEl: `.custom-prev-secondary-${id}`,
            nextEl: `.custom-next-secondary-${id}`,
          }}
          className='!pb-6'
        >
          {data.map(item => (
            <SwiperSlide key={item.name}>
              <div className='flex flex-col items-center'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-105'
                />
                <span className='mt-2 text-center text-xs md:text-sm'>
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões customizados */}
        <button
          className={`custom-prev-secondary-${id} absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-violet-500 shadow-lg p-2 rounded-full hover:bg-violet-600 transition-colors duration-300 ease-in-out`}
        >
          <ChevronLeft className='w-4 h-4 text-violet-100' />
        </button>

        <button
          className={`custom-next-secondary-${id} absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-violet-500 shadow-lg p-2 rounded-full hover:bg-violet-600 transition-colors duration-300 ease-in-out`}
        >
          <ChevronRight className='w-4 h-4 text-violet-100' />
        </button>
      </div>
    </Container>
  );
};
