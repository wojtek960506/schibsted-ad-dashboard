import { VideoAd } from "../../services/types"


export const AdRendererVideo = (adData: VideoAd) => {
  const { url } = adData;

  return (
    <video className='video-ad' controls autoPlay muted>
      <source src={url} type="video/mp4" />
    </video>
  )
}
