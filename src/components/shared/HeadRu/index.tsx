import React from 'react';
import { Helmet } from 'react-helmet';

const HeadRu: React.FC = () => (
<>
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
            content="Разрабатываем proof of concept, запускаем MVP и масштабируем цифровые продукты. Формируем команды и процессы разработки, находим решения нетиповых задач."
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
        <script type="text/javascript">{`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109099360', 'ym');

            ym(109099360, 'init', { ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true });
        `}</script>
    </Helmet>
    <noscript>
        <div>
            <img
                src="https://mc.yandex.ru/watch/109099360"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
            />
        </div>
    </noscript>
    </>
);

export default HeadRu;
