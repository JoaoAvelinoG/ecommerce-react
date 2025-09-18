import apiClient from '@/lib/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import { hasEmail } from './auth';

type LoginResponse = {
  access_token: string;
  refresh_token?: string;
};

type ProfileResponse = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

// Função para logar e armazenar no Zustand
export const loginUser = async (email: string, password: string) => {
  try {
    // 1. Faz login
    if (!(await hasEmail(email))) return false;

    const { data } = await apiClient.post<LoginResponse>('/auth/login', {
      email,
      password,
    });

    const token = data.access_token;

    if (!token) {
      throw new Error('Token não retornado');
    }

    // 2. Salva o token no Zustand
    const { setToken } = useAuthStore.getState();
    setToken(token);

    // 3. Busca dados do usuário logado
    const profile = await apiClient.get<ProfileResponse>('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // 4. Salva dados no Zustand
    const { setUserData } = useAuthStore.getState();
    setUserData({
      name: profile.data.name,
      email: profile.data.email,
      picture: profile.data.avatar,
    });

    return true;
  } catch (error) {
    console.error('Erro no login:', error);
    return false;
  }
};
