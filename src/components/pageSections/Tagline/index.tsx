import React from 'react';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';
import * as styles from './index.module.scss';
import ButtonLink from '../../shared/ButtonLink';

const Tagline: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <div className={styles.content}>
                <h3 className={styles.title}>Сделаем мир лучше вместе?</h3>
                <ButtonLink
                    clickHandler={() => {
                        scrollToSection(`#${navigation.contacts}`);
                    }}
                    type="black"
                    text="ДА!"
                    link={`#${navigation.contacts}`}
                />
            </div>
        </div>
    </section>
);

export default Tagline;
