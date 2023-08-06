import React from 'react'
import { Sponsers } from './common';

export default function Footer() {
    return (
        <div className=" " style={{
            background: "rgba(13, 15, 23, 1)",
        }}>
            <div className='container'
                style={{
                    color: "#FFFFFF",
                    padding: "65px",
                }}
            >
                <div className="row p-md-1 p-sm-1 p-xs-1 m-xs-3">
                    {/* col for mobile col-md for desktop */}
                    <div className="col-xs col-sm-8 col-md-3 px-1 mx-2">
                        <div className="d-flex">

                            <div
                                className=" display-5"
                                style={{
                                    // leadingTrim: 'both',
                                    // textEdge: 'cap',
                                    // fontSize: '50px',
                                    // fontFamily: 'Barlow',
                                    fontWeight: '600',
                                    // lineHeight: '40px'
                                }}>teksett</div>
                            <div className="m-3" style={{
                                // width: '60%'

                            }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="35" viewBox="0 0 51 45" fill="none">
                                    <g clip-path="url(#clip0_2991_17253)">
                                        <path d="M0.826172 0H27.5355L45.9564 18.7855L29.6546 26.5155H27.832L0.826172 0Z" fill="url(#paint0_linear_2991_17253)" />
                                        <path d="M27.9228 0.31543L50.2347 22.6319L27.9228 44.9998H1.2207L25.0443 21.6702C25.0443 21.6702 37.5563 9.94675 27.9228 0.31543Z" fill="url(#paint1_linear_2991_17253)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_2991_17253" x1="30.0235" y1="28.125" x2="-4.79474" y2="5.10009" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.11" stop-color="#413EE9" />
                                            <stop offset="0.149725" stop-color="#141F81" />
                                            <stop offset="0.265625" stop-color="#3E21F2" />
                                            <stop offset="0.378991" stop-color="#2142F2" />
                                            <stop offset="0.58268" stop-color="#1570F9" />
                                            <stop offset="1" stop-color="#00A3FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2991_17253" x1="5.79159" y1="45.6384" x2="40.7144" y2="10.8487" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.11" stop-color="#413EE9" />
                                            <stop offset="0.15" stop-color="#2237F2" />
                                            <stop offset="0.25" stop-color="#3E21F2" />
                                            <stop offset="0.36" stop-color="#2142F2" />
                                            <stop offset="0.59" stop-color="#1570F9" />
                                            <stop offset="1" stop-color="#00A3FF" />
                                        </linearGradient>
                                        <clipPath id="clip0_2991_17253">
                                            <rect width="49.4118" height="45" fill="white" transform="translate(0.820312)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div className=" p-1 col-7" style={{
                            color: 'rgba(255, 255, 255, 0.60)',
                            fontFamily: 'Barlow',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '20px', /* 142.857% */
                            letterSpacing: '0.35px'
                        }} >14301 FNB Parkway Ste 100
                            Omaha NE 68154</div>
                    </div>
                    <div className="col-xs col-sm-6 col-md-2 mx-md-2">
                        <h5 className="p-md-1 p-sm-1 p-xs-1">About</h5>
                        <div
                            className="d-flex flex-column"
                            style={{
                                color: 'rgba(255, 255, 255, 0.60)',
                                fontSize: '14px',
                                fontFamily: 'Barlow',
                                fontWeight: '500',
                                lineHeight: '33px',
                                letterSpacing: '0.45px'
                            }}>
                            <div className="p-0">Our story</div>
                            <div className="p-0">Our vision & mission</div>
                            <div className="p-0">Clients testimonial</div>
                            <div className="p-0">Case studies</div>
                        </div>
                    </div>
                    <div className="col-xs col-sm-6 col-md-2 mx-md-2">
                        <h5 className="p-md-1 p-sm-1 p-xs-1">Services</h5>
                        <div
                            className="d-flex flex-column w-100"
                            style={{
                                color: 'rgba(255, 255, 255, 0.60)',
                                fontSize: '14px',
                                fontFamily: 'Barlow',
                                fontWeight: '500',
                                lineHeight: '33px',
                                letterSpacing: '0.45px',
                                // width: '250px',

                            }}>
                            <div className="p-0">IT Solutions Delivery</div>
                            <div className="p-0">Staff Augmentation Services</div>
                            <div className="p-0">Data Science Solutions</div>
                            <div className="p-0">Business Analytics</div>
                            <div className="p-0">Offshore Development</div>
                            <div className="p-0">Software VAR</div>
                            <div className="p-0">IT Consultancy</div>
                            <div className="p-0">Corporate IT Training Services</div>
                            <div className="p-0">Project Management</div>
                            <div className="p-0">Product Development</div>
                            <div className="p-0">Data Engineering</div>
                        </div>
                    </div>
                    <div className="col-xs col-sm-7 col-md-2 mx-md-2">
                        <h5 className="p-md-1 p-sm-1 p-xs-1">Domains</h5>
                        <div
                            className="d-flex flex-column"
                            style={{
                                color: 'rgba(255, 255, 255, 0.60)',
                                fontSize: '14px',
                                fontFamily: 'Barlow',
                                fontWeight: '500',
                                lineHeight: '30px',
                                letterSpacing: '0.45px'
                            }}>
                            <div className="p-0">Healthcare</div>
                            <div className="p-0">Agriculture</div>
                            <div className="p-0">Finance</div>
                            <div className="p-0">Retail and Manufacturing</div>
                            <div className="p-0">Games & entertainment</div>
                            <div className="p-0">Banking</div>
                            <div className="p-0">Government</div>
                            <div className="p-0">Utilities</div>
                            <div className="p-0">Telecommunication</div>
                            <div className="p-0">Insurance</div>
                        </div>
                    </div>
                    <div className="col-xs col-sm-5 col-md-2  mx-md-2">
                        <h5 className="p-md-1 p-sm-1 p-lg">Insights</h5>
                        <div
                            className="d-flex flex-column"
                            style={{
                                color: 'rgba(255, 255, 255, 0.60)',

                                fontSize: '14px',
                                fontFamily: 'Barlow',
                                fontWeight: '500',
                                lineHeight: '33px',
                                letterSpacing: '0.45px'
                            }}>
                            <div className="p-0">Company insights</div>
                            <div className="p-0">Open positions</div>
                            <div className="p-0">Work Benefits</div>
                            <div className="p-0">Locations</div>
                            <div className="p-0">Blogs & Articles</div>
                        </div>
                    </div>
                </div>
            </div >
            <Sponsers />
        </div >
    )
}
