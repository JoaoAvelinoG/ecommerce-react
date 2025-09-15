import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Navigation, Autoplay } from 'swiper/modules';
import type { Product } from '@/@types/product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSliderProps {
  data: Product[];
  sliderType?: 'fastOffers' | 'vitrine';
}

export const ProductSlider = ({
  sliderType = 'vitrine',
  data,
}: ProductSliderProps) => {
  // TODO: Consumir isso de uma API ou estado global
  const promotionAvailable = true;

  return (
    <>
      {sliderType === 'fastOffers' && promotionAvailable && (
        <div className='wrapper-slider mx:px-0 mt-4 relative'>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            slidesPerView={4}
            spaceBetween={16}
            breakpoints={{
              425: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            className='w-full'
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <div className='product-card pb-3 md:pb-6 px-3 xl:px-0 rounded-xl border shadow-sm overflow-hidden  flex flex-col'>
                  {/* Imagem do produto */}
                  <div
                    className='relative flex items-center
                  justify-start lg:justify-center px-2 md:px-0 pt-4 bg-gray-100'
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className='h-full object-contain rounded-sm'
                    />
                    {/* Descount Badges - 42% OFF */}
                    {item.badgesDiscount && (
                      <div className='absolute bottom-0 w-[91%] md:w-full md:max-w-[280px] bg-lime-400/50 text-lime-950 font-medium text-center text-xs py-1 md:py-2 rounded-sm'>
                        {item.badgesDiscount}
                      </div>
                    )}
                  </div>

                  {item.isOnOffer && <div></div>}

                  {/* Infos do produto */}
                  <div className='flex flex-col p-3 gap-1 mt-3'>
                    <h3 className='text-sm md:font-medium md:text-lg truncate w-full  line-clamp-2'>
                      {item.name}
                    </h3>

                    <div>
                      {item.oldPrice && (
                        <p className='text-sm md:text-base line-through text-gray-400'>
                          R$ {item.oldPrice},00
                        </p>
                      )}

                      <div className='flex items-baseline gap-1 font-bold'>
                        <span className='text-lg md:text-2xl font-bold'>
                          R$ {item.finalPrice}
                        </span>
                        <span>
                          <span>
                            {item.paymentMethod === 'pix' && 'no Pix'}
                          </span>
                          <span>
                            {item.paymentMethod === 'avista' && 'à Vista'}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Frete Grátis  */}
                    {item.freeShipping ? (
                      <span className='flex justify-center items-center text-xs text-green-950 font-medium w-8/12 md:w-4/12 bg-lime-300 rounded-xs mt-3'>
                        Frete grátis
                      </span>
                    ) : (
                      <span className='invisible'>A</span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Botões customizados */}
            <button className='custom-prev absolute top-1/2 -left-[-16px] z-10 transform -translate-y-1/2 bg-white/90 shadow-lg p-2 rounded-full hover:bg-gray-200 transition'>
              <ChevronLeft className='w-6 h-6 text-gray-700' />
            </button>

            <button className='custom-next absolute top-1/2 -right-[-16px] z-10 transform -translate-y-1/2 bg-white/90 shadow-lg p-2 rounded-full hover:bg-gray-200 transition'>
              <ChevronRight className='w-6 h-6 text-gray-700' />
            </button>
          </Swiper>
        </div>
      )}
    </>
  );
};
