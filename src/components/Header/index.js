import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to="/" className="navbar-brand text-light" href="index.html">Marcus Webb</Link>

        <div className="collapse navbar-collapse navigation bg-dark" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/about"
                >About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
)

export default Header