import React, { useState } from "react";
import { useInput } from "../hooks";
import Input from "./Input";

function ContextBlock({ value = true }) {
  const [contextValue, setContextValue] = useState(value);
  const handleCheckboxChange = ({ target: { checked } }) => {
    setContextValue(checked);
  };
  return (
    <div>
      <div className="form-group">
        <label for="check">Identical context:</label>
        <input
          for="check"
          type="checkbox"
          id="check"
          checked={contextValue}
          onChange={handleCheckboxChange}
        />
        {contextValue ? <Input label="Context name"></Input> : null}
      </div>
    </div>
  );
}

export default ContextBlock;
