import { create } from 'zustand';
import Cookies from 'js-cookie';

type UserData = {
  name: string;
  email: string;
  picture: string;
};

type Store = {
  token: string | null; // Token JWT do usuário.
  userData: UserData | null; // Dados do usuário (nome, email, foto)
  isSignedIn: boolean;
  setIsSignedIn: (newSignedIn: boolean) => void;
  setToken: (newToken: string | null) => void;
  setUserData: (newUserData: UserData | null) => void;
};

/**
 * Hook principal de autenticação
 *
 * Exemplo de uso:
 * @example
 * const { token, userData, isSignedIn, setToken, setUserData, setIsSignedIn } = useAuthStore();
 *
 * @description
 * // Logar usuário
 * setToken("meu-token-jwt");
 * setUserData({ name: "João", email: "joao@email.com", picture: "https://..." });
 *
 * // Deslogar usuário
 * setToken(null); // Isso também limpa automaticamente userData
 *
 * @return Store completa com token, userData, isSignedIn e funções de atualização
 */
export const useAuthStore = create<Store>()(set => ({
  token: null,
  userData: null,
  isSignedIn: false,
  setIsSignedIn: (newSignedIn: boolean) =>
    set(state => ({ ...state, isSignedIn: newSignedIn })),
  setToken: (newToken: string | null) =>
    set(state => {
      if (newToken) {
        Cookies.set('token', newToken, { expires: 7 });
      } else {
        Cookies.remove('token');
        Cookies.remove('userData'); // Remove dados do usuário ao fazer logout
      }

      return {
        ...state,
        token: newToken,
        isSignedIn: !!newToken,
        // Limpa userData quando faz logout (token = null)
        userData: newToken ? state.userData : null,
      };
    }),
  setUserData: (newUserData: UserData | null) =>
    set(state => {
      if (newUserData) {
        // Salva dados do usuário nos cookies para persistência
        Cookies.set('userData', JSON.stringify(newUserData), { expires: 7 });
      } else {
        Cookies.remove('userData');
      }

      return { ...state, userData: newUserData };
    }),
}));
