/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

// Tipo do estado da store
interface GeneralState {
  currentPageData: any | null; // dados da página atual
  baseUrl: string; // URL base da aplicação
  setCurrentPageData: (data: unknown) => void; // ação para atualizar currentPageData
}

// Criando a store
export const useGeneralStore = create<GeneralState>(set => ({
  currentPageData: null,
  baseUrl:
    import.meta.env.MODE === 'production'
      ? window.location.origin
      : import.meta.env.VITE_BASE_URL,

  // Função para atualizar currentPageData
  setCurrentPageData: data => set({ currentPageData: data }),
}));
