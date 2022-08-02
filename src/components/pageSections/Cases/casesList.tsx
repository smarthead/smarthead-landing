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

export const casesList = [
    {
        title: 'Комплаенс-помощник',
        description:
            'Развиваем сервис для анализа деятельности юридического лица на соответствие нормам закона. Мы разработали систему заказа консультации, автоматизировали распределение заявок и реализовали возможность сравнить данные между отчётными периодами для оценки динамики изменения рисков.',
        image: {
            original: {
                src: complianceImage,
                origin: '0% 0%',
            },
            tablet: {
                src: complianceImageTablet,
            },
            desktop: {
                src: complianceImageDesktop,
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
                origin: '50% 50%',
            },
            tablet: {
                src: effectiveatyImageTablet,
            },
            desktop: {
                src: effectiveatyImageDesktop,
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
                origin: '50% 60%',
            },
            tablet: {
                src: roboticsImageTablet,
            },
            desktop: {
                src: roboticsImageDesktop,
            },
        },
    },
    {
        title: 'String: Instant Checkout',
        description:
            'Разработали мобильное приложение для быстрой покупки товаров с поддержкой App clips и интеграцией с Shopify для предпринимателя из США. Клиент торопился подать заявку в акселератор, и мы сделали рабочую версию приложения за 2 недели — заявка была подана вовремя.',

        image: {
            original: {
                src: stringAppImage,
                origin: '50% 35%',
            },
            tablet: {
                src: stringAppImageTablet,
            },
            desktop: {
                src: stringAppImageDesktop,
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
                origin: '0% 50%',
            },
            tablet: {
                src: visaPromoImageTablet,
            },
            desktop: {
                src: visaPromoImageDesktop,
            },
        },
    },

    // {
    //     title: 'Cirque du soleil',
    //     description:
    //         'Обновили российский сайт известного на весь мир цирка. Облегчили выбор шоу и покупку билетов, привели сайт к единому оформлению с международной площадкой и создали мобильную версию.',
    //     image: {
    //         original: {
    //             src: cdsImage,
    //             origin: '0% 50%',
    //         },
    //         tablet: {
    //             src: cdsImageTablet,
    //         },
    //     },
    // },
    // {
    //     title: 'Avastar',
    //     description:
    //         'Разработали систему для трансляции рекламы на задние стекла автомобилей. Для этого мы создали собственный аппаратный прототип с системой охлаждения и платой расширения, к которой подключены модем, датчики освещения, мониторы и GPS.',
    //     image: {
    //         original: {
    //             src: avastarImage,
    //             origin: '0% 50%',
    //         },
    //         tablet: {
    //             src: avastarImageTablet,
    //         },
    //     },
    // },
    // {
    //     title: 'LifeAir',
    //     description:
    //         'Создали систему для тестирования на COVID–19 в аэропортах Шереметьево, Домодедово и Внуково. Она помогла уменьшить время ожидания в очереди со 120 до 15 минут. С начала использования в системе было зарегистрировано более миллиона пассажиров.',
    //     image: {
    //         original: {
    //             src: lifeAirImage,
    //             origin: '0% 25%',
    //         },
    //         tablet: {
    //             src: lifeAirImageTablet,
    //         },
    //     },
    // },
];
