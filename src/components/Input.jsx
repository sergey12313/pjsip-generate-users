import React from 'react'
import { useRandomId } from '../hooks'

const Input = ({label, type="text", ...otherProps}) => {
    const id = useRandomId()
    return (
        <div className="form-group">
        <label htmlFor={id}>{label}:</label>
        <input id={id} name="text" type={type} {...otherProps}/>
      </div>
    )
}

export default Input
