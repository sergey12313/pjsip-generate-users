import React from 'react'
import { useRandomId } from '../hooks'

const TextArea = ({label, value, onChange, rows=5, cols=30, readOnly}) => {
    const id =  useRandomId()

    return (
        <div className="form-group">
        <label htmlFor={id}>{label}:</label>
        <textarea id={id} cols={cols} rows={rows}  value={value} onChange={onChange} readOnly={readOnly}>Your text</textarea>
      </div>
    )
}

export default TextArea
