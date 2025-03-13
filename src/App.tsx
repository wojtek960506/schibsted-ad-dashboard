import { ReactNode } from 'react'

import { useGetFetch } from './services/useFetch'
import { AdContext } from './services/AdContext'
import { AdPerformance } from './components/AdPerformance/AdPerformance'
import { AdPerformanceHeader } from './components/AdPerformanceHeader/AdPerformanceHeader'
import { AdRendererContainer } from './components/AdRenderer/AdRendererContainer'
import { AdData } from './services/types'

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

interface ErrorHandlerProps {
  error?: Error,
  children: ReactNode | ReactNode[]
}

const ErrorHandler = ({error, children}: ErrorHandlerProps) => {
  return (
    <>
      {error
        ? <div>Something went wrong</div>
        : <>{children}</>
      } 
    </>
  )
}

const App = () => {
  const { data, error } = useGetFetch<AdData[]>(API_URL);
 
  return ( 
    <ErrorHandler error={error}>
      {data ? 
        (
          <AdContext.Provider value={{data}}>
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
