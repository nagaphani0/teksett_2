import React, { useEffect, useState } from "react";
import home from "../images/insights/Rectangle 32.png";
// import jacob from "../images/team (8).png";
import { HomeBlogsArticles } from "./home";
import jacob from "../images/sponsers/Rectangle 59.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewInsights() {
  return (
    <div>
      <Intro />
      <OurHistory />
      <WorkBenfits />
      <Careers />
      <EmployeTestimonials />
      <HomeBlogsArticles insi={true} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <div className="intro">
        <img
          className="img-fluid"
          style={{
            // position: "absolute",
            // top: "70px",
            // left: "0px",
            width: "1290px",
            height: "460px",
            objectFit: "cover",
          }}
          alt=""
          src={home}
        />
        <div
          style={{
            position: "absolute",
            top: "140px",
            left: "90px",
            letterSpacing: "1px",
            lineHeight: "18px",
            textTransform: "uppercase",
            borderRadius: "2px",
            backgroundColor: "#efefef",
            width: "160px",
            height: "16px",
            fontFamily: "Space Grotesk",
            fontSize: "14px",
          }}>{`TEksett < insights`}</div>

        <div
          className="col-sm-2 col-md-7"
          style={{
            position: "absolute",
            top: "180px",
            left: "90px",
            letterSpacing: "-1.2px",
            lineHeight: "88px",
            // alignItems: "center",
            // width: "1191px",
            flexShrink: "0",
            padding: "0px 34.78436279296875px 0px 0px",
            // alignItems: "flex-start",
            // justifyContent: "flex-start",
            fontSize: "62px",
            color: "#fff",
            fontWeight: "400px",
            fontFamily: "Barlow",
          }}>
          Careers and Insights
        </div>
      </div>
    </div>
  );
}

function OurHistory() {
  return (
    <div>
      <div className="title display-4 col-9 m-5 px-4">
        Focused expert teams delivering exception sevices since 1996
      </div>
      <ScrolableHistory />
    </div>
  );
}

