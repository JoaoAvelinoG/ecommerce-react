import { MapPinIcon, MenuIcon } from 'lucide-react';
import { Container } from '../Container';
import { ContainerFull } from '../ContainerFull';
import { useDevice } from '@/hooks/useDevice';
import { NavbarZipcodeMobile } from './NavbarZipcodeMobile';
import { Link } from 'react-router-dom'; // <-- import Link

export const Navbar = () => {
  const { screenWidth } = useDevice();

  const mainNavItems = [
    { label: 'CORRIDA', href: '/sub/corrida' },
    { label: 'FUTEBOL', href: '/sub/futebol' },
    { label: 'SPORTSTYLE', href: '/sub/sportstyle' },
    { label: 'FEMININO', href: '/sub/feminino' },
    { label: 'SAÚDE', href: '/sub/saude' },
    { label: 'OUTLET', href: '/lst' },
    { label: 'LOJAS PARCEIRAS', href: '/lojasparceiras' },
  ];

  return (
    <>
      <ContainerFull className='border-b border-zinc-200'>
        <Container>
          {screenWidth > 768 && (
            <div className='wrapper-navbar w-full bg-gray/10'>
              <div className='navbar w-full py-1'>
                <nav className='navbar__content flex gap-3 items-center mr-12'>
                  {/* Section do CEP */}
                  <section className='navbar__zipcode border-r border-zinc-200 pr-6'>
                    <div className='navbar__zipcode-content text-violet-950 flex items-center gap-2'>
                      <MapPinIcon />
                      <span className='flex flex-col text-sm w-full'>
                        Enviar para:
                        <strong>37757-000</strong>
                      </span>
                    </div>
                  </section>

                  {/* Section de Todas as Categorias */}
                  <section className='navbar__all-categories'>
                    <div className='navbar__all-categories-content cursor-pointer flex items-center gap-2'>
                      <MenuIcon className='text-violet-950' />
                      <span className='text-sm leading-none xl:text-base font-semibold text-violet-950'>
                        Todas as Categorias
                      </span>
                    </div>
                  </section>

                  {/* Main Navigation */}
                  <section className='main-nav flex flex-1 justify-center md:justify-end items-center gap-4 lg:gap-6'>
                    {mainNavItems.map(navItem => (
                      <Link
                        key={navItem.label}
                        to={navItem.href} // <-- Link do React Router
                        className='inline-block text-sm xl:text-base font-medium text-zinc-500 hover:text-violet-950 transition-colors'
                      >
                        {navItem.label}
                      </Link>
                    ))}
                  </section>
                </nav>
              </div>
            </div>
          )}
        </Container>
      </ContainerFull>

      {screenWidth < 768 && <NavbarZipcodeMobile />}
    </>
  );
};
