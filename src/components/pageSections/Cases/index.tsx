import React, { useContext, useEffect, useState } from 'react';

import { CaseItemInfo, CaseItemImage } from '@/shared/CaseItem';
import { Container } from '@/shared/Container';
import { CasesScrollContext } from './utils/context';

import * as styles from './index.module.scss';

interface ICases {
    id: string;
    data: {
        title: string;
        casesList: {
            title: string;
            description: string | string[];
            image: {
                original: { src: string };
                tablet: { src: string };
                desktop: { src: string; origin: string };
            };
        }[];
    };
}

const Cases: React.FC<ICases> = ({ id, data }) => {
    const casesScrollContext = useContext(CasesScrollContext);
    useEffect(() => {
        casesScrollContext?.handlePinnedScrollEffect();
    }, []);

    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        const width = window.innerWidth;
        setIsTablet(width > 640 && width <= 992);
        setIsMobile(width <= 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id={id} className={`cases-root ${styles.root}`}>
            <Container className={styles.container}>
                <section
                    className={styles.casesContainer}
                    ref={casesScrollContext?.casesContainerRef}
                >
                    {data.casesList.map((caseObj, index) => (
                        <div className={styles.cases} key={index}>
                            <div className={styles.casesBack}></div>
                            <div className={styles.casesInfo}>
                                <div
                                    className={`${styles.casesInfoItem} cases-info-item`}
                                >
                                    <CaseItemInfo
                                        isFirst={
                                            casesScrollContext?.isTitleShown ||
                                            index === 0
                                        }
                                        sectionTitle={data.title}
                                        title={caseObj.title}
                                        description={caseObj.description}
                                    />
                                </div>
                            </div>
                            <div className={styles.casesImage}>
                                <div className="cases-image-item">
                                    <CaseItemImage
                                        image={
                                            isTablet
                                                ? caseObj.image.tablet.src
                                                : isMobile
                                                ? caseObj.image.original.src
                                                : caseObj.image.desktop.src
                                        }
                                        origin={
                                            !isTablet && !isMobile
                                                ? caseObj.image.desktop.origin
                                                : '50% 50%'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <div className={styles.bullets}>
                    {data.casesList.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                casesScrollContext?.jumpToCase(index);
                            }}
                            className={`${styles.buttonBullet} ${
                                index === casesScrollContext?.activeSlide
                                    ? styles.buttonBulletActive
                                    : ''
                            }`}
                        ></button>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Cases;
