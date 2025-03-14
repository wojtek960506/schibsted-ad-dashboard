import { useState } from 'react'

import { AdPerformance } from './components/AdPerformance/AdPerformance'
import { AdPerformanceHeader } from './components/AdPerformanceHeader/AdPerformanceHeader'
import { AdRendererContainer } from './components/AdRenderer/AdRendererContainer'

import { AdContext } from './services/AdContext'
import { ErrorHandler } from './services/ErrorHandler'
import { AdData, AdTypeFilter, AllAds } from './services/types'
import { useGetFetch } from './services/useGetFetch'

import './App.css'

const API_URL = 'https://my-json-server.typicode.com/akramsaouri/ad-performance/ads';


const DataLoading = () => {
  return (
    <div className='loading-container'>
      <div className='loading-value'>
        Loading <span className="loader" />
      </div>
    </div>
  )
}

const App = () => {
  const { data, error } = useGetFetch<AdData[]>(API_URL);

  const [adTypeFilter, setAdTypeFilter] = useState<AdTypeFilter>(AllAds.ALL_ADS);
 
  const filteredData = data ? data.filter(adData => {
    if (adTypeFilter === AllAds.ALL_ADS) return true;
    return adData.type === adTypeFilter;
  }) : undefined;

  return ( 
    <ErrorHandler error={error}>
      {data ? 
        (
          <AdContext.Provider value={{data: filteredData, setAdTypeFilter}}>
            <AdPerformanceHeader />
            <AdPerformance />
            <AdRendererContainer />
          </AdContext.Provider>
        ) : <DataLoading />
      }
    </ErrorHandler>  
  )
}

export default App
