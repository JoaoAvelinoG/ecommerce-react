// Import da lib do Axios;
import axios from 'axios';

/**
 *  Configurações para usar o apiClient.get('/') ao invés de axios.get('https://api.meusite.com/users);
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// // Interceptador de requisição — adiciona token automaticamente
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer token`;
//   }
//   return config;
// });

// Interceptador de resposta (tratamento global de erros)
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro de API:', error.response);
    return Promise.reject(error);
  },
);

// Exportar essa instância (apiClient) como o valor padrão deste arquivo.
export default apiClient;
