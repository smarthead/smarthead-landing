import React, { useEffect, useState, useContext } from 'react';
import cn from 'classnames';

import { CaseItemInfo, CaseItemImage } from '../../shared/CaseItem';
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

    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        casesScrollContext?.handlePinnedScrollEffect();
    }, []);

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
        <section id={id} className={cn('cases-sections', styles.root)}>
            <section
                className={styles.casesContainer}
                ref={casesScrollContext?.casesContainerRef}
            >
                {data.casesList.map((caseObj, index) => (
                    <div className={styles.cases} key={index}>
                        <div className={styles.casesInfo}>
                            <div
                                className={cn(
                                    styles.casesInfoItem,
                                    'cases-info-item'
                                )}
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
                        className={cn(styles.buttonBullet, {
                            [styles.buttonBulletActive]:
                                index === casesScrollContext?.activeSlide,
                        })}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Cases;
