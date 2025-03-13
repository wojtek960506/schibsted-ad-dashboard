import { AdData, AdType } from "../../services/types";
import { capitalization, formatNumber } from "../../services/utils";
import { AdRendererImage } from "./AdRendererImage";
import { AdRendererMetric } from "./AdRendererMetric/AdRendererMetric";
import { AdRendererText } from "./AdRendererText";
import { AdRendererVideo } from "./AdRendererVideo";

import './AdRenderer.css';


interface AdRendererProps {
  adData: AdData;
}

export const AdRenderer = ( { adData }: AdRendererProps) => {
  const { type } = adData;


  const getRenderer = () => {
    switch (type) {
      case AdType.IMAGE:
        return <AdRendererImage {...adData} />
      case AdType.TEXT:
          return <AdRendererText {...adData} />
      case AdType.VIDEO:
          return <AdRendererVideo {...adData} />
    }
  }

  const adTypeBoxClassName = `ad-type-box ad-type-box-${type}`;
  
  return (
    <div className="ad-renderer">    
      {getRenderer()}
      <div className='ad-renderer-metrics'>
        <AdRendererMetric title="Impressions" value={formatNumber(adData.impressions)} />
        <AdRendererMetric title="Clicks" value={formatNumber(adData.clicks)} />
        <AdRendererMetric title="CTR" value={`${adData.ctr}%`} />
      </div>
      <div className={adTypeBoxClassName}>{capitalization(type, ' ')}</div>
    </div>
  )



}