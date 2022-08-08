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
            'Участвуем в проекте развития сервиса для анализа деятельности юридического лица на соответствие нормам закона.',
            'Мы помогаем клиенту в проектировании и разработке новой функциональности, которая улучшает UX и повышает ценность продукта для пользователей, а также оптимизирует процесс оказания услуг.',
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
            'Построили IT-инфраструктуру и разработали мобильное приложение для продукта Effectiveaty. Effectiveaty — это инструмент по формированию индивидуального рациона питания и сервис по доставке еды.',
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
            'Разработали ПО для управления роботами-манипуляторами. Оно позволяет людям без навыков программирования создавать прототипы технологических цепочек. Снабдили ПО функциями 3D-редактора, а также системой мониторинга процесса обработки деталей.',
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
            'Разработали мобильное приложение для быстрой покупки товаров с поддержкой App Clips и интеграцией с Shopify для предпринимателя из США. Клиент торопился подать заявку в акселератор, и мы сделали рабочую версию приложения за 2 недели — заявка была подана вовремя.',

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
            'Вместе с креативным агентством Proximity запустили чековые промо для Visa. Разработали и внедрили чат-ботов, интегрировали сервисы распознавания и проверки чеков, совершенствовали кодовую базу. Особенно гордимся тем, что наш код прошёл оценку Глобального офиса информационной безопасности Visa с первого раза.',
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
