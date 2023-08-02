import React, { createContext, useContext, useEffect, useState } from "react";
import { CommonCard, Sponsers } from "./common";
import ind1 from "../images/ind1.png";
import ind2 from "../images/ind2ag.png";
import ind3 from "../images/ind3fi.png";
import ind4 from "../images/ind9 (1).png";
import ind5 from "../images/ind9 (2).png";
import ind6 from "../images/ind6 (1).png";
import ind7 from "../images/ind6 (2).png";
import ind8 from "../images/ind6 (3).png";
import ind9 from "../images/ind7.png";
import accen from "../images/feedac.png";
import accenman from "../images/feedacman.png";
import aws from "../images/feedama.png";
import awsman from "../images/feedamaman.png";
import bee from "../images/feedbe.png";
import beeman from "../images/feedbeman.png";
// import leftarrow from '../images/leftarrow.png';
import rightarrow from "../images/rightarrow.png";
import homefrentback from "../images/homefrentback.png";
import homefrentpage from "../images/homefrentpage.png";
// import { Col, Row } from 'react-bootstrap';
import one from "../images/sysfacts-work-environemnt-0.jpg.png";
import two from "../images/sysfacts-work-environemnt-12-1.jpg.png";
import three from "../images/sysfacts-work-environemnt-3.jpg.png";
import four from "../images/sysfacts-work-environemnt-4.jpg.png";
import five from "../images/sysfacts-work-environemnt-5.jpg.png";
import homevid from "../images/vid.png";
import homegirl from "../images/homegirl.png";
import image6 from "../images/image 6.png";
import { CommonLastInPage } from "./about";
import scale from "../images/scale.png";
import video1 from "../images/home/whytess/exceptional expertise.mp4";
import video3 from "../images/home/whytess/Client satisfaction.mp4";
import video2 from "../images/home/whytess/Client focused.mp4";
import video4 from "../images/home/whytess/Cutting Edge technology.mp4";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <div>
      <HomeFrentPage />
      <div className="row my-2">
        <div
          className="col-3 col-md-1 px-4 my-2"
          style={{
            color: "#707070",
            fontFamily: "Space Grotesk",
            paddingTop: "10px",
            fontSize: "11px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "19.6px" /* 140% */,
            letterSpacing: "-0.2px",
            textTransform: "uppercase",
          }}>
          Our Clients
        </div>
        <div className="col">
          <Sponsers />
        </div>
      </div>
      <HomeWhoWeAre />
      <HomeWhatWeDo />
      <HomeWhyTeksett />
      <HomeIndustries />
      <HomeTestimonials />
      <FeedbackCarousel />
      {/* <HomeLast2nd /> */}
      <HomeBlogsArticles />
    </div>
  );
}

