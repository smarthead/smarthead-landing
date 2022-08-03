import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { scrollToTop } from '../../../utils/scroll';
import * as styles from './index.module.scss';
import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { links } from '../../shared/links';

const Footer: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [
                `.${styles.title}`,
                `.${styles.contactsItem}`,
                `.${styles.border}`,
            ],
            { yPercent: gsap.utils.wrap([60, 20, 20, 20, 200]), autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.title}`,
                    start: () =>
                        window.innerWidth < 641 ? '0% 80%' : 'top 70%',
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
                    Ready to bring your [product] ideas to life?
                </h2>
                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <span>
                            5616 Geary Blvd., Ste. 207 <br />
                            San Francisco, CA 94121
                            <br />
                            USA
                        </span>
                        <span>SmartHead LLC</span>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.linkedIn}
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className={styles.contactsItem}>
                        <a
                            className={styles.contactLink}
                            href="mailto:hello@smarthead.digital"
                        >
                            hello@smarthead.digital
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.linkedIn}
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div
                        className={`${styles.contactsItem} ${styles.socialNetworkDesktop}`}
                    >
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            // href={links.linkedIn}
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <div className={styles.border}></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
