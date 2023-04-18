import { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

export function useIsHeroFontsLoaded() {
    const [isFontsLoaded, setIsFontsLoaded] = useState(false);

    useEffect(() => {
        if (!isFontsLoaded) {
            const fontGilroyBold = new FontFaceObserver('Gilroy-Bold');
            const fontInterRegular = new FontFaceObserver('Inter-Regular');
            Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
                () => {
                    setIsFontsLoaded(true);
                }
            );
        }
    }, [isFontsLoaded]);

    return isFontsLoaded;
}
