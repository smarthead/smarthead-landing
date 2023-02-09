import { useEffect, useRef } from 'react';

export function useExecuteOnce(effect: () => void): void {
    const isExecute = useRef(true);

    useEffect(() => {
        if (isExecute) {
            isExecute.current = false;
            effect();
        }
    }, []);
}
