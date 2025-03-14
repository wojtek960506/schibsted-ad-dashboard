import { render, screen } from '@testing-library/react';
import App from './App';
import { mockedAdsResponse } from '../tests/mockAds';

import { useGetFetch } from './services/useGetFetch';

jest.mock('./services/useGetFetch');

const mockedUseGetFetch = jest.mocked(useGetFetch);

describe('App', () => {
  
  it('renders the Loading component while loading the data', () => {
    mockedUseGetFetch.mockReturnValue({data: undefined, error: undefined})
    render(<App />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it('renders the dashboard after loading data', () => {
    mockedUseGetFetch.mockReturnValue({data: mockedAdsResponse, error: undefined})
    render(<App />);
    expect(screen.getByText("Ad Performance Dashboard")).toBeInTheDocument();
    // there is 10 ads in mocked data
    expect(screen.getAllByText('Impressions')).toHaveLength(10);
  })
});
