import type { User } from '@/@types/user';
import apiClient from '@/lib/axios';
import bcrypt from 'bcryptjs';

export const hasEmail = async (email: string) => {
  const res = await apiClient.get('/users');
  const users = res.data;

  return users.some((user: { email: string }) => user.email === email);
};

interface AuthResult {
  id: number;
  name: string;
  email: string;
}

/**
 * Valida autenticação do usuário pelo email e senha.
 *
 * @param {string} email - Email do usuário que deseja autenticar.
 * @param {string} password - Senha em texto plano para validação.
 * @returns {Promise<AuthResult | false>} Retorna os dados do usuário (id, name, email) se autenticado com sucesso, ou `false` se email ou senha forem inválidos.
 *
 * @example
 * const result = await validateAuth('joao@example.com', '123456');
 * if (result) {
 *   console.log('Usuário autenticado:', result.name);
 * } else {
 *   console.log('Email ou senha inválidos');
 * }
 *
 * @description
 * A função:
 * 1. Busca todos os usuários na API.
 * 2. Procura pelo usuário com o email informado.
 * 3. Compara a senha informada com o hash armazenado usando bcrypt.
 * 4. Retorna os dados do usuário sem a senha caso seja válido.
 */
export const validateAuth = async (
  email: string,
  password: string,
): Promise<AuthResult | false> => {
  const res = await apiClient.get<User[]>('/users');
  const users = res.data;

  const user = users.find(user => user.email === email);

  if (!user) return false;
  if (!bcrypt.compareSync(password, user.password)) return false;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

/**
 * Cria um novo usuário na API.
 *
 * @param {string} name - Nome completo do usuário.
 * @param {string} email - Email do usuário (será convertido para lowercase).
 * @param {string} password - Senha em texto plano que será hashada antes de enviar.
 * @returns {Promise<UserCreateResult | null>} Retorna os dados do usuário criado (id, name, email) ou `null` se ocorrer algum erro.
 *
 * @example
 * const newUser = await createUser('João Silva', 'joao@example.com', '123456');
 * if (newUser) {
 *   console.log('Usuário criado com sucesso:', newUser.name);
 * } else {
 *   console.log('Erro ao criar usuário');
 * }
 *
 * @description
 * A função:
 * 1. Hasha a senha usando bcrypt com salt 10.
 * 2. Envia um POST para a API de usuários com os dados do usuário.
 * 3. Retorna apenas os dados não sensíveis do usuário criado.
 * 4. Retorna `null` caso ocorra algum erro na requisição.
 */
export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const user = await apiClient.post('/users', {
      data: {
        name,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password, 10),
      },
    });
    return {
      id: user.data.id,
      name: user.data.name,
      email: user.data.email,
    };
  } catch (error) {
    if (error instanceof Error) {
      return null;
    }
  }
};

type CreateUserResponse = {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
};

// Função para cadastrar usuário
export const createUserWithAnyEmail = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    // 1. Buscar todos os usuários
    const { data: users } = await apiClient.get<CreateUserResponse[]>('/users');

    // 2. Verifica se já existe
    const userExists = users.some(
      u => u.email.toLowerCase() === email.toLowerCase(),
    );

    if (userExists) {
      return { success: false, message: 'Usuário já cadastrado, faça login' };
    }

    // 3. Cria novo usuário
    const { data: newUser } = await apiClient.post<CreateUserResponse>(
      '/users',
      {
        email,
        password,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`, // gera avatar automático
      },
    );

    return {
      success: true,
      user: newUser,
    };
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return { success: false, message: 'Erro inesperado ao criar usuário' };
  }
};

/**
 * Gera um token JWT para o usuário usando a API Fake da Platzi.
 *
 * @param {number} userId - ID do usuário para o qual gerar o token.
 * @returns {Promise<string | null>} Retorna o token JWT ou `null` se houver erro.
 *
 * @example
 * const token = await createUserToken(123);
 * if (token) {
 *   console.log('Token gerado:', token);
 * } else {
 *   console.log('Erro ao gerar token');
 * }
 */
export const createUserToken = async (
  userId: number,
): Promise<string | null> => {
  try {
    const response = await apiClient.post('/auth-jwt', {
      userId,
    });
    // A API retorna o token em response.data.token
    return response.data.token;
  } catch (error) {
    console.error('Erro ao criar token:', error);
    return null;
  }
};
