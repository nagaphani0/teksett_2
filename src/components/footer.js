import React from 'react'
import facebook from "../images/fb.png";
import instagram from "../images/insta.png";
import twitter from "../images/twitter.png";
import ping from "../images/ping.png";
import { Sponsers } from './common';

export default function Footer() {
    return (
        <div className="" style={{
            background: "rgba(13, 15, 23, 1)",
        }}>
            <div className=''
                style={{
                    color: "#FFFFFF",
                    padding: "65px",
                }}
            >
                <div className="row p-3">
                    {/* col for mobile col-md for desktop */}
                    <div className="col-sm-8 col-md-4 p-4">
                        <h5 className="p-2" style={{
                            // leadingTrim: 'both',
                            // textEdge: 'cap',
                            fontSize: '50px',
                            // fontFamily: 'Barlow',
                            fontWeight: '600',
                            lineHeight: '21px'
                        }}>teksett.</h5>
                        <div className="d-none">

                            <img
                                src={facebook}
                                alt=""
                                className="p-1 m-4"
                                style={{ background: " #2C2E33", borderRadius: "20px" }}
                            />
                            <img
                                src={twitter}
                                alt=""
                                className="p-2 m-2"
                                style={{ background: " #2C2E33", borderRadius: "20px" }}
                            />
                            <img
                                src={ping}
                                alt=""
                                className="p-2 m-2"
                                style={{ background: " #2C2E33", borderRadius: "20px" }}
                            />
                            <img
                                src={instagram}
                                alt=""
                                className="p-2 m-2"
                                style={{ background: " #2C2E33", borderRadius: "20px" }}
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-2 p-2 ">
                        <h5 className="p-1">About</h5>
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
                    <div className="col-6 col-md-2 p-2">
                        <h5 className="p-1">Services</h5>
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
                    <div className="col-7 col-md-2 p-2">
                        <h5 className="p-1">Domains</h5>
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
                    <div className="col-5 col-md-2 p-2">
                        <h5 className="p-1">Insights</h5>
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
        </div>
    )
}
