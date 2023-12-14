import BD_1 from './../images/directions/BD_1.png';
import BD_2 from './../images/directions/BD_2.png';
import BD_3 from './../images/directions/BD_3.png';
import BD_4 from './../images/directions/BD_4.png';
import BD_5 from './../images/directions/BD_5.png';
import BD_6 from './../images/directions/BD_6.png';


interface BusinessDirection {
    id: number;
    title: string;
    text: string;
    background: string;
}

export const BUSINESS_DIRECTIONS: BusinessDirection[] = [
    {
        id: 1,
        title: 'Решения Softline',
        text: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.',
        background: BD_1
    },
    {
        id: 2,
        title: 'Кибербезопасность',
        text: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.',
        background: BD_2
    },
    {
        id: 3,
        title: 'Импортозамещение',
        text: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.',
        background: BD_3
    },
    {
        id: 4,
        title: 'Облачные решения',
        text: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.',
        background: BD_4
    },
    {
        id: 5,
        title: `Цифровая трансформация
и разработка ПО`,
        text: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.',
        background: BD_5
    },
    {
        id: 6,
        title: 'Техническая поддержка Softline',
        text: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.',
        background: BD_6
    },
];