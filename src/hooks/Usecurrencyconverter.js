import { useState } from "react"
import { useEffect } from "react"

function useCurrencyconveter(curr) {
    const [Data , setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`)
        .then((responce) => responce.json())
        .then((res) =>  setdata(res[curr]))
    }, [curr])
    return Data
}

export default useCurrencyconveter;