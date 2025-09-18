import { useState, useEffect } from 'react';
import { WhatsAppLogo } from './WhatsAppLogo';

export const WhatsAppLink = () => {
  const [isVisibleWppIcon, setIsVisibleWppIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // quando passar de 400px do topo, mostra o botão
      if (window.scrollY > 400) {
        setIsVisibleWppIcon(true);
      } else {
        setIsVisibleWppIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const message =
    'Olá, tudo bem? Gostaria de conversar diretamente com um funcionário da Netshoes.';
  const linkZap = `https://wa.me/${
    import.meta.env.VITE_PUBLIC_ZAP
  }?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={linkZap}
      target='_blank'
      rel='noopener noreferrer'
      className={`cursor-pointer fixed bottom-6 right-6 z-50 flex items-center 
          bg-[#25D366] shadow-lg justify-center w-13 h-13 rounded-full
          transition-all duration-700 hover:-translate-y-1 ease-in-out
          ${
            isVisibleWppIcon
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
    >
      {/* Svg do whatsapp */}
      <WhatsAppLogo />
    </a>
  );
};
