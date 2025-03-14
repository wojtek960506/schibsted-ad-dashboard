import { createContext } from 'react';
import { AdData, AdTypeFilter } from './types';


type AdContextType = {
  data?: AdData[];
  setAdTypeFilter: React.Dispatch<React.SetStateAction<AdTypeFilter>>
}

export const AdContext = createContext<AdContextType>({
  data: undefined as AdData[] | undefined,
  setAdTypeFilter: () => null,
});
