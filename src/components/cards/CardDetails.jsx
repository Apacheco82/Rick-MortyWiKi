import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchData } from "../../services"
import "./Cards.css"

const CardDetails = ({ results }) => {
  const { id } = useParams()

  const [data, setData] = useState([])
  const { name, image, location, status, gender, origin, species } = data

  const api = async () => {
    try {
      const info = await fetchData("character", id)
      setData(info)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    api()
  }, [])

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="d-flex flex-column">
        <h1 className="text-center mb-5">
          <strong>{name}</strong>
        </h1>
        <div className="container d-flex flex-column">
          <div className="container d-flex justify-content-center">
            <img className="card-details" src={image} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            {(() => {
              if (status === "Dead") {
                return <div className="badge bg-danger my-3 fs-5">{status}</div>
              } else if (status === "Alive") {
                return (
                  <div className=" badge bg-success my-3 fs-5">{status}</div>
                )
              } else {
                return (
                  <div className="badge bg-secondary my-3 fs-5">{status}</div>
                )
              }
            })()}
          </div>

          <div className="content d-flex flex-column ">
            <div className="d-flex justify-content-center">
              <span className="fw-bold">Gender : </span>
              <strong>{gender}</strong>
            </div>
            <div className="d-flex justify-content-center">
              <span className="fw-bold">Location: </span>
              <strong> {location?.name}</strong>
            </div>
            <div className="d-flex justify-content-center">
              <span className="fw-bold">Origin: </span>
              <strong> {origin?.name}</strong>
            </div>
            <div className="d-flex justify-content-center">
              <span className="fw-bold">Species: </span>
              <strong> {species}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
