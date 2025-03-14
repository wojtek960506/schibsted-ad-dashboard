import { createContext } from 'react';
import { AllAds, AllAdTypes } from './types';


export type InitialAdFilterType = {
  adTypeFilter: AllAdTypes;
};

export const initialAdFilterState = {
  adTypeFilter: AllAds.ALL_ADS,
};

export const AdFilterContext = createContext<{
  adTypeFilter: InitialAdFilterType,
  setAdTypeFilter: React.ActionDispatch<[filterValue: AllAdTypes]>
}>({
  adTypeFilter: initialAdFilterState,
  setAdTypeFilter: () => null
});
