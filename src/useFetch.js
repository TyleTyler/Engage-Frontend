import {useState, useEffect} from 'react';

let useFetch = (url) =>{
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const controller = new AbortController();
    const signal = controller.signal

    useEffect(()=>{
        fetch(url, {signal}).then(res =>{
            if(!res.ok){
                throw Error('Could not get data')
            }
            return res.json()
        }).then( data =>{
            setData(data)
            setPending(false)
            setError(null)
        }).catch(e=>{
            setPending(false)
            setError(e.message)
            controller.abort()
        })
        return controller.abort()
        }, [url])
    return { data, isPending, error}
}



export default useFetch;