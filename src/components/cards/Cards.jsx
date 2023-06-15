import React from "react"
import "./Cards.css"

const Cards = ({ results }) => {
  const display = results
    ? results.map((res) => {
        const { id, name, image, location, status } = res
        let classStatus

        if (status === "Alive") {
          classStatus = "success"
        } else if (status === "Dead") {
          classStatus = "danger"
        } else {
          classStatus = "secondary"
        }

        return (
          <div key={id} className="col-4 position-relative">
            <div className="card m-1">
              <div className="card-inner">
                <div className="card-front">
                  <img src={image} alt="" className="img-fluid" />
                  <div className="text-fluid fs-5 fw-bold m-1">{name}</div>
                  <div className={`position-absolute badge bg-${classStatus}`}>
                    {status}
                  </div>
                </div>

                <div className="card-back">
                  <div className="text-fluid fs-6">Last location</div>
                  <div className="text-fluid fs-5">{location.name}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    : "No Characters found :("

  return <>{display}</>
}

export default Cards
