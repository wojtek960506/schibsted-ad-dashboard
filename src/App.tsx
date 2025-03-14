import { useReducer } from 'react'

import { AdPerformance } from './components/AdPerformance/AdPerformance'
import { AdPerformanceHeader } from './components/AdPerformanceHeader/AdPerformanceHeader'
import { AdRendererContainer } from './components/AdRenderer/AdRendererContainer'

import { AdContext } from './services/AdContext'
import { AdFilterContext, initialAdFilterState } from './services/AdFitlerContext'
import { ErrorHandler } from './services/ErrorHandler'
import { adFilterReducer } from './services/reducers'
import { AdData } from './services/types'
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
  const [adTypeFilter, setAdTypeFilter] = useReducer(adFilterReducer, initialAdFilterState);
 
  return ( 
    <ErrorHandler error={error}>
      {data ? 
        (
          <AdContext.Provider value={{data}}>
            <AdFilterContext.Provider value={{ adTypeFilter, setAdTypeFilter }}>
              <AdPerformanceHeader />
              <AdPerformance />
              <AdRendererContainer />
            </AdFilterContext.Provider>
          </AdContext.Provider>
        ) : <DataLoading />
      }
    </ErrorHandler>  
  )
}

export default App
