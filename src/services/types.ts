export enum AdType {
  IMAGE = 'image',
  TEXT = 'text',
  VIDEO = 'video'
};

export enum AllAds {
  ALL_ADS = "all_ads"
};

export type AllAdTypes = AllAds | AdType;

export type BaseAd = {
  id: string,
  impressions: number,
  clicks: number,
  ctr: number,
};

export type ImageAd = BaseAd & {
  type: AdType.IMAGE;
  url: string;
}

export type VideoAd = BaseAd & {
  type: AdType.VIDEO;
  url: string;
}

export type TextAd = BaseAd & {
  type: AdType.TEXT;
  headline: string;
  description: string;
}

export type AdData = ImageAd | VideoAd | TextAd;

export interface FetchData {
  data?: AdData[];
  error?: Error;
}

