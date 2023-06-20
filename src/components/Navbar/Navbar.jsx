import React from "react"
import { NavLink, Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container w-100">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          <strong>
            {" "}
            Rick & Morty <span>WiKi</span>
          </strong>
        </Link>
        <button
          className="navbar-toggler myToggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav fs-6">
            <li className="nav-item">
              <NavLink activeclassname="active" to="/" className="nav-link">Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes"className="nav-link">Episodes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/locations" className="nav-link">Locations</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
