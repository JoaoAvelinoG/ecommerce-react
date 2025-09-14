import { HeartIcon, ShoppingCartIcon, User, UserIcon } from 'lucide-react';
import { Input } from './ui/input';

export const Header = () => {
  return (
    // Wrapper do Header
    <header className='wrapper-header w-full bg-violet-500 px-4'>
      <div className='main-bar w-full'>
        {/* Conteúdo do Header */}
        <div className='main-bar__content flex justify-between items-center gap-8'>
          {/* Section do Logo */}
          <section className='logo'>
            <div className='logo__image'>
              <img src='https://placehold.co/90x80' alt='' />
            </div>
          </section>

          {/* Section do Search */}
          <section className='searchBar flex-1'>
            <div className='search-wrapper w-full'>
              <div className='search w-full'>
                <div className='search__content'>
                  <Input
                    className='bg-white pl-5 search rounded-full'
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
              <span className='leading-4'>
                Lista de <br /> Desejos
              </span>
            </a>
          </section>

          {/* Section WishList */}
          <section className='wishList text-white text-sm font-semibold'>
            <a className='flex items-center gap-2' href='#'>
              <UserIcon />
              <span className='leading-4'>Entrar</span>
            </a>
          </section>

          {/* Section Carrinho */}
          <section className='cart'>
            <div className='cart__content text-white pr-12'>
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
    </header>
  );
};
