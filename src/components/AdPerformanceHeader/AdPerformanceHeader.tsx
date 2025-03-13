import { useContext } from 'react';
import Select from 'react-select';

import './AdPerformanceHeader.css';
import { AdType, AllAds, AllAdTypes } from '../../services/types';
import { AdFilterContext } from '../../services/AdFitlerContext';


interface AdTypeOption {
  value: AllAdTypes;
  label: string;
}

const options: AdTypeOption[] = [
  { value: AllAds.ALL_ADS, label: AllAds.ALL_ADS.valueOf() },
  { value: AdType.IMAGE, label: AdType.IMAGE.valueOf() },
  { value: AdType.TEXT, label: AdType.TEXT.valueOf() },
  { value: AdType.VIDEO, label: AdType.VIDEO.valueOf() }
]

export const AdPerformanceHeader = () => {
  const { setAdTypeFilter } = useContext(AdFilterContext);
  

  return (
    <div className="ad-performance-dashboard">
      <span>Ad Performance Dashboard</span>
      <Select 
        className="select-ad-type"
        options={options}
        defaultValue={options[0]}
        onChange={(option) => setAdTypeFilter(option!.value)}
      />
    </div>
  )
}