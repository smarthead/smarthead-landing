import { createContext } from 'react';
import { UseSavedScrollPositionReturnedValue } from '../../utils/hooks/useCustomHashChangeHandler';

export const ScrollPositionContext =
    createContext<UseSavedScrollPositionReturnedValue | null>(null);
