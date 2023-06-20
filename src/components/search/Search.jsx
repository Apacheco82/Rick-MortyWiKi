import React from "react"
import "./search.css"

const Search = ({ setSearch, setPageNumber }) => {
  const handleChange = (e) => {
    setPageNumber(1)
    setSearch(e.target.value)
  }

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mt-2 mb-5">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search for Characters"
        className=""
      />
    </form>
  )
}

export default Search
