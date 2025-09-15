import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Importa estilos do Swiper (importante!)
import 'swiper/swiper-bundle.css';
import { Container } from '@/components/Container';
import { BannerHighlights } from './BannerHighlights';
import { DailyOffer } from '../DailyOffer/DailyOffer';

export const MainBanner = () => {
  return (
    <Container className='max-w-[1920px] !px-0'>
      <main>
        <div className='wrapper-banner'>
          <div className='banner'>
            <div className='banner__content'>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true} // 👈 setas ativadas
                className='w-full h-[30vh] md:h-[76vh]'
              >
                <SwiperSlide>
                  <img
                    src='/images/banner1.png'
                    alt='Banner 1'
                    className='w-full h-full object-cover'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='/images/banner2.png'
                    alt='Banner 2'
                    className='w-full h-full object-cover'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='/images/banner3.png'
                    alt='Banner 3'
                    className='w-full h-full object-cover'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <BannerHighlights />
      <DailyOffer />
    </Container>
  );
};
