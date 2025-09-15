export interface Product {
  id: string;
  name: string;
  oldPrice: number;
  finalPrice: number; // oldPrice com valor do badges de desconto aplicado
  imageUrl: string;
  paymentMethod?: 'default' | 'pix' | 'cartão' | 'avista';
  badgesDiscount?: string; // Ex: '10%', '15%'
  freeShipping: boolean;
  productStamps?: string[];
  isOnOffer: boolean;
}
