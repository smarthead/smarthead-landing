import React, { useEffect, useRef } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import Header from '../../layout/Header';
import ButtonLink from '../../shared/ButtonLink';
import * as styles from './index.module.scss';

export interface ILinks {
    links: {
        [key: string]: string;
    };
}

const Hero: React.FC<ILinks> = ({ links }) => {
    const resize = () => {
        const secondLineElem = document.getElementsByClassName(
            styles.secondLine
        )[0] as HTMLElement;
        const subtextElem = document.getElementsByClassName(
            styles.subtext
        )[0] as HTMLElement;

        const width = window.innerWidth;
        if (width > 992 && width <= 1281) {
            subtextElem.style.marginRight =
                0.98 * (secondLineElem.offsetWidth - subtextElem.offsetWidth) +
                'px';
        } else {
            subtextElem.style.marginRight = '0';
        }
    };

    useEffect(() => {
        const fontGilroyBold = new FontFaceObserver('Gilroy-Bold');
        const fontInterRegular = new FontFaceObserver('Inter-Regular');

        Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
            () => {
                resize();
            }
        );

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.header}>
                <Header links={links} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Разрабатываем
                    <span className={styles.secondLine}>амбициозные</span>
                    цифровые продукты
                </h1>
                <div className={styles.block}>
                    <ButtonLink
                        type="yellow"
                        text="ХОЧУ С ВАМИ РАБОТАТЬ"
                        link="#"
                    />
                    <p className={styles.subtext}>
                        Продуктоориентированная команда,
                        <br /> а не просто «руки на аутстаффе»
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
