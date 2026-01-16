import { useEffect, useState } from "react"

export const useGetData = (url) => {

    const [dataReturn, setDataReturn] = useState([])
    useEffect(() => {
        const handleGetData = async() => {
            const res = await fetch(url);

            const data = await res.json();

            setDataReturn(data)
        
        }

        handleGetData();
    }, [url])

    return {dataReturn}
}