import { createContext } from 'react';
import { AdData } from './types';


export const AdContext = createContext(
  {data: undefined as AdData[] | undefined}
);
