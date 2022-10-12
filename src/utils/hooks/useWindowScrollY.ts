import { useEffect, useState } from 'react';

export function useWindowScrollY() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () =>  {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
}