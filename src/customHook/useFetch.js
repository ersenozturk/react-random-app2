import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState() 
    const [error, setError] = useState(false)
    
    useEffect(() => {
        fetch(url)
        .then(res => {
          if (!res.ok) {
            setError('Something went wrong!!!')
            setData([])
          } else {
            return res.json()
          }
        })
        .then(res => {
          setData(res.results[0])
          setError('')
        });
    }, [url])
    
    return {data, error};
    
}

export default useFetch;