import { useContext, useMemo } from "react"
import { AdContext } from "../../services/AdContext"

import './AdPerformance.css'
import { AdMetric } from "./AdMetric";
import { AdData } from "../../services/types";
import { formatNumber } from "../../services/utils";


interface AdMetrics {
  totalImpressions: number;
  totalClicks: number;
  averageCtr: number;
}

const round = (num: number) => {
  return Math.round(num * 100) / 100;
}


const calculateMetrics = (data: AdData[]): AdMetrics => {
  let totalImpressions = 0;
  let totalClicks = 0;
  let ctrSum = 0;
  data.forEach(ad => {
    totalImpressions += ad.impressions;
    totalClicks += ad.clicks;
    ctrSum += ad.ctr;
  })
  return {
    totalImpressions,
    totalClicks,
    averageCtr: round(ctrSum / data.length)
  }

}

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