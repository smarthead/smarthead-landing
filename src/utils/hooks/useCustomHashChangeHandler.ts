import { UseCasesPinnedScrollReturnValue } from '../../components/pageSections/Cases/utils/useCasesPinnedScroll';
import { useEffect } from 'react';
import { scrollTo, scrollToSection } from '../scroll';

export function useCustomHashChangeHandler(
    casesContext: UseCasesPinnedScrollReturnValue
) {
    const calcHashPart = (url: string) => {
        return url.includes('#') ? url.split('#')[1] : '';
    };

    useEffect(() => {
        const handleHashChange = (e: HashChangeEvent) => {
            const oldHash = calcHashPart(e.oldURL);
            const newHash = calcHashPart(e.newURL);

            if (oldHash === '') {
                localStorage.setItem(
                    'currentScrollPosition',
                    String(window.scrollY)
                );
            }

            if (newHash === '') {
                const currentPosition =
                    Number(localStorage.getItem('currentScrollPosition')) || 0;

                scrollTo(currentPosition);
            }

            if (newHash === 'cases') {
                history.replaceState('', '', '/#cases');
                scrollToSection('#cases', () => {
                    casesContext?.jumpToCase(0);
                });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    });
}
