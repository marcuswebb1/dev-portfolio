import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
    <nav className="navbar main-nav navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink to="/about" className="navbar-brand text-light">Marcus Webb</NavLink>

        <div className="collapse navbar-collapse navigation bg-dark" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"
                >About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume">Resume</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </nav>
)

export default Header