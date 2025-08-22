import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [info, setInfo] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    const getApi = async () => {
        setInfo({
            ...info,
            isLoading: true,
        });
        const res = await fetch(url);
        const data = await res.json();
        setInfo({
            data: data,
            isLoading: false,
            hasError: null,
        });
    };

    useEffect(() => {
        getApi();
    }, [url]);

    return {
        info,
        data: info.data,
        isLoading: info.isLoading,
        hasError: info.hasError,
    };
};
