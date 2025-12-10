import { Product, WhatsAppConfig } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Esfihas Artesanais',
    description: 'Deliciosas esfihas de carne, queijo e frango com massa leve e recheio suculento.',
  },
  {
    id: '2',
    name: 'Pão Caseiro',
    description: 'Pão caseiro fofinho, feito com ingredientes selecionados e muito amor. Ideal para o café da tarde.',
  },
  {
    id: '3',
    name: 'Pão de Queijo',
    description: 'O tradicional pão de queijo mineiro, crocante por fora e macio por dentro.',
  },
  {
    id: '4',
    name: 'Torta Salgada',
    description: 'Tortas cremosas de frango ou palmito, com massa que derrete na boca.',
  },
  {
    id: '5',
    name: 'Panquecas',
    description: 'Panquecas de carne moída ou frango ao molho sugo. Prontas para aquecer e servir.',
  },
];

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  // Formato: Código do País + DDD + Número
  phoneNumber: '5511969225191',
  message: 'Olá! Vim pelo site e gostaria de fazer um pedido.',
};