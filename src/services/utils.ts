import { AdData, AdMetrics } from "./types";

export const formatNumber = (num: number): string => {
  const numStrArrReversed = num.toString().split('').reverse();
  let numStrArrReversedSpaces = [];
  for (let i = 0; i < numStrArrReversed.length; i++) {
    if (i !== 0 && i % 3 === 0) numStrArrReversedSpaces.push(' ');
    numStrArrReversedSpaces.push(numStrArrReversed[i]);
  }
  return numStrArrReversedSpaces.reverse().join('');
}

export const capitalization = (str: string, delimiter: string): string => {
  const strArr = str.split(delimiter);
  const capitalizedStrArr = strArr.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedStrArr.join(' ');
}

export const round = (num: number): number => {
  return Math.round(num * 100) / 100;
}

export const calculateMetrics = (data: AdData[]): AdMetrics => {
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
