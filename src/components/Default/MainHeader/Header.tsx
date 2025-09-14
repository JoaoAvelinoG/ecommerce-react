import { HeartIcon, MenuIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { Input } from '../../ui/input';
import { Container } from '../../Container';
import { Navbar } from '../../Home/Navbar';
import { useDevice } from '@/hooks/useDevice';

export const Header = () => {
  const { screenWidth } = useDevice();

  return (
    // Wrapper do Header
    <>
      <header className='wrapper-header w-full bg-violet-500 px-4'>
        <Container>
          <div className='main-bar w-full'>
            {/* Conteúdo do Header */}
            <div className='main-bar__content w-full flex justify-between h-[55px] md:h-auto items-center gap-6 lg:gap-12 md:gap-6'>
              {/* Section do Menu Mobile */}
              <MenuIcon className='block md:hidden' color='white' />
              {/* Section do Logo */}
              <section className='logo'>
                <div className='logo__image flex items-center justify-center h-[80px] w-[90px]'>
                  <img
                    className='w-full block h-auto object-cover'
                    src='https://placehold.co/1920x1080'
                    alt=''
                  />
                </div>
              </section>

              {/* Section do Search */}
              <section className='searchBar flex-1'>
                <div className='search-wrapper w-full'>
                  <div className='search w-full'>
                    <div className='search__content'>
                      <Input
                        className='hidden md:block bg-white pl-5 search rounded-full'
                        placeholder='O que você está procurando?'
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section WishList */}
              <section className='wishList text-white text-sm font-semibold'>
                <a className='flex items-center gap-2' href='#'>
                  <HeartIcon />
                  <span className='hidden md:block leading-4'>
                    Lista de <br /> Desejos
                  </span>
                </a>
              </section>

              {/* Section WishList */}
              <section className='wishList text-white text-sm font-semibold'>
                <a className='flex items-center gap-2' href='#'>
                  <UserIcon />
                  <span className='hidden md:block not-only-of-type:leading-4'>
                    Entrar
                  </span>
                </a>
              </section>

              {/* Section Carrinho */}
              <section className='cart'>
                <div className='cart__content text-white pr-4 md:pr-12'>
                  <a className='cart__link relative flex' href='#'>
                    <ShoppingCartIcon />
                    {/* Bolinha */}
                    <span className='cart__number absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 bg-[#CCFD16] text-xs text-violet-900 rounded-full font-extrabold'>
                      0
                    </span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </header>

      {/* Input de Pesquisa Mobile */}
      {screenWidth < 768 && (
        <Input
          className='bg-white pl-5 py-6 search rounded-none'
          placeholder='O que você está procurando?'
        />
      )}

      {/* Início da Navbar */}
      <Navbar />
    </>
  );
};
