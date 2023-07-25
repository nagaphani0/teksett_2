import { CommonPageHead, CommonPlusOpen } from "./common";
import aboutintro from "../images/aboutintro.png";
import team1 from "../images/team (1).png";
import team2 from "../images/team (2).png";
import team3 from "../images/team (3).png";
import team4 from "../images/team (4).png";
import team5 from "../images/team (5).png";
import team6 from "../images/team (6).png";
import team7 from "../images/team (7).png";
import team8 from "../images/team (8).png";
import last1 from "../images/lastpage (1).png";
import last2 from "../images/lastpage (2).png";
import last3 from "../images/lastpage (3).png";
import last4 from "../images/lastpage (4).png";
import rarrow from "../images/rightarrow.png";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import onetwoback from "../images/industries/123back.png";

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
        title={"About: Your reliable international IT solutions agency "}
        page={"About us"}
      />
      <img src={aboutintro} alt="intro" height={"490px"} />
      <div className="container p-4 m-4" style={{ fontWeight: 598 }}>
        <h1 className="m-4">Who we are</h1>
        <hr />
        <div className="row">
          <div className="col-4"></div>
          <div
            className="col m-2"
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
      <LastInPage model={"case studies"} />
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
          <div className="col-4 col-md-2 m-md-3 m-sm-1 p-2">
            <Secondcircle num={num} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Secondcircle({ num, text }) {
  const [bol, setBol] = useState(false);

  return (
    <div onMouseEnter={() => setBol(true)} onMouseLeave={() => setBol(false)}>
      <div
        className="col-1 p-md-5 p-0 "
        style={
          {
            // paddingLeft: '90px', paddingTop: '60px', paddingBottom: '10px', margin: '60px'
          }
        }>
        <div
          className="circle mx-4"
          style={{
            borderRadius: "450px",
            backgroundImage: bol ? `url(${onetwoback})` : "",
            backgroundSize: "cover",

            border: bol ? "1px solid #0F46F5" : "1px solid #FFF",
            width: "270px",
            height: "270px",
            // margin: '40px',
            padding: "",
            flexShrink: "0",
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
    </div>
  );
}

function MyTeam() {
  const teamMem = [
    { name: "John Doe", role: "Group Strategy Director", pic: team1 },
    { name: "", role: "", pic: "" },
    { name: "Frank Lewis", role: "Group Strategy Director", pic: team2 },
    { name: "John Doe", role: "Group Strategy Director", pic: team3 },

    { name: "John Doe", role: "Group Strategy Director", pic: team4 },
    { name: "Kelly Kraft", role: "Co Founder, Director", pic: team5 },
    { name: "", role: "", pic: "" },

    { name: "Rebecca", role: "Group Strategy Director", pic: team7 },
    { name: "", role: "", pic: "" },
    { name: "Joseph", role: "Group Strategy Director", pic: team6 },

    { name: "John Doe", role: "Group Strategy Director", pic: team8 },
  ];
  return (
    <div className="p-4 m-5">
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
          margin: "5px",
        }}>
        our team
      </span>

      <div className="row d-flex flex-row">
        {teamMem.map(({ name, role, pic }) => (
          <div className="col-3 p-4">
            <div className="">
              <img
                src={pic}
                alt=""
                style={{
                  width: "auto",
                  height: "270px",
                  flexShrink: "0",
                }}
              />
            </div>
            <div
              className=""
              style={{
                color: "#161616",
                leadingTrim: "both",
                textEdge: "cap",
                fontSize: "27px",
                fontFamily: "Space Grotesk",
                fontWeight: "500",
                // lineHeight: '88px',
                letterSpacing: "-1.2px",
              }}>
              {name}
            </div>
            <div
              className=""
              style={{
                color: "#707070",
                // leadingTrim: 'both',
                // textEdge: 'cap',
                fontSize: "20px",
                fontFamily: "Space Grotesk",
                fontWeight: "500",
                // lineHeight: '88px',
                letterSpacing: "-1.2px",
              }}>
              {role}
            </div>
          </div>
        ))}
      </div>
      <MyTeamDes />
    </div>
  );
}

