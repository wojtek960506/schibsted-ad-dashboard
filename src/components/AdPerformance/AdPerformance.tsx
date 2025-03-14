import { useContext, useMemo } from 'react';

import { AdMetric } from './AdMetric';

import { AdContext } from '../../services/AdContext';
import { calculateMetrics, formatNumber } from '../../services/utils';

import './AdPerformance.css';


export const AdPerformance = () => {
  const { data } = useContext(AdContext);
  const metrics = useMemo(() => calculateMetrics(data!), [data]);

  return (
    <div className='ad-performance'>
      <AdMetric title='Total Impressions' value={formatNumber(metrics.totalImpressions)} />
      <AdMetric title='Total Clicks' value={formatNumber(metrics.totalClicks)} />
      <AdMetric title='Average CTR' value={`${metrics.averageCtr}%`} />
    </div>
    
  )
}
