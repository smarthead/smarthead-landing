import { useCallback, useEffect } from 'react';

let alarmClock: NodeJS.Timeout;

export const useWindowScrollEnd = (callback: () => void, timeout: number) => {
    const handleScroll = useCallback(() => {
        clearTimeout(alarmClock);

        alarmClock = setTimeout(callback, timeout);
    }, [callback, timeout]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
};