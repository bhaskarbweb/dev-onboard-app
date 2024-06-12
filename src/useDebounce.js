import { useEffect, useState } from "react"

const useDebounce = (inputvalue, delay) => {

const [debounceValue, setDebounceValue] = useState(inputvalue);

useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceValue(inputvalue)
    }, delay);

}, [inputvalue, delay])

return debounceValue

}

export default useDebounce;