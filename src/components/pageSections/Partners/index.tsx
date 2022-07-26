import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';
import sberSolutionsLogoSVG from '../../../assets/images/logos/sber_solutions_logo.svg';
import veeamLogoSVG from '../../../assets/images/logos/veeam_logo.svg';
import visaLogoSVG from '../../../assets/images/logos/visa_logo.svg';
import ancestryLogoSVG from '../../../assets/images/logos/ancestry_logo.svg';
import ikeaLogoSVG from '../../../assets/images/logos/ikea_logo.svg';
import canonLogoSVG from '../../../assets/images/logos/canon_logo.svg';
import vtbLogoSVG from '../../../assets/images/logos/vtb_logo.svg';
import vkLogoSVG from '../../../assets/images/logos/vk_logo.svg';
import cocaColaLogoSVG from '../../../assets/images/logos/coca_cola_logo.svg';
import googleLogoSVG from '../../../assets/images/logos/google_logo.svg';
import agcLogoSVG from '../../../assets/images/logos/agc_logo.svg';
import pgLogoSVG from '../../../assets/images/logos/pg_logo.svg';
import sberLogoSVG from '../../../assets/images/logos/sber_logo.svg';
import hondaLogoSVG from '../../../assets/images/logos/honda_logo.svg';
import tatneftLogoSVG from '../../../assets/images/logos/tatneft_logo.svg';
import uniqloLogoSVG from '../../../assets/images/logos/uniqlo_logo.svg';
import unileverLogoSVG from '../../../assets/images/logos/unilever_logo.svg';
import cdsLogoSVG from '../../../assets/images/logos/cds_logo.svg';
import mastercardLogoSVG from '../../../assets/images/logos/mastercard_logo.svg';
import akBarsBankLogoSVG from '../../../assets/images/logos/ak_bars_bank_logo.svg';
import audiLogoSVG from '../../../assets/images/logos/audi_logo.svg';
import eidosRoboticsLogoSVG from '../../../assets/images/logos/eidos_robotics_logo.svg';
import infinitiLogoSVG from '../../../assets/images/logos/infiniti_logo.svg';
import volvoLogoSVG from '../../../assets/images/logos/volvo_logo.svg';
import samsungLogoSVG from '../../../assets/images/logos/samsung_logo.svg';
import heinekenLogoSVG from '../../../assets/images/logos/heineken_logo.svg';
import marsLogoSVG from '../../../assets/images/logos/mars_logo.svg';
import kelloggsLogoSVG from '../../../assets/images/logos/kelloggs_logo.svg';
import panasonicLogoSVG from '../../../assets/images/logos/panasonic_logo.svg';

const Partners: React.FC = ({}) => {
    const images = [
        sberSolutionsLogoSVG,
        veeamLogoSVG,
        visaLogoSVG,
        ancestryLogoSVG,
        ikeaLogoSVG,
        canonLogoSVG,
        vtbLogoSVG,
        vkLogoSVG,
        cocaColaLogoSVG,
        googleLogoSVG,
        agcLogoSVG,
        pgLogoSVG,
        sberLogoSVG,
        hondaLogoSVG,
        tatneftLogoSVG,
        uniqloLogoSVG,
        unileverLogoSVG,
        cdsLogoSVG,
        mastercardLogoSVG,
        akBarsBankLogoSVG,
        audiLogoSVG,
        eidosRoboticsLogoSVG,
        infinitiLogoSVG,
        volvoLogoSVG,
        samsungLogoSVG,
        heinekenLogoSVG,
        marsLogoSVG,
        kelloggsLogoSVG,
        panasonicLogoSVG,
    ];
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            '.partners-headline',
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: '.partners-headline',
                    start: () =>
                        window.innerWidth < 481 ? 'bottom 95%' : 'bottom 80%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
            }
        );
        gsap.fromTo(
            '.partners-logo-item',
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: '.partners-logo-item',
                    start: () =>
                        window.innerWidth < 481 ? 'top 85%' : 'top 70%',
                },
                duration: 0.6,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: {
                    grid: 'auto',
                    axis: 'y',
                    from: 'start',
                    each: 0.15,
                },
            }
        );
    }, []);
    return (
        <div className={styles.carousel}>
            <div className="container">
                <div className={styles.content}>
                    <div className={`${styles.headline} partners-headline`}>
                        Нам доверяют
                    </div>

                    <div className={styles.logos}>
                        {images.map((logo, index) => (
                            <img
                                src={logo}
                                key={index}
                                alt=""
                                className={`${styles.logo} partners-logo-item`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
