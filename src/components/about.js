import { CommonPageHead, CommonPlusOpen } from "./common";
import aboutintro from "../images/aboutintro.png";
// import last1 from "../images/lastpage (1).png";
// import last2 from "../images/lastpage (2).png";
// import last3 from "../images/lastpage (3).png";
// import last4 from "../images/lastpage (4).png";
import rarrow from "../images/rightarrow.png";
// import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import onetwoback from "../images/industries/123back.png";
import s1 from "../images/sponsers/cis.png";
import s2 from "../images/sponsers/google.png";
import s3 from "../images/sponsers/ora.png";
import s4 from "../images/sponsers/ama.png";
import s5 from "../images/sponsers/del.png";
import s6 from "../images/sponsers/intel.png";
import s7 from "../images/sponsers/ibm.png";
import s8 from "../images/sponsers/micro.png";
import s9 from "../images/sponsers/utube.png";
import s10 from "../images/sponsers/image 37.png";
import { styled } from "styled-components";

export default function About() {
  // const [isHovered, setIsHovered] = useState(false);
  const data = [
    {
      title: "Our Vision",
      bool: "Our vision is to be the leading provider of exceptional IT solutions, recognized for our commitment to client success and innovation in the tech industry.",
    },
    {
      title: "Our Mission",
      bool: "Our mission is to deliver top-notch IT solutions to businesses through innovation, customized technology solutions, training, staffing,and consulting services that connect them with the best IT talent",
    },
    {
      title: "Our Values",
      bool: "At Teksett, we are guided by a set of core values that inform everything we do. We are committed to:",
      points: [
        "Integrity: We always act with honesty, transparency, and respect.",
        "Innovation: We embrace new ideas and technologies to stay ahead of the curve.",
        "Collaboration: We work closely  with our clients and candidates to find the best solutions.",
        "Excellence: We strive to exceed expectations in everything we do by providing exceptional service to our clients",
      ],
    },

    {
      title: "Our Story",
      bool: "Our journey began over two decades ago with a shared love of all things tech. We saw a need for top-notch IT solutions for businesses looking to stay ahead of the game. Our mission was clear - to create an IT company that not only provides exceptional talent but also puts the needs of our clients first. Today, we're proud to say that we have helped countless businesses find the IT solutions they need to succeed. From IT solutions to software development, our team is dedicated to providing excellent IT solutions that our clients deserve.",
    },
  ];
  return (
    <div>
      <CommonPageHead
        title={"About: We're here to help you succeed! "}
        page={"About us"}
      />
      <img
        className="img-fluid"
        src={aboutintro}
        alt="intro"
      // height={"490px"}
      />
      <div className="container p-4 m-4" style={{ fontWeight: 598 }}>
        <h1 className="m-4">Who we are</h1>
        <div className="m-2">
          <hr />
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div
            className="col-lg m-lg-2"
            style={{
              fontSize: "20px",
              // fontFamily: 'Barlow',
              lineHeight: "41.2px",
              letterSpacing: "-0.1px",
            }}>
            <div
              className=""
              style={{
                lineHeight: "30.2px",
                letterSpacing: "-0.1px",
                fontWeight: "550",
              }}>
              <div className="p-2 m-2">
                Formerly known as SmartStream Inc, Teksett has been a leading IT
                service provider for a diverse range of clients since 1998.
                We're a team of tech-savvy professionals who are passionate
                about delivering the best possible outcomes for our clients. We
                take pride in our ability to understand your unique business
                needs and provide customized IT solutions that help you achieve
                your goals.
              </div>
              <div className="p-2 m-2">
                From our cutting-edge solutions to our staff augmentation
                solutions, our services are designed to help your business
                succeed. We're committed to going above and beyond to ensure
                your satisfaction, and our team is always here to provide the
                support and guidance you need.
              </div>
              <div className="p-2 m-2">
                At Teksett, we're not just a company - we're a community. Our
                team is made up of real people who care about technology and
                love helping others succeed. We're here to help you harness the
                power of technology and achieve your business goals, no matter
                what challenges you may face along the way.
              </div>
            </div>
            <p
              className="p-2 fw-bold"
              style={{
                fontSize: "18px",
                marginTop: "30px",
                textTransform: "uppercase",
              }}>
              Core Values
            </p>
            {data.map(({ title, bool }) => (
              <CommonPlusOpen question={title} Answer={bool} />
            ))}
          </div>
        </div>
      </div>
      <Circles />
      {/* <MyTeam /> */}
      <AboutLast />
      {/* <LastInPage model={"case studies"} /> */}
    </div>
  );
}

