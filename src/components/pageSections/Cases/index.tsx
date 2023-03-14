import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

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

    const casesSectionRef = useRef<HTMLElement>(null);

    const neededHeight =
        document.documentElement.clientHeight * data.casesList.length;
    if (casesSectionRef.current) {
        casesSectionRef.current.style.height = `${neededHeight}px`;
    }

    useLayoutEffect(() => {
        const neededHeight =
            document.documentElement.clientHeight * data.casesList.length;
        if (casesSectionRef.current) {
            casesSectionRef.current.style.height = `${neededHeight}px`;
        }

        const timeout = setTimeout(
            () => casesScrollContext?.handlePinnedScrollEffect(),
            1000
        );
        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <section id={id} ref={casesSectionRef}>
            <div className={`cases-sections ${styles.root}`}>
                <section
                    className={styles.casesContainer}
                    ref={casesScrollContext?.casesContainerRef}
                >
                    {data.casesList.map((caseObj, index) => (
                        <div className={styles.cases} key={index}>
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
            </div>
        </section>
    );
};

export default Cases;
