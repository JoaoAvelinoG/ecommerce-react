import { useEffect, useState } from 'react';

/**
 * Título: useScrollPosition
 * Descrição: Hook para monitorar a posição atual do scroll da página.
 * Lógica:
 * - Adiciona um listener de scroll na janela;
 * - Atualiza o estado `scrollPosition` com o valor de scroll Y;
 * - Remove o listener quando o componente é desmontado.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    // Adiciona listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Remove listener quando o componente desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}
