import { useState, useEffect } from "react";

const userFetch = (url) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async()=>{
            setIsLoading(true);
            try {
            
                const res = await fetch(url);
                if (!res.ok) {
                    setError(error.message);
                    alert("failed to fetch");
                }
                const data = await res.json();
                setData(data.results);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
               
            }
        };
        fetchData();
    },[url])
    
    return { data, error, isLoading };
}

export default userFetch;
