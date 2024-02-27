import { useState, useEffect } from "react";

const UseFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {

            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setLoading(false);
        } catch (e) {
            setError(`${e}. Some error occured`);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, error, loading }
};

export default UseFetch;