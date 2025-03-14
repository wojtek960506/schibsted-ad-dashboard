import { useContext } from 'react';
import Select from 'react-select';

import { AdType, AllAds, AdTypeFilter } from '../../services/types';
import { capitalization } from '../../services/utils';

import './AdPerformanceHeader.css';
import { AdContext } from '../../services/AdContext';


interface AdTypeOption {
  value: AdTypeFilter;
  label: string;
}

const options: AdTypeOption[] = [
  { value: AllAds.ALL_ADS, label: capitalization(AllAds.ALL_ADS.valueOf(), '_') },
  { value: AdType.IMAGE, label: capitalization(AdType.IMAGE.valueOf(), '_') },
  { value: AdType.TEXT, label: capitalization(AdType.TEXT.valueOf(), '_') },
  { value: AdType.VIDEO, label: capitalization(AdType.VIDEO.valueOf(), '_') }
]

export const AdPerformanceHeader = () => {
  const { setAdTypeFilter } = useContext(AdContext);
  
  return (
    <div className='ad-performance-dashboard'>
      <span>Ad Performance Dashboard</span>
      <Select 
        className='select-ad-type'
        options={options}
        defaultValue={options[0]}
        onChange={(option) => setAdTypeFilter(option!.value)}
      />
    </div>
  )
}
