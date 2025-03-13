import { useContext, useMemo } from "react";

import { AdRenderer } from "./AdRenderer";
import { AdContext } from "../../services/AdContext";

import "./AdRenderer.css"
import { AdFilterContext } from "../../services/AdFitlerContext";
import { AdType, AllAds } from "../../services/types";


export const AdRendererContainer = () => {
  const { data: adsData } = useContext(AdContext);
  const { adTypeFilter } = useContext(AdFilterContext);

  const chosenType = useMemo(() => {
    const typesToFilter = [];
    console.log('adTypFilter', adTypeFilter);
    switch (adTypeFilter.adTypeFilter) {
      case AllAds.ALL_ADS:
        typesToFilter.push(AdType.IMAGE, AdType.TEXT, AdType.VIDEO)
        break;
      case AdType.IMAGE:
        typesToFilter.push(AdType.IMAGE);
        break;
      case AdType.TEXT:
        typesToFilter.push(AdType.TEXT);
        break;
      case AdType.VIDEO:
        typesToFilter.push(AdType.VIDEO);
        break;
    }
    console.log(typesToFilter);
    return typesToFilter;
  }, [adTypeFilter])

  return (
    <div className="ad-renderer-container">
      {adsData?.filter(adData => chosenType.includes(adData.type))
        .map(adData => <AdRenderer key={adData.id} adData={adData} />)}
    </div>
  )
}