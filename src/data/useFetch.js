import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => setdata(data))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading };
}
