
import Input from "./Input";

function ContextBlock({ oneContext = true, oneContextChange, contextName, onNameChange }) {
  const handleCheckboxChange = ({ target: { checked } }) => {
    oneContextChange(checked);
  };


  return (
    <div>
      <div className="form-group">
        <label htmlFor="check">One context:</label>
        <input
          htmlFor="check"
          type="checkbox"
          id="check"
          checked={oneContext}
          onChange={handleCheckboxChange}
        />
        {<Input value={contextName} onChange={onNameChange} disabled={!oneContext} label="Context name"></Input>}
      </div>
    </div>
  );
}

export default ContextBlock;
