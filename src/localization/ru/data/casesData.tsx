import complianceImage from '@/assets/images/cases/case_compliance.webp';
import effectiveatyImage from '@/assets/images/cases/case_effectiveaty.webp';
// import roboticsImage from '@/assets/images/cases/case_robotics.webp';
import stringAppImage from '@/assets/images/cases/case_StringApp.webp';
import visaPromoImage from '@/assets/images/cases/case_VisaPromo.webp';
import lifeairImage from '@/assets/images/cases/case_lifeair.webp';

import complianceImageTablet from '@/assets/images/cases/case_compliance_tablet.webp';
import effectiveatyImageTablet from '@/assets/images/cases/case_effectiveaty_tablet.webp';
// import roboticsImageTablet from '@/assets/images/cases/case_robotics_tablet.webp';
import stringAppImageTablet from '@/assets/images/cases/case_StringApp_tablet.webp';
import visaPromoImageTablet from '@/assets/images/cases/case_VisaPromo_tablet.webp';
import lifeairImageTablet from '@/assets/images/cases/cases_lifeair_tablet.webp';

import complianceImageDesktop from '@/assets/images/cases/case_compliance_desktop.webp';
import effectiveatyImageDesktop from '@/assets/images/cases/case_effectiveaty_desktop.webp';
// import roboticsImageDesktop from '@/assets/images/cases/case_robotics_desktop.webp';
import stringAppImageDesktop from '@/assets/images/cases/case_StringApp_desktop.webp';
import visaPromoImageDesktop from '@/assets/images/cases/case_VisaPromo_desktop.webp';
import lifeairImageDesktop from '@/assets/images/cases/case_lifeair_desktop.webp';

const title = 'КЕЙСЫ';
const casesList = [
    {
        title: 'Комплаенс-помощник',
        description: [
            'Участвуем в&nbsp;проекте развития сервиса для анализа деятельности юридического лица на&nbsp;соответствие нормам закона.',
            'Мы&nbsp;помогаем клиенту в&nbsp;проектировании и&nbsp;разработке новой функциональности, которая улучшает&nbsp;UX и&nbsp;повышает ценность продукта для пользователей, а&nbsp;также оптимизирует процесс оказания услуг.',
        ],
        image: {
            original: {
                src: complianceImage,
            },
            tablet: {
                src: complianceImageTablet,
            },
            desktop: {
                src: complianceImageDesktop,
                origin: '50% 0%',
            },
        },
    },
    {
        title: 'Effectiveaty',
        description:
            'Построили IT-инфраструктуру и&nbsp;разработали мобильное приложение для продукта Effectiveaty. Effectiveaty&nbsp;— это инструмент по&nbsp;формированию индивидуального рациона питания и&nbsp;сервис по&nbsp;доставке еды.',
        image: {
            original: {
                src: effectiveatyImage,
            },
            tablet: {
                src: effectiveatyImageTablet,
            },
            desktop: {
                src: effectiveatyImageDesktop,
                origin: '50% 50%',
            },
        },
    },
    // {
    //     title: 'Robotics Lab Shell',
    //     description:
    //         'Разработали ПО&nbsp;для управления роботами-манипуляторами. Оно позволяет людям без навыков программирования создавать прототипы технологических цепочек. Снабдили ПО&nbsp;функциями 3D-редактора, а&nbsp;также системой мониторинга процесса обработки деталей.',
    //     image: {
    //         original: {
    //             src: roboticsImage,
    //         },
    //         tablet: {
    //             src: roboticsImageTablet,
    //         },
    //         desktop: {
    //             src: roboticsImageDesktop,
    //             origin: '50% 60%',
    //         },
    //     },
    // },
    {
        title: 'String: Instant Checkout',
        description:
            'Разработали мобильное приложение для быстрой покупки товаров с&nbsp;поддержкой App Clips и&nbsp;интеграцией с&nbsp;Shopify для предпринимателя из&nbsp;США. Клиент торопился подать заявку в&nbsp;акселератор, и&nbsp;мы&nbsp;сделали рабочую версию приложения за&nbsp;2&nbsp;недели&nbsp;— заявка была подана вовремя.',

        image: {
            original: {
                src: stringAppImage,
            },
            tablet: {
                src: stringAppImageTablet,
            },
            desktop: {
                src: stringAppImageDesktop,
                origin: '50% 35%',
            },
        },
    },

    {
        title: 'Visa Promo',
        description:
            'Вместе с&nbsp;креативным агентством Proximity запустили чековые промо для Visa. Разработали и&nbsp;внедрили чат-ботов, интегрировали сервисы распознавания и&nbsp;проверки чеков, совершенствовали кодовую базу. Особенно гордимся тем, что наш код прошёл оценку Глобального офиса информационной безопасности Visa с&nbsp;первого раза.',
        image: {
            original: {
                src: visaPromoImage,
            },
            tablet: {
                src: visaPromoImageTablet,
            },
            desktop: {
                src: visaPromoImageDesktop,
                origin: '0% 50%',
            },
        },
    },

    {
        title: 'LifeAir',
        description: [
            'В&nbsp;разгар пандемии COVID-19 разработали веб-приложение для регистрации авиапассажиров на&nbsp;ПЦР-тесты. Оно автоматизировало ручной труд по&nbsp;регистрации и&nbsp;идентификации пассажиров, а&nbsp;также оплате тестирования в&nbsp;аэропортах. ',
            'Исследование опыта потребителей непосредственно в&nbsp;аэропортах, релиз первой версии за&nbsp;три недели и&nbsp;месяцы улучшений на&nbsp;основе обратной связи пользователей привели к&nbsp;желаемым результатам&nbsp;— сокращению очередей с&nbsp;90&nbsp;до&nbsp;15&nbsp;минут, уменьшению риска заражения, повышению удовлетворённости пассажиров в&nbsp;трёх крупнейших аэропортах страны.',
        ],
        image: {
            original: {
                src: lifeairImage,
            },
            tablet: {
                src: lifeairImageTablet,
            },
            desktop: {
                src: lifeairImageDesktop,
                origin: '0% 0%',
            },
        },
    },
];

export const casesRuData = {
    title,
    casesList,
};
