import React from "react"

const InputGroup = ({ name, setId, total }) => {
  const selectChange = (e) => {
    setId(e.target.value)
  }

  return (
    <div className="input-group mb-3">
      <select
        onChange={selectChange}
        className="form-select"
        id={name}
        defaultValue="1"
      >
        <option value="" disabled selected>
          Choose...
        </option>
        {Array.from({ length: total }, (_, index) => (
          <option key={index} value={index + 1}>
            {`${name} - ${index + 1}`}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputGroup
