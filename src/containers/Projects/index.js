import React from 'react'
import './projects.css'
import Header from '../../components/Header'

import PrimeTechnologiesThumbnail from "../../img/prime-technologies-thumbnail.jpg"
import GrabengoThumbnail from "../../img/grabengo.jpg"

const Projects = () => (
    <>
        <Header />
        <div className="container my-3">
            <div className="card-upper bg-dark text-center py-3 btr-7">
                <h2><span className="text-white font-weight-bold">Projects</span></h2>
            </div>
            <div className="card-group">
                
                <div className="card">
                    <img src={PrimeTechnologiesThumbnail} className="card-img-top" alt="Thumbnail of Prime Technologies website"/>
                    <div className="card-body">
                        <h5 className="card-title">Prime Technologies</h5>
                        <p className="card-text">A responsive Tech company's website.</p>
                        <div className="btn-group d-flex flex-sm-column flex-md-row justify-content-center" role="group" aria-label="Basic example">
                            <a href="https://github.com/Marcuswebb1211/prime-technologies" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                            <a href="https://marcuswebb1211.github.io/prime-technologies/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Built with HTML, CSS, React, and Bootstrap</small>
                    </div>
                </div>
                <div className="card">
                    <img src={GrabengoThumbnail} className="card-img-top" alt="Thumbnail of Grabengo website"/>
                    <div className="card-body">
                    <h5 className="card-title">Grabengo</h5>
                    <p className="card-text">A responsive Grocery List application.</p>
                    <div className="btn-group d-flex flex-sm-column flex-md-row justify-content-center" role="group" aria-label="Basic example">
                            <a href="https://github.com/Marcuswebb1211/grabengo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                            <a href="https://marcuswebb1211.github.io/grabengo/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Built with HTML, CSS, React, and Bootstrap</small>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Built with HTML, CSS, React, and Bootstrap</small>
                    </div>
                </div>
            </div>
        </div>
        <footer className="projects-footer text-center">2019 &copy; Marcus Webb</footer>
    </>
)

export default Projects