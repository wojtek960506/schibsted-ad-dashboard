import { useEffect, useState } from "react";


interface ReturnData<T> {
  data?: T;
  error?: Error
};

export const useGetFetch = <T>(url: string): ReturnData<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.ok) return response.json()
        return Promise.reject(response)
      })
      .catch((error) => {
        console.log('error 1')
        console.log(error);
        setError(error)
      })
      .then((data: T ) => setData(data))
      .catch((error: Error) => {
        console.log('error')
        console.log(error)
        setError(error)
      })
  }, [url])

  return { data, error }
}
