/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
export async function sendHttpRequest( url, config ) {
    try {
        console.log("from sendHttpRequest")
        const response = await fetch(url, config || {});
        const resData = await response.json();
        console.log("Server response:", resData);

        if (!response.ok) {
            console.error("Server returned an error:", resData.message || "Unknown error");
            throw new Error(resData.message || "Something went wrong");
        }
        return resData;
    } catch (error) {
        console.log("from sendHttpRequest")
        console.error("Error in sendHttpRequest:", error.message);
        throw error;
    }
}


export default function useHttp(url, config, initialData) {
    console.log("from useHttp")
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    function clearData() {
        setData(initialData)
    }

    const sendRequest = useCallback(async (data) => {
        setIsLoading(true);
        try {
            console.log("from useHttp try")
            const resData = await sendHttpRequest( url,{...config,body:data} );
            console.log("Data received by useHttp:", resData); 
            setData(resData);
        } catch (error) {
            console.log("from useHttp catch")
            setError(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        console.log("from useHttp useEffect")
        if (!config || (config.method === "GET"||!config.method)) {
            sendRequest();
            console.log("from useHttp get")
        }
    }, [sendRequest]);

    return { data, isLoading, error, sendRequest,clearData };
}
