import { HeartIcon, MenuIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { Container } from '../../Container';
import { useDevice } from '@/hooks/useDevice';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { SearchInput } from '@/components/Home/SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import type { JSX } from 'react';
import { Logo } from '../Logo/Logo';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ContainerFull } from '@/components/ContainerFull';

interface HeaderItem {
  icon: JSX.Element;
  label?: string;
  href?: string;
  menuItems?: { label: string; href: string }[];
}

type HeaderProps = {
  variant?: 'default' | 'minimal';
};

export const Header = ({ variant = 'default' }: HeaderProps) => {
  const { screenWidth } = useDevice();
  const scrollY = useScrollPosition();

  const mainInteractions: HeaderItem[] = [
    { icon: <HeartIcon />, label: 'Lista de Desejos', href: '/wishlist/intro' },
    {
      icon: <UserIcon />,
      label: 'Entrar',
      menuItems: [
        { label: 'Login', href: '/signin' },
        { label: 'Meus Pedidos', href: '/orders' },
        { label: 'Endereços', href: '/addresses' },
      ],
    },
    { icon: <ShoppingCartIcon color='white' />, href: '/cart' },
  ];

  return (
    <>
      {variant === 'default' && (
        <>
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

                {/* Interações */}
                <section className='header-actions flex items-center gap-4'>
                  {mainInteractions.map((item, idx) => {
                    // Dropdown do usuário
                    if (item.menuItems) {
                      return (
                        <DropdownMenu key={idx}>
                          <DropdownMenuTrigger asChild>
                            <button className='flex cursor-pointer items-center gap-2 text-white text-sm font-semibold hover:text-gray-200 transition-colors'>
                              {item.icon}
                              <span className='hidden md:block leading-4'>
                                {item.label}
                              </span>
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align='end'
                            className='w-[200px]'
                          >
                            {item.menuItems.map((menuItem, mi) => (
                              <DropdownMenuItem
                                key={mi}
                                asChild
                                className='hover:!bg-violet-400 hover:!text-white'
                              >
                                <Link
                                  className='cursor-pointer'
                                  to={menuItem.href}
                                >
                                  {menuItem.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      );
                    }

                    // Link normal (Wishlist ou Carrinho)
                    return (
                      <Link
                        key={idx}
                        to={item.href!}
                        className={`relative flex items-center ${
                          item.label
                            ? 'gap-2 text-white text-sm font-semibold hover:text-gray-200 transition-colors'
                            : ''
                        }`}
                      >
                        {item.icon}
                        {item.label && (
                          <span className='hidden md:block leading-4'>
                            {item.label}
                          </span>
                        )}
                        {!item.label && (
                          <span className='absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 bg-[#CCFD16] text-xs text-violet-900 rounded-full font-extrabold'>
                            0
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </section>
              </div>
            </Container>
          </header>
          {/* Search Mobile */}
          <ContainerFull>
            {screenWidth < 768 && <SearchInput isMobile />}
          </ContainerFull>
        </>
      )}

      {variant === 'minimal' && (
        <header className='wrapper-header w-full px-4 bg-violet-500'>
          <div className='header w-full'>
            <div className='header-content flex items-center justify-center h-20'>
              <Logo />
            </div>
          </div>
        </header>
      )}
    </>
  );
};
