import { HeartIcon, MenuIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { Container } from '../../Container';
import { useDevice } from '@/hooks/useDevice';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { SearchInput } from '@/components/Home/SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import type { JSX } from 'react';
import { Logo } from '../Logo/Logo';

interface HeaderItem {
  icon: JSX.Element;
  label?: string;
  href: string;
}

export const Header = () => {
  const { screenWidth } = useDevice();
  const scrollY = useScrollPosition();

  // Lista de ações do header
  const mainInteractions: HeaderItem[] = [
    { icon: <HeartIcon />, label: 'Lista de Desejos', href: '/wishlist/intro' },
    { icon: <UserIcon />, label: 'Entrar', href: '/signin' },
    { icon: <ShoppingCartIcon />, href: '/cart' },
  ];

  return (
    <>
      {/* Header principal */}
      <header
        className={`wrapper-header w-full px-4 bg-violet-500 transition-all duration-400 ease-in-out ${
          scrollY >= 200 ? 'fixed top-0 z-50 shadow-lg' : 'relative'
        }`}
      >
        <Container>
          <div className='main-bar__content w-full flex justify-between h-[55px] md:h-auto items-center gap-6 lg:gap-12 md:gap-6'>
            {/* Menu Mobile */}
            <MenuIcon className='block md:hidden' color='white' />

            {/* Logo */}
            <Logo />

            {/* Search Desktop */}
            <section className='searchBar flex-1 hidden md:block'>
              <SearchInput />
            </section>

            {/* Interações (Wishlist, User, Cart) */}
            <section className='header-actions flex items-center gap-4'>
              {mainInteractions.map((item, idx) => {
                if (item.label) {
                  return (
                    <Link
                      key={idx}
                      to={item.href}
                      className='flex items-center gap-2 text-white text-sm font-semibold hover:text-gray-200 transition-colors'
                    >
                      {item.icon}
                      <span className='hidden md:block leading-4'>
                        {item.label}
                      </span>
                    </Link>
                  );
                }

                // Carrinho (sem label)
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    className='relative flex text-white'
                  >
                    {item.icon}
                    <span className='absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 bg-[#CCFD16] text-xs text-violet-900 rounded-full font-extrabold'>
                      0
                    </span>
                  </Link>
                );
              })}
            </section>
          </div>
        </Container>
      </header>

      {/* Search Mobile */}
      {screenWidth < 768 && <SearchInput isMobile />}
    </>
  );
};
