import { useEffect } from 'react';
import { UseCasesPinnedScrollReturnValue } from '../../components/pageSections/Cases/utils/useCasesPinnedScroll';

export function useCustomHistoryPopstate(
    casesContext: UseCasesPinnedScrollReturnValue
) {
    useEffect(() => {
        const handlePopstate = (e: PopStateEvent) => {
            // @ts-ignore
            if (e.currentTarget.location.hash === '#cases') {
                history.replaceState('', '', '/#cases');
                setTimeout(() => {
                    casesContext?.jumpToCase(0);
                }, 100);
            }
        };

        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    });
}
