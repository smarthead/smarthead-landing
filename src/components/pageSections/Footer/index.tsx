import React, { useEffect } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { SectionTitle } from '../../shared/SectionTitle';

import { links } from '../../shared/links';
import * as styles from './index.module.scss';

const Footer: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [
                `.${styles.title}`,
                `.firstRowAnimation`,
                `.secondRowAnimation`,
                // `.${styles.contactsItem}`,
                // `.${styles.border}`,
            ],
            {
                yPercent: gsap.utils.wrap([60, 100, 100, 20, 200]),
                autoAlpha: 0,
            },
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
                <SectionTitle className={styles.title}>
                    Давайте поработаем вместе?
                </SectionTitle>

                <div className={styles.grid}>
                    <div className={styles.content}>
                        <div
                            className={cn(
                                styles.contentRow,
                                styles.contentRowFirst,
                                'firstRowAnimation'
                            )}
                        >
                            <a
                                className={styles.mail}
                                href="mailto:hello@smarthead.ru"
                            >
                                <span className={styles.yellow}>hello</span>
                                @smarthead.ru
                            </a>
                            <span className={styles.description}>
                                обсудить проект
                            </span>
                        </div>

                        <div
                            className={cn(
                                styles.contentRow,
                                'secondRowAnimation'
                            )}
                        >
                            <a
                                className={styles.mail}
                                href="mailto:hr@smarthead.ru"
                            >
                                <span className={styles.yellow}>hr</span>
                                @smarthead.ru
                            </a>
                            <span className={styles.description}>
                                присоединиться к команде
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
