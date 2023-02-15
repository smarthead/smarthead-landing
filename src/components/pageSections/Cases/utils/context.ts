import React from 'react';
import { UseCasesPinnedScrollReturnValue } from './useCasesPinnedScroll';

export const CasesScrollContext =
    React.createContext<UseCasesPinnedScrollReturnValue | null>(null);
