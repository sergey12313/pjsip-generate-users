import {useState} from "react"

export const useInput = (value) => {
    const [input, setInput] = useState(value)
    const onInputChange = ({target: {value}}) => {
        setInput(value)
    }
    return [input, onInputChange, setInput]
}

export const useRandomId = () => {
   return useState(()=> `id${Math.random()}`)[0]
}