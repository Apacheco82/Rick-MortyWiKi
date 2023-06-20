import React, { useEffect, useState } from "react"
import {fetchData } from "../services"
import Cards from "../components/cards/Cards.jsx"
import InputGroup from "../components/filters/category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1)
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  const { air_date, name } = data

  const api = async () => {
    try {
      const response = await fetchData("episode", id)
      setData(response)
      const characters = await Promise.all(
        response.characters.map(async (url) => {
          const res = await fetch(url);
          return await res.json();
        })
      );
      setResults(characters);
    } catch (error) {
      console.error('Error fetching data: ', error);
      //actualizar el estado de tu componente para manejar el error
    }
  };

  useEffect(() => {
    api();
  }, [results]);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <h1 className="text-center mt-5 mb-4 my-4 ubuntu">
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
          <h4 className="text-center mb-4"><strong>Pick Episodes</strong></h4>
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
