import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg text-white bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white bg-dark" to = "/">PST-1</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link text-white bg-dark" to="/ejercicioA">Ejercicio A</Link>
                            <Link className="nav-link text-white bg-dark" to="/ejercicioB">Ejercicio B</Link>
                            <Link className="nav-link text-white bg-dark" to="/ejercicioC">Ejercicio C</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

