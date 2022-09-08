import complianceImage from '../../../assets/images/cases/case_compliance.jpg';
import effectiveatyImage from '../../../assets/images/cases/case_effectiveaty_en.jpg';
import roboticsImage from '../../../assets/images/cases/case_robotics_en.jpg';
import stringAppImage from '../../../assets/images/cases/case_StringApp_en.jpg';
import visaPromoImage from '../../../assets/images/cases/case_VisaPromo_en.jpg';

import complianceImageTablet from '../../../assets/images/cases/case_compliance_tablet.jpg';
import effectiveatyImageTablet from '../../../assets/images/cases/case_effectiveaty_tablet_en.jpg';
import roboticsImageTablet from '../../../assets/images/cases/case_robotics_tablet_en.jpg';
import stringAppImageTablet from '../../../assets/images/cases/case_StringApp_tablet_en.jpg';
import visaPromoImageTablet from '../../../assets/images/cases/case_VisaPromo_tablet_en.jpg';

import complianceImageDesktop from '../../../assets/images/cases/case_compliance_desktop_en.jpg';
import effectiveatyImageDesktop from '../../../assets/images/cases/case_effectiveaty_desktop_en.jpg';
import roboticsImageDesktop from '../../../assets/images/cases/case_robotics_desktop_en.jpg';
import stringAppImageDesktop from '../../../assets/images/cases/case_StringApp_desktop_en.jpg';
import visaPromoImageDesktop from '../../../assets/images/cases/case_VisaPromo_desktop_en.jpg';

const title = 'OUR SUCCESS STORIES';
const casesList = [
    {
        title: 'Effectiveaty',
        description:
            'We&nbsp;developed a&nbsp;mobile app with full backend IT-infrastructure for a&nbsp;service that allows its clients to&nbsp;form individual meal plans based on&nbsp;their preferences, and then delivers these meals to&nbsp;clients.',
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
            'We&nbsp;created software for controlling robotic manipulators that allows people without programming skills to&nbsp;develop and test technological chain prototypes. We&nbsp;complemented the software with a&nbsp;3D&nbsp;editor, as&nbsp;well as&nbsp;a&nbsp;monitoring system for parts machining.',
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
            'We&nbsp;built a&nbsp;mobile platform for instant checkout based on&nbsp;App Clips technology and Shopify integration for a&nbsp;US-based client. They had a&nbsp;strict deadline for submitting an&nbsp;application to&nbsp;their accelerator, but we&nbsp;managed to&nbsp;create the first version of&nbsp;the app in&nbsp;just 2&nbsp;weeks.',

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
            'In collaboration with Proximity agency, we launched a cash receipt promotional campaign for VISA. The project included chatbot development and rollout, and integration of the receipt identification and validation system. We are especially proud of the fact that our solution was verified by VISA Global office for IT security at the first time of asking.',
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
        title: 'Compliance Assistant',
        description:
            'We&nbsp;are currently developing a&nbsp;service that analyses the transaction history and provides compliance reports and recommendations for legal entities. We&nbsp;are helping our client to&nbsp;design and develop new functionality that will improve&nbsp;UX and increase product value for customers. In&nbsp;addition, it&nbsp;will streamline the service delivery process.',
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
];

export const casesData = {
    title,
    casesList,
};
