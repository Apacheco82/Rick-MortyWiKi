import React, { useEffect, useState } from "react"
import { URL } from "../services"
import Cards from "../components/cards/Cards.jsx"
import InputGroup from "../components/filters/category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1)
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  const { air_date, name } = data

  let api = `${URL}/episode/${id}`

  const fetchData = async (api) => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setData(data);

      const characters = await Promise.all(
        data.characters.map(async (url) => {
          const response = await fetch(url);
          return await response.json();
        })
      );
      setResults(characters);
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
          <strong> Episode Name: </strong>{" "}
          <span>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center ubuntu">
          <strong> Air date: </strong>
          <span>{air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 ">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup name="Episode" setId={setId} total={51} />
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

export default Episodes
