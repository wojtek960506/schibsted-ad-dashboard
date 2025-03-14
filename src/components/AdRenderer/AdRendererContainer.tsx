import { useContext } from 'react';

import { AdRenderer } from './AdRenderer';

import { AdContext } from '../../services/AdContext';

import './AdRenderer.css';


export const AdRendererContainer = () => {
  const { data: adsData } = useContext(AdContext);

  return (
    <div className='ad-renderer-container'>
      {adsData?.map(adData => <AdRenderer key={adData.id} adData={adData} />)}
    </div>
  )
}
