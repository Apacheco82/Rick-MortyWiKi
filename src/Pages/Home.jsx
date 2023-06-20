import React, { useState, useEffect } from "react"
import Filters from "../components/filters/Filters"
import Cards from "../components/cards/Cards.jsx"
import Pagination from "../components/pagination/Pagination.jsx"
import Search from "../components/search/Search.jsx"
import { fetchHome } from "../services"

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const { info, results } = data

  const api = async () => {
    try {
      const info = await fetchHome(pageNumber, search, status, gender, species)
      setData(info)
    } catch (error) {
      console.log(error)
      //actualizar el estado del componente para manejar el error
    }
  }

  useEffect(() => {
    api()
  }, [pageNumber, search, status, gender, species])

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        {" "}
        <h1 className="text-center ubuntu mt-5 mb-3">
          <strong> Characters</strong>
        </h1>
      </div>

      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />

          <div className="container-card col-lg-8 col-12">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}
export default Home
