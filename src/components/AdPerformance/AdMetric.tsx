interface AdMetricProps {
  title: string;
  value: string | number;
}


export const AdMetric = ({ title, value }: AdMetricProps) => {
  return (
    <div className='ad-metric-container'>
      <div className='ad-metric'>
        <span className='ad-metric-title'>{title}</span>
        <span className='ad-metric-value'>{value}</span>
      </div>
    </div>
  )
}
