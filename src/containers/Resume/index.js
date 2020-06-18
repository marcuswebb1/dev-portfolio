import React from 'react'
import './resume.css'
import Header from '../../components/Header'

import ResumeFile from "../Resume/IT-Resume.docx"

const Resume = () => (
    <>
        <Header />
        <div className="container my-3">
            <div className="box-card mx-auto d-flex flex-column justify-content-between">
                <div className="card-upper bg-dark text-center py-3 btr-7">
                    <h2><span className="text-white font-weight-bold">Resume</span></h2>
                </div>

                {/* <!--  Education Div  --> */}
                <div className="education-div bg-light p-4 mb-1">
                    <header className="div-headers d-flex justify-content-between">
                        <h3 className="text-dark">Education</h3>
                        <a className="btn btn-outline-dark collapser-btn" data-toggle="collapse" href="#collapseExample-1" role="button" aria-expanded="false" aria-controls="collapseExample-1">View More</a>
                    </header>
                    
                    <div className="collapse collapse-example-1 py-3" id="collapseExample-1">
                        <div className="d-flex justify-content-center">
                            <div className="card-body text-dark">
                                <h5><span className="text-info">Team Treehouse</span> - </h5>
                                <p><span className="font-weight-bold">Degree:</span> Completed the Front End Web Development Track</p>
                                <h5><span className="text-info">John Tyler Community College</span> - </h5>
                                <p><span className="font-weight-bold">Degree:</span> A.S. in Computer Science</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  /Education Div  --> */}

                {/* <!--  Work History Div  --> */}
                <div className="work-history-div bg-light p-4">
                    <header className="div-headers d-flex justify-content-between">
                        <h3 className="text-dark work-history">Work History</h3>  
                        {/* <!-- collapser --> */}
                        <a className="btn btn-outline-dark collapser-btn" data-toggle="collapse" href="#collapseExample-2" role="button" aria-expanded="false" aria-controls="collapseExample-2">View More</a>
                    </header>
                
                    <div className="collapse py-3" id="collapseExample-2">
                        <div className="card-lower">
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">Public Consulting Group</div>
                                <div className="card-body">
                                    <h5 className="card-title text-dark">IT Implementation Specialist (March 2020 - <span className="text-info">April 2020</span>)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Supports customer service and operations for clients by serving as the frontline for customer inquiries prioritizing and resolving to provide the best customer experience</li>
                                        <li>Responsible for initiative planning and ongoing client relationship management</li>
                                        <li>Tracks and reports support desk data and trends to build resources to support</li>
                                        <li>Responsible for acquiring and applying knowledge, best practices (external and internal), methodology, and tools to client organizations</li>
                                        <li>Responds to inquiries and questions in a timely manner</li>
                                        <li>Works within a team to accomplish other duties on projects to meet necessary deadlines</li>
                                        <li>Maintains system protocols by writing and updating procedures. Provide reference material for end-users by writing and maintaining documentation; providing support; and training to all users</li>
                                        <li>Reporting of all system issues (bugs) by clear documentation</li>
                                        <li>Perform, track and support all non-technical system configurations such as; setting up new user profiles, creating provider profiles, and creation of user roles based on new programs</li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">CarMax</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">IT Systems Analyst (October 2019 - February 2020)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Diagnoses and resolves incident tickets and requests in the Service-Now ticketing system</li>
                                        <li>Manages ticket queues, and escalate tickets to appropriate workers</li>
                                        <li>Provides Tier 1 - Tier 2 Software/Hardware technical support -software installations, configuring hardware, etc.</li>
                                        <li>Remotes into user PCs and troubleshoot issues using Bomgar and RDP</li>
                                        <li>Resets passwords, unlock/create accounts, etc.  using Active Directory</li>
                                        <li>Handles phone calls, create and resolve tickets with users</li>
                                        <li>Develops and updates Knowledge Base documents in Service Now to provide clear step-by-step solution processes for other techs and users</li>
                                        <li>Reports/documents application defects and workarounds</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">Core Technologies Inc.</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">PC Refresh Technician (June 2017 - December 2019)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Handled client phone calls (20+ per day) revolving around Tier 1 - Tier 2 issues</li>
                                        <li>Remoted into client PCs to troubleshoot/fix Tier 1 and Tier 2 issues using Windows Remote Desktop Connector (RDP) and ConnectWise Control</li>
                                        <li>Reset passwords, unlocked/created accounts, etc.  using Active Directory</li>
                                        <li>Assigned newly issued computers to users and groups using an in-browser software for Active Directory called Active Role Server (ARS)</li>
                                        <li>Managed end-user profiles.</li>
                                        <li>Installed/connected/reconfigured printers for end-users</li>
                                        <li>Handled ticket queues through both Cherwell and Service-Now ticketing systems</li>
                                        <li>Developed and maintained clear documentation of solutions to troubleshooting processes for other techs and users</li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">Core Technologies Inc.</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">IT Support Specialist (September 2016 - June 2017)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Planned, scheduled, and managed IT asset disposal projects for partnered state agencies</li>
                                        <li>Created, escalated, and solved tickets for asset repair and disposal using various ticketing systems such as: VSM, and Service-Now</li>
                                        <li>Professionally inventoried all IT equipment received from clients</li>
                                        <li>Ensured frequent data backups and transfers for end-users</li>
                                        <li>Installed and maintained internal company software for end-users</li>
                                        <li>Report/document application defects and workarounds</li>
                                        <li>Performed PC hardware repair and reimaged all end-user PCs</li>
                                        <li>Successfully maintained trust and partnership with clients</li>
                                        <li>Installed laptops, desktops, monitors, servers, and printers for clients</li>
                                        <li>Mapped Network Drives for end-users</li>
                                        <li>Developed and maintained clear documentation of solutions to troubleshooting processes for other techs and users</li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">Technology Integration Group</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">PC Bench Technician (March 2014 – September 2016)</h5>
                                    <ul className="box-card-text box-text-sm">
                                    <li>Inventoried laptops, desktops, and various PC peripherals</li>
                                    <li>Assigned computers to Richmond public school students</li>
                                    <li>Repaired and reimaged computers for Richmond public schools</li>
                                    <li>Installed computers in Richmond public school classrooms, libraries, and offices</li>
                                    <li>Handled client phone calls and resolved issues</li>
                                    <li>Developed and maintained clear documentation of solution processes for other techs and users</li>
                                    <li>Reported/documented application defects and workarounds</li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">NAPA Auto Parts</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">Delivery Driver (April 2013 – March 2014)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Executed the safe and timely delivery of warehouse parts from various branches; handled parts weighing up to 50+ pounds</li>
                                        <li>Successfully arranged company inventory to reduce customer wait times for desired parts</li>
                                        <li>Managed company invoices for warehouse parts</li>
                                        <li>Maintained a clean and safe working environment by executing scheduled opening and closing duties including sweeping, cleaning restrooms, and adhering to company policy in the loading/unloading and transportation of inventory</li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="card cards text-dark bg-light mb-3">
                                <div className="card-header text-info">Office Max</div>
                                <div className="card-body">
                                <h5 className="card-title text-dark">Technical Support Specialist (March 2011 - April 2013)</h5>
                                    <ul className="box-card-text box-text-sm">
                                        <li>Inventoried company equipment</li>
                                        <li>Troubleshoot customer computers for potential malicious spyware, adware, and Trojan viruses</li>
                                        <li>Successfully transferred customer data files between desired computers to eliminate recovery error</li>
                                        <li>Backed up valuable files to desired hard drive to ensure data protection</li>
                                        <li>Consistently met and exceeded sales goals to distribute laptops, desktops, and printers to customers</li>
                                    </ul>
                                </div>
                            </div>
                        {/* <!-- /collapser --> */}
                    </div>
                
                        
                    </div>  
                    
                </div>
                <div className="bg-light p-3 mt-1 bbr-7 d-flex justify-content-center justify-content-lg-start">
                    <a href={ResumeFile} download className="btn btn-outline-info my-3 d-block">Download Resume</a>
                </div>
                
            </div>
            {/* <footer className="resume-footer">2019 &copy; Marcus Webb</footer> */}
        </div>
    </>
)

export default Resume