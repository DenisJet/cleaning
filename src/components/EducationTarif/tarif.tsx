export interface Tarif {
  id: number;
  title: string;
  oldPrice?: string;
  newPrice: string;
  points: string[];
}

export const educationTarif = [
  {
    id: 1,
    title: 'Основной',
    oldPrice: '22 900',
    newPrice: '29 900',
    points: ['Модули 1-3', 'Консультации', 'Сопровождение'],
  },
  {
    id: 2,
    title: 'Бизнес',
    oldPrice: '41 490',
    newPrice: '49 900',
    points: [
      'Модули 4-7',
      'Консультации',
      'Сопровождение',
      'Создание сайта',
      'Запуск рекламы',
      'Настройка SEO',
      'Настройка рекламы Avito, VK',
    ],
  },
  {
    id: 3,
    title: 'Premium',
    oldPrice: '89 900',
    newPrice: '99 900',
    points: [
      '7 модулей',
      'Консультации',
      'Сопровождение',
      'Создание сайта',
      'Запуск рекламы',
      'Настройка SEO',
      'Настройка рекламы Avito, VK',
      'Разработка Бизнес-плана',
      'Разработка логотипа',
      'Закуп оборудования',
      'Закуп химии',
      'Закуп инвентаря',
    ],
  },
];
