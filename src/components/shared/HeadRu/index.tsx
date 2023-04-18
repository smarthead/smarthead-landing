import React from 'react';
import { Helmet } from 'react-helmet';

const HeadRu: React.FC = () => (
    <Helmet>
        <title>SmartHead — разработка цифровых продуктов</title>
        <meta
            property="og:title"
            content="SmartHead — разработка цифровых продуктов"
        />
        <meta property="og:site_name" content="SmartHead" />
        <meta
            property="og:description"
            name="description"
            content="Разрабатываем proof of concept, запускаем MVP и масштабируем цифровые продукты. Формируем команды и процессы разработки, ищем решения нетиповых задач."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarthead.ru/" />
        <meta
            property="og:image"
            content="https://smarthead.ru/SmartHead-Logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="facebook-domain-verification"
            content="ypjtjqnhfbwzzlc83uqjihzeaogz26"
        ></meta>
        <link
            type="text/plain"
            rel="author"
            href="https://smarthead.ru/humans.txt"
        />
    </Helmet>
);

export default HeadRu;
