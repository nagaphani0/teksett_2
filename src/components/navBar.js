import React, { useState } from "react";
import logo from "../images/Asset 1 2.png";
import scale from "../images/scale.png";
import { Link } from "react-router-dom";

import Hamburger from 'hamburger-react'
export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isOpen, setOpen] = useState(false)  
  return (
    <div>
      <div className="row" style={{ marginLeft: "7px" }}>
        <div className="col-3">
          <div className="d-flex m-1">
            <div
              className=""
              id="logo text"
              style={{
                color: "#1C1C1C",
                // textAlign: 'center',
                // fontStyle: 'normal',
                fontSize: "26px",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: 600,
                // lineHeight: '11.564px',
                // letterSpacing: '0.705px'
              }}>
              {" "}
              teksett
            </div>
            <div className="m-2">
              <img
                src={logo}
                alt="logo"
                height={"20px"}
                style={{ margin: "2px" }}
              />
            </div>
            <div className="m-1">
              <img
                src={scale}
                alt=""
                style={{
                  opacity: "0.20000000298023224",
                  background: "#000",
                }}
              />
            </div>
            <div
              className="d-flex m-1"
              style={{
                borderRadius: "4px",
                background: "rgba(234, 234, 234, 0.60)",
                width: "50px",
                height: "30px",
              }}>
              <div id="globe img d-none d-md-block" className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="world_svg.svg" clip-path="url(#clip0_1_16046)">
                    <path
                      id="Vector"
                      d="M8.60896 0.6915C10.6549 2.70863 11.7546 5.12468 11.7546 7.60252C11.7546 10.0804 10.6549 12.4964 8.60896 14.5135M2.64087 11.9908C4.21402 10.8686 6.09827 10.2653 8.03073 10.2653C9.96319 10.2653 11.8474 10.8686 13.4206 11.9908M7.57282 0.625C5.51276 2.65612 4.40548 5.0889 4.40548 7.58392C4.40548 10.0789 5.51276 12.5117 7.57282 14.5428M8.03073 0.632368V14.5532M8.03073 14.5532C6.18781 14.5532 4.42011 13.8222 3.11528 12.5208C1.81047 11.2193 1.07506 9.45346 1.07034 7.61054C1.06561 5.76763 1.79196 3.99805 3.09008 2.6899C4.38821 1.38176 6.15214 0.64182 7.99504 0.632368H8.06642C9.90933 0.64182 11.6733 1.38176 12.9713 2.6899C14.2695 3.99805 14.9959 5.76763 14.9911 7.61054C14.9864 9.45346 14.251 11.2193 12.9462 12.5208C11.6414 13.8222 9.87366 14.5532 8.03073 14.5532ZM14.9911 7.59279H1.07031M2.64087 3.40474C4.21402 4.52704 6.09827 5.13029 8.03073 5.13029C9.96319 5.13029 11.8474 4.52704 13.4206 3.40474"
                      stroke="#121212"
                      stroke-width="0.856667"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_16046">
                      <rect
                        width="16.0625"
                        height="14.9917"
                        fill="white"
                        transform="translate(0 0.0981445)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                className="m-1"
                style={{
                  color: "#161616",
                  // textAlign: 'center',
                  fontSize: "12px",
                  fontFamily: "Space Grotesk",
                  fontWeight: 550,
                  // lineHeight: '24px',
                }}>
                USA
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div
                    className={` ${open ? '' : 'col d-md-block d-none'}  `}
                    id='nav text' style={{
                        color: '#161616',
                        fontSize: '11px',
                        fontFamily: 'Space Grotesk',
                        fontStyle: 'normal',
                        // fontWeight: 500,
                        lineHeight: '16px',
                        letterSpacing: '-0.4px',
                        // padding: '0px', 
                        marginLeft: '36px'
                    }}>
                    <div className={` ${open ? '' : 'd-flex'}`}>
            <div className="p-2">
              <Link
                to="/"
                className="d-flex"
                onClick={() => setCurrentPage("Home")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: currentPage === "Home" ? 700 : 500,
                }}>
                <div
                  className=""
                  style={{
                    borderRadius: "12px",
                    background: "rgba(15, 70, 245, 1)",
                    width: "8px",
                    height: "8px",
                    margin: "4px",
                  }}></div>
                Home
              </Link>
            </div>
            <div className="p-2">
              <Link
                to="/about"
                onClick={() => setCurrentPage("About")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: currentPage === "About" ? 700 : 500,
                }}>
                About Us
              </Link>
            </div>
            <div className="p-2">
              <Link
                to="/services"
                onClick={() => setCurrentPage("services")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: currentPage === "services" ? 700 : 500,
                }}>
                Services
              </Link>
            </div>
            <div className="p-2">
              <Link
                to="/domains"
                onClick={() => setCurrentPage("domains")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: currentPage === "domains" ? 700 : 500,
                }}>
                Domains
              </Link>
            </div>
            <div className="p-2">
              <Link
                to="/insights"
                onClick={() => setCurrentPage("insights")}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: currentPage === "insights" ? 700 : 500,
                }}>
                Insights
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2 ">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {/* <div className="hamburger d-block d-md-none" onClick={() => setOpen(!open)} */}
            style={{ marginLeft: "260px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none">
              <g clip-path="url(#clip0_2802_3321)">
                <path
                  d="M4.5 27H31.5V24H4.5V27ZM4.5 19.5H31.5V16.5H4.5V19.5ZM4.5 9V12H31.5V9H4.5Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_2802_3321">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          {/* </div> */}
        </div>

        <div
          className="col-2 d-none d-md-block"
          style={{
            background: "#000",
            color: "white",
            padding: "5px",
            fontSize: "10px",
            fontWeight: "100",
            lineHeight: "13px",
            letterSpacing: "-0.3px",
            height: "45px",
          }}>
          <div className="d-flex">
            <div className="m-1">
              <div className="">E-Mail</div>
              <div className="">Tel.</div>
            </div>
            <div
              className="p-1"
              style={
                {
                  // lineHeight: '10px',
                  // letterSpacing: '-0.6px',
                }
              }>
              <div className="">bsetti10@gmail.com</div>
              <div className="">+1 402 507 5290</div>
            </div>
            <div className="m-1">
              <img
                src={scale}
                alt=""
                style={{
                  opacity: "0.20000000298023224",
                  background: "#000",
                  height: "20px",
                }}
              />
            </div>
            <div className="p-2">
              <div className="">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
