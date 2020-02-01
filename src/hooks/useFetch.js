import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                console.log('=> fetch hook', data)
                setData(data)

            } catch (error) {
                setData([])
            }
        }
        fetchResource()
    }, [url])

    return { data }
}


export default useFetch
