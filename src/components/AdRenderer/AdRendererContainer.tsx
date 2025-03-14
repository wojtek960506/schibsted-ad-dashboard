import { useContext } from 'react';

import { AdRenderer } from './AdRenderer';

import { AdContext } from '../../services/AdContext';
import { AdFilterContext } from '../../services/AdFitlerContext';
import { AllAds } from '../../services/types';

import './AdRenderer.css';


export const AdRendererContainer = () => {
  const { data: adsData } = useContext(AdContext);
  const { adTypeFilter } = useContext(AdFilterContext);

  return (
    <div className='ad-renderer-container'>
      {adsData?.filter(adData => {
        if (adTypeFilter.adTypeFilter === AllAds.ALL_ADS) return true;
        return adData.type === adTypeFilter.adTypeFilter;
      }).map(adData => <AdRenderer key={adData.id} adData={adData} />)}
    </div>
  )
}
