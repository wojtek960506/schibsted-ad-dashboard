import { TextAd } from "../../services/types"


export const AdRendererText = (adData: TextAd) => {
  const { headline, description } = adData;

  return (
    <div className='text-ad'>
      <span className="text-headline">{headline}</span>
      <span>{description}</span>
    </div>
  )
}
