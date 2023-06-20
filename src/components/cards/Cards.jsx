import React from "react"
import { Link } from "react-router-dom"
import "./Cards.css"

const Cards = ({ results }) => {
  const display = results
    ? results.map((res, key) => {
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
          <div key= {key }className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative">
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
                      {" "}
                      <div className="text-center m-1">
                        <strong>
                          <div className="text-fluid">Origin</div>
                        </strong>
                        <div className="text-fluid">{origin.name}</div>
                      </div>
                      <div className="text-center m-1">
                        <strong>
                          {" "}
                          <div className="text-fluid">Last location</div>
                        </strong>
                        <div className="text-fluid">{location.name}</div>
                      </div>
                      <div className="text-center m-1">
                        <strong>
                          {" "}
                          <div className="text-fluid">Species</div>
                        </strong>
                        <div className="text-fluid">{species}</div>
                      </div>
                      <div className="text-center m-1">
                        <strong>
                          {" "}
                          <div className="text-fluid">Gender</div>
                        </strong>
                        <div className="text-fluid">{gender}</div>
                      </div>
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
