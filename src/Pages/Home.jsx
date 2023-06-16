import React, { useState, useEffect } from "react"
import Filters from "../components/filters/Filters"
import Cards from "../components/cards/Cards.jsx"
import Pagination from "../components/pagination/Pagination.jsx"
import Search from "../components/search/Search.jsx"
import { URL } from "../services"

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")

  const { info, results } = data

  let api = `${URL}/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  const fetchData = async (api) => {
    try {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
      //actualizar el estado de tu componente para manejar el error
    }
  }

  useEffect(() => {
    fetchData(api)
  }, [api])

  return (
    <div>
      <h1 className="text-center ubuntu my-4">
        <strong> Characters</strong>
      </h1>

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
