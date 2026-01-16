import { useEffect, useState } from "react"
import { useFormState } from "react-dom";

export const useGetData = (url) => {

    const [dataReturn, setDataReturn] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {


        const handleGetData = async() => {
    
            setLoading(true);

            try {
                const res = await fetch(url);
            
                const data = await res.json();

                setDataReturn(data)

                if (!res.ok){
                    throw new Error('erro');
                }
                
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
            

            setLoading(false);

        }

        handleGetData();

    }, [])


    return {dataReturn}
}   