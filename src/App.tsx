import { ReactNode, useReducer } from 'react'

import { useGetFetch } from './services/useFetch'
import { AdContext } from './services/AdContext'
import { AdPerformance } from './components/AdPerformance/AdPerformance'
import { AdPerformanceHeader } from './components/AdPerformanceHeader/AdPerformanceHeader'
import { AdRendererContainer } from './components/AdRenderer/AdRendererContainer'
import { AdData } from './services/types'

import './App.css'
import { adFilterReducer } from './services/reducers'
import { AdFilterContext, initialAdFilterState } from './services/AdFitlerContext'

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

interface ErrorHandlerProps {
  error?: Error,
  children: ReactNode | ReactNode[]
}

const ErrorHandler = ({error, children}: ErrorHandlerProps) => {
  return (
    <>
      {error
        ? <div className='loading-container'>
            <div className='loading-value'>
              Something went wrong. Please check the logs.
            </div>
          </div>
        : <>{children}</>
      } 
    </>
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