function MyTeamDes() {
  const leaders = [
    { name: "John Doe", pic: team1, mail: "johndoe@email.com" },
    { name: "Kelly Kraft", pic: team5, mail: "kellykraft@email.com" },
  ];
  return (
    <div className="container">
      <div
        className=""
        style={{
          color: "#161616",
          fontSize: "61px",
          fontFamily: "Barlow",
          lineHeight: "70px",
          letterSpacing: "-1px",
          padding: "30px",
        }}>
        Leadership
      </div>
      <hr />
      {leaders.map(({ pic, name, mail }) => (
        <Row className="m-1">
          <Col className="p-4 m-4 ">
            <div className=" d-flex">
              <div className="">
                <img
                  src={pic}
                  alt=""
                  style={{
                    borderRadius: "8px",
                    width: "360px",
                    height: "375px",
                    flexShrink: "0",
                  }}
                />
              </div>
              <div
                className=""
                style={{
                  color: "#161616",
                  fontVariantCaps: "all-small-caps",
                  fontSize: "30px",
                  fontFamily: "Space Grotesk",
                  // lineHeight: '88px',
                  letterSpacing: "-1.2px",
                }}>
                {name}
              </div>
            </div>
          </Col>
          <Col>
            <div className="">
              <div
                className=" "
                style={{
                  color: "#161616",
                  fontVariantCaps: "all-small-caps",
                  fontSize: "30px",
                  fontFamily: "Space Grotesk",
                  fontWeight: "600",
                  // lineHeight: '88px',
                  letterSpacing: "-1.2px",
                }}>
                CO-Founder
              </div>
              <div
                className=""
                style={{
                  color: "#707070",
                  fontVariantCaps: "all-small-caps",
                  fontSize: "22px",
                  fontFamily: "Space Grotesk",
                  fontWeight: "500",
                  // lineHeight: '88px',
                  letterSpacing: "-1.2px",
                  opacity: "0.6000000238418579",
                }}>
                Group Strategy Director
              </div>
              <div
                className=""
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontFamily: "Barlow",
                  // lineHeight: '41.2px',
                  letterSpacing: "-0.1px",
                  paddingLeft: "10px",
                  padding: "2px ",
                  marginTop: "30px",
                }}>
                Lorem ipsum dolor sit amet consectetur. Vitae id eget nibh
                fermentum sit. Eu urna facilisi vulputate natoque nunc. Auctor
                nulla tempus tortor natoque fusce ut arcu morbi sed. Tellus
                imperdiet pulvinar aliquet urna consectetur non amet elementum.
                Ultrices diam eget ac eleifend purus.
              </div>
              <hr height="2px" />
              <div className="row">
                <div className="col-3">
                  <div
                    className=""
                    style={{
                      color: "#707070",
                      fontVariantCaps: "all-small-caps",
                      fontSize: "30px",
                      fontFamily: "Space Grotesk",
                      fontWeight: "500",
                      // lineHeight: '88px',
                      letterSpacing: "-1.2px",
                    }}>
                    Contacts
                  </div>
                </div>
                <div
                  className="col"
                  style={{
                    color: "#161616",
                    // leadingTrim: 'both',
                    // textEdge: 'cap',
                    fontSize: "23px",
                    fontFamily: "Space Grotesk",
                    // fontStyle: 'normal',
                    fontWeight: 500,
                    // lineHeight: '88px',
                    letterSpacing: "-1.2px",
                  }}>
                  <div className="">{mail}</div>
                  <div className="">+1 - 123456789</div>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div
                    className=""
                    style={{
                      color: "#707070",
                      fontVariantCaps: "all-small-caps",
                      fontSize: "26px",
                      fontFamily: "Space Grotesk",
                      fontWeight: "500",
                      // lineHeight: '88px',
                      letterSpacing: "-1.2px",
                    }}>
                    Social
                  </div>
                </div>
                <div
                  className="col"
                  style={{
                    color: "#161616",
                    fontVariantCaps: "all-small-caps",
                    fontSize: "26px",
                    fontWeight: "550",
                    fontFamily: "Space Grotesk",
                    // lineHeight: '88px',
                    // letterSpacing: '-1.2px',
                  }}>
                  <div className="">LinkedIn</div>
                  <div className="">Twitter</div>
                  <div className="">Gmail</div>
                  <div className="">Instagram</div>
                </div>
              </div>
            </div>
          </Col>
          <hr
            style={{
              height: "2px",
            }}
          />
        </Row>
      ))}
    </div>
  );
}

function LastInPage({ model }) {
  const cards = [
    {
      pic: last3,
      title: "Accenture - Cloud Transformation",
      des: "How the teksett team collaborated with accenture in their cloud transformation journey",
    },
    {
      pic: last4,
      title: "Accenture - Cloud Transformation",
      des: "How the teksett team collaborated with accenture in their cloud transformation journey",
    },
    {
      pic: last2,
      title: "Accenture - Cloud Transformation",
      des: "How the teksett team collaborated with accenture in their cloud transformation journey",
    },
    {
      pic: last1,
      title: "Accenture - Cloud Transformation",
      des: "How the teksett team collaborated with accenture in their cloud transformation journey",
    },
  ];
  return <CommonLastInPage data={cards} model={model} />;
}

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
          <div className="col-6 col-md card border-0">
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
    <div>
      <div className="">
        <div className="col">
          
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <img src={team1} alt="" />
            </div>
            <div className="col">
              <div
                className=""
                style={{
                  color: "#FFF",
                  fontFamily: "Barlow",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "70px" /* 125% */,
                  letterSpacing: "-1px",
                }}>
                Robert Steward
              </div>
              <div className="">
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
                  lineHeight: "70px" /* 233.333% */,
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
