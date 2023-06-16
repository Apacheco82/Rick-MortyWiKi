import React from "react"
import { Link } from "react-router-dom"
import "./Cards.css"

const Cards = ({ results }) => {
  const display = results
    ? results.map((res) => {
        const { id, name, image, location, status, gender, origin, species } =
          res
        let classStatus

        if (status === "Alive") {
          classStatus = "success"
        } else if (status === "Dead") {
          classStatus = "danger"
        } else {
          classStatus = "secondary"
        }

        return (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative">
            <div className="container align-items-center">
              <Link to={`/${id}`}>
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={image} alt="imagen" />
                      <div className="name">{name}</div>
                      <div
                        className={`position-absolute badge bg-${classStatus}`}
                      >
                        {status}
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="text-fluid fs-4">Origin</div>
                      <div className="text-fluid fs-4">{origin.name}</div>
                      <div className="text-fluid fs-5">Last location</div>
                      <div className="text-fluid fs-4">{location.name}</div>
                      <div className="text-fluid fs-4">Gender</div>
                      <div className="text-fluid fs-4">{gender}</div>
                      <div className="text-fluid fs-4">Species</div>
                      <div className="text-fluid fs-4">{species}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )
      })
    : "No Characters found :("

  return <>{display}</>
}

export default Cards
