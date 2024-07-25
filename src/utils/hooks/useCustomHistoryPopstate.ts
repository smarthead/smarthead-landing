import { useEffect } from 'react';
import { UseCasesPinnedScrollReturnValue } from '@/pageSections/Cases/utils/useCasesPinnedScroll';
import { navigateScrollEffect } from '../scrollUtils';

export function useCustomHistoryPopstate(
    casesContext: UseCasesPinnedScrollReturnValue
) {
    useEffect(() => {
        const handlePopstate = (e: PopStateEvent) => {
            // @ts-ignore
            if (e.currentTarget.location.hash === '#cases') {
                history.replaceState('', '', '/#cases');
                navigateScrollEffect.toggle(false);
                casesContext?.jumpToCase(0);
                setTimeout(() => navigateScrollEffect.toggle(true), 100);
            }
        };

        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [casesContext.jumpToCase]);
}
