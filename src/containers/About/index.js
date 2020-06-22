import React from 'react'
import './about.css'
import Header from '../../components/Header'

import Selfie from '../../img/GetPersonaPhoto.jpeg'
import ResumeFile from "../Resume/IT-Resume.docx"


const About = () => (
    <>
        <Header />
        <div className="container my-3">
            <div className="top-half card d-flex flex-column align-items-center">
                <div className="card-image mt-5 mx-auto">
                    <img src={Selfie} className="selfie card-img-top" alt="..." title="A photo of Marcus Webb"/>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-center">Marcus Webb</h2>
                    <p className="card-text text-white">Full-Stack Software Developer &amp; Designer</p>
                    <div className="social-media d-flex flex-row justify-content-around mx-auto mb-3 col-4">
                        <a href="https://github.com/Marcuswebb1211" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="http://linkedin.com/in/marcus-webb-15171a126" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom-half container card d-flex flex-column align-items-center py-3">
                <div className="card-body text-left">
                    <h3>About <span className="unique">Me</span></h3>
                    <p>Hello! I'm Marcus Webb. I'm a professional, creative, and passionate Front End Web Developer and Designer located in the local Richmond, VA area. I am currently available as a Freelancer, but am looking for employment as a Web Developer.</p>
                    <a href={ResumeFile} download className="btn btn-outline-info my-3">Download Resume</a>
                </div>
                <div className="extra-info my-4 py-2 container card text-dark bg-light border-dark">
                    <div className="row">
                    <div className="col col-title">Residence:</div>
                    <div className="col">USA</div>
                    </div>

                    <div className="row">
                    <div className="col col-title">Address:</div>
                    <div className="col">Richmond, VA</div>
                    </div>

                    <div className="row">
                    <div className="col col-title">Email:</div>
                    <div className="col email">
                        <a href="mailto:marcuswebb1211@gmail.com">marcuswebb1211@gmail.com</a>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col col-title">Freelance:</div>
                    <div className="col text-success">Available *</div>
                    </div>
                    <div className="row">
                    <div className="col col-title">Employment:</div>
                    <div className="col text-warning">Looking for Employment</div>
                    </div>
                </div>
                <div className="knowledge-article">
                    <h3>What I know:</h3>
                    <p>Over the past 2 years I have both learned and become very comfortable with various Front-End technologies such as: XML, HTML5, CSS3, JavaScript, jQuery, Bootstrap 4, and React js. The chart below is a personal illustration of how comfortable I am with these technologies.</p>
                </div>
                <div className="skill-table bg-light p-2">
                    <div className="skill-set-container">
                        <div className="skill-1 skill-set">
                        <div className="web-technology">
                            <p>HTML</p>
                            <p>95%</p>
                        </div>
                        <div className="meter-box">
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success text-right" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" Style="width: 95%">
                                95%
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="skill-2 skill-set">
                        <div className="web-technology">
                        <p>CSS</p>
                        <p>95%</p>
                        </div>
                        <div className="meter-box">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger text-right" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" Style="width: 95%">
                            95%
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="skill-3 skill-set">
                        <div className="web-technology">
                        <p>JavaScript</p>
                        <p>95%</p>
                        </div>
                        <div className="meter-box">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-right" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" Style="width: 95%">
                            95%
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="skill-3 skill-set">
                        <div className="web-technology">
                        <p>Bootstrap</p>
                        <p>90%</p>
                        </div>
                        <div className="meter-box">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bootstrap-purple text-right" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" Style="width: 95%">
                            95%
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="skill-3 skill-set">
                        <div className="web-technology">
                        <p>React.js</p>
                        <p>90%</p>
                        </div>
                        <div className="meter-box">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary text-right" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" Style="width: 90%">
                            90%
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default About