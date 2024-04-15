export interface Service {
  id: number;
  title: string;
  text: string;
  imageUrl?: string;
}

export const cleaningServices = [
  {
    id: 1,
    title: 'Уборка домов и квартир',
    text: 'Уборка производится специалистом по чек-листу. Можем выполнить любую услугу на Ваш выбор',
    imageUrl: '/services/uborka.png',
  },
  {
    id: 2,
    title: 'Клининг кафе и ресторанов',
    text: 'Чистота - один из ключевых аспектов успешного развития бизнеса в кафе и ресторанах',
    imageUrl: '/services/kafe.png',
  },
  {
    id: 3,
    title: 'Уборка офисов и производственных помещений',
    text: 'Производим профессиональный клининг коммерческой недвижимости',
    imageUrl: '/services/ofis.png',
  },
  {
    id: 4,
    title: 'Химчистка мягкой мебели, ковров, штор',
    text: 'Знаем всё о том, как поддерживать чистоту мягкой мебели, ковров и штор',
    imageUrl: '/services/divan.png',
  },
  {
    id: 5,
    title: 'Мойка окон и балконов',
    text: 'Полный спектр услуг по мойке окон и балконов в офисах и квартирах',
    imageUrl: '/services/window.png',
  },
  {
    id: 6,
    title: 'Мойка фасадов и витрин',
    text: 'Мойка внешних стеклянных поверхностей: витрин, фасадов, стеллажей',
    imageUrl: '/services/fasad.png',
  },
];

export const dryCleaningServices = [
  {
    id: 1,
    title: 'Химчистка мебели',
    text: 'Дарим новую жизнь вашей мебели!',
    imageUrl: '/services/divan.png',
  },
  {
    id: 2,
    title: 'Химчистка ковров',
    text: 'Свежий ковер без вреда для детей и животных',
    imageUrl: '/services/carpet.png',
  },
  {
    id: 3,
    title: 'Химчистка штор',
    text: 'Знаем как поддерживать чистоту и штор',
    imageUrl: '/services/shtor.png',
  },
  {
    id: 4,
    title: 'Химчистка автомобилей',
    text: 'Чистый салон как в новом авто',
    imageUrl: '/services/avto.png',
  },
];
