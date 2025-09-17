import { ChevronRightIcon, MapPinIcon } from 'lucide-react';
import { Container } from '../Container';
import { ContainerFull } from '../ContainerFull';
import { useGeneralStore } from '@/stores/useGeneralStore';

export const NavbarZipcodeMobile = () => {
  const cepInput = useGeneralStore(state => state.currentPageData?.cepInput);

  return (
    <ContainerFull className='py-2 bg-violet-500'>
      <Container className='px-4'>
        <div className='navbar__zipcode-content-mobile text-white w-full text-sm flex justify-between items-center'>
          <div className='navbar__zipcode-content-mobile-arrow flex items-center gap-2'>
            <MapPinIcon size={18} />
            <span>Enviar para: {cepInput || 'Informe o CEP'}</span>
          </div>
          <div>
            <ChevronRightIcon size={22} />
          </div>
        </div>
      </Container>
    </ContainerFull>
  );
};
