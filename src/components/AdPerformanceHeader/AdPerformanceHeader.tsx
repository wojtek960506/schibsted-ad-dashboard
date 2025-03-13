import { useContext } from 'react';
import Select from 'react-select';

import './AdPerformanceHeader.css';
import { AdType, AllAds, AllAdTypes } from '../../services/types';
import { AdFilterContext } from '../../services/AdFitlerContext';
import { capitalization } from '../../services/utils';


interface AdTypeOption {
  value: AllAdTypes;
  label: string;
}

const options: AdTypeOption[] = [
  { value: AllAds.ALL_ADS, label: capitalization(AllAds.ALL_ADS.valueOf(), '_') },
  { value: AdType.IMAGE, label: capitalization(AdType.IMAGE.valueOf(), '_') },
  { value: AdType.TEXT, label: capitalization(AdType.TEXT.valueOf(), '_') },
  { value: AdType.VIDEO, label: capitalization(AdType.VIDEO.valueOf(), '_') }
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