function ScrolableHistory() {
  const ppic =
    "https://s3-alpha-sig.figma.com/img/4534/4435/f3faedb6dfd49d978d344bb23704956b?Expires=1691366400&Signature=ZrCW7dx5HUyeWCuTtlEf~vjQnjV8UlYoEIx-Ek~CpNOczOiFGYLeEAl3MJZDr3SD1hlGLyNSynH5zjEgGbH98mlcXvr1RjpXrLC8YGrOpvBqCHRNqmFw~WDxC1nDGNXu9XpC8FmT7a7khTZ6pJdjlwjm-SEYiQOhD83P~Gh94fhwik-XkbaQnqCYGSMGAs5u2o7e5dIJNJqDUCJomhBtazVxMYNKHT~ocrILzeU1qlH6dNaLJJc17h3oBR2C6W1okK0hmCw5p3rvstOsi71Uq5ElwFgC4gEUtHj-aRxL5ASoffHfeW8cI1RqzdRNQSRlCofGDsU8hqgyaoVDbAlTKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const hhistory = [
    {
      year: 1996,
      title: "Teksett was Founded",
      des: "Teksett was founded in Omaha. It started as a small startup with a focus on developing software applications for businesses and providing best IT solutions.",
      pic: ppic,
    },
    {
      year: 2001,
      title: "Partnership",
      // title: "Teksett was Founded",

      des: "The company expands its product line and starts offering web development services to cater to the growing demand for online solutions.",
      pic: ppic,
    },
    {
      year: 2005,
      title: "Partnership",
      des: "The company expands its product line and starts offering web development services to cater to the growing demand for online solutions.",
      pic: ppic,
    },
  ];

  const [slides, setSlides] = useState(2)
  // console.log(slides);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Display fewer sponsors on mobile
        setSlides(1);
      } else {
        // Display all sponsors on larger screens
        setSlides(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="">
        <div className=" container d-flex justify-content-end">
          <div
            className="btn rounded-5 swiper-button-prev px-2 mx-2"
            style={{
              // borderRadius: "10px",
              border: "1px solid #707070",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="47"
              viewBox="0 0 48 48"
              fill="none">
              <g clip-path="url(#clip0_313_11100)">
                <path
                  d="M15.98 26L40 26L40 22L15.98 22L15.98 16L8 24L15.98 32L15.98 26Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_313_11100">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(48 48) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className="btn  rounded-5 swiper-button-next px-2 mx-2"
            style={{
              // borderRadius: "4px",
              border: "1px solid #707070",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="47"
              viewBox="0 0 48 48"
              fill="none">
              <g clip-path="url(#clip0_313_11099)">
                <path
                  d="M32.02 22H8V26H32.02V32L40 24L32.02 16V22Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_313_11099">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={slides} //2 slides
          className="px-md "
          style={{ paddingLeft: "30%" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}>
          {hhistory.map(({ title, pic, des, year }, index) => (
            <SwiperSlide key={index}>
              <div className="col-11">
                <div className="p-1 ">
                  <div className="d-flex fs-4 ">
                    <div className="px-3">{year}</div>
                    <div className="">{title}</div>
                  </div>
                  <hr width={"130%"} />
                  <div
                    className=" py-2 my-2"
                    style={{
                      color: "#161616",
                      // fontFamily: "Barlow",
                      fontSize: "20px",
                      // fontStyle: "normal",
                      fontWeight: "400",
                      // marginBottom:''
                      // width: "300px",
                    }}>
                    {des}
                  </div>
                  <img
                    className="img-fluid "
                    src={pic}
                    alt="none"
                    height={"60%"}
                    width={"400px"}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function EmployeTestimonials() {
  return (
    <div>
      <div id="employe testimonials" className="  container-fluid row p-3 m-3">
        <div className="col-10 col-md-3 m-4 ">
          <img
            // src={jacob}
            src={jacob}
            className="img-fluid"
            alt=""
            style={{
              filter: "grayscale(100%)",
            }}
          />
        </div>
        <div className="col">
          <div
            className="p-3"
            style={{
              color: "#161616",
              fontFamily: "Barlow",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "70px" /* 100% */,
              letterSpacing: "-1px",
            }}>
            Jacob S.
          </div>
          <div
            className="p-3 col-md-9"
            style={{
              color: "rgba(22, 22, 22, 0.87)",
              fontfamily: "Barlow",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "41.2px" /* 114.444% */,
              letterSpacing: "-0.1px",
            }}>
            "I've had the pleasure of working with Teksett for over three years
            now, and it has been an incredible journey. The company's commitment
            to innovation and cutting-edge technologies has constantly pushed me
            to grow as a software engineer. The team's collaborative spirit
            fosters an environment of creativity and camaraderie, making every
            project a joy to work on.
          </div>
          <div
            className="p-2"
            style={{
              color: "#0F46F5",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "70px" /* 233.333% */,
              letterSpacing: "-1px",
            }}>
            (FE developer)
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkBenfits() {
  const workinghrssvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 36 36"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 36C27.9412 36 36 27.9412 36 18C36 8.05888 27.9412 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9412 8.05888 36 18 36ZM18.1592 4.1353C18 4.28362 18 4.5224 18 5V17.4226C18 17.7044 18 17.8452 17.933 17.9614C17.866 18.0774 17.744 18.1478 17.5 18.2886L6.74166 24.5C6.32806 24.7388 6.12126 24.8582 6.07248 25.0702C6.02368 25.2824 6.15118 25.4708 6.40614 25.8474C7.59156 27.5988 9.16104 29.0626 11 30.1244C13.1283 31.3532 15.5424 32 18 32C20.4576 32 22.8718 31.3532 25 30.1244C27.1282 28.8956 28.8956 27.1282 30.1244 25C31.3532 22.8718 32 20.4576 32 18C32 15.5424 31.3532 13.1283 30.1244 11C28.8956 8.87174 27.1282 7.1044 25 5.87564C23.161 4.81392 21.1086 4.18662 18.9992 4.0357C18.5454 4.00324 18.3186 3.987 18.1592 4.1353Z"
        fill="#0F46F5"
      />
    </svg>
  );

  const helthinsusvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 40 40"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 17.06L20 27.0601L22.6967 21.6667L32.87 21.6666C30.5217 26.1844 26.2317 31.1844 20 36.6667C13.7683 31.1844 9.4783 26.1844 7.13001 21.6666L12.6967 21.6667L15 17.06ZM26 5C30.9706 5 35 9.02944 35 14C35 15.3847 34.7595 16.8291 34.2785 18.3333L24.3633 18.3333L22.5 14.6066L20 19.605L15 9.60655L10.635 18.3333L5.72149 18.3333C5.2405 16.8291 5 15.3847 5 14C5 9.02944 9.02944 5 14 5C16.3057 5 18.4089 5.86703 20.0013 7.29285C21.5924 5.86649 23.695 5 26 5Z"
        fill="#0F46F5"
      />
    </svg>
  );

  const latestteksvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none">
      <g clip-path="url(#clip0_313_11039)">
        <path
          d="M46 16C46 18.2 44.2 20 42 20C41.64 20 41.3 19.96 40.98 19.86L33.86 26.96C33.96 27.28 34 27.64 34 28C34 30.2 32.2 32 30 32C27.8 32 26 30.2 26 28C26 27.64 26.04 27.28 26.14 26.96L21.04 21.86C20.72 21.96 20.36 22 20 22C19.64 22 19.28 21.96 18.96 21.86L9.86 30.98C9.96 31.3 10 31.64 10 32C10 34.2 8.2 36 6 36C3.8 36 2 34.2 2 32C2 29.8 3.8 28 6 28C6.36 28 6.7 28.04 7.02 28.14L16.14 19.04C16.04 18.72 16 18.36 16 18C16 15.8 17.8 14 20 14C22.2 14 24 15.8 24 18C24 18.36 23.96 18.72 23.86 19.04L28.96 24.14C29.28 24.04 29.64 24 30 24C30.36 24 30.72 24.04 31.04 24.14L38.14 17.02C38.04 16.7 38 16.36 38 16C38 13.8 39.8 12 42 12C44.2 12 46 13.8 46 16Z"
          fill="#0F46F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_313_11039">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const locationsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none">
      <g clip-path="url(#clip0_2991_15410)">
        <path
          d="M18 3C12.195 3 7.5 7.695 7.5 13.5C7.5 21.375 18 33 18 33C18 33 28.5 21.375 28.5 13.5C28.5 7.695 23.805 3 18 3ZM18 17.25C15.93 17.25 14.25 15.57 14.25 13.5C14.25 11.43 15.93 9.75 18 9.75C20.07 9.75 21.75 11.43 21.75 13.5C21.75 15.57 20.07 17.25 18 17.25Z"
          fill="#0F46F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_2991_15410">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const benfits = [
    {
      pic: workinghrssvg,
      title: "Flexible working hours",
      des: "We recognize that life's demands can be unpredictable, and rigid 9-to-5 schedules may not always fit everyone's lifestyle. That's why we offer flexible working hours to our employees. We believe that when individuals can choose the hours that suit their productivity and personal commitments best, they can achieve better work-life integration.",
    },
    {
      pic: locationsvg,
      title: "Flexible locations",
      des: "At Teksett, we understand that different individuals have different preferences and needs when it comes to their work environment. That's why we offer the freedom to choose your work location. Whether you thrive in a traditional office setup, prefer a remote work arrangement, or seek a mix of both, we've got you covered.",
    },
    {
      pic: latestteksvg,
      title: "Latest technologies",
      des: "Innovation is at the core of what we do. We stay at the forefront of the industry by adopting and leveraging the latest technologies. As a member of our team, you'll have the opportunity to work with state-of-the-art tools, platforms, and frameworks. By being exposed to the latest advancements in the IT world, you can continually expand your skill set and stay ahead in a rapidly evolving tech landscape.",
    },
    {
      pic: helthinsusvg,
      title: "Health insurance",
      des: "When it comes to your health, you deserve peace of mind. Our health insurance plans offer comprehensive coverage that takes care of your medical expenses, ensuring you receive the best possible care without worrying about financial burdens. From routine check-ups and preventive care to hospitalization and emergency services, our plans have you covered.",
    },
  ];
  return (
    <div
      className="m-0 p-4"
      style={{ backgroundColor: "black", color: "#fff" }}>
      <div className="row">
        <div className="col-md-4">
          <div
            className=" mx-4 p-1 p-md-1 m-md-4 col-5 col-md-4"
            style={{
              borderRadius: "4px",
              backgroundColor: "#efefef",
              // width: "134px",
              // height: "20px",
              fontFamily: "Space Grotesk",
              // letterSpacing: "1px",
              // lineHeight: "12px"
              textTransform: "uppercase",
              color: "black",
            }}>
            work benefits
          </div>
        </div>

        <div className="col">
          <div
            className="p-4 p-md-2 display-md-2 display-2"
            style={{
              // fontSize: "60px",
              lineHeight: "65px",
              fontWeight: "500",
              // color: "#fff",
              // width: "862px",
            }}>
            Why work with us
          </div>

          <div className="row m-4 p-1">
            {benfits.map(({ pic, title, des }) => (
              <div className="col-md-6 p-3">
                <div>{pic}</div>
                <hr />
                <div className="fs-4"
                  style={{
                    // fontSize: "26px",
                    lineHeight: "65px",
                    fontWeight: "500",
                  }}>
                  {title}
                </div>
                <div
                  className="fs-5"
                  style={{
                    color: "#9C9C9C",
                    fontFamily: "Barlow",
                    // fontSize: "20px",
                    fontStyle: "normal",
                    // fontWeight: "400",
                    lineHeight: "26px",
                  }}>
                  {des}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Careers() {
  const openings = [
    {
      role: "Project Manager",
      Location: "Omaha, NE, USA",
      Experience: "3 - 5 Years",
    },
    {
      role: "Senior IT Sales",
      Location: "Omaha, NE, USA",
      Experience: "3 - 5 Years",
    },
    {
      role: "Marketing Associate",
      Location: "Omaha, NE, USA",
      Experience: "3 - 5 Years",
    },
    {
      role: "Oracle ERP Consultant",
      Location: "Omaha, NE, USA",
      Experience: "3 - 5 Years",
    },
    {
      role: "SAP Utilities",
      Location: "Omaha, NE, USA",
      Experience: "3 - 5 Years",
    },
  ];
  return (
    <div className="" style={{ backgroundColor: " black", color: "#fff" }}>
      <div className="row px-4 mx-2">
        <div className="col-md-4">
          <div
            className="p-2 my-4 m-md-4  col-3 col-md-3"
            style={{
              borderRadius: "4px",
              backgroundColor: "#efefef",
              // width: "134px",
              // height: "20px",
              fontFamily: "Space Grotesk",
              // letterSpacing: "1px",
              // lineHeight: "12px",
              textTransform: "uppercase",
              color: "black",
            }}>
            Careers
          </div>
        </div>

        <div className="col-md-7 ">
          <div
            className=""
            style={{
              color: "#FFF",
              leadingTrim: "both",
              textEdge: "cap",
              fontFamily: "Barlow",
              fontSize: "70px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "88px" /* 125.714% */,
              letterSpacing: "-1.2px",
            }}>
            View open positions
          </div>
          {openings.map(({ role, Location, Experience }) => (
            <div className="row text-bg-dark p-2 my-4">
              <div className="col-8 col-md-8 p-2">
                <div
                  className="role p-2"
                  styles={{
                    // color: '#FFF',
                    fontFamily: "Barlow",
                    fontSize: "40px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "70px",
                  }}>
                  {role}
                </div>
                <div
                  className="p-2"
                  styles={{
                    color: "#FFF",
                    fontFamily: "Barlow",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    // lineHeight: "24px", // 133.333%
                  }}>
                  <div className="loc">
                    Location{" "}
                    <span
                      styles={{
                        color: "#9C9C9C",
                        fontFamily: "Barlow",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        // lineHeight: "24px",
                      }}>
                      {Location}
                    </span>{" "}
                    Experience {Experience}
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block col-md">
                <svg
                  width="1"
                  height="90"
                  viewBox="0 0 1 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line
                    opacity="0.1"
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499994"
                    y2="140"
                    stroke="white"
                  />
                </svg>
              </div>
              <div className="col-3 col-md-3 d-flex py-3 my-3">
                <div
                  className="btn d-flex"
                  style={{
                    // borderRadius: '4px',
                    color: "#FFF",
                    background: "#0F46F5",

                    // letterSpacing: "1px",
                    // lineHeight: "12px",
                    // fontWeight: "500",
                  }}>
                  <div className=" lh-2 w-100">

                    Apply Now
                  </div>
                  <div className="px-1 d- d-md-block">
                    <svg
                      width="2"
                      height="16"
                      viewBox="0 0 2 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.84375"
                        width="1"
                        height="16"
                        fill="white"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div className="d- d-md-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 23 16"
                      fill="none">
                      <path
                        d="M10.0961 0.00390625L8.93359 1.15198L15.8614 7.99398L8.93359 14.8476L10.0961 15.9957L18.1863 7.99398L10.0961 0.00390625Z"
                        fill="white"
                      />
                      <path
                        d="M14.4281 0.00390625L13.2656 1.15198L20.2052 7.99398L13.2656 14.8476L14.4281 15.9957L22.5301 7.99398L14.4281 0.00390625Z"
                        fill="white"
                      />
                      <path
                        d="M13.2668 7.18213H0.84375V8.80566H13.2668V7.18213Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
