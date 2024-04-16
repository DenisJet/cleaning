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
    text: 'Уборка производится специалистом с соблюдением всех норм. Выполним любую услугу любой сложности',
    imageUrl: '/services/uborka.png',
  },
  {
    id: 2,
    title: 'Уборка, химчистка кафе и ресторанов',
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
    title: 'Химчистка мягкой мебели, ковров, штор. Выведение пятен и запахов',
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
    title: 'Мойка фасадов',
    text: 'Мойка внешних стеклянных поверхностей: витрин, фасадов, стеллажей',
    imageUrl: '/services/fasad.png',
  },
];

export const dryCleaningServices = [
  {
    id: 1,
    title: 'Химчистка мебели',
    text: 'Удаление пятен, любых запахов',
    imageUrl: '/services/divan.png',
  },
  {
    id: 2,
    title: 'Химчистка ковров',
    text: 'Работаем с длинным, коротким ворсом',
    imageUrl: '/services/carpet.png',
  },
  {
    id: 3,
    title: 'Химчистка штор, портьер',
    text: 'Производим чистку у вас на дому, без снятия штор',
    imageUrl: '/services/shtor.png',
  },
  {
    id: 4,
    title: 'Химчистка автомобилей',
    text: 'Производим чистку у вас на дому, в офисе или у нас в цеху  ',
    imageUrl: '/services/avto.png',
  },
];
