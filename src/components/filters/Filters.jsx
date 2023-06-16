import React from "react"
import Gender from "./category/gender"
import Status from "./category/status"
import Species from "./category/species"
import "./filters.css"

const Filters = ({ setStatus, setGender, setPageNumber, setSpecies }) => {
  const clear = () => {
    setGender("")
    setSpecies("")
    setPageNumber("")
    setStatus("")
    window.location.reload(false)
  }

  return (
    <div className="col-lg-3 col-12 mb-5" >
      <div className="text-center fs-4 mb-2">Filter</div>
      <div onClick={clear} className="text-center text-decoration-underline">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  )
}

export default Filters
