import { useState, useEffect, useCallback } from 'react';
import axios, { type AxiosRequestConfig } from 'axios';

/**
 * useApi
 * Hook para fazer requisições HTTP usando Axios.
 * - Controla loading, erro e dados.
 * - Permite requisições GET, POST, etc.
 * - Pode ser usado com tipagem TypeScript.
 *
 * @template T Tipo esperado dos dados retornados
 * @param url URL da requisição
 * @param config Configuração adicional do Axios
 * @param immediate Se deve executar a requisição automaticamente ao montar (default: true)
 */
export function useApi<T>(
  url: string,
  config?: AxiosRequestConfig,
  immediate: boolean = true,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);

  // Função para fazer a requisição
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({ url, ...config });
      setData(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err?.message || 'Erro desconhecido');
      }
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  // Executa a requisição automaticamente se `immediate` for true
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, loading, error, refetch: fetchData };
}
