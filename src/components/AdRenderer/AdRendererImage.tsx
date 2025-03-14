import { ImageAd } from '../../services/types';


export const AdRendererImage = (adData: ImageAd) => {
  const { url } = adData;

  return (
      <img className='image-ad' src={url} />
  )
}
