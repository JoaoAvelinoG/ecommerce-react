import { Container } from '@/components/Container';

export const BannerHighlights = () => {
  // Dados mocados para os destaques
  const highlights = [
    { description: 'Promoção', src: '/images/Promocao.webp' },
    { description: 'Desconto Pix', src: '/images/Pix.webp' },
    { description: 'Leve 3 pague 2', src: '/images/leve3.webp' },
    { description: 'Outlet', src: '/images/Outlet.webp' },
  ];

  return (
    <Container>
      <div className='wrapper-banner-highlights px-4 w-full my-5'>
        <div className='banner-highlights w-full'>
          <div className='banner-highlights__content grid grid-cols-4 md:grid-cols-4 gap-4'>
            {highlights.map(item => (
              <div className='banner-highlights__item' key={item.description}>
                <img
                  className='cursor-pointer rounded-sm w-full'
                  src={item.src}
                  alt={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
