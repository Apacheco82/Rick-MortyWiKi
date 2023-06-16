import React, { useEffect, useState } from "react"
import { URL } from "../services"
import Cards from "../components/cards/Cards.jsx"
import InputGroup from "../components/filters/category/InputGroup"

const Locations = () => {
  const [id, setId] = useState(1)
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  const { name, type, dimension } = data

  let api = `${URL}/location/${id}`

  const fetchData = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setData(data);

      const residents = await Promise.all(
        data.residents.map(async (url) => {
          const response = await fetch(url);
          return await response.json();
        })
      );
      setResults(residents);
    } catch (error) {
      console.error('Error fetching data: ', error);
      //actualizar el estado de tu componente para manejar el error
    }
  };

  useEffect(() => {
    fetchData(api);
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4 my-4 ubuntu">
          <strong> Location: </strong>{" "}
          <span>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center ubuntu">
          <strong> Dimension: </strong>
          <span>{dimension === "" ? "Unknown" : dimension}</span>
        </h5>{" "}
        <h5 className="text-center ubuntu">
          <strong> Type: </strong>
          <span>{type === "" ? "Unknown" : type}</span>
        </h5>
      </div>
      <div className="row">
      <div className="col-lg-3 col-12 ">
          <h4 className="text-center mb-4">Pick Locations</h4>
          <InputGroup name="Locations" setId={setId} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
