import { TextAd } from "../../services/types"


export const AdRendererText = (adData: TextAd) => {
  const { type, impressions, clicks, ctr, headline, description } = adData;



  return (
    <div className='image-ad'>
      <span>type: {type}</span>
      <span>impressions: {impressions}</span>
      <span>clicks: {clicks}</span>
      <span>ctr: {ctr}</span>
      <span>headline: {headline}</span>
      <span>description: {description}</span>
    </div>
  )
}