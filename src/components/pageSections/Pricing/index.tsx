import React from 'react';
import cn from 'classnames';

import { Section } from '@/shared/Section';
import { Container } from '@/shared/Container';

import * as styles from './index.module.scss';

const Pricing: React.FC<{ id?: string }> = ({ id }) => {
    console.log({ styles });
    return (
        <Section id={id} className={cn(styles.root)} theme="dark">
            <Container>
                <p className={styles.text}>
                    Мы&nbsp;практикуем гибкий подход к&nbsp;ценообразованию,
                    поэтому сначала анализируем вашу задачу, вместе обсуждаем
                    разработку, сроки и&nbsp;важные детали и&nbsp;только после
                    этого называем стоимость проекта
                </p>
            </Container>
        </Section>
    );
};

export default Pricing;
