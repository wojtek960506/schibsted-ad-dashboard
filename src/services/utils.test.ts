import { calculateMetrics, capitalization, formatNumber } from './utils';
import { mockedAdsResponse } from '../../tests/mockAds';
import { AdData, AdType } from './types';

const mockedAdData: AdData[] = [
    {
      id: 1,
      type: AdType.IMAGE,
      impressions: 15000,
      clicks: 300,
      ctr: 2,
      url: "https://picsum.photos/300/250?random=1"
    },
    {
      id: 2,
      type: AdType.IMAGE,
      impressions: 12000,
      clicks: 240,
      ctr: 2,
      url: "https://picsum.photos/300/250?random=2"
    },
  ]

describe('utils', () => {
  it('formatNumber', () => {
    expect(formatNumber(100000)).toEqual('100 000');
    expect(formatNumber(1000)).toEqual('1 000');
    expect(formatNumber(100)).toEqual('100');
  });

  it('capitalization', () => {
    expect(capitalization('some_stuff', '_')).toEqual('Some Stuff');
    expect(capitalization('some stuff', ' ')).toEqual('Some Stuff');
    expect(capitalization('some|stuff', '|')).toEqual('Some Stuff');
    expect(capitalization('some_stuff', '')).toEqual('S O M E _ S T U F F');
  });

  it('calculateMettics', () => {
    expect(calculateMetrics(mockedAdData)).toEqual({
      totalImpressions: 27000,
      totalClicks: 540,
      averageCtr: 2
    });
  })
})