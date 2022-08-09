import complianceImage from '../../../assets/images/cases/case_compliance.jpg';
import effectiveatyImage from '../../../assets/images/cases/case_effectiveaty.jpg';
import roboticsImage from '../../../assets/images/cases/case_robotics.jpg';
import stringAppImage from '../../../assets/images/cases/case_StringApp.jpg';
import visaPromoImage from '../../../assets/images/cases/case_VisaPromo.jpg';

import complianceImageTablet from '../../../assets/images/cases/case_compliance_tablet.jpg';
import effectiveatyImageTablet from '../../../assets/images/cases/case_effectiveaty_tablet.jpg';
import roboticsImageTablet from '../../../assets/images/cases/case_robotics_tablet.jpg';
import stringAppImageTablet from '../../../assets/images/cases/case_StringApp_tablet.jpg';
import visaPromoImageTablet from '../../../assets/images/cases/case_VisaPromo_tablet.jpg';

import complianceImageDesktop from '../../../assets/images/cases/case_compliance_desktop.jpg';
import effectiveatyImageDesktop from '../../../assets/images/cases/case_effectiveaty_desktop.jpg';
import roboticsImageDesktop from '../../../assets/images/cases/case_robotics_desktop.jpg';
import stringAppImageDesktop from '../../../assets/images/cases/case_StringApp_desktop.jpg';
import visaPromoImageDesktop from '../../../assets/images/cases/case_VisaPromo_desktop.jpg';

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
    {
        title: 'Robotics Lab Shell',
        description:
            'Разработали ПО&nbsp;для управления роботами-манипуляторами. Оно позволяет людям без навыков программирования создавать прототипы технологических цепочек. Снабдили ПО&nbsp;функциями 3D-редактора, а&nbsp;также системой мониторинга процесса обработки деталей.',
        image: {
            original: {
                src: roboticsImage,
            },
            tablet: {
                src: roboticsImageTablet,
            },
            desktop: {
                src: roboticsImageDesktop,
                origin: '50% 60%',
            },
        },
    },
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
];

export const casesData = {
    title,
    casesList,
};
