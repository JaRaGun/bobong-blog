import { useEffect,useState } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error,setError] = useState(null) 

    useEffect(() =>{
        fetch(url)
        .then(res => {
            if(!res.ok)
            {
                throw Error('could not fetch that data to the resources')
            }
            return res.json()
        }).then(data =>{
            setData(data)
            setisPending(false)
        }).catch(err=>
            {
                setisPending(false)
                setError(err.message)
            })
      },[url])
      return{ data,isPending, error}
}
 
export default useFetch;