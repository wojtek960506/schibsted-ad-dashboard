import './AdRendererMetric.css';


interface AdMetricProps {
  title: string;
  value: string | number;
}

export const AdRendererMetric = ({ title, value }: AdMetricProps) => {
  return (
    <div className='ad-renderer-metric-container'>
    <div className='ad-renderer-metric'>
      <span className='ad-renderer-metric-title'>{title}</span>
      <span className='ad-renderer-metric-value'>{value}</span>
    </div>
    </div>
  )
}
