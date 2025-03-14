import { ReactNode } from "react"


interface ErrorHandlerProps {
  error?: Error,
  children: ReactNode | ReactNode[]
}

export const ErrorHandler = ({error, children}: ErrorHandlerProps) => {
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
