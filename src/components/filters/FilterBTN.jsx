import React from "react"

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {

  const checkSubmit = () => {
    setPageNumber(1)
    console.log(task)
    task(items)
  }
  
  return (
    <>
      <div className="form-check">
        <input
          onClick={checkSubmit}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-warning" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  )
}

export default FilterBTN