function Circles() {
  return (
    <div className="bg-black">
      <div className="row d-flex">
        {[
          { num: 1, text: "Enthusiasm" },
          { num: 2, text: "transparency" },
          { num: 3, text: "competence" },
          { num: 4, text: "stability" },
        ].map(({ num, text }) => (
          <div className="col col-sm-5 col-lg-2 m-lg-3 m-sm-1 p-lg-4">
            <Secondcircle num={num} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const Zoomm = styled.div`
    .zoom-in-effect {
      transition: transform 0.2s; /* Set the transition time for smooth effect */
    }

    .zoom-in-effect:hover {
      transform: scale(1.03); /* Increase the scale to zoom in on hover */
    }
  `;
function Secondcircle({ num, text }) {
  const [bol, setBol] = useState(false);

  return (
    <Zoomm onMouseEnter={() => setBol(true)} onMouseLeave={() => setBol(false)}>
      <div
        className="col-1 p-lg-5 m-lg-2 p-0 zoom-in-effect"
        style={
          {
            // paddingLeft: '90px', paddingTop: '60px', paddingBottom: '10px', margin: '60px'
          }
        }>
        <div
          className="circle mx-5 px-1"
          style={{
            backgroundImage: bol ? `url(${onetwoback})` : "",
            backgroundSize: "cover",
            border: bol ? "1px solid #0F46F5" : "1px solid #FFF",
            // border circles adjest
            borderRadius: "450px",
            width: "280px",
            height: "280px",

            // margin: '40px',
            // padding: "",
            // flexShrink: "0",
          }}>
          <div
            className="text"
            style={{
              color: "#FFFFFF",
              leadingTrim: "both",
              textEdge: "cap",
              fontSize: "22px",
              fontWeight: "600",
              lineHeight: "12px",
              // letterSpacing: '1px',
              textTransform: "uppercase",
              marginLeft: "67px",
              marginTop: "120px",
              position: "absolute",
              // top: '30px',
            }}>
            {text}
          </div>
          <div
            className="number"
            style={{
              color: "#FFF",
              leadingTrim: "both",
              fontSize: "270px",
              fontFamily: "Inter",
              fontWeight: "300",
              lineHeight: "88px",
              letterSpacing: "-1.2px",
              opacity: "0.10000000149011612",
              margin: "75px",
            }}>
            {num}
          </div>
        </div>
      </div>
    </Zoomm>
  );
}

// function LastInPage({ model }) {
//   const cards = [
//     {
//       pic: last3,
//       title: "Accenture - Cloud Transformation",
//       des: "How the teksett team collaborated with accenture in their cloud transformation journey",
//     },
//     {
//       pic: last4,
//       title: "Accenture - Cloud Transformation",
//       des: "How the teksett team collaborated with accenture in their cloud transformation journey",
//     },
//     {
//       pic: last2,
//       title: "Accenture - Cloud Transformation",
//       des: "How the teksett team collaborated with accenture in their cloud transformation journey",
//     },
//     {
//       pic: last1,
//       title: "Accenture - Cloud Transformation",
//       des: "How the teksett team collaborated with accenture in their cloud transformation journey",
//     },
//   ];
//   return <CommonLastInPage data={cards} model={model} />;
// }

export function CommonLastInPage({ data, model }) {
  return (
    <div className="m-3">
      <div className="">
        <span
          style={{
            color: "#161616",
            fontSize: "12px",
            fontFamily: "Space Grotesk",
            lineHeight: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderRadius: "4px",
            background: "#EFEFEF",
            padding: "2px",
            margin: "9px",
          }}>
          {model}
        </span>
      </div>
      <div className="row">
        {data.map(({ title, des, pic }) => (
          <div className="col-xs col-sm-6 col-lg card border-0">
            <img
              src={pic}
              className="card-img-top img-fluid"
              alt="Card"
              style={
                {
                  // width: '285px',
                  // height: '220px',
                  // flexShrink: '0'
                }
              }
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  color: "#161616",
                  fontSize: "21px",
                  fontFamily: "Barlow",
                  // lineHeight: '35.2px'
                }}>
                {title}
              </h5>
              <p
                className="card-text"
                style={{
                  color: "#707070",
                  fontSize: "12px",
                  fontFamily: "Barlow",
                  fontStyle: "normal",
                  // fontWeight: '400',
                  lineHeight: "25px",
                }}>
                {des}
              </p>
              <div className="d-flex">
                <div
                  style={{
                    border: "1px solid #161616",
                    borderRadius: "15px",
                    width: "12px",
                    height: "12px",
                    margin: "6px",
                  }}></div>

                <div
                  className=""
                  style={{
                    color: "#161616",
                    fontSize: "13px",
                    fontFamily: "Space Grotesk",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}>
                  Read More
                </div>
                <div className="">
                  <img src={rarrow} alt="none" width="13px" height="10px" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutLast() {
  return (
    <div className="p-2 p-lg-4 m-lg-5 container-sm">
      <div
        className="col col-lg-9 p-lg-2 m-lg-2"
        style={{
          color: "#161616",
          fontFamily: "Barlow",
          fontSize: "65px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "86px" /* 128.571% */,
          letterSpacing: "-1px",
        }}>
        We are happy to work with largest global brands
      </div>
      <div className="row ">
        <div className="col-lg-4 ">
          <AboutSponsers />
        </div>
        <div className="col m-3 py-2">
          <div className="row bg-black p-4 ">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="https://s3-alpha-sig.figma.com/img/33b5/1337/6a8a886fe03f86969aca342bcea0f8ad?Expires=1691366400&Signature=dHi~XpknQAHSUoPtw3Os-dvhtq-092h--b9gIujtn5taYd0FAd8vSmHDIXJD2rxAVttRMFsNnL~hPzYgpeBjZSZzhK~Ahrx0ZRFEv2SNI1IlpAZNRaZGfwhTpdtYkRqvG4IaaFgS00RaEFZgiS-2HsO~ACq4OZvHEZrbNBycqtIhKznhnxhWWF82DmMhX-f0apUpWsEfokwH4kVQBfdt~UQwri2~ktbx3zuApLNphDz-xiO24HfAm683WtMt15lyRnJu21vgWxqx4PruGG23qiqTgOlzvrAW1G3yMK-vOiERjoyJVF9~b6ZdQIgaju724XF~eZXqVLgvkmPaJ7cCSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="col col-lg-6">
              <div
                className="py-2"
                style={{
                  color: "#FFF",
                  fontFamily: "Barlow",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "60px" /* 125% */,
                  letterSpacing: "-1px",
                }}>
                Robert Steward
              </div>
              <div
                className=""
                style={{
                  color: "rgba(255, 255, 255, 0.60)",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "30.2px" /* 147.143% */,
                  letterSpacing: "-0.1px",
                }}>
                Teksett’s cutting-edge technology has streamlined our financial
                processes, making them more efficient and secure. The platform
                they provided us with is user-friendly, intuitive, and has
                significantly improved our productivity. It has allowed us to
                focus more on our core business activities while leaving the
                complexities of financial management to their capable hands.
              </div>
              <hr />

              <div
                className=""
                style={{
                  color: "#0F46F5",
                  fontFamily: "Barlow",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "50px" /* 233.333% */,
                  letterSpacing: "-1px",
                }}>
                CFO, Fintec Client
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSponsers() {
  const sponsers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
  return (
    <div>
      <div className="row bg-black">
        {sponsers.map((spon) => (
          <div key={spon} className="col-6 py-1 d-flex justify-content-center ">
            <img
              className="img-fluid p-2 m-2"
              style={
                {
                  // maxWidth: "165px", // Set the maximum width of the image
                  // maxHeight: "150px",
                }
              }
              alt="no"
              src={spon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
