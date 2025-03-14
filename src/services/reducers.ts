import { InitialAdFilterType } from './AdFitlerContext';
import { AllAdTypes } from './types';


export const adFilterReducer = (state: InitialAdFilterType, filterValue: AllAdTypes) => {
  return { ...state, adTypeFilter: filterValue}
};
