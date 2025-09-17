import { create } from 'zustand';
import Cookies from 'js-cookie';

type Store = {
  token: string | null; // Token JWT do usuário.
  isSignedIn: boolean;
  setIsSignedIn: (newSignedIn: boolean) => void;
  setToken: (newToken: string | null) => void;
};

/**
 * Hook principal de autenticação
 *
 * Exemplo de uso:
 * @example
 * const { token, isSignedIn, setToken, setIsSignedIn } = useAuthStore();
 *
 * @description
 * // Logar usuário
 * setToken("meu-token-jwt");
 *
 * // Deslogar usuário
 * setToken(null);
 *
 * @return Store completa com token, isSignedIn e funções de atualização
 */
export const useAuthStore = create<Store>()(set => ({
  token: null,
  isSignedIn: false,
  setIsSignedIn: (newSignedIn: boolean) =>
    set(state => ({ ...state, isSignedIn: newSignedIn })),
  setToken: (newToken: string | null) =>
    set(state => {
      if (newToken) {
        Cookies.set('token', newToken, { expires: 7 });
      } else {
        Cookies.remove('token');
      }

      return { ...state, token: newToken, isSignedIn: !!newToken };
    }),
}));
