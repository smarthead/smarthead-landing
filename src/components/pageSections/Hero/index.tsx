import React from 'react';
import Header from '../../layout/Header';
import ButtonLink from '../../shared/ButtonLink';
import * as styles from './index.module.scss';

const Hero: React.FC = () => (
    <section className={`${styles.hero} container`}>
        <div className={styles.header}>
            <Header />
        </div>
        <div className={styles.content}>
            <h1 className={styles.headline}>
                Разрабатываем
                <br />
                <span className={styles.secondLine}>амбициозные</span>
                <br />
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

export default Hero;
