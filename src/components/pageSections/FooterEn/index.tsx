import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';
import ArrowRightYellow from '../../../assets/images/Arrow-Right-Yellow.svg';
import { links } from '../../shared/links';

const Footer: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [`.${styles.title}`, `.${styles.mail}`, `.${styles.contacts}`],
            { yPercent: gsap.utils.wrap([60, 100, 80]), autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.title}`,
                    // start: () =>
                    //     window.innerWidth < 641 ? '0% 80%' : 'top 70%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.2,
            }
        );
    }, []);
    return (
        <section id={id} className={styles.root}>
            <div className="container">
                <h2 className={styles.title}>
                    Ready to&nbsp;bring your product
                    <br />
                    ideas to&nbsp;life?
                </h2>
                <div className={styles.content}>
                    <a
                        className={styles.mail}
                        href="mailto:hello@smarthead.digital"
                    >
                        <img
                            className={styles.mailArrow}
                            src={ArrowRightYellow}
                            alt=""
                        />
                        hello@smarthead.digital
                    </a>
                </div>

                <div className={styles.contacts}>
                    <span className={styles.adress}>
                        SmartHead LLC, San Francisco, USA
                    </span>
                    <div>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.linkedIn}
                        >
                            LinkedIn
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.privacyPolicy}
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
