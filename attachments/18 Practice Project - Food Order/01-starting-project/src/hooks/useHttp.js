/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
export async function sendHttpRequest({ url, config }) {
    try {
        const response = await fetch(url, config || {});
        const resData = await response.json();
        console.log("Server response:", resData); // データをログ出力

        if (!response.ok) {
            throw new Error(resData.message || "Something went wrong");
        }
        return resData;
    } catch (error) {
        console.error("HTTP Request failed:", error);
        throw error;
    }
}

export default function useHttp(url, config, initialData) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest({ url, config });
            console.log("Data received by useHttp:", resData); 
            setData(resData);
        } catch (error) {
            setError(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [url, config]);

    useEffect(() => {
        if (!config || config.method === "GET") {
            sendRequest();
        }
    }, [sendRequest]);

    return { data, isLoading, error, sendRequest };
}
