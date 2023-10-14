import React, {useEffect, useState} from "react";

const useFetch = (url, options = {}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResponse(json)
            }catch(error){
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url])
    return {response, error, isLoading}
}

export default useFetch