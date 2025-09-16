import type { Product } from '@/@types/product';
import apiClient from '@/lib/axios';

// Função que retorna todos os produtos
export const getAllProducts = async (): Promise<Product[]> => {
  const res = await apiClient.get('/products');
  return res.data;
};
