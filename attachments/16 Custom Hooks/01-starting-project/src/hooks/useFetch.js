import { useState } from "react";
import { useEffect } from "react";

export function useFetch(fetchFn,initialVal) {
    const [isFetching,setIsFetching] = useState()
    const [error,setError] = useState()
    const [fetchData,setFetchData] = useState(initialVal)

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);
      return{isFetching,error,fetchData}
}
