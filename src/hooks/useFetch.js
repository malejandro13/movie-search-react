import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)

            } catch (error) {
                console.log('=> error api')
            }
        }
        fetchResource()
    }, [url])

    return { data }
}


export default useFetch