function HomeIndustries() {
  const box = [
    {
      pic: ind1,
      title: "Healthcare",
      des: "Revamp your healthcare with state of the art solutions and expert support.",
    },
    {
      pic: ind2,
      title: "Agriculture",
      des: "Partner with us to grow your business with cutting-edge solutions in agriculture.",
    },
    {
      pic: ind3,
      title: "Finance",
      des: "Our fintech expertise helps you navigate the rapidly changing landscape of financial technology",
    },
    {
      pic: ind6,
      title: "Retail and Manufacturing",
      des: "Our solutions helps streamline processes and increase product quality from supply chain to production planning",
    },
    {
      pic: ind5,
      title: "Gaming & Entertainment",
      des: "Modernized IT solutions bring your gaming and entertainment vision to life while boosting your customer experience",
    },
    {
      pic: ind7,
      title: "Banking",
      des: "Delivering innovative and compliant solutions to support financial institutions in their digital transformation journey",
    },
    {
      pic: ind8,
      title: "Government",
      des: "Providing reliable and secure IT solutions to enhance public services and streamline operations",
    },
    {
      pic: ind9,
      title: "Utilities",
      des: "Enhance customer comfort with our advanced IT solutions, providing constant access to essential amenities and utilities",
    },
    {
      pic: ind4,
      title: "Telecommunication",
      des: "We provide expert solutions for unique telecommunication industry challenges",
    },
  ];
  return (
    <div className="container">
      <HomeBlogIntro
        model={"Industries"}
        title={"Industries Transformed with Our IT Solutions"}
        des={
          "We leverage the latest technologies to transform businesses and organizations, enabling them to work smarter and more efficiently."
        }
      />
      <div className="row p-3 m-2">
        {box.map(({ pic, title, des }) => (
          <div className="col-6 col-md-4">
            <CommonCard pic={pic} title={title} des={des} />
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeBlogIntro({ model, title, des, black, extra, bigdes, insights }) {
  return (
    <div className="container p-4 m-2">
      <div className="row p-3 m-3">
        <div className="col-md-4 col-sm-4">
          {extra ? (
            <img src={image6} alt="none" height={"50%"} />
          ) : (
            <span
              style={{
                // color: '#161616',
                fontSize: "12px",
                fontFamily: "Space Grotesk",
                // lineHeight: '12px',
                // letterSpacing: '1px',
                textTransform: "uppercase",
                borderRadius: "4px",
                background: "#EFEFEF",
                width: "200px",
                height: "15px",
                padding: "5px",
              }}>
              {model}
            </span>
          )}
        </div>

        <div className="col-md col-sm">
          <div
            className="col-sm-12 py-2 my-2 "
            style={{
              color: black ? "#FFF" : "#161616",
              fontSize: "43px",

              letterSpacing: "-1px",
              fontStyle: "normal",
              fontWeight: 400,
            }}>
            {title}
          </div>
          {bigdes ? (
            ""
          ) : (
            <div className="p-2 m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="5"
                viewBox="0 0 51 5"
                fill="none">
                <path
                  d="M3.48438 5C4.86509 5 5.98438 3.88071 5.98438 2.5C5.98438 1.11929 4.86509 0 3.48438 0C2.10366 0 0.984375 1.11929 0.984375 2.5C0.984375 3.88071 2.10366 5 3.48438 5Z"
                  fill="#373737"
                />
                <path
                  d="M13.4844 5C14.8651 5 15.9844 3.88071 15.9844 2.5C15.9844 1.11929 14.8651 0 13.4844 0C12.1037 0 10.9844 1.11929 10.9844 2.5C10.9844 3.88071 12.1037 5 13.4844 5Z"
                  fill="#373737"
                />
                <path
                  d="M23.4844 5C24.8651 5 25.9844 3.88071 25.9844 2.5C25.9844 1.11929 24.8651 0 23.4844 0C22.1037 0 20.9844 1.11929 20.9844 2.5C20.9844 3.88071 22.1037 5 23.4844 5Z"
                  fill="#373737"
                />
                <path
                  d="M8.48438 5C9.86509 5 10.9844 3.88071 10.9844 2.5C10.9844 1.11929 9.86509 0 8.48438 0C7.10366 0 5.98438 1.11929 5.98438 2.5C5.98438 3.88071 7.10366 5 8.48438 5Z"
                  fill="#373737"
                />
                <path
                  d="M18.4844 5C19.8651 5 20.9844 3.88071 20.9844 2.5C20.9844 1.11929 19.8651 0 18.4844 0C17.1037 0 15.9844 1.11929 15.9844 2.5C15.9844 3.88071 17.1037 5 18.4844 5Z"
                  fill="#373737"
                />
                <path
                  d="M38.4844 5C39.8651 5 40.9844 3.88071 40.9844 2.5C40.9844 1.11929 39.8651 0 38.4844 0C37.1037 0 35.9844 1.11929 35.9844 2.5C35.9844 3.88071 37.1037 5 38.4844 5Z"
                  fill="#0F46F5"
                />
                <path
                  d="M28.4844 5C29.8651 5 30.9844 3.88071 30.9844 2.5C30.9844 1.11929 29.8651 0 28.4844 0C27.1037 0 25.9844 1.11929 25.9844 2.5C25.9844 3.88071 27.1037 5 28.4844 5Z"
                  fill="#0F46F5"
                />
                <path
                  d="M48.4844 5C49.8651 5 50.9844 3.88071 50.9844 2.5C50.9844 1.11929 49.8651 0 48.4844 0C47.1037 0 45.9844 1.11929 45.9844 2.5C45.9844 3.88071 47.1037 5 48.4844 5Z"
                  fill="#0F46F5"
                />
                <path
                  d="M43.4844 5C44.8651 5 45.9844 3.88071 45.9844 2.5C45.9844 1.11929 44.8651 0 43.4844 0C42.1037 0 40.9844 1.11929 40.9844 2.5C40.9844 3.88071 42.1037 5 43.4844 5Z"
                  fill="#0F46F5"
                />
                <path
                  d="M33.4844 5C34.8651 5 35.9844 3.88071 35.9844 2.5C35.9844 1.11929 34.8651 0 33.4844 0C32.1037 0 30.9844 1.11929 30.9844 2.5C30.9844 3.88071 32.1037 5 33.4844 5Z"
                  fill="#0F46F5"
                />
              </svg>
            </div>
          )}
          <div
            className="col-sm-12 py-2 my-2"
            style={{
              color: bigdes ? "#161616" : "#9C9C9C",
              fontSize: bigdes ? "22px" : "12px",
              // fontFamily: 'Barlow',
              // fontWeight: 300,
              letterSpacing: "-0.1px",
              lineHeight: "30.6px",
              // padding: '10px',
              // margin: '10px'
            }}>
            {des}
          </div>
          {bigdes ? (
            <div
              className="btn"
              style={{
                borderRadius: "4px",
                border: "1px solid #CECECE",
                // width: '70px
                padding: "11px ",
                margin: "20px",
              }}>
              Learn More
            </div>
          ) : (
            ""
          )}
          {insights ? (
            <div
              className="btn"
              style={{
                borderRadius: "4px",
                border: "1px solid #CECECE",
                // width: '70px
                padding: "11px ",
                margin: "20px",
              }}>
              View All Insights
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

const FeedbackCarousel = () => {
  const feedbackks = [
    {
      pic: aws,
      role: "James Tjan (Entrepreneur)",
      man: awsman,
      des: "I recommend Teksett because of their agile way of working and focus on achieving top-notch quality of the product. Communication in the project was clear and effective.",
    },
    {
      pic: accen,
      role: "James Tjan (IT Manager)",
      man: accenman,
      des: "I recommend Teksett because of their agile way of working and focus on achieving top-notch quality of the product. Communication in the project was clear and effective.",
    },
    {
      pic: bee,
      role: "James Tjan (CIO)",
      man: beeman,
      des: "I recommend Teksett because of their agile way of working and focus on achieving top-notch quality of the product. Communication in the project was clear and effective.",
    },
    {
      pic: bee,
      man: beeman,
      des: "I recommend Teksett because of their agile way of working and focus on achieving top-notch quality of the product. Communication in the project was clear and effective.",
    },
  ];
  const [slides, setSlides] = useState(3)
  console.log(slides);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Display fewer sponsors on mobile
        setSlides(1);
      } else {
        // Display all sponsors on larger screens
        setSlides(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container my-5">

      <div className="swiper-container d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="btn p-2 m-1 swiper-button-prev"
            style={{
              borderRadius: "4px",
              border: "1px solid #707070",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none">
              <path
                d="M12.7477 15.9961L13.9102 14.848L6.98234 8.00602L13.9102 1.15243L12.7477 0.00433551L4.65743 8.00602L12.7477 15.9961Z"
                fill="#707070"
              />
              <path
                d="M8.41567 15.9961L9.57812 14.848L2.63858 8.00602L9.57812 1.15243L8.41567 0.00433551L0.31368 8.00602L8.41567 15.9961Z"
                fill="#707070"
              />
              <path
                d="M9.57694 8.81763L22 8.81763L22 7.1941L9.57694 7.1941L9.57694 8.81763Z"
                fill="#707070"
              />
            </svg>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={slides} //3 slides
          className="m-3"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}>
          {feedbackks.map(({ role, man, des }) => (
            <SwiperSlide key={role}>
              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex py-4 my-1">
                    <div>
                      <img src={man} alt="none" height="50px" />
                    </div>
                    <div className="px-3">
                      <div style={{ width: "200px" }}>{role}</div>
                      <div style={{ width: "150px" }}>Product Manager</div>
                    </div>
                  </div>
                  <p
                    className="col"
                    style={{
                      color: "#161616",
                      fontFamily: "Barlow",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "300",
                      width: "300px",
                    }}>
                    {des}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="btn p-2 m-1 swiper-button-next"
            style={{ borderRadius: "4px", border: "1px solid #707070" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none">
              <path
                d="M9.25231 0.00390625L8.08984 1.15198L15.0177 7.99398L8.08984 14.8476L9.25231 15.9957L17.3426 7.99398L9.25231 0.00390625Z"
                fill="#707070"
              />
              <path
                d="M13.5843 0.00390625L12.4219 1.15198L19.3614 7.99398L12.4219 14.8476L13.5843 15.9957L21.6863 7.99398L13.5843 0.00390625Z"
                fill="#707070"
              />
              <path
                d="M12.4231 7.18237H0V8.8059H12.4231V7.18237Z"
                fill="#707070"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

function HomeFrentPage() {
  return (
    <div className="">
      <div
        className="vh-100"
        style={{
          backgroundImage: `url(${homefrentback})`,
        }}>
        <div className="d-none d-md-block d-xl-block position-relative ">
          <img
            src={homefrentpage}
            alt=""
            style={{
              // position: "absolute",
              // left: "850px",
              // top: "80px",
              width: "auto",
              height: "600px",
              flexShrink: "0",
            }}
            className="img-fluid position-absolute top-0 end-0 px-4 m-3 "
          />
        </div>

        <div
          className=""
          style={{
            position: "absolute",
            top: "300px",
            left: "100px",
          }}>
          <div
            className=""
            style={{
              borderRadius: "4px",
              padding: "0px",
              background: "#EFEFEF",
              width: "130px",
              fontSize: "12px",
            }}>
            Your Reliable IT Partner
          </div>
          <div
            className="col-sm-10 col-md-7"
            style={{
              color: "#161616",
              fontSize: "55px",
              // fontFamily: 'Barlow',
              lineHeight: "60px",
              // letterSpacing: '-1.2px'
            }}>
            <span style={{ color: "#707070" }}>Modern IT solutions {"  "}</span>
            to scale your Business
          </div>
          <div className="row">
            <div
              className="btn col-3"
              style={{
                fontSize: "11px",
                margin: "12px",
                padding: "2px",
                width: "120px",
                background: "#000",
                color: "white",
              }}>
              Get in Touch
              <img
                src={scale}
                alt=""
                style={{
                  background: "#373737",
                  height: "15px",
                  margin: "6px",
                }}
              />
              <img
                src={rightarrow}
                alt="arrow"
                style={{ margin: "0px", height: "10px" }}
              />
            </div>
            {/* <div className="col-1 btn" style={{
              borderRadius: '4px',
              padding: '7px',
              // width: '10px',
              marginLeft: '10px',
              border: '1px solid #CECECE'
            }}>Services</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeWhoWeAre() {
  return (
    <div className=" container">
      <HomeBlogIntro
        model={"Who we are"}
        title={"We're here to help you Succeed"}
        des={
          "We're a team of tech-savvy professionals who are passionate about finding the perfect IT solution for all your business needs. From providing cutting-edge solutions to customized staffing solutions, we go above and beyond to ensure your success."
        }
        bigdes={true}
      />

      <img
        // src={secondhome}
        src="https://s3-alpha-sig.figma.com/img/89d9/1f32/94d05c6eb053cc056840f7c29c39acfc?Expires=1691366400&Signature=a4PTMhmcQPPuAYRJWCnclVscM9PAsorIXTGhboOpJtry9Rr-qH4kew2c9y7o5~-6shVXHEBA8ojoLEGlngzAP1rCqB6p1mRDb8ywyQLuIO7RsXXWcIUuMtoHTFOG5ZKgF2Y~m5kdjOd6aRjTQReom5y~VjX3E8lSLUpjQ1UFN5nK~VS9at9jWdmJPnj-wPrv-Q6KVKV~XlsYvbllmkDplQH~UbcvhxUXH4L0vnB3U3u~icxt3TOTNs3mcyC2-eI7vpsHCk7gyuGa8Ai-uzzK38kA5odCONLdViutOg5x9WQ9SsoMKCngjHQx7U0nJIxERZsXFac0oe7LYlps3Rxi7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
        className="img-fluid m-3 p-3"
        style={
          {
            // width: 'auto',
            // height: '550px',
            // flexShrink: '0',
            // padding: '30px',
            // margin: '60px'
          }
        }
      />
    </div>
  );
}

function HomeWhatWeDo() {
  const temp = [
    {
      pic: one,
      title: "IT solutions delivery",
      bol: false,
    },
    {
      pic: two,
      title: "Staff augmentation services",
      bol: false,
    },
    {
      pic: three,
      title: "Data science solutions",
      bol: false,
    },
    {
      pic: four,

      title: "Business analytics",
      bol: false,
    },
    {
      pic: five,

      title: "Offshore development",
      bol: false,
    },
  ];
  const [box, setBox] = useState(temp);

  function handleEnter(index) {
    const updatedBox = [...box];
    updatedBox[index].bol = true;
    setBox(updatedBox);
  }

  function handleExit(index) {
    const updatedBox = [...box];
    updatedBox[index].bol = false;
    setBox(updatedBox);
  }

  return (
    <div className="p-3 m-2">
      <div className="row">
        <div className="col-md-3 col-sm">
          <div
            className=""
            style={{
              borderRadius: "4px",
              background: "#EFEFEF",
              color: "#161616",
              fontSize: "9px",
              fontFamily: "Space Grotesk",
              fontStyle: "normal",
              fontWeight: "400",
              // lineHeight: '12px',
              letterSpacing: "1px",
              textTransform: "uppercase",
              width: "70px",
            }}>
            What We DO
          </div>
          <div className="display-4 fw-bold">teksett.</div>
        </div>
        <div className="col-md-8 col-sm">
          {box.map(({ pic, title, bol }, index) => (
            <div className="row " key={index}>
              <div className="col-sm-9 col-md d-flex">
                <div
                  className="col-md-9  col-sm display-4"
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleExit(index)}
                  style={{
                    color: bol ? "#0F46F5" : "#000",
                    // opacity: "0.199011612",
                    padding: "8px",
                    marginTop: "70px",
                    marginLeft: "0px",
                    // fontSize: '50px',
                  }}>
                  {title}
                </div>
                <div className="col-md-2 d-none d-md-block">
                  {bol ? (
                    <img src={pic} className="" alt="none" height={"149px"} />
                  ) : (
                    <h3>{bol}</h3>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div
            className="btn col-3"
            style={{
              fontSize: "13px",
              marginTop: "20px",
              // marginLeft: '70px',
              padding: "3px",
              width: "130px",
              background: "#000",
              color: "white",
            }}>
            {/* <Link style={{ textDecoration: 'none' }}> */}
            View All
            {/* </Link> */}
            <img
              src={scale}
              alt=""
              style={{
                background: "#373737",
                height: "15px",
                margin: "6px",
              }}
            />
            <img
              src={rightarrow}
              alt="arrow"
              style={{ margin: "0px", height: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const MyVidContext = createContext();

function HomeWhyTeksett() {
  const data = [
    {
      vid: video1,
      // vid: "10uH5oun3UjOhoRZPRBvM_i1vcGh0Mi1a",
      title: "Exceptional Expertise",
      des: "Our skilled team of IT professionals delivers top-notch solutions tailored to your unique business needs.",
    },
    {
      vid: video2,
      // vid: "1XX_IdlOXe5xuAOI8rTa4urq-Q5fOwf9k",
      title: "Client Satisfaction",
      des: "Our commitment to customer satisfaction ensures exceptional service delivery and long-term partnerships.",
    },
    {
      vid: video3,

      // vid: "16h3cmcD17TsQG-iU-bnYOS2ZKOhirNcz",
      title: "Cutting-Edge Technology",
      des: "We leverage the latest technologies to empower your business with innovative solutions that stay ahead of the curve.",
    },
    {
      vid: video4,
      // vid: "1n5fm1osvPiLS6DO0KO1xYUzAKu45Ihze",
      title: "Client-Centric Focus",
      des: "We prioritize understanding your objectives, providing personalized IT solutions that drive your success.",
    },
  ];
  const [dataa, setDataa] = useState("Exceptional Expertise");
  var playVideoOF = homevid;
  if (dataa) {
    playVideoOF = data.filter(({ title }) => title === dataa)[0].vid;
    console.log("playing Video OF", playVideoOF);
  } else {
    console.log("playVideoOF is", playVideoOF);
  }

  return (
    <MyVidContext.Provider value={[dataa, setDataa]}>
      <div className="bg-black">
        <div className="">
          <div className=" container-fluid">
            <HomeBlogIntro
              title={"Experience Top-Notch IT Solutions with Teksett"}
              model={"Why Teksett"}
              des={
                "Partner with Teksett for trusted, top-notch IT solutions that deliver excellent results tailored to your business needs."
              }
              black={true}
            />
          </div>

          <div
            className="row"
          // style={{ padding: '120px', margin: '30px' }}
          >
            (
            <div className="col-5 d-none d-md-block d-xl-block py-3 mx-3">
              {dataa === false ? null : ( // /> //   // width={"150px"} //   // height={"150px"} //   " //   w-75 p-3 m-4 //   className="img-fluid //   alt="no" //   src={""} // <img
                <video
                  className="video"
                  width="500"
                  height="360"
                  controls
                  autoPlay
                  muted
                  preload="auto">
                  <source
                    src={playVideoOF}
                    // src={`https://drive.google.com/uc?id=${playVideoOF}&export=download`}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
            {/* <div className="col-5"> </div> */}
            <div className="px-5 mx-2 col-1 col-md-1 d-md-flex justify-content-md-center  ">
              <svg
                width="11"
                height="550"
                viewBox="0 0 9 690"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="1"
                  height="760"
                  transform="translate(5.48438 0.96875)"
                  fill="#494949"
                />
                <rect
                  x="0.984375"
                  y="0.96875"
                  width="10"
                  height="10"
                  rx="5"
                  fill="#0F46F5"
                />
                <rect
                  x="0.984375"
                  y="188.469"
                  width="10"
                  height="10"
                  rx="5"
                  fill="#0F46F5"
                />
                <rect
                  x="0.984375"
                  y="375.969"
                  width="10"
                  height="10"
                  rx="5"
                  fill="#0F46F5"
                />
                <rect
                  x="0.984375"
                  y="563.469"
                  width="10"
                  height="10"
                  rx="5"
                  fill="#0F46F5"
                />
              </svg>
            </div>
            <div className="col row d-flex  p-0 ">
              {data.map(({ title, des, bol }) => (
                <VideoOnHover key={title} title={title} des={des} bol={bol} />
              ))}
            </div>
          </div>

          <div
            className="container-md p-5 m-md-5 row d-md-flex "
          // style={{ padding: "60px", margin: "60px" }}
          >
            {[
              { num: "80+", text: "Satistied Customers" },
              { num: "100+", text: "Peojects in 26 Years" },
              { num: "200+", text: "Team Members" },
              { num: "10+", text: "Industry Verticals" },
            ].map(({ num, text }) => (
              <div
                className="col text-white m-2 px-md-4 py-md-2 "
                style={{
                  background: "rgba(230, 230, 230, 0.10)",
                  // width: '218px',
                  // color: '#FFF',
                  // height: '150px',
                  // padding: '20px',
                }}>
                <div
                  className=""
                  style={{
                    fontSize: "62px",
                  }}>
                  {num}
                </div>
                <div
                  className="p-1"
                  style={{
                    fontSize: "15px",
                  }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MyVidContext.Provider>
  );
}

function VideoOnHover({ title, des }) {
  // const [open, setOpen] = useState(false);
  const [dataa, setDataa] = useContext(MyVidContext);
  // const [glow, setGlow] = useState(false);

  function onEnter() {
    setDataa(title);
    // setGlow(true);
  }
  function onLeve() {
    setDataa(false);
    // setGlow(true);
  }

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeve}>
      <div className="" key={title}>
        {/* {
          open ?
        } */}

        <div className="col-md-5 col-8  ">
          <div
            className=""
            style={
              {
                // paddingLeft: "0px",
                // marginBottom: "59px",
                // marginLeft: "0px",
                // marginTop: "0px",
              }
            }>
            {/* <div className="">

              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.984375" y="0.96875" width="10" height="10" rx="5" fill="#0F46F5" />
              </svg>
            </div> */}

            <div
              className=""
              style={{
                // color: `${glow ? "#FFF" : ""}`,
                color: "#fff",
                fontSize: "22px",
                fontWeight: "30px",
              }}>
              {title}
            </div>
            <div
              className="col"
              style={{
                color: "rgba(112, 112, 112, 1)",
                fontSize: "11px",
              }}>
              {des}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeTestimonials() {
  return (
    <div className="container">
      <HomeBlogIntro
        model={"Testimonials"}
        title={"Hear from our satisfied clients"}
      />
      <div className="row d-flex bg-black">
        <div className="col-md-7 p-0">
          <img
            src={homegirl}
            // src="https://s3-alpha-sig.figma.com/img/77c6/4a50/99fe347da26dc05058b4f234d1c87b39?Expires=1691366400&Signature=komz~clxkqPpkZTe1D0FUX-u0XQ2L1w0oHwp28mGlYpRP1eQTsXYiuD7T~C0op2Gs72zj9Bzq~hNG5xl4va0anCFReHSMq~jNYTC4FjJbDAB-SaV31Ea5OOvfNcj4u-phF4xjRXLgQjT5eABPrDF5EWxZa8UBkFNqUORkUpZ7hfAJz82HR1sOMdVu6SHXIs2~prdXXCbI9LmJguXqcKD9HTviKQOl5o8rRmzHWQeGTTFwsyG30xQNC05AMd28tbFQIW~jUjf5FB8frCaPKGia9paMl3rzbE0HGg2WoFFqyp7vamJqolfEKdUOEqmGYqadD1THZPZYHcTRz6wpAnUBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            className="img-fluid w-100"
            alt="none"
          />
        </div>
        <div className="col ">
          <div className="m-4 p-1">
            <div
              className=" pb-5"
              style={{
                color: "rgba(255, 255, 255, 0.87)",
                fontSize: "20px",
                // padding: "40px",
                // marginBottom: "50px",
              }}>
              Teksett has been instrumental in the success of our manufacturing
              business. As a founder, I wanted a reliable IT partner to handle
              our technology needs so I could focus on growing the business.
              Teksett exceeded my expectations. They provided us with a
              comprehensive IT strategy tailored to our specific requirements,
              which has been pivotal in scaling our operations.
            </div>

            <div className="d-flex d-none">
              <div className="p-3 m-1">
                <svg
                  width=""
                  height="35"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.2188 2.97189C17.7094 7.54689 16.0031 11.1844 16.6406 14.8594C17.1469 17.7281 18.6563 19.8375 21.0469 21C23.0438 21.975 24.8813 21.9938 26.8594 21.0563C29.5875 19.7625 31.3031 17.0438 31.4719 13.7344C31.6313 10.4719 29.85 7.10627 25.7813 2.97189C24.4594 1.63126 24.3 1.50002 24 1.50002C23.7 1.50002 23.5406 1.63126 22.2188 2.97189Z"
                    fill="white"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M2.15671 16.5001C1.51921 16.6501 1.45359 16.9407 1.52859 19.4907C1.64109 23.597 2.31609 26.6438 3.54421 28.6782C4.68796 30.572 6.57234 32.0157 8.77547 32.6813C9.50671 32.9063 9.77859 32.9345 10.9223 32.9438C12.0192 32.9438 12.3567 32.9157 12.9755 32.7376C15.488 32.0157 17.1567 30.3376 17.8317 27.8532C18.0942 26.9157 18.113 25.0032 17.8786 24.0657C17.3348 21.872 15.6661 19.5845 13.8192 18.4876C12.0098 17.4095 9.47859 16.7626 6.09421 16.5001C4.70671 16.397 2.61609 16.397 2.15671 16.5001Z"
                    fill="white"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M41.7379 16.5001C38.5035 16.7626 35.9441 17.4282 34.2285 18.4595C32.3066 19.6126 30.7785 21.6563 30.1691 23.8876C29.8785 24.9563 29.8785 26.8688 30.1691 27.872C30.891 30.3845 32.5223 32.0157 35.0254 32.7376C35.6441 32.9157 35.9816 32.9438 37.0785 32.9438C38.2223 32.9345 38.4941 32.9063 39.216 32.6907C40.7441 32.222 42.1504 31.3782 43.2379 30.272C45.3098 28.1626 46.3316 24.722 46.4723 19.397C46.5285 17.222 46.4723 16.7813 46.0973 16.5751C45.8441 16.4345 43.1441 16.3876 41.7379 16.5001Z"
                    fill="white"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M22.2105 27.7221C18.1699 31.8096 16.3699 35.2221 16.5292 38.4846C16.7167 42.2346 18.8917 45.1877 22.2199 46.2377C23.223 46.5471 24.7792 46.5471 25.7824 46.2377C28.4917 45.3846 30.4511 43.2658 31.1917 40.4158C32.2136 36.4127 30.573 32.5596 25.7917 27.7221C24.4605 26.3814 24.3011 26.2502 24.0011 26.2502C23.7011 26.2502 23.5417 26.3814 22.2105 27.7221Z"
                    fill="white"
                    fill-opacity="0.87"
                  />
                </svg>
              </div>
              <div
                className=""
                style={{
                  color: "rgba(255, 255, 255, 0.87)",
                  fontSize: "30px",
                  fontFamily: "Playfair Display",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "88px",
                }}>
                Seed
              </div>
            </div>

            <div
              className=""
              style={{
                color: "#FFF",
                fontSize: "40px",
              }}>
              Rebecca (CEO)
            </div>
            <div
              className=""
              style={{
                color: "#0F46F5",
                fontSize: "25px",
              }}>
              Manufacturing Client{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function HomeLast2nd() {
//   return (
//     <div className=" bg-black">
//       <HomeBlogIntro extra={true} title={'Get the most professional technology services'} des={'Exceptional staffing solutions that drive business success and help professionals achieve their career goals.'} black={true} />
//     </div>
//   )
// }

export function HomeBlogsArticles({ insi }) {
  const cards = [
    {
      // pic: last1,
      pic: "https://s3-alpha-sig.figma.com/img/ba6a/8640/b34e3ca51ef925f3834e1a7baf234d05?Expires=1691366400&Signature=BhONDK~vw7I4DFxPUwXETGrPusxO8KxGDrK0R8-5j6zcdPvdntj4aHFENH7PJCR1rpCoxXWbKCM7JXREsSBe1sbHZ7NP~LrhIa2D83P7qCKTYEE37YRWM3picE1l7JdBzb3O8nhtHm-1jx6aRSGWfi3OqgarqCPnXsnjTYnyQHk7xeUr4OHlTjRPu6c0xvrYbSIbzPyzyvlZ2g-1hyMsBM0DEzH6ZL6VrT5jnCgFUFvme81TJtzyK5QkuE5zYzICzhwz1wPUOzSmi1h~lmoAfW7Jo1yk388bt1gbnwfocl99ks9dJa3iU8wJU1~ru26LXpOphyrnvK0O2r20xloTxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Public cloud vs. own servers: do the math!",
      des: "Date → 20 • March • 2023",
    },
    {
      // pic: last2,
      pic: "https://s3-alpha-sig.figma.com/img/930d/52b6/f8b46bc5f41b8077ebe1e641bb827440?Expires=1691366400&Signature=EtihlBdU-JIf9dRBr123w9yXRh0je0EN~8Yajt7xTSpXc0up-HnE8GCnTRjGBgLxeGzA~cBYjEBHs2JEj7gW4Anapx7CmXJmErlIKR3q08BGI~ADXNpL8aUbINJyBR-ZIOytkryBrxcgY8TtTENnCDQIGxVrgJhSMhN2kGfgIGW2lcOSLyTsIOu4kQo~w~tGJhhJF7CohYmoYCVG684JNcVNZNxKbRiqV7vlk3HrrfiKHrekWCUR~lzoeUUNy9jl8vV8kO8KPuJUOJNuUHLTW040p1VYqJrEP9HD03EiyWBDDxrgeZpxvyv3YO-L9401ZJV0gU5-1ge-bvbGS5Qx5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title:
        "Cloud transformation, change management and exit strategy – A holistic approach.",
      des: "HDate → 17 • March • 2023",
    },
    {
      // pic: last3,
      pic: "https://s3-alpha-sig.figma.com/img/5bd1/a21a/91bfb585068c7905449aa2ae1c025056?Expires=1691366400&Signature=XJ6MV7xczY5IDSeaRFeGhHcnnJzpyq9DX7~SFWTwpLTRuMeA3UURp3j04XUPvGzUWmkQojspfk~75BYdkzNvZAVj9bohSH15w80Gno-Ms5WGNYhOMWYM2W6wW4V8ed7ILO~EYXE9KiUwJ4vGrEjDNwz4kqsiOAjkwFggU4RDtxwUS80C6yPz3L5akeJ7S~2NO5Ul0~~rGc3UAajN2XEwgo37qCnUYWSIp151fOkuosAhULkyt8ipexc3PRrh-wCj2kbN-Bv8dedqhPPqS1vuI4XKVlhh7j5C6pLw1BRd48qfOpkw7sKlvOe3nAWaA5hCkq8C8kXv2Cu44Q565VWLjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title:
        "Securely integrating legacy applications into the cloud with Azure AppProxy",
      des: "Date → 4 • March • 2023",
    },
    {
      // pic: last4,
      pic: "https://s3-alpha-sig.figma.com/img/306a/1e18/b8696003a00f0e43a2b29a872a504889?Expires=1691366400&Signature=ELPshFfNveOOpmVMDEWYFn0pJ9JGd98xWelxUzNNJ8f4b5~IOuXQB1GKaUcHrzUPvnrg4w7VqQMjtjF0PhzgrfQHGyM9JqguMCBY~sihBHXsSF4dS4Lnz2Z0F5krTYf6Vx2mh0qHPXq~mk8dyimc1-9LSKyFjwGsAenVeHGoXD3oL6KiYDPwPzQNo8T~GnTW4ybl460b3XLAW0ernE5V0djZRlvv8SDKAlselKzdi-BDvhr612OOZFDfK4pOy94Kkv1oPt9KaeOYr5sLBN4GUHl9gL5UvJCC~gD46S9pgw74mDtSHXGvnYh43cRAvOiESP5Xa391rKQcnsxYxUwKPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "What is IT architecture and why does it matter?",
      des: "Date → 25 • February • 2023",
    },
  ];

  return (
    <div>
      {insi ? (
        ""
      ) : (
        <HomeBlogIntro
          model={"Blogs & Articles"}
          title={"Latest Insights"}
          des={"Thoughts, experiences and ideas of the Teksett team."}
          insights={true}
        />
      )}
      <CommonLastInPage data={cards} />
    </div>
  );
}
