import React from "react"
import "./search.css"

const Search = ({ setSearch, setPageNumber }) => {
  const handleChange = (e) => {
    setPageNumber(1)
    setSearch(e.target.value)
  }

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-4">
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
