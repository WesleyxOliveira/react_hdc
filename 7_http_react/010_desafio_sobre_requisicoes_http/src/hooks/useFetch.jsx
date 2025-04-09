import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando o post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    // 8 - delete
    const [deleteUrl, setDeleteUrl ] = useState(null);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
        } else if(method === 'DELETE') {
            setConfig({
                method,
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })

            setDeleteUrl(url += '/' + data.id);
        }        
        setMethod(method);
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6 - loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);

                setLoading(false);
            } catch (error) {
                console.log(error.message);

                setError('Houve algum erro ao carregar os dados.');
            }
        }

        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando Post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);
                const json = await res.json();

                setCallFetch(json);
            // Desafio delete
            }else if(method === 'DELETE') {
                let fetchOptions = [deleteUrl, config];

                try {
                    const res = await fetch(...fetchOptions);
                    const json = res.json();

                    setCallFetch(json);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        httpRequest();
    }, [config, method, url])


    return { data, httpConfig, loading, error };
